<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
</head>
<body>

    <?php 
    $conn = mysqli_connect("localhost","root","","clckx") ;
    $select = "SELECT * FROM `clients`" ;
    $result = mysqli_query($conn,$select) ;


    while ($row = mysqli_fetch_array($result)) {

        echo"$row"

    }
?>

    <div>
        <div>
            <p><?php $row ?></p>


        </div>
       
        
    </div>
</body>
</html>