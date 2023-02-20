<?php

declare(strict_types=1);

namespace Shared\Infrastructure\Persistence;

use Illuminate\Support\Facades\DB;
use Shared\Domain\Contract\CatalogoSharedRepository;

final class MySqlCatalogoSharedRepository implements CatalogoSharedRepository
{
    public function getDistritos(): array
    {
        return DB::table('distritos')
            ->select([
                DB::raw('distritos.id_distrito as value'),
                DB::raw('distritos.distrito as text'),
                DB::raw('distritos.*')
            ])
            ->get()
            ->toArray();
    }

    public function getMunicipios(): array
    {
        return DB::table('municipios')
            ->select([
                DB::raw('municipios.id_municipio as value'),
                DB::raw('municipios.municipio as text'),
                DB::raw('municipios.*')
            ])
            ->get()
            ->toArray();
    }

    public function getTipos(): array
    {
        return DB::table('tipos')
            ->select([
                DB::raw('tipos.id_tipo as value'),
                DB::raw('tipos.tipo as text'),
                DB::raw('tipos.*')
            ])
            ->get()
            ->toArray();
    }

    public function getIdiomas(): array
    {
        return DB::table('idiomas')
            ->select([
                DB::raw('idiomas.id_idioma as value'),
                DB::raw('idiomas.idioma as text'),
                DB::raw('idiomas.*')
            ])
            ->get()
            ->toArray();
    }

    public function getGeneros(): array
    {
        return DB::table('generos')
            ->select([
                DB::raw('generos.id_genero as value'),
                DB::raw('generos.genero as text'),
                DB::raw('generos.*')
            ])
            ->get()
            ->toArray();
    }

    public function getRegiones(): array
    {
        return DB::table('regiones')
            ->select([
                DB::raw('regiones.id_region as value'),
                DB::raw('regiones.region as text'),
                DB::raw('regiones.*')
            ])
            ->get()
            ->toArray();
    }
}