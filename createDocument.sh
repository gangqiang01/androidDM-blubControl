#!/bin/bash

apidoc -i ./src/components/restfulapi/ -o bulbControlApiDocument
rm -r /var/www/html/bulbControlApiDocument
cp -r bulbControlApiDocument /var/www/html
