import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as l}from"./app-756b7420.js";const a={},d=l(`<h1 id="communitytoolkit-8-1-0-修饰器" tabindex="-1"><a class="header-anchor" href="#communitytoolkit-8-1-0-修饰器" aria-hidden="true">#</a> CommunityToolkit 8.1.0+ 修饰器</h1><h2 id="observableproperty-修饰器-替代setproperty" tabindex="-1"><a class="header-anchor" href="#observableproperty-修饰器-替代setproperty" aria-hidden="true">#</a> [ObservableProperty] 修饰器(替代SetProperty)</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    partial class MainViewModel : ObservableObject
    {
        // 以下三种均可以转换为Title
        [ObservableProperty]
        private string title = &quot;hello world&quot;;
        // [ObservableProperty]
        // private string _title = &quot;hello world&quot;;
        // [ObservableProperty]
        // private string m_title = &quot;hello world&quot;;

    }

// partial 编辑器会在后台生成函数, 所以必须要分部分
// 实际生成
/// &lt;inheritdoc cref=&quot;title&quot;/&gt;
[global::System.CodeDom.Compiler.GeneratedCode(&quot;CommunityToolkit.Mvvm.SourceGenerators.ObservablePropertyGenerator&quot;, &quot;8.2.0.0&quot;)]
[global::System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
public string Title
{
    get =&gt; title;
    [global::System.Diagnostics.CodeAnalysis.MemberNotNull(&quot;title&quot;)]
    set
    {
        if (!global::System.Collections.Generic.EqualityComparer&lt;string&gt;.Default.Equals(title, value))
        {
            OnTitleChanging(value);
            OnTitleChanging(default, value);
            OnPropertyChanging(global::CommunityToolkit.Mvvm.ComponentModel.__Internals.__KnownINotifyPropertyChangingArgs.Title);
            title = value;
            OnTitleChanged(value);
            OnTitleChanged(default, value);
            OnPropertyChanged(global::CommunityToolkit.Mvvm.ComponentModel.__Internals.__KnownINotifyPropertyChangedArgs.Title);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>重点 编辑器只可以识别小写</strong></li></ul><h2 id="_2-notifypropertychangedfor-nameof-buttonclickcommand-修饰器-替代-buttonclickcommand-notifycanexecutechanged" tabindex="-1"><a class="header-anchor" href="#_2-notifypropertychangedfor-nameof-buttonclickcommand-修饰器-替代-buttonclickcommand-notifycanexecutechanged" aria-hidden="true">#</a> 2. [NotifyPropertyChangedFor(nameof(ButtonClickCommand))] 修饰器 替代(ButtonClickCommand.NotifyCanExecuteChanged())</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>[ObservableProperty]
[NotifyPropertyChangedFor(nameof(ButtonClickCommand))] // ButtonClickCommand.NotifyCanExecuteChanged(); // 通知binding 数据已刷新 同等作用
public RelayCommand ButtonClickCommand { get; set; }

// public bool IsEnabled
// {
//     get { return isEnabled; }
//     set
//     {
//         SetProperty(ref isEnabled, value); // binding
//         ButtonClickCommand.NotifyCanExecuteChanged(); // 通知binding 数据已刷新
//     }
// }
// 实际生成
/// &lt;inheritdoc cref=&quot;isEnabled&quot;/&gt;
[global::System.CodeDom.Compiler.GeneratedCode(&quot;CommunityToolkit.Mvvm.SourceGenerators.ObservablePropertyGenerator&quot;, &quot;8.2.0.0&quot;)]
[global::System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
public bool IsEnabled
{
    get =&gt; isEnabled;
    set
    {
        if (!global::System.Collections.Generic.EqualityComparer&lt;bool&gt;.Default.Equals(isEnabled, value))
        {
            OnIsEnabledChanging(value);
            OnIsEnabledChanging(default, value);
            OnPropertyChanging(global::CommunityToolkit.Mvvm.ComponentModel.__Internals.__KnownINotifyPropertyChangingArgs.IsEnabled);
            isEnabled = value;
            OnIsEnabledChanged(value);
            OnIsEnabledChanged(default, value);
            OnPropertyChanged(global::CommunityToolkit.Mvvm.ComponentModel.__Internals.__KnownINotifyPropertyChangedArgs.IsEnabled);
            OnPropertyChanged(global::CommunityToolkit.Mvvm.ComponentModel.__Internals.__KnownINotifyPropertyChangedArgs.ButtonClickCommand);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,7),s=[d];function t(r,o){return n(),i("div",null,s)}const m=e(a,[["render",t],["__file","2.html.vue"]]);export{m as default};
