@echo off
echo ===================================
echo   正在自动上传代码到 GitHub...
echo ===================================

:: 切换到当前文件夹路径
cd /d "%~dp0"

:: 1. 暂存所有修改
git add .

:: 2. 提交修改（自动带上当前时间戳作为提交日志）
git commit -m "Auto update: %date% %time%"

:: 3. 推送到 GitHub 仓库的 main 分支
git push origin main

echo ===================================
echo   上传完成！GitHub Pages 网页即将在1-2分钟内更新。
echo ===================================
pause