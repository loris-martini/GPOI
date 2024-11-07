<?php
    $tipoElenco = 'ul'; // Tipo di elenco ('ul' per elenco puntato, 'ol' per elenco numerato)
    $stile = 'color: blue; font-weight: bold;'; // Stile CSS da applicare agli elementi
    $numMesi = 12; // Numero di elementi principali
    $numGiorni = 7; // Numero di sotto-elementi per ogni elemento principale
    $gg = ["Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato","Domenica"];
    $mm = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Elenco Mensile</title>
</head>
<body>
    <center><h1>Elenco Mensile</h1></center>
    
    <ul>
        <?php foreach($mm as $m):?>
            <li><h3><?=$m?></h3></li>
            <ol>
            <?php foreach($gg as $g):?>
                <li><?=$g?></li>
            <?php endforeach;?>
            </ol>
            <br>
        <?php endforeach;?>    
    </ul>
</body>
</html>