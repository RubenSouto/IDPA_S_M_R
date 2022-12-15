#!/bin/bash
cd /var/www/html
rm -f composer.lock
composer install && apache2-foreground