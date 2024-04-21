<?php

$servername = "localhost";
$username = "root";
$password = "";
$db = "clckx" ;

$conn = new mysqli($servername, $username, $password, $db);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$ClientName = $_GET['ClientName'] ;
$ClientEmail = $_GET['ClientEmail'] ;
$ClientPassword = $_GET['ClientPassword'] ;


$ClientCreateAcc =
" INSERT INTO `clients`(
  `Client_Name`, 
  `Client_Password`,
  `Email`)
 VALUES (
  '$ClientName',
  '$ClientPassword',
  '$ClientEmail') ";

if ($conn->query($ClientCreateAcc) === TRUE) {
  header ("Location: ../pages/SignInPlus.html");
  
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();








?>