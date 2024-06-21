<?php
session_start();
require "data.php";

// Fetch statuses from the database
try {
    $stmt = $db->prepare("SELECT * FROM statuses");
    $stmt->execute();
    $statuses = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Fetch invoices and join with statuses
$status_filter = isset($_GET['status']) ? $_GET['status'] : 'all';
$invoices = [];
try {
    if ($status_filter === 'all') {
        $stmt = $db->prepare("SELECT invoices.*, statuses.status FROM invoices JOIN statuses ON invoices.status_id = statuses.id ORDER BY invoices.id");
    } else {
        $stmt = $db->prepare("SELECT invoices.*, statuses.status FROM invoices JOIN statuses ON invoices.status_id = statuses.id WHERE statuses.status = :status ORDER BY invoices.id");
        $stmt->bindParam(':status', $status_filter);
    }
    $stmt->execute();
    $invoices = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Generate a new invoice number
function getInvoiceNumber($length = 5) {
    $letters = range('A', 'Z');
    $number = [];
    for ($i = 0; $i < $length; $i++) {
        array_push($number, $letters[rand(0, count($letters) - 1)]);
    }
    return implode($number);
}

// Handle form submission to add or update an invoice
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !isset ($_POST['delete_invoice'])) {
    $client = $_POST['client'];
    $email = $_POST['email'];
    $amount = $_POST['amount'];
    $status_id = $_POST['status_id'];
    $number = $_POST['number'] ?? getInvoiceNumber();

    // Validation is completed here
    $errors = [];
    if (!preg_match('/^[a-zA-Z\s]+$/', $client) || strlen($client) > 255) {
        $errors['client'] = 'Client Name must contain only letters and spaces and be less than 255 characters.';
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email address.';
    }
    if (!filter_var($amount, FILTER_VALIDATE_INT)) {
        $errors['amount'] = 'Invoice Amount must be an integer.';
    }
    if (!in_array($status_id, array_column($statuses, 'id'))) {
        $errors['status'] = 'Invalid status.';
    }

    if (empty($errors)) {
        if (isset($_POST['edit'])) {
            // Update invoice in the database
            $stmt = $db->prepare("UPDATE invoices SET client = :client, email = :email, amount = :amount, status_id = :status_id WHERE number = :number");
        } else {
            // Insert new invoice in the database
            $stmt = $db->prepare("INSERT INTO invoices (number, client, email, amount, status_id) VALUES (:number, :client, :email, :amount, :status_id)");
        }
        $stmt->bindParam(':number', $number);
        $stmt->bindParam(':client', $client);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':amount', $amount);
        $stmt->bindParam(':status_id', $status_id);
        $stmt->execute();

        header('Location: index.php');
        exit;
    } else {
        $_SESSION['errors'] = $errors;
        $_SESSION['form_data'] = $_POST;
        header('Location: ' . ($_POST['edit'] ? 'update.php?number=' . $number : 'add.php'));
        exit;
    }
}

// Handle deletion of an invoice
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_invoice'])) {
    $invoiceNumber = $_POST['invoice_number'];
    $stmt = $db->prepare("DELETE FROM invoices WHERE number = :number");
    $stmt->bindParam(':number', $invoiceNumber);
    $stmt->execute();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice Manager</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Invoice Manager</h1>
    <nav>
        <a href="?status=all">All</a>
        <a href="?status=draft">Draft</a>
        <a href="?status=pending">Pending</a>
        <a href="?status=paid">Paid</a>
        <a href="add.php">Add Invoice</a>
    </nav>
    
    <div class="invoice-row invoice-heading">
        <div class="invoice-cell">Invoice #</div>
        <div class="invoice-cell">Client's Name</div>
        <div class="invoice-cell">Email Address</div>
        <div class="invoice-cell">Amount</div>
        <div class="invoice-cell">Status</div>
        <div class="invoice-cell">Actions</div>
    </div>
    
    <?php foreach ($invoices as $invoice): ?>
        <div class="invoice-row status-<?= strtolower($invoice['status']); ?>">
            <div class="invoice-cell">#<?= htmlspecialchars($invoice['number']); ?></div>
            <div class="invoice-cell"><?= htmlspecialchars($invoice['client']); ?></div>
            <div class="invoice-cell"><?= htmlspecialchars($invoice['email']); ?></div>
            <div class="invoice-cell">$<?= htmlspecialchars($invoice['amount']); ?></div>
            <div class="invoice-cell"><?= htmlspecialchars($invoice['status']); ?></div>
            <div class="invoice-cell">
                <?php
                    $pdfPath = './documents/' . $invoice['number'] . '.pdf';
                    if (file_exists($pdfPath)) {
                        echo '<form action="javascript:void(0);" method="get" onsubmit="window.open(\'' . $pdfPath . '\', \'_blank\'); return false;" class="action-form">';
                        echo '<button type="submit" class="action-button view-button">View</button>';
                        echo '</form>';
                    }
                ?>
                <form action="update.php" method="get" class="action-form">
                    <input type="hidden" name="number" value="<?= urlencode($invoice['number']); ?>">
                    <button type="submit" class="action-button">Edit</button>
                </form>
                <form action="index.php" method="post" class="action-form">
                    <input type="hidden" name="invoice_number" value="<?= htmlspecialchars($invoice['number']); ?>">
                    <button type="submit" name="delete_invoice" class="action-button delete-button">Delete</button>
                </form>
                
            </div>
        </div>
    <?php endforeach; ?>
    
    <h3>Total Invoices: <?= count($invoices); ?></h3>
</body>
</html>