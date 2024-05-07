<?php

include 'db-conn.php';




if (isset($_POST['submit'])) {

    $doc_name = $_POST['docname'];
    $specialization = $_POST['specialization'];
    $degree = $_POST['degree'];

    #region ادخال بيانات
    $sql = "INSERT INTO doctors ( doctor_name , specialization , degree) 
                     VALUES ( '$doc_name' , '$specialization' , '$degree' );";
     mysqli_query($conn, $sql);

    #endregion

}

header("Location: Medicate-Doctor.php?insert=success");
