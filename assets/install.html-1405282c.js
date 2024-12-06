import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,f as l}from"./app-fc5d6b9f.js";const s={},i=l(`<h1 id="nginx-install-for-docker" tabindex="-1"><a class="header-anchor" href="#nginx-install-for-docker" aria-hidden="true">#</a> Nginx install for Docker</h1><p>使用 Docker 安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> mynginx nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>docker run: 表示运行一个新的 Docker 容器。</li><li>-d: 指定容器以“分离模式”（detached mode）运行，即后台运行。</li><li>-p 80:80: 映射端口配置：</li><li>宿主机（本地电脑）的 80 端口将转发到容器内的 80 端口。</li><li>这使得通过 http://localhost 或机器 IP，可以直接访问 Nginx 服务。</li><li>--name nginx: 为容器命名为 nginx，便于管理和操作。</li><li>nginx:latest: 指定使用的镜像为 Nginx 的最新版本（latest 标签）。如果本地没有该镜像，Docker 会自动从 Docker Hub 拉取。</li></ul>`,4),r=[i];function t(o,c){return a(),n("div",null,r)}const m=e(s,[["render",t],["__file","install.html.vue"]]);export{m as default};