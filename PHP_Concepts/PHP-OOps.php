<?php 
/*CLASS IMPLEMENTATION

//Creating Class
class Student {

  public $name;
  public $roll;
  public $class;
  
  //Constructor
  function __construct($name=null,$roll=null,$class=null){//default set to null so that no error occurs even if user doesn't set all values
    $this->name =$name;
    $this->roll =$roll;
    $this->class =$class;
  }

  //Destructor
  function __destruct(){
  {echo "Called upon script ending";}

  //Method
  public function sayHello(){
    return "Hello World!!";
  }
}

//Instantiating Objects
$arjit=new Student("Arjit Sharma",14,"CSE-A");


//Getting & Setting Object's Properties
echo $arjit->roll; //Property does'nt start with $ sign
  $arjit->roll="CSE-B";
  echo $arjit->sayHello();

*/








/* CONSTANT and STATIC in a class

class Student {
  const a="5";
  static $b="5";
}
echo Student::a;//5
echo Student::$b;//5
Student::a=10;//Error
Student::$b=10;//Changed to 10

*/









/* INHERITANCE

class Student{
  public $name;

  public function __construct($name){
    $this->name=$name;
  }
}
class CollegeStudent extends Student{
  public $degree;

  public function __construct($name,$degree){
    // $this->name=$name; --->this would have worked here
    Student::__construct($name);//Calling parent constructor
    $this->degree=$degree;
  }
}

$student1= new CollegeStudent("Arjit Sharma","B.Tech");
echo "Name : ".$student1->name."<br> Course : ".$student1->degree;

*/








/* TRAITS

As inheritance only allows to inherit from 1 class,
What if we wanted a particular function in all classes.
Use trait
Traits are used to declare methods that can be used in multiple classes.


trait msg{
  public function msg_function(){
    echo "Hello World!";
  }
}
class Welcome{
  use msg;
}
$ob=new Welcome();
$ob->msg_function();

*/










/* OVERRIDING

class A{

  public function sayHello(){ //Prefix with final keyword so that cant be overridden
    return "Hello from A";
  }

}
class B extends A{

  public function sayHello(){
    return "Hello from B";
  }

}

*/











/* ABSTRACT CLASS

abstract class human{

  public function walk(){//Can have non-abstract mehods
    return "Human is walking";
  }

  abstract public function sayHello();
}
class Indian extends human{
  
  public function sayHello(){
    return "Namaste";
  }
}

*/











/* INTERFACES 

interface A { 
  function A_method();
}

interface B { 
  function B_method();
}

class C implements A,B {

  function A_method(){
   return "A's Method";
  }

  function B_method(){
    return "B's Method";
  } 
}

*/












?>