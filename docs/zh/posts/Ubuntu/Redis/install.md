---
lang: zh-CN
icon: pen-to-square
date: 2024-11-20
isOriginal: true # 是否原创
category:
  - Redis
tag:
  - Redis
---

# docker **推荐使用**

```bash
docker run --restart=always -p 6379:6379 --name myredis -d redis  --requirepass ningzaichun
```

- run 启动一个容器
- --restart=always 总是重新启动
- -p 6379:6379 设定端口
- --name myredis 自定义名称
- redis:7.0.12 指定镜像 : 版本号
- --requirepass ningzaichun 设置密码

[参考网站](https://blog.csdn.net/weixin_45821811/article/details/116211724)
