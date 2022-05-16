<?php

class TokenHelper
{
    /**
     * @throws Exception
     */
    static public function buildToken(): string
    {
        $bytes = random_bytes(50);
        return bin2hex($bytes);
    }
}
