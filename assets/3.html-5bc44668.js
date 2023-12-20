import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,f as n}from"./app-1d33235d.js";const s="/assets/wpf/style.png",a="/assets/wpf/st&dy.png",t="/assets/wpf/st&dy1.png",o={},r=n(`<h1 id="wpf-资源基础" tabindex="-1"><a class="header-anchor" href="#wpf-资源基础" aria-hidden="true">#</a> WPF 资源基础</h1><ul><li>痕迹大佬学习笔记</li></ul><h2 id="资源字典" tabindex="-1"><a class="header-anchor" href="#资源字典" aria-hidden="true">#</a> 资源字典</h2><ul><li>右键项目文件,添加选择资源字典</li></ul><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>
&lt;ResourceDictionary xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
                    xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;&gt;
&lt;!-- 这里添加自定义样式 --&gt;
    &lt;SolidColorBrush x:Key=&quot;SolidColor&quot; Color=&quot;Red&quot;&gt;

    &lt;/SolidColorBrush&gt;

&lt;/ResourceDictionary&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>后续需要再加入资源字典</li></ul><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Application x:Class=&quot;WpfMVVM.App&quot;
             xmlns=&quot;http://schemas.microsoft.com/winfx/2006/xaml/presentation&quot;
             xmlns:x=&quot;http://schemas.microsoft.com/winfx/2006/xaml&quot;
             xmlns:local=&quot;clr-namespace:WpfMVVM&quot;
             StartupUri=&quot;MainWindow.xaml&quot;&gt;
    &lt;Application.Resources&gt;
        &lt;ResourceDictionary&gt;
            &lt;ResourceDictionary.MergedDictionaries&gt;
  &lt;!-- 添加文件 --&gt;
                &lt;ResourceDictionary Source=&quot;ButtonStyl.xaml&quot;/&gt;
            &lt;/ResourceDictionary.MergedDictionaries&gt;
        &lt;/ResourceDictionary&gt;
    &lt;/Application.Resources&gt;
&lt;/Application&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+s+`" alt="file" tabindex="0" loading="lazy"><figcaption>file</figcaption></figure><h2 id="动态资源-静态资源" tabindex="-1"><a class="header-anchor" href="#动态资源-静态资源" aria-hidden="true">#</a> 动态资源 &amp; 静态资源</h2><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Button Margin=&quot;10&quot; Height=&quot;20&quot; BorderBrush=&quot;{StaticResource SolidColor}&quot;/&gt;
&lt;Button Margin=&quot;10&quot; Height=&quot;20&quot; BorderBrush=&quot;{DynamicResource SolidColor}&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进行测试</li></ul><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 获取资源文件 并修改
mainWindow.Resources[&quot;SolidColor&quot;] = new SolidColorBrush(Colors.Black);

// 以下代码仅供获取
  var style = App.Current.FindResource(&quot;SolidColor&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+a+'" alt="修改前" loading="lazy"><img src="'+t+'" alt="修改后" loading="lazy"></p><ul><li>由此可见动态根据资源变化,静态不变化</li></ul>',14),d=[r];function u(c,m){return e(),l("div",null,d)}const p=i(o,[["render",u],["__file","3.html.vue"]]);export{p as default};
