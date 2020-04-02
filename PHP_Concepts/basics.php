<?php

    //Scalar Type Hinting in PHP7
    //is_bool,is_null,is_float,is_string,is_int available in PHP5 instead of static Type hinting 
    function fun(float $abc){//string,float,int,bool
        return $abc;
    }

    //Array Type Hinting
    function fun2(array $abc){//string,float,int,bool
        return $abc;
    }

    //Object Type Hinting
    class class_name{}

    function mellow(class_name $abc){//string,float,int,bool
        return $abc;
    }
?>

    HTTP HEADERS - Code that transfer data between web server and browser
    HTTP REQUEST HEADERS - Usefull info sent when requesting a URL
        Host: 127.0.0.3:2025 
        Connection: keep-alive 
        Cache-Control: max-age=0 
        Upgrade-Insecure-Requests: 1 
        User-Agent: Mozilla/5.0 (X11; Linux x86_64)  

<!-- 
Start saving in buffer instead of displaying iterator_apply

ob_start();
echo("Hello there!"); //would normally get printed to the screen/output to browser
$output = ob_get_contents();//gives us whatever has been saved in buffer
ob_end_clean();//Discards whaever was saved -->