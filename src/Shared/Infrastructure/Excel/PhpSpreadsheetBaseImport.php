<?php

declare(strict_types=1);

namespace Shared\Infrastructure\Excel;

use Shared\Domain\Contract\ExcelBaseImport;

abstract class PhpSpreadsheetBaseImport implements ExcelBaseImport
{
    protected $worksheet;

    public function __construct()
    {
        $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReaderForFile($_FILES['file']['tmp_name']);
        $reader->setReadDataOnly(true);
        $spreadsheet = $reader->load($_FILES['file']['tmp_name']);
        $worksheet = $spreadsheet->getActiveSheet();
        $this->worksheet = $worksheet;
    }

    public function import(): array
    {
        $objWorksheet = $this->worksheet;
        $rows = [];
        foreach ($objWorksheet->getRowIterator() as $i => $row) {
            if (in_array($i, [1]) || $this->isEmtyRow($row))
                continue;
            $rows[] = $this->getRow($row);
        }
        return $rows;
    }

    protected function isEmtyRow($row): bool
    {
        $rowIndex = $row->getRowIndex();
        $objWorksheet = $this->worksheet;
        $cell = $objWorksheet->getCell('A' . $rowIndex);
        $value = $cell->getValue();
        $value = is_string($value) ? TRIM($value) : $value;
        return empty($value);
    }

    protected function getCellValue($letter, $rowIndex, $requerido = false)
    {
        $objWorksheet = $this->worksheet;
        $cell = $objWorksheet->getCell($letter . $rowIndex);
        $value = $cell->getValue();

        if (empty($value) && $requerido) {
            throw new \Exception("La celda {$rowIndex}{$letter} es obligatorio");
        }
        return !empty($value) ? $value : '';
    }

    abstract public function getRow($row);
}