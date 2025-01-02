---
lang: zh-CN
icon: pen-to-square
date: 2024-12-7
isOriginal: false # 是否原创
category:
  - Docker
tag:
  - Edit
---

# docker容器无法启动，修改容器内文件2种方式

1. 文件复制出来修改后复制回去

   ``` bash
   docker cp [容器id]：docker容器中配置文件路径  主机路径
   docker cp nginx:/etc/nginx/nginx.conf /home/docker/nginx/nginx.conf
   ```

1. 直接进入容器中修改

    ```bash
    docker inspect [容器id] # 查看容器信息
    ```

[文档参考]<https://blog.csdn.net/JineD/article/details/109577016>
