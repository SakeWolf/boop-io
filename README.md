# boop-io
An open-source room-based web chat application geared towards dice rolling-related mechanics. As of now, boop-io runs using:
- Node.js
- Express

For testing, boop-io currently uses
- Supertest
- Mocha

## Setting Up
In order to run boop-io locally, you need to have Node.js and npm installed for your machine, as well as a symbolic link between nodejs and node created. You can do this with the following command:
```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```
Once you have those, clone this repo, cd into it from the terminal/command line, then run:
```
npm install
```
This should install all dependencies included in packages.json.

## Running Locally
To run the app locally, from the root directory of the project run:
```
./bin/www
```
You can then make calls to the application's endpoints at `http://localhost:3000/`

## Running Tests
Tests can be run from the root directory by calling the script:
```
npm test
```
