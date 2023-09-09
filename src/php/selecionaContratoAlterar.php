<?php
    header('Content-Type: application/json');

    include 'conecta.php';

    

        $id = $_GET['id'];

        $sqlSelect = "SELECT * FROM contratos WHERE Numero=$id";

        $result = $conexao->query($sqlSelect);

        echo json_encode(mysqli_fetch_assoc($result));



    

?>