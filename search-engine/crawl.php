<?php
include("classes/DomDOcumentParser.php");

function followLinks($url){
    $parser = new DomDocumentParser($url);

    $linklist = $parser->getLinks();

    foreach($linklist as $link){
        $href = $link->getAttribute("href");
        echo $href . "<br>";
    }
}

$starturl="https://arjits1.github.io/portfolio/";
followLinks($starturl);
?>