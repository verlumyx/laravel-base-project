include .env

.PHONY: start
start:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose stop

.PHONY: down
down:
	docker-compose down

.PHONY: login-php
login-php:
	docker-compose exec app sh

.PHONY: install-composer
install-composer:
	docker-compose run composer composer install --no-cache

#make require-composer
.PHONY: require-composer
require-composer:
	docker-compose run composer composer require

.PHONY: dump-autoload
dump-autoload:
	docker-compose run composer composer dump-autoload

.PHONY: test
test:
	docker-compose exec app php artisan test

#make test-filter f:=context
.PHONY: test-filter
test-filter:
	docker-compose exec app php artisan test --filter $f

.PHONY: migrate
migrate:
	docker-compose exec app php artisan migrate

.PHONY: rollback
rollback:
	docker-compose exec app php artisan migrate:rollback

.PHONY: run-seed
run-seed:
	docker-compose exec app php artisan db:seed

#make create-migrate m:=NameMigration
.PHONY: create-migrate
create-migrate:
	docker-compose exec app php artisan make:migration $m

.PHONY: clear-cache
clear-cache:
	docker-compose exec app php artisan optimize:clear

.PHONY: db
db:
	docker-compose exec mariadb mariadb -u ${DB_USERNAME} -p
