<?php
    $righe = 10;
    $colonne = 10;
    $titolo = "Tebella";
?>    

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Tabella</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        table, th, td {
            border: 1px solid black;
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- <center><h1><?=$titolo?></h1></center> -->
    <br>
    <table border="1">
        <!-- <caption><?=$titolo?></caption> -->
        <tr>
            <td colspan="<?= $righe?>"><h3><?=$titolo?></h3></td>
        </tr>
        <?php for($i = 0; $i < $righe; $i++):?>
            <tr>
                <?php for($j = 0; $j < $colonne; $j++):?>
                    <td><?="$i.$j"?></td>
                <?php endfor?>        
            </tr>
        <?php endfor?>    
    </table>
    
</body>
</html>