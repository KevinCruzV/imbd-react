<?php

require_once 'headers.php';
require_once 'Class/PDOFactory.php';
require_once 'Class/Post.php';

$pdo = (new PDOFactory())->getPdo();

//$query = $pdo->query('SELECT * FROM post p JOIN film f ON p.film_id = f.id');
$query = $pdo->query('SELECT * FROM film ORDER BY date DESC');
$query->setFetchMode(PDO::FETCH_ASSOC);

$res = [];

foreach ($query->fetchAll() as $film) {
   var_dump($film);
//    $res[] = [
//        'id' => $film['id'],
//        "date" => $film['created'],
//        'title' => $film['title'],
//        'content' => $film['content'],
//        'author' => $film['username']
//    ];
}

//echo json_encode($res);
