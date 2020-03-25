<?php
/*
Autoloader is a strategy for finding PHP class or interface and loading it
at run time when a class is instantiated.
Better than writing multiple require and include as they do not scale well and is a clutter
*/

spl_autoload_register(function($class){
  require_once "{$class}.php";
});


$ob = new Greet();
$ob->sayHello();
?>




