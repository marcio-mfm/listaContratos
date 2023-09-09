<?php

header('Content-Type: application/json');

include 'conecta.php';


    $id = $_POST['id'];
    $Nome = $_POST['nome'];
    $data = $_POST['data'];    
    $Numero = $_POST['numero'];    
    $Valor = $_POST['valor'];


    $sqlEdita = "UPDATE contratos SET Nome='$Nome',data='$data',Numero='$Numero', Valor='$Valor'
    WHERE Numero=$id";

    $result = $conexao->query($sqlEdita);

    echo json_encode('ok');


?>