@echo off
REM ============================================================================
REM  See this on your own phone before you send it to her.
REM
REM  Double-click this file. It serves this folder over your home Wi-Fi and
REM  prints a link. Type that link into your phone's browser (phone must be on
REM  the same Wi-Fi). Close this window to stop.
REM ============================================================================
setlocal
cd /d "%~dp0"
set PORT=8000

for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "(Get-NetIPAddress -AddressFamily IPv4 ^| Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } ^| Select-Object -First 1).IPAddress"`) do set LANIP=%%i

echo.
echo   ================================================================
echo    This little world is now live on your Wi-Fi.
echo.
echo      On this laptop :  http://localhost:%PORT%/index.html
echo      On your phone  :  http://%LANIP%:%PORT%/index.html
echo.
echo    Both devices must be on the same Wi-Fi network.
echo    Press Ctrl+C in this window (or just close it) when you are done.
echo   ================================================================
echo.

start "" "http://localhost:%PORT%/index.html"
python -m http.server %PORT%
endlocal
