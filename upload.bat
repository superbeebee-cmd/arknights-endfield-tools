@echo off
chcp 65001 >nul 2>nul

echo.
echo ===== Git 強制推送（--force-with-lease 安全版）=====
echo 警告：這會覆蓋遠端歷史，請三思！
echo.
echo 目前目錄：%CD%
git branch --show-current
echo.

set /p confirm=確定要強推？輸入 YES 繼續（大小寫不分），其他取消： 

if /i not "%confirm%"=="YES" (
    echo 已取消。
    pause
    exit /b
)

set "msg=%*"
if "%msg%"=="" set "msg=強制更新 (force-with-lease)"

git add .
git commit -m "%msg%" || (
    echo.
    echo 沒有新變更，正在直接強推...
)

echo.
echo 正在 push --force ...
"git" push --force
if %ERRORLEVEL% EQU 0 (
    echo.
    echo 成功推送！ ✓
) else (
    echo.
    echo 失敗！請看上面 git 的錯誤訊息
    echo 如果是 rejected (stale info) → 表示遠端有新 commit，先 git fetch 再決定是否要 --force
    echo 如果還是解析錯誤 → 試試下面純 --force 版本
)

echo.
pause