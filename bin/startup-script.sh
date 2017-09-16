#!/bin/bash
# Google Compute Engine Startup script
echo 'startup script'

apt-get update
apt-get upgrade # this will prob take a while
apt-get install nodejs-legacy nodejs npm 

# get this project (it if doesn't exist)


