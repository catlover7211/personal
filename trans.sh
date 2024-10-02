#!/bin/bash

# 定義變數
USER="kali"                 # 遠端使用者名稱
HOST="10.16.20.28"          # 遠端主機 IP 或域名
REMOTE_DIR="webserver/web"  # 遠端目標目錄
PASSWORD="kali"           # 遠端主機密碼

# 本地目錄
LOCAL_DIR="./*"

# 使用 sshpass 自動輸入密碼執行 scp 命令
sshpass -p "$PASSWORD" scp -r $LOCAL_DIR $USER@$HOST:$REMOTE_DIR

# 判斷是否成功
if [ $? -eq 0 ]; then
    echo "檔案已成功傳輸到 $USER@$HOST:$REMOTE_DIR"
else
    echo "檔案傳輸失敗，請檢查相關設定。"
fi
