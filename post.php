<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  if($name === '' || $email ==='' || $subject === '' || $message === ''){
    echo json_encode ('Llena todos los usuarios');
  }else{
    echo json_encode ('Correcto: <br>Nombre: '.$nombre.'<br>Email: '.$email.'<br>Subject: '.$subject.'<br>Message: '.$message);
  }