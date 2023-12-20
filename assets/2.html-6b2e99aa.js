import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as l}from"./app-1d33235d.js";const a={},d=l(`<h1 id="verson8-1-0-修饰器" tabindex="-1"><a class="header-anchor" href="#verson8-1-0-修饰器" aria-hidden="true">#</a> verson8.1.0+ 修饰器</h1><h2 id="observableproperty-修饰器-替代setproperty" tabindex="-1"><a class="header-anchor" href="#observableproperty-修饰器-替代setproperty" aria-hidden="true">#</a> [ObservableProperty] 修饰器(替代SetProperty)</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    partial class MainViewModel : ObservableObject
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-relaycommand-canexecute-nameof-canbuttonclick-修饰器" tabindex="-1"><a class="header-anchor" href="#_1-relaycommand-canexecute-nameof-canbuttonclick-修饰器" aria-hidden="true">#</a> 1. [RelayCommand(CanExecute = nameof(CanButtonClick))] 修饰器</h3><h4 id="_1-基础使用" tabindex="-1"><a class="header-anchor" href="#_1-基础使用" aria-hidden="true">#</a> 1. 基础使用</h4><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>
// 被替代代码
ButtonClickCommand = new RelayCommand(() =&gt; Title = &quot;good bye&quot;, () =&gt; IsEnabled); // binding IsEnbled

[ObservableProperty]
[NotifyCanExecuteChangedFor(nameof(ButtonClickCommand))] // ButtonClickCommand.NotifyCanExecuteChanged(); // 通知binding 数据已刷新 同等作用
private bool isEnabled;
public RelayCommand ButtonClickCommand { get; set; }


// 替代上方代码

[ObservableProperty]
[NotifyCanExecuteChangedFor(nameof(ButtonClickCommand))] // 通知binding 数据已刷新 同等作用
private bool isEnabled;

[RelayCommand(CanExecute = nameof(IsEnabled))]
private void ButtonClick()
{
    Title = &quot;Good Bye&quot;;
}

// 自动生成代码
public global::CommunityToolkit.Mvvm.Input.IRelayCommand ButtonClickCommand =&gt; buttonClickCommand ??= new global::CommunityToolkit.Mvvm.Input.RelayCommand(new global::System.Action(ButtonClick), () =&gt; IsEnabled);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-异步调用方法" tabindex="-1"><a class="header-anchor" href="#_1-异步调用方法" aria-hidden="true">#</a> 1. 异步调用方法</h4><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 异步调用方法
private async Task ButtonClick()
{
    // 效果就是触发点击后, 延时1s 生效
    await Task.Delay(1000);
    Title = &quot;Good Bye&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-如何同步至方法" tabindex="-1"><a class="header-anchor" href="#_1-如何同步至方法" aria-hidden="true">#</a> 1. 如何同步至方法</h4><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// 第一种方式
[ObservableProperty]
[NotifyPropertyChangedFor(nameof(Caption))]  // 通知到方法
private string title = &quot;hello world&quot;;

public string Caption =&gt; $&quot;Title:{Title}&quot;; // 方法如何被通知

// 第二种方式
[ObservableProperty]
//[NotifyPropertyChangedFor(nameof(Caption))]
private string title = &quot;hello world&quot;;

partial void OnTitleChanged(string? oldValue, string newValue)
{
    OnPropertyChanged(nameof(Caption));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),s=[d];function r(t,o){return n(),i("div",null,s)}const c=e(a,[["render",r],["__file","2.html.vue"]]);export{c as default};
