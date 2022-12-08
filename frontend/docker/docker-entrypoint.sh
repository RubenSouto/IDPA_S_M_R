#!/bin/sh
cd /app
rm -f package-lock.json
npm install && ng serve