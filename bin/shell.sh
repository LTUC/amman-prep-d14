#!/bin/bash

find . -type d -name facilitator -exec rm -rf  {} \;
rm -rf Code\ Challenges\ Solutions
rm -rf .git
git init
git add .
git commit -m "Init Commit"
git remote add origin $1
git push origin main