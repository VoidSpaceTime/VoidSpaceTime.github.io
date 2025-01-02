import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c,a,b as n,d as e,f as r}from"./app-98787eb3.js";const p={},o=r(`<h1 id="elasticsearch安装" tabindex="-1"><a class="header-anchor" href="#elasticsearch安装" aria-hidden="true">#</a> ElasticSearch安装</h1><ul><li>Elasticsearch 版本必须和 Kibana 版本一致</li></ul><p>因为我们还需要部署 Kibanna 容器，因此需要让 ES 和 Kibana 容器互联，这里先创建一个网络。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create es-net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> es <span class="token punctuation">\\</span>
<span class="token parameter variable">--network</span> es-net <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/es/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/es/config:/usr/share/elasticsearch/config <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/es/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span> <span class="token punctuation">\\</span>
elasticsearch:8.16.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> elasticsearch /bin/bash
<span class="token comment">#修改配置</span>
<span class="token function">vim</span> config/elasticsearch.yml 
<span class="token comment">#添加配置，重启容器</span>
xpack.security.enabled: <span class="token boolean">true</span>
<span class="token comment">#进入容器，配置es及其组件的密码</span>
./bin/elasticsearch-setup-passwords interactiv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d={href:"https://blog.csdn.net/Acloasia/article/details/130683934",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/lhrm0213/article/details/122468588",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=i("ExternalLinkIcon");return t(),c("div",null,[o,a("p",null,[a("a",d,[n("安装参考文档"),e(s)])]),a("p",null,[a("a",u,[n("Elastic 密码部分文档"),e(s)])])])}const g=l(p,[["render",v],["__file","Install.html.vue"]]);export{g as default};
