#!/bin/bash
# Google Compute Engine Startup script
echo 'startup script'

apt-get update
apt-get upgrade # this will prob take a while
apt-get install nodejs-legacy nodejs npm 

# get this project
git clone https://github.com/bradtaniguchi/even-or-odd-backend.git
cd even-or-odd-backend

# install dependencies for this project
npm install

# get the front-end version of this code
# TODO

# finally start the express server using forever
