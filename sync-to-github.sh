#!/bin/bash
echo '📤 Syncing to GitHub...'
git add .
git commit -m 'Auto-sync from Temple OS v1.2'
git push origin main