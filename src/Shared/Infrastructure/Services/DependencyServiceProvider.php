<?php

declare(strict_types=1);

namespace Shared\Infrastructure\Services;

use Illuminate\Support\ServiceProvider as Service;
use Shared\Domain\Contract\CatalogoSharedRepository;
use Shared\Infrastructure\Persistence\MySqlCatalogoSharedRepository;

final class DependencyServiceProvider extends Service
{
    private $wiringObjects = [
        CatalogoSharedRepository::class => MySqlCatalogoSharedRepository::class
    ];

    public function register()
    {
        //
    }

    public function boot()
    {
        foreach ($this->wiringObjects as $abstract => $implementation) {
            $this->app->bind($abstract, $implementation);
        }
    }
}
