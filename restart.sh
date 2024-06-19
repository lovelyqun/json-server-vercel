#!/bin/bash
# 这是重启在特定端口运行的Node.js服务器的脚本

echo "Attempting to stop server..."
# 查找在端口8580上运行的进程的PID
PID=$(lsof -t -i:8580 -sTCP:LISTEN)

# 如果找到了PID，则结束进程
if [ -z "$PID" ]; then
    echo "No server running on port 8580"
else
    echo "Stopping server running on port 8580 with PID $PID"
    kill $PID
    # 等待进程完全结束
    while kill -0 $PID 2>/dev/null; do 
        sleep 1
    done
    echo "Server stopped."
fi

echo "Starting server..."
# 在这里输入你的启动命令，例如:
# 切换到服务器的目录
cd /appdata/wisApp/upload/json-server-vercel/

# 使用Node.js在后台启动服务器
nohup node server.js > server.log 2>&1 &
echo "Server started on port 8580.   host:http://122.112.227.219:11135"
