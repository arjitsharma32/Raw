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