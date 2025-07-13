#!/bin/bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git add .
git commit -m "Release v1.1 — Auto ritual sync"
git tag v1.1
git push origin main
git push origin v1.1
