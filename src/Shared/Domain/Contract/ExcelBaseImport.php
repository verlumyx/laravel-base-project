<?php

declare(strict_types=1);

namespace Shared\Domain\Contract;

interface ExcelBaseImport
{
    public function import(): array;
    public function getRow($row);

}