<?php
/*
PDO : PHP Data Objects (Object Oriented)
PHP Extension to access database.Unlike mysqli works with multiple databases

3 main Classes : 
PDO - Connection between PHP and DB
PDOStatement - Prepared Statement
PDOException - Represent error raised by PDO
*/
$host = "localhost";
$user = "root";
$password = "";
$dbname = "test";

//Set DSN = Data Source Name,describes connection to database
$dsn = "mysql:hosts=".$host.";dbname=".$dbname;

//Creating PDO Instance
$pdo = new PDO($dsn, $user, $password);//$conn=new mysqli("localhost","root","","test")

//PDO Query
$stmt = $pdo->query("SELECT * FROM posts");//$stmt = $conn->query("SELECT * from posts")


//Fetching Rows in Associated array format
while($row = $stmt->fetch(PDO::FETCH_ASSOC)){//while($row = $result->fetch_assoc())
    echo $row['title'] . "<br>";//echo $row['title'];
}


/*
//Fetching Rows in Object format
while($row = $stmt->fetch(PDO::FETCH_OBJ)){//while($row = $result->fetch_assoc())
    echo $row->title . "<br>";//echo $row['title'];
}
*/



/*
//Set FETCH_OBJ as default class
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ)

while($row = $stmt->fetch())//Now this will work
{--}
*/


/*Prepared Statement (prepare and execute)
Helps write parametric queries,i.e same query can be used again and again
Faster 
Prevents SQL injections

$author = "Arjit";

$sql = "SELECT * FROM posts WHERE author = ?";
$stmt = $pdo->prepare($sql);

$stmt->execute([$author]);

$posts = $stmt->fetchAll(PDO::FETCH_OBJ);

foreach($posts as $post){
    echo $post->title. "<br>";
}
*/



/*
//If we want to use Named paramaters
$author = "Arjit";
$is_published = true;

$sql = "SELECT * FROM posts WHERE author = :author and is_published = :is_published";
$stmt = $pdo->prepare($sql);

$stmt->execute(['author' => $author,"is_published"=>$is_published]);

$posts = $stmt->fetchAll(PDO::FETCH_OBJ);

foreach($posts as $post){
    echo $post->title. "<br>";
}
*/



/* Count no. of rows
$author = "Arjit";
$stmt = $pdo->prepare("SELECT * FROM posts WHERE author = ?");
$stmt->execute([$author]);
$count = $stmt->rowCount();
echo $count;
*/



/*
//Inserting Data
$title = "Post 4";
$body = "This is a post 4";
$author = "Singham";

$sql = "INSERT INTO posts(title,body,author) VALUES(?,?,?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$title,$body,$author]);
echo "Post Added";
*/


/*
//Updating Data
$title = "Post 4 : Updated";
$id = "4";

$sql = "UPDATE posts SET title = ? WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$title,$id]);
echo "Post Updated";
*/



/*
//Deleting Data
$id = "4";

$sql = "DELETE FROM posts WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$id]);
echo "Post Deleted";
*/



/*
//Searching Data
$search = "%title%";
$sql = "SELECT * FROM posts WHERE title LIKE ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$search]);
$posts = $stmt->fetchAll(PDO::FETCH_OBJ);

foreach($posts as $post){
    echo $post->title. "<br>";
}
*/

/*
When using LIMIT in sql disable emulate
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
*/
?>