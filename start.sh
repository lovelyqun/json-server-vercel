#!/bin/bash
# 这是启动Node.js服务器的脚本

# 切换到服务器的目录
cd /appdata/wisApp/upload/json-server-vercel/

# 使用Node.js在后台启动服务器
nohup node server.js > server.log 2>&1 &
