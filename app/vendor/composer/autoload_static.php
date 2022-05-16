<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0f218e19a6870adf8da99aff5d09096f
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Kev\\App\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Kev\\App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0f218e19a6870adf8da99aff5d09096f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0f218e19a6870adf8da99aff5d09096f::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit0f218e19a6870adf8da99aff5d09096f::$classMap;

        }, null, ClassLoader::class);
    }
}