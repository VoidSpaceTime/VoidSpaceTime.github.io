---
lang: zh-CN
icon: pen-to-square
date: 2024-11-20
isOriginal: true # 是否原创
category:
  - Nginx
tag:
  - Nginx
---

# Nginx install for Docker

使用 Docker 安装

```bash
docker run -d -p 80:80 --name mynginx nginx:latest
```

- docker run: 表示运行一个新的 Docker 容器。
- -d: 指定容器以“分离模式”（detached mode）运行，即后台运行。
- -p 80:80: 映射端口配置：
- 宿主机（本地电脑）的 80 端口将转发到容器内的 80 端口。
- 这使得通过 http://localhost 或机器 IP，可以直接访问 Nginx 服务。
- --name nginx: 为容器命名为 nginx，便于管理和操作。
- nginx:latest: 指定使用的镜像为 Nginx 的最新版本（latest 标签）。如果本地没有该镜像，Docker 会自动从 Docker Hub 拉取。
