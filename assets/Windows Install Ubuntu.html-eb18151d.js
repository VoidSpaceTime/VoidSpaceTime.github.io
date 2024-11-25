const e=JSON.parse('{"key":"v-7a6f8134","path":"/zh/posts/Ubuntu/Windows%20Install%20Ubuntu.html","title":"Windows 系统中安装 Ubuntu 系统","lang":"zh-CN","frontmatter":{"lang":"zh-CN","icon":"pen-to-square","date":"2024-11-24T00:00:00.000Z","isOriginal":true,"category":["Ubuntu"],"tag":["Ubuntu"],"description":"Windows 系统中安装 Ubuntu 系统 “启动或关闭 Windows 功能” 中打开 \\"适用于 Linux 的 Windows 子系统\\" 以及 \\"虚拟机平台\\" 打开 Microsoft Store，商店内直接搜索 Ubuntu 按照并启动 如果出现以下报错 image 需要执行 wsl --update 如果进度一直为 0 可能是因为默认的 wsl --update 是从微软商店下载的，微软应用商店就经常出现网络的问题。在 wsl --update 后面加上 --web-download 就可以从 github 上进行下载 wsl --update --web-download","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/posts/Ubuntu/Windows%20Install%20Ubuntu.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Windows 系统中安装 Ubuntu 系统"}],["meta",{"property":"og:description","content":"Windows 系统中安装 Ubuntu 系统 “启动或关闭 Windows 功能” 中打开 \\"适用于 Linux 的 Windows 子系统\\" 以及 \\"虚拟机平台\\" 打开 Microsoft Store，商店内直接搜索 Ubuntu 按照并启动 如果出现以下报错 image 需要执行 wsl --update 如果进度一直为 0 可能是因为默认的 wsl --update 是从微软商店下载的，微软应用商店就经常出现网络的问题。在 wsl --update 后面加上 --web-download 就可以从 github 上进行下载 wsl --update --web-download"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-25T13:35:05.000Z"}],["meta",{"property":"article:author","content":"Mr.SpaceTime"}],["meta",{"property":"article:tag","content":"Ubuntu"}],["meta",{"property":"article:published_time","content":"2024-11-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-25T13:35:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows 系统中安装 Ubuntu 系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-25T13:35:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.SpaceTime\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"“启动或关闭 Windows 功能” 中打开 \\"适用于 Linux 的 Windows 子系统\\" 以及 \\"虚拟机平台\\"","slug":"启动或关闭-windows-功能-中打开-适用于-linux-的-windows-子系统-以及-虚拟机平台","link":"#启动或关闭-windows-功能-中打开-适用于-linux-的-windows-子系统-以及-虚拟机平台","children":[]},{"level":2,"title":"打开 Microsoft Store，商店内直接搜索 Ubuntu 按照并启动","slug":"打开-microsoft-store-商店内直接搜索-ubuntu-按照并启动","link":"#打开-microsoft-store-商店内直接搜索-ubuntu-按照并启动","children":[]},{"level":2,"title":"遇到的问题","slug":"遇到的问题","link":"#遇到的问题","children":[{"level":3,"title":"国内网络问题导致的无法使用 pull","slug":"国内网络问题导致的无法使用-pull","link":"#国内网络问题导致的无法使用-pull","children":[]}]}],"git":{"createdTime":1732471545000,"updatedTime":1732541705000,"contributors":[{"name":"VoidSpaceTime","email":"Space_Time_@outlook.com","commits":2}]},"readingTime":{"minutes":1.25,"words":376},"filePathRelative":"zh/posts/Ubuntu/Windows Install Ubuntu.md","localizedDate":"2024年11月24日","excerpt":"<h1> Windows 系统中安装 Ubuntu 系统</h1>\\n<h2> “启动或关闭 Windows 功能” 中打开 \\"适用于 Linux 的 Windows 子系统\\" 以及 \\"虚拟机平台\\"</h2>\\n<h2> 打开 Microsoft Store，商店内直接搜索 Ubuntu 按照并启动</h2>\\n<ul>\\n<li>\\n<p>如果出现以下报错 <a href=\\"image.png\\">image</a></p>\\n</li>\\n<li>\\n<p>需要执行</p>\\n</li>\\n<li>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>wsl <span class=\\"token parameter variable\\">--update</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>如果进度一直为 0 可能是因为默认的 wsl --update 是从微软商店下载的，微软应用商店就经常出现网络的问题。在 wsl --update 后面加上 --web-download 就可以从 github 上进行下载</p>\\n</li>\\n<li>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>wsl <span class=\\"token parameter variable\\">--update</span> --web-download\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","copyright":{"author":"Mr.SpaceTime"},"autoDesc":true}');export{e as data};