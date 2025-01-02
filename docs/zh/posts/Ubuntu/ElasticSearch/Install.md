---
lang: zh-CN
icon: pen-to-square
date: 2024-12-7
isOriginal: true # 是否原创
category:
  - Ubuntu 
  - Docker
tag:
  - ElasticSearch
---


# ElasticSearch安装

- Elasticsearch 版本必须和 Kibana 版本一致

因为我们还需要部署 Kibanna 容器，因此需要让 ES 和 Kibana 容器互联，这里先创建一个网络。

```bash
docker network create es-net
```

```bash
docker run -d \
--name es \
--network es-net \
-p 9200:9200 \
-p 9300:9300 \
--privileged \
-v /usr/local/es/data:/usr/share/elasticsearch/data \
-v /usr/local/es/config:/usr/share/elasticsearch/config \
-v /usr/local/es/plugins:/usr/share/elasticsearch/plugins \
-e "discovery.type=single-node" \
-e "ES_JAVA_OPTS=-Xms512m -Xmx512m" \
elasticsearch:8.16.1
```

```bash
#进入容器
docker exec -it elasticsearch /bin/bash
#修改配置
vim config/elasticsearch.yml 
#添加配置，重启容器
xpack.security.enabled: true
#进入容器，配置es及其组件的密码
./bin/elasticsearch-setup-passwords interactiv
```

[安装参考文档](<https://blog.csdn.net/Acloasia/article/details/130683934>)

[Elastic 密码部分文档](<https://blog.csdn.net/lhrm0213/article/details/122468588>)
