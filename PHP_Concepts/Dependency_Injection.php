<?php
/*
Dependency Injection - When our class need object of other class
DI container - Map of dependencies our class needs.
Referrence : https://www.youtube.com/watch?v=_D8kIciGVoE
*/
class logger{
  public function log($msg){
    echo "Log : $msg";
  }
}

class UserProfile{
  public $logger;//This variable will store object of logger
  
  public function __construct($logger){
    $this->logger=$logger;//logger variable points to object of logger 
  }  

  public function createUser(){
    $this->logger->log("User Created");//using variable to acces method of logger
  }

  public function deleteUser(){
    $this->logger->log("User Deleted");
  }
}

$logger=new logger();//Initialize dependecy
$profile=new UserProfile($logger);//Inject Dependecy via constructor
$profile->createUser();
$profile->deleteUser();
$profile->logger->log("Hello");//using dependecy

?>