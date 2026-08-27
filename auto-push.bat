chcp 65001
@echo off
echo ===================================
echo   正在自动上传代码到 GitHub...
echo ===================================

cd /d "%~dp0"

:: 禁用 SSL 验证防网络失败
git config http.sslVerify false

:: 提交并强推
git add .
git commit -m "Auto update"
git push origin main -f

echo ===================================
echo   上传完成！GitHub Pages 网页即将在1-2分钟内更新。
echo ===================================
pause