
# Ik分词器版本不对处理方法

修改 plugin-descriptor.properties 文件
修改两个地方，即可，改成和自己集群对应的版本。以我测试案例，我是使用8.8.0版本的es，这里使用了8.8.1版本的Ik分词器，所以我把version和

elasticsearch.version都改成了8.8.0。
![Alt text](/assets/images/Ik.png)

原文链接：<https://blog.csdn.net/star1210644725/article/details/133943915>
