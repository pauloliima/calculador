<?php

# alterar a variavel abaixo colocando o seu email

$destinatario = "pauloliima6@gmail.com";
$assunto = "Demande de devis calculateur en ligne";

$qtde = $_REQUEST['qtdeForm'];
$result = $_REQUEST['resultForm'];
$nome = $_REQUEST['nom'];
$telephone = $_REQUEST['telephone'];
$email = $_REQUEST['email'];
$adresse1 = $_REQUEST['adresse1'];
$adresse2 = $_REQUEST['adresse2'];
$date = $_REQUEST['data'];


 // monta o e-mail na variavel $body

$body = $body . "NB D'ÉLÉMENTS À DÉMÉNAGER: " . $qtde . "\n";
$body = $body . "VOLUME TOTAL: " . $result . " m³"."\n";
$body = $body . "Nom: " . $nome . "\n";
$body = $body . "Telephone: " . $telephone . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Adesse de départ: " . $adresse1 . "\n";
$body = $body . "Adresse d'arrivée: " . $adresse2 . "\n";
$body = $body . "Date: " . $date . "\n";


// envia o email
mail($destinatario, $assunto , $body, "From: $email\r\n");

// redireciona para a página de obrigado
header("location:obrigado.htm");


?>