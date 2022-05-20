<?php

use Firebase\JWT\JWT;

require_once 'headers.php';
require_once 'Class/PDOFactory.php';
require_once 'Class/User.php';
require_once 'Class/Post.php';
require_once 'vendor/autoload.php';



$token = $_COOKIE['token'] ?? '';
$blogTitle = $_POST['title'] ?? '';
$blogContent = $_POST['content'] ?? '';


if (!$token) {
    echo json_encode([
        'status' => 'error',
        'message' => 'You need a bearer token to post here'
    ]);
    exit;
}

if (!$blogContent || !$blogTitle) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Your blog needs a title and a content'
    ]);
    exit;
}


$InstancePdo = new PDOFactory();
$pdo = $InstancePdo->getPdo();

try {


    $jwt = JWT::decode($token,new \Firebase\JWT\Key('COUCOU', 'HS256'));




    $blog = (new Post())
        ->setTitle($blogTitle)
        ->setContent($blogContent)
        ->setAuthorId($jwt->userid);

    $update = $pdo->prepare('INSERT INTO Blog (title, content, author_id, film_id) VALUES (:title, :content, :authorId, NOW())');
    $update->bindValue('title', $blog->getTitle(), PDO::PARAM_STR);
    $update->bindValue('content', $blog->getContent(), PDO::PARAM_STR);
    $update->bindValue('author_id', $jwt->userid, PDO::PARAM_INT);
    $update->bindValue('film_id', $jwt->userid, PDO::PARAM_INT);


    if ($update->execute()) {
        echo json_encode([
            'status' => 'success',
            'message' => 'post saved',
            'cookie' => $_COOKIE['token'] ?? 'expired cookie'
        ]);
    }



}
catch (\Firebase\JWT\ExpiredException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Le token est expiré'
    ]);

}

finally {
    exit;
}


