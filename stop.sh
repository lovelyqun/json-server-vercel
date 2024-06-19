#!/bin/bash
# 这是结束在特定端口运行的Node.js服务器的脚本

# 查找在端口8580上运行的进程的PID
PID=$(lsof -t -i:8580 -sTCP:LISTEN)

# 如果找到了PID，则结束进程
if [ -z "$PID" ]; then
    echo "No server running on port 8580."
else
    echo "Stopping server running on port 8580 with PID $PID"
    kill $PID
fi
