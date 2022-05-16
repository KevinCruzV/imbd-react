<?php

class Post
{
    private int $id;
    private string $date;
    private string $title;
    private string $content;
    private int $filmID;
    private int $authorId;

    /**
     * @param mixed $filmID
     */
    public function setFilmID($filmID)
    {
        $this->filmID = $filmID;
    }

    /**
     * @return int
     */
    public function getFilmID(): int
    {
        return $this->filmID;
    }


    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Post
     */
    public function setId($id): Post
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return int
     */
    public function getAuthorId(): int
    {
        return $this->authorId;
    }

    /**
     * @param int $authorId
     * @return Post
     */
    public function setAuthorId(int $authorId): Post
    {
        $this->authorId = $authorId;
        return $this;
    }

    /**
     * @return string
     */
    public function getDate(): string
    {
        return $this->date;
    }

    /**
     * @param string $date
     * @return Post
     */
    public function setDate(string $date): Post
    {
        $this->date = $date;
        return $this;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return Post
     */
    public function setTitle(string $title): Post
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return Post
     */
    public function setContent(string $content): Post
    {
        $this->content = $content;
        return $this;
    }


}
