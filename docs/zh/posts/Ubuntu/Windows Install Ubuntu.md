---
lang: zh-CN
icon: pen-to-square
date: 2024-11-24
isOriginal: true # 是否原创
category:
  - Ubuntu
tag:
  - Ubuntu
---

# Windows 系统中安装 Ubuntu 系统

## “启动或关闭 Windows 功能” 中打开 "适用于 Linux 的 Windows 子系统" 以及 "虚拟机平台"

## 打开 Microsoft Store，商店内直接搜索 Ubuntu 按照并启动

- 如果出现以下报错 [image](image.png)
- 需要执行

- ```bash
  wsl --update
  ```

- 如果进度一直为 0 可能是因为默认的 wsl --update 是从微软商店下载的，微软应用商店就经常出现网络的问题。在 wsl --update 后面加上 --web-download 就可以从 github 上进行下载

- ```bash
  wsl --update --web-download
  ```

## 遇到的问题

### 国内网络问题导致的无法使用 pull

- 非 snap 的话 docker 可以直接修改

- ```bash
  sudo vim /etc/docker/daemon.json
  ```
- Snap 安装的 Docker 可能没有默认的配置文件目录，需要手动创建。(非常不建议通过 snap 用 docker 坑特别多)

- ```bash
  sudo mkdir -p /var/snap/docker/current/config
  ```

- 在 /var/snap/docker/current/config 目录下创建 daemon.json 文件，并添加你的镜像地址

- ```bash
  sudo vim /var/snap/docker/current/config/daemon.json
  ```

- 这个是国内镜像源 其他的可以参考 [参考 GitHub](https://github.com/dongyubin/DockerHub)

- ```bash
  {
  "registry-mirrors": [
  "https://xdark.top",
  "https://dockerproxy.cn",
  "https://docker.rainbond.cc",
  "https://docker.udayun.com",
  "https://docker.211678.top",
  ]
  }
  ```

  #### 重启 docker 服务

```bash
sudo systemctl restart docker
```

通过 snap 安装的 Docker，需要使用 snap 命令重启服务。

```bash
sudo snap restart docker
```

#### 加入权限组

重新登录用户后生效 , 输入指令就不用 sudo 了

```bash
sudo usermod -aG docker $USER
```

- [参考地址](https://dashenxian.github.io/post/snap-%E5%AE%89%E8%A3%85%E7%9A%84docker-%E5%A6%82%E4%BD%95%E6%B7%BB%E5%8A%A0%E5%8A%A0%E9%80%9F%E9%95%9C%E5%83%8F%E5%92%8C%E9%87%8D%E5%90%AF%E6%9C%8D%E5%8A%A1)
