#!/bin/bash

# needs pip, npm, and virtualenv
echo "Creating python virtual environment..."
virtualenv env

echo "Installing python dependancies..."
source env/bin/activate
pip install -r requirements.txt

echo "Initializing node modules..."
cd static
npm install
cd ..

echo "All done!"
