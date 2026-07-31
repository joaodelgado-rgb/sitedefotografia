@echo off
title Danilo Fotografia - Site
color 0A
echo.
echo ============================================
echo    Danilo Fotografia - Iniciando Site
echo ============================================
echo.

cd /d "%~dp0frontend"

REM Verifica se node_modules existe, se não, instala
if not exist "node_modules" (
    echo Instalando dependencias... (pode levar alguns minutos)
    call npm install
)

echo Iniciando servidor de desenvolvimento...
echo.
echo Site disponivel em: http://localhost:3000
echo Pressione CTRL+C para parar o servidor
echo.

call npm run dev

pause

