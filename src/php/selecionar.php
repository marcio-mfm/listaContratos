<?php

    header('Content-Type: application/json');

   
    
   include 'conecta.php';


    $sql = "SELECT * FROM contratos";

    $buscaDadosContrato = $conexao->query($sql);

    
    echo json_encode($buscaDadosContrato->fetch_all(MYSQLI_ASSOC));
   
?>