### 新增一个接口

db.json 文件内新增一个对象，对象的key 为接口名称，value 为接口数据,接口支持get、post、put、delete、patch、options、head 方法

    "posts": [ {
          "id": 1,
          "title": "json-server",
          "author": "typicode"
        },
        {
          "id": 2,
          "title": "json-server",
          "author": "typicode"
        },{
          "id": 3,
          "title": "json-server",
          "author": "typicode"
        },
        {
          "id": 4,
          "title": "json-server",
          "author": "typicode"
        },{
          "id": 5,
          "title": "json-server",
          "author": "typicode"
        },
        {
          "id": 6,
          "title": "json-server",
          "author": "typicode"
        }
        ]

访问：http://122.112.227.219:11135/posts 获取数据
访问：http://122.112.227.219:11135/posts?id=1 获取数据id为1的数据
访问：http://122.112.227.219:11135/posts?_page=1&_per_page=10 获取分页信息
- `page` 当前页码
- `per_page` 每一页的数据 (default = 10)

### 启动
登录仿真服务器122.112.227.219:11130 

    cd /appdata/wisApp/upload/json-server-vercel/
    ./restart.sh

每次修改db.json文件后，都需要重启服务