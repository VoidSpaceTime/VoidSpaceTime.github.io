import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as r,c as t,a as e,b as l,d as i,f as o}from"./app-fc5d6b9f.js";const c={},d=o(`<h1 id="docker-推荐使用" tabindex="-1"><a class="header-anchor" href="#docker-推荐使用" aria-hidden="true">#</a> docker <strong>推荐使用</strong></h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> myredis <span class="token parameter variable">-d</span> redis  <span class="token parameter variable">--requirepass</span> ningzaichun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>run 启动一个容器</li><li>--restart=always 总是重新启动</li><li>-p 6379:6379 设定端口</li><li>--name myredis 自定义名称</li><li>redis:7.0.12 指定镜像 : 版本号</li><li>--requirepass ningzaichun 设置密码</li></ul>`,3),p={href:"https://blog.csdn.net/weixin_45821811/article/details/116211724",target:"_blank",rel:"noopener noreferrer"};function m(u,_){const a=n("ExternalLinkIcon");return r(),t("div",null,[d,e("p",null,[e("a",p,[l("参考网站"),i(a)])])])}const b=s(c,[["render",m],["__file","install.html.vue"]]);export{b as default};