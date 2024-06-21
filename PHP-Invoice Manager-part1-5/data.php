<?php 

  // database source name
  $dsn = "mysql:host=localhost;dbname=invoice_manager";
  // username
  $username = "root";
  // password
  $password = "";

  try {
    $db = new PDO($dsn, $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    $error = $e->getMessage();
    echo $error;
    exit;
  }


?>