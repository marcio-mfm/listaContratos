<?php

    header('Content-Type: application/json');
    
    include 'conecta.php';

    if(!empty($_GET['id']))
    {
        $id = $_GET['id'];

        


        $sqlSelect = "SELECT * FROM contratos WHERE Numero=$id";

        $result = $conexao->query($sqlSelect);

        if($result->num_rows > 0)
        {
            $sqlDelete = "DELETE FROM contratos WHERE Numero=$id"; 
            $resultDelete = $conexao->query($sqlDelete);

            echo json_encode('Deletado');        
        }
    }    
    
                


?>