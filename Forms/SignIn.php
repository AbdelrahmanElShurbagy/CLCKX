
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="../style/WrongPassword.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <title>Ooops</title>
</head>
<body>

<?php 

  $Email = $_POST['ClientEmail'] ;
  $Password = $_POST['ClientPassword'] ;
  
  $conn = mysqli_connect("localhost","root","","clckx") ;

  $select = "SELECT * FROM `clients` WHERE `Email` = '$Email' AND `Client_Password` = '$Password'" ;

  $result = mysqli_query($conn,$select) ;
  
 $login = false ;

 while ($row = mysqli_fetch_array($result)) {
 
  echo "
  <script>
  sessionStorage.setItem('UserName','$row[1]');
  window.location.href='../Pages/HomePage.php'
   </script>
   "
    ;
  $login = true ;
 } ;

 if ($login == false) {
  echo"<div class='WrongPassword'>
       <div>
       <button id='Backbtn'>back</button>
       </div>
       <h1> Wrong Email Or Password </h1>
       <img src='../img/wrong.png'>
       </div>
   " ;
 } ;

?>

<script>
  const backBtn = document.getElementById("Backbtn") ;

  backBtn.addEventListener("click", HomePageRedirect);
function HomePageRedirect() {
    location.href="../pages/SignInPlus.html" ;

}
</script>
  
</body>
</html>






