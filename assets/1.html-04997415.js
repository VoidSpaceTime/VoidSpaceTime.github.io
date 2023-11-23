import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,f as l}from"./app-1ed2bf0c.js";const s="/assets/WPF&Prism/PrismTemplatePack.png",a={},r=l(`<h1 id="prism-环境配置" tabindex="-1"><a class="header-anchor" href="#prism-环境配置" aria-hidden="true">#</a> prism 环境配置</h1><h2 id="prism-安装" tabindex="-1"><a class="header-anchor" href="#prism-安装" aria-hidden="true">#</a> Prism 安装</h2><ol><li>新建一个wpf项目</li><li>NuGet 搜索安装 Prime.Dryloc</li><li>修改 App 文件的继承类</li></ol><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
/// Interaction logic for App.xaml
/// &lt;/summary&gt;
public partial class App : PrismApplication // 重新继承 PrismApplication
{
    protected override Window CreateShell()
    {
      //返回需要呈现的首页
        return Container.Resolve&lt;Window&gt;();
    }
    // 支持注入容器
    protected override void RegisterTypes(IContainerRegistry containerRegistry)
    {
      
    }
}
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>修改App.xaml 文件</li></ol><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;!-- app:Application 修改 --&gt;
&lt;prism:PrismApplication x:Class=&quot;WpfPrismDemo.App&quot;
                        xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
                        xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
                        xmlns:local=&quot;clr-namespace:WpfPrismDemo&quot;
                        xmlns:prism=&quot;http://prismlibrary.com/&quot;
                        &lt;!--StartupUri=&quot;MainWindow.xaml&quot;&gt;--&gt;  &lt;!--删除此段代码 否则会额外打开一个窗口--&gt;
    &lt;Application.Resources&gt;

    &lt;/Application.Resources&gt;
&lt;/prism:PrismApplication&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过插件解决上述模板配置" tabindex="-1"><a class="header-anchor" href="#通过插件解决上述模板配置" aria-hidden="true">#</a> 通过插件解决上述模板配置</h2><p>管理扩展安装 Prism Template Pack</p><figure><img src="`+s+'" alt="Create Template" tabindex="0" loading="lazy"><figcaption>Create Template</figcaption></figure><p>选择Dryloc 创建工程</p>',10),t=[r];function d(c,m){return e(),n("div",null,t)}const p=i(a,[["render",d],["__file","1.html.vue"]]);export{p as default};
