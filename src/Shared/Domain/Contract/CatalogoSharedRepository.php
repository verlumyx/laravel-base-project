<?php

declare(strict_types=1);

namespace Shared\Domain\Contract;

interface CatalogoSharedRepository
{
    public function getDistritos(): array;
    public function getMunicipios(): array;
    public function getTipos(): array;
    public function getIdiomas(): array;
    public function getGeneros(): array;
    public function getRegiones(): array;
}