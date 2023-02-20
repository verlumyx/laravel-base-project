<?php

namespace Database\Seeders;

use Plenitud\Usuario\Infrastructure\Model\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userSistema = DB::table("users")->where("email", "sistema@sistema.com")->get();

        if ($userSistema->isEmpty()) {
            User::factory()->create([
                'name' => 'Sistema',
                'email' => 'sistema@sistema.com',
            ]);
        }
    }
}
