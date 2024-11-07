<?php
    $anno = 2024;
    $mese = 7;
    $gg = ["Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato","Domenica"];
    $mm = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
    $nome = $mm[$mese-1];
    $nG = date('t', strtotime("$anno-$mese-01"));
    $startM = date('w', strtotime("$anno-$mese-01"));

    if ($startM == 0) {
        $startM = 7;
    }

    $giorno = 1;
    $numRigheMax = ceil(($nG + $startM - 1) / 7);
?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Calendario <?=$nome?></title>
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
    <center><h1>Calendario <?=$nome?></h1></center>
    <table>
        <tr>
            <?php foreach($gg as $g):?>
                <th><?=$g?></th>
            <?php endforeach;?>    
        </tr>

        <?php for($row = 0; $row < $numRigheMax; $row++){?>
            <tr>
            <?php for($col = 0; $col < 7; $col++){?>
                <?php if($row == 0 && $col < $startM-1){?>
                    <td></td>
                <?php }elseif($giorno <= $nG){?>
                    <td><?=$giorno?></td>
                    <?php $giorno++;?>
                <?php }else{?>
                    <td></td>
                <?php };?>
                <?php };?>         
            </tr>
        <?php };?>        

    </table>

</body>
</html>