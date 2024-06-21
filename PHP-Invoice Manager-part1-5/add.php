<?php
session_start();
require "data.php";

// Define the getInvoiceNumber function
function getInvoiceNumber($length = 5) {
    $letters = range('A', 'Z');
    $number = [];
    for ($i = 0; $i < $length; $i++) {
        array_push($number, $letters[rand(0, count($letters) - 1)]);
    }
    return implode($number);
}

// Fetch statuses from the database
try {
    $stmt = $db->prepare("SELECT * FROM statuses");
    $stmt->execute();
    $statuses = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
    exit;
}

$errors = $_SESSION['errors'] ?? [];
$form_data = $_SESSION['form_data'] ?? [];
unset($_SESSION['errors']);
unset($_SESSION['form_data']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $client = $_POST['client'];
    $email = $_POST['email'];
    $amount = $_POST['amount'];
    $status_id = $_POST['status_id'];
    $number = getInvoiceNumber();

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
        $query = 'INSERT INTO invoices (number, client, email, amount, status_id) VALUES (:number, :client, :email, :amount, :status_id)';
        $statement = $db->prepare($query);
        $statement->bindValue(':number', $number);
        $statement->bindValue(':client', $client);
        $statement->bindValue(':email', $email);
        $statement->bindValue(':amount', $amount);
        $statement->bindValue(':status_id', $status_id);
        $statement->execute();
        
        if (isset($_FILES['pdf']) && $_FILES['pdf']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['pdf']['tmp_name'];
            $fileName = $_FILES['pdf']['name'];
            $fileSize = $_FILES['pdf']['size'];
            $fileType = $_FILES['pdf']['type'];
            $fileNameCmps = explode('.', $fileName);
            $fileExtension = strtolower(end($fileNameCmps));

            // Check if the file is a PDF
            if ($fileExtension === 'pdf') {
                $newFileName = $number . '.pdf';
                $uploadFileDir = './documents/';
                if (!is_dir($uploadFileDir)) {
                    mkdir($uploadFileDir, 0755, true);
                }
                $dest_path = $uploadFileDir . $newFileName;

                if(move_uploaded_file($fileTmpPath, $dest_path)) {
                    echo 'File is successfully uploaded.';
                } else {
                    echo 'Error moving the uploaded file';
                }
            } else {
                echo 'Uploaded file is not a PDF.';
            }
        }     

        header('Location: index.php');
        exit;
    } else {
        $_SESSION['errors'] = $errors;
        $_SESSION['form_data'] = $_POST;
        header('Location: add.php');
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Invoice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Invoice Manager</h1>
    <nav>
        <a href="add.php">Add Invoice</a>
        <a href="index.php?status=all">Back</a>
    </nav>

    <div class="container">
        <div class="form-container">
            <h3>Create a new invoice.</h3>
            <form action="add.php" method="post" enctype="multipart/form-data">
                <div>
                    <label for="client">Client Name</label>
                    <input type="text" id="client" name="client" value="<?= htmlspecialchars($form_data['client'] ?? '') ?>">
                    <span style="color: red;"><?= $errors['client'] ?? ''; ?></span>
                </div>
                <div>
                    <label for="email">Client Email</label>
                    <input type="email" id="email" name="email" value="<?= htmlspecialchars($form_data['email'] ?? '') ?>">
                    <span style="color: red;"><?= $errors['email'] ?? ''; ?></span>
                </div>
                <div>
                    <label for="amount">Invoice Amount</label>
                    <input type="number" step="0.01" id="amount" name="amount" value="<?= htmlspecialchars($form_data['amount'] ?? '') ?>">
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
                    <lavel for="pdf">Invoice File</level>
                    <input type="file" id="pdf" name="pdf" accept="application/pdf">
                </div>
                <button type="submit">Add Invoice</button>
            </form>
        </div>
    </div>
</body>
</html>