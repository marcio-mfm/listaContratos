<?php

    include 'conecta.php';

    $Nome = $_POST['nome'];
    $data = $_POST['data'];    
    $Numero = $_POST['numero'];    
    $Valor = $_POST['valor'];

    $result = mysqli_query($conexao, "INSERT INTO contratos(Nome, data, Numero, Valor) VALUES('$Nome', '$data', '$Numero', '$Valor')");


    
    
    echo json_encode('Dados salvos');
      
    

?>