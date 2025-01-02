---
lang: zh-CN
icon: pen-to-square
date: 2024-12-8
isOriginal: false # 是否原创
category:
  - Docker
tag:
  - Nginx
---


# 简单整理Docker 容器访问网络的坑

##
```sh
ip addr show # 查看网卡信息
```

## 容器内访问 外网

```sh
curl: (6) Could not resolve host: localhsot; 未知的错误
```

在网上查了很多，大多是DNS没有配置，所以我修改了/etc/resolve.conf文件，看是否有用

```sh
nameserver 8.8.8.8
nameserver 114.114.114.114
```

[参考链接](https://blog.csdn.net/weixin_51725822/article/details/115089616?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7EPaidSort-1-115089616-blog-122730226.235%5Ev43%5Epc_blog_bottom_relevance_base1&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7EPaidSort-1-115089616-blog-122730226.235%5Ev43%5Epc_blog_bottom_relevance_base1&utm_relevant_index=1)
