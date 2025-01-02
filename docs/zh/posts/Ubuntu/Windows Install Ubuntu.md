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

### 国内网络问题

- [参考地址](https://blog.coolight.cool/%E4%B8%BAubuntu-wsl-linux%E9%85%8D%E7%BD%AE%E7%B3%BB%E7%BB%9F%E4%BB%A3%E7%90%86/)

### Ubuntu解决resolv.conf 重启后还原

- [参考](https://blog.csdn.net/qq_43445867/article/details/142874167)
