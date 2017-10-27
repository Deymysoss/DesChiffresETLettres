<?php
include 'connexion.php';
if(!empty($_GET['lettre'])){
    $lettre=$_GET['lettre'];
    $req=$conn->prepare('UPDATE lettre SET nbUtilisation=nbUtilisation+1 WHERE nomLettre= :lettre');
    try {
        $donnees=array(
            'lettre'=>$lettre
        );
        $success = $req->execute($donnees);
    }
    catch (Exception $e) {
        echo 'erreur : ', $e->getMessage();
    }
}
?>