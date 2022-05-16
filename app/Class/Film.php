<?php

class Film
{
    private $id;
    private $real;
    private $date;
    private $title;
    private $img;


    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param mixed $date
     * @return Film
     */
    public function setDate($date)
    {
        $this->date = $date;
        return $this;
    }


    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getReal()
    {
        return $this->real;
    }

    /**
     * @param mixed $real
     * @return Film
     */
    public function setReal($real)
    {
        $this->real = $real;
        return $this;
    }


    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     * @return Film
     */
    public function setTitle($title)
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getImg()
    {
        return $this->img;
    }

    /**
     * @param mixed $img
     * @return Film
     */
    public function setImg($img)
    {
        $this->img = $img;
        return $this;
    }
}