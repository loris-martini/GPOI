<?php
    $elenco = 'ul';
    $elementi = 5;
    $stile = 'square';
?>

<html>
    <head>
        <title>Elenchi</title>
    </head>

    <body>
        <h1>Enlenchi puntati:</h1>

        <<?=$elenco?> type="<?=$stile?>">
            <?php for($i=0; $i<$elementi; $i++){?>

                <!-- Elenco 1 -->
                <li>Elenco <?=$i+1?>
                    <<?=$elenco?>>
                        <?php for($k=0; $k<$elementi; $k++){?>
                            <li>Elelmento</li>
                        <?php } ?>
                    </<?=$elenco?>>
                </li>
            <?php } ?>    
        </<?=$elenco?>>
    </body>
</html>