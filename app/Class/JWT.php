<?php

class JWT
{
    private static string $key = 'COUCOU';

    /**
     * @throws Exception
     */
    public static function build(User $user): string
    {
        $payload = [
            'exp' => time() + 20,
            'userId' => $user->getId(),
            'username' => $user->getUsername()
        ];
        return \Firebase\JWT\JWT::encode($payload, self::$key, 'HS256');
    }
}
