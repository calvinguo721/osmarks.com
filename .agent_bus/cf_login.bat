@echo off
title Cloudflare Wrangler Login - osmarks deploy
echo ============================================
echo  Cloudflare Wrangler OAuth Login
echo  Browser will open automatically...
echo  Click ALLOW in the browser to finish.
echo ============================================
set npm_config_registry=https://registry.npmmirror.com
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npx-cli.js" --yes wrangler login
echo.
echo ============================================
echo  Login process ended. If you see "Successfully logged in", it is done.
echo  You can close this window.
echo ============================================
pause
