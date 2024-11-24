import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as e}from"./app-e7c092b1.js";const i={},d=e(`<h1 id="windows-系统中安装-ubuntu-系统" tabindex="-1"><a class="header-anchor" href="#windows-系统中安装-ubuntu-系统" aria-hidden="true">#</a> Windows 系统中安装 Ubuntu 系统</h1><h2 id="启动或关闭-windows-功能-中打开-适用于-linux-的-windows-子系统-以及-虚拟机平台" tabindex="-1"><a class="header-anchor" href="#启动或关闭-windows-功能-中打开-适用于-linux-的-windows-子系统-以及-虚拟机平台" aria-hidden="true">#</a> “启动或关闭 Windows 功能” 中打开 &quot;适用于 Linux 的 Windows 子系统&quot; 以及 &quot;虚拟机平台&quot;</h2><h2 id="打开-microsoft-store-商店内直接搜索-ubuntu-按照并启动" tabindex="-1"><a class="header-anchor" href="#打开-microsoft-store-商店内直接搜索-ubuntu-按照并启动" aria-hidden="true">#</a> 打开 Microsoft Store，商店内直接搜索 Ubuntu 按照并启动</h2><ul><li><p>如果出现以下报错 <a href="image.png">image</a></p></li><li><p>需要执行</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--update</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如果进度一直为 0 可能是因为默认的 wsl --update 是从微软商店下载的，微软应用商店就经常出现网络的问题。在 wsl --update 后面加上 --web-download 就可以从 github 上进行下载</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--update</span> --web-download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2><h3 id="国内网络问题导致的无法使用-pull" tabindex="-1"><a class="header-anchor" href="#国内网络问题导致的无法使用-pull" aria-hidden="true">#</a> 国内网络问题导致的无法使用 pull</h3><ul><li><p>Snap 安装的 Docker 可能没有默认的配置文件目录，需要手动创建。</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/snap/docker/current/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>非snap的话 docker可以直接修改</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在 /var/snap/docker/current/config 目录下创建 daemon.json 文件，并添加你的镜像地址</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /var/snap/docker/current/config/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>这个是国内镜像源 其他的可以参考 <a href="%22https://github.com/dongyubin/DockerHub%22">参考GitHub</a></p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
<span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
<span class="token string">&quot;https://xdark.top&quot;</span>,
<span class="token string">&quot;https://dockerproxy.cn&quot;</span>,
<span class="token string">&quot;https://docker.rainbond.cc&quot;</span>,
<span class="token string">&quot;https://docker.udayun.com&quot;</span>,
<span class="token string">&quot;https://docker.211678.top&quot;</span>,
<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重启docker服务" tabindex="-1"><a class="header-anchor" href="#重启docker服务" aria-hidden="true">#</a> 重启docker服务</h4><p>由于是通过 snap 安装的 Docker，需要使用 snap 命令重启服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><a href="%22https://dashenxian.github.io/post/snap-%E5%AE%89%E8%A3%85%E7%9A%84docker-%E5%A6%82%E4%BD%95%E6%B7%BB%E5%8A%A0%E5%8A%A0%E9%80%9F%E9%95%9C%E5%83%8F%E5%92%8C%E9%87%8D%E5%90%AF%E6%9C%8D%E5%8A%A1%22">参考地址</a></p></li></ul>`,7),l=[d];function t(r,o){return n(),s("div",null,l)}const p=a(i,[["render",t],["__file","Windows Install Ubuntu.html.vue"]]);export{p as default};
