<?php
$fname = $_POST["fname"];
$Lastname = $_POST["lastname"];
$email= $_POST["email"];
$Username = $_POST["Username"];
$password = $_POST["password"];
$conformpassword = $_POST["conformpassword"];
$gender = $_POST["gender"];
$num  = $_POST["num"];
$City = $_POST["City"];

echo" Form Details of user :-<br><br> Name of user is $fname<br> Lastname of user is $Lastname <br>
 email of user is $email <br> Username of user is $Username <br> Password of user is $password <br>
 Conformpassword of user is $conformpassword <br> Gender of user is $gender <br> Mobileno of user is $num <br>
 City of user is $City";
?>