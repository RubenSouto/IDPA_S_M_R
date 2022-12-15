#!/bin/sh
cd /lernApp
rm -f package-lock.json
rm -f yarn.lock
npm install && ng serve
