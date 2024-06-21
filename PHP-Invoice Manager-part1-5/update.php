<?php
session_start();
require 'data.php';

$invoiceNumber = $_GET['number'] ?? null;

$query = 'SELECT * FROM invoices WHERE number = :number';
$statement = $db->prepare($query);
$statement->bindValue(':number', $invoiceNumber);
$statement->execute();
$invoice = $statement->fetch(PDO::FETCH_ASSOC);

if (!$invoice) {
    header('Location: index.php');
    exit;
}

// Fetch statuses from the database
try {
    $stmt = $db->prepare("SELECT * FROM statuses");
    $stmt->execute();
    $statuses = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$errors = $_SESSION['errors'] ?? [];
$form_data = $_SESSION['form_data'] ?? $invoice;
unset($_SESSION['errors']);
unset($_SESSION['form_data']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $client = $_POST['client'];
    $email = $_POST['email'];
    $amount = $_POST['amount'];
    $status_id = $_POST['status_id'];

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
        $errors['status_id'] = 'Invalid status.';
    }

    if (empty($errors)) {
        $query = 'UPDATE invoices SET client = :client, email = :email, amount = :amount, status_id = :status_id WHERE number = :number';
        $statement = $db->prepare($query);
        $statement->bindValue(':client', $client);
        $statement->bindValue(':email', $email);
        $statement->bindValue(':amount', $amount);
        $statement->bindValue(':status_id', $status_id);
        $statement->bindValue(':number', $invoiceNumber);
        $statement->execute();

       // Handling file uploads
       if (isset($_FILES['pdf'])) {
        if ($_FILES['pdf']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['pdf']['tmp_name'];
            $fileName = $_FILES['pdf']['name'];
            $fileType = $_FILES['pdf']['type'];
            $fileNameCmps = explode('.', $fileName);
            $fileExtension = strtolower(end($fileNameCmps));

            if ($fileExtension === 'pdf') {
                $newFileName = $invoiceNumber . '.pdf';  // Ensure you use the correct invoice number variable
                $uploadFileDir = './documents/';
                $dest_path = $uploadFileDir . $newFileName;

                // Ensure directory exists
                if (!is_dir($uploadFileDir) && !mkdir($uploadFileDir, 0755, true)) {
                    die('Failed to create folders...');
                }

                if (move_uploaded_file($fileTmpPath, $dest_path)) {
                    echo 'File is successfully uploaded.';
                } else {
                    echo 'Error moving the uploaded file';
                }
            } else {
                echo 'Uploaded file is not a PDF.';
            }
        } else {
            // Error code handling
            echo 'Error uploading file. Error code: ' . $_FILES['pdf']['error'];
        }
    }

        header('Location: index.php');
        exit;
    } else {
        $_SESSION['errors'] = $errors;
        $_SESSION['form_data'] = $_POST;
        header('Location: update.php?number=' . $invoiceNumber);
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Invoice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Update Invoice</h1>
    <nav>
        <a href="index.php?status=all">Back</a>
    </nav>
    <div class="container">
        <div class="form-container">
            <h3>Update the invoice.</h3>
            <form action="update.php?number=<?= htmlspecialchars($invoiceNumber); ?>" method="post" enctype="multipart/form-data">
    <div>
        <label for="client">Client Name</label>
        <input type="text" id="client" name="client" value="<?= htmlspecialchars($form_data['client']); ?>">
        <span style="color: red;"><?= $errors['client'] ?? ''; ?></span>
    </div>
    <div>
        <label for="email">Client Email</label>
        <input type="email" id="email" name="email" value="<?= htmlspecialchars($form_data['email']); ?>">
        <span style="color: red;"><?= $errors['email'] ?? ''; ?></span>
    </div>
    <div>
        <label for="amount">Invoice Amount</label>
        <input type="number" id="amount" name="amount" value="<?= htmlspecialchars($form_data['amount']); ?>">
        <span style="color: red;"><?= $errors['amount'] ?? ''; ?></span>
    </div>
    <div>
        <label for="status_id">Invoice Status</label>
        <select id="status_id" name="status_id">
            <option value="" disabled <?= !isset($form_data['status_id']) ? 'selected' : ''; ?>>Select</option>
            <?php foreach ($statuses as $status): ?>
                <option value="<?= htmlspecialchars($status['id']) ?>" <?= isset($form_data['status_id']) && $form_data['status_id'] == $status['id'] ? 'selected' : ''; ?>><?= htmlspecialchars($status['status']) ?></option>
            <?php endforeach; ?>
        </select>
        <span style="color: red;"><?= $errors['status_id'] ?? ''; ?></span>
    </div>
    <div>
        <label for="pdf">Invoice File</label>
        <input type="file" id="pdf" name="pdf" accept="application/pdf">
    </div>
    <button type="submit" name="edit" value="1">Update</button>
</form>
        </div>
    </div>
</body>
</html>