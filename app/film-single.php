<?php

require_once 'headers.php';
require_once 'Class/PDOFactory.php';
require_once 'Class/Post.php';

$film = $_GET['id'];

$pdo = (new PDOFactory())->getPdo();

$query = $pdo->query('SELECT post_id, username, title, p.created_at, content FROM post p JOIN user u ON p.author_id = u.id JOIN film f ON p.film_id = :id');

$query->bindValue('id', $film, PDO::PARAM_STR);

$query->setFetchMode(PDO::FETCH_ASSOC);

$res = [];

foreach ($query->fetchAll() as $com) {

    var_dump($com);
//    $res[] = [
//        'id' => $com['post_id'],
//        "date" => $com['created_at'],
//        'title' => $com['title'],
//        'content' => $com['content'],
//        'user' => $com['title']
//    ];

}




$query2 = $pdo->query('SELECT * FROM film WHERE id = :id');

$query2->bindValue('id', $film, PDO::PARAM_STR);

$query2->setFetchMode(PDO::FETCH_ASSOC);

$res2 = [];

foreach ($query->fetchAll() as $film) {

    var_dump($film);
//    $res2[] = [
//        'id' => $film['id'],
//        'date' => $film['date'],
//        'title' => $film['title'],
//        'resume' => $film['content'],
//        'real' => $film['realisateur'],
//        'img' =>  $film['img']
//    ];

}



//echo json_encode([
//    'com' => $res,
//    'film' => $res2
//]);
