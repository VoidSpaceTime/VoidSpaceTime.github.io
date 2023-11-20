import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as a,a as n,b as e,d as r,f as t}from"./app-0317fa6e.js";const v="/assets/WPF&CommunitToolkit/environment.png",u="/assets/WPF&CommunitToolkit/xiaoguotu.png",c={},m=n("h1",{id:"communitytoolkit-mvvm-框架主要功能简述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#communitytoolkit-mvvm-框架主要功能简述","aria-hidden":"true"},"#"),e(" CommunityToolkit.MVVM 框架主要功能简述")],-1),o=n("h2",{id:"环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境","aria-hidden":"true"},"#"),e(" 环境")],-1),b={href:"https://learn.microsoft.com/zh-cn/windows/communitytoolkit/mvvm/introduction",target:"_blank",rel:"noopener noreferrer"},g=t('<figure><img src="'+v+`" alt="environment&amp;环境" tabindex="0" loading="lazy"><figcaption>environment&amp;环境</figcaption></figure><h2 id="mvvm中最重要的的两个接口-原生-communitytoolkit-对比-可跳过" tabindex="-1"><a class="header-anchor" href="#mvvm中最重要的的两个接口-原生-communitytoolkit-对比-可跳过" aria-hidden="true">#</a> MVVM中最重要的的两个接口(原生&amp;CommunityToolkit 对比, 可跳过)</h2><h3 id="_1-inotifypropertychanged-原生" tabindex="-1"><a class="header-anchor" href="#_1-inotifypropertychanged-原生" aria-hidden="true">#</a> 1. INotifyPropertyChanged(原生)</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    class ViewModelBase : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler? PropertyChanged;
        public void OnPropertyChanged(string PropertyName)
        {
   
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(PropertyName));
        }
    }

    class MainWindowViewModel : ViewModelBase
    {
        private string title;

        public string Title
        {
            get { return title; }
            set
            {
                if (title != value)
                {
                    title = value;
                    OnPropertyChanged(nameof(Title));
                }
            }
        }

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_1-inotifypropertychanged-communitytoolkit" tabindex="-1"><a class="header-anchor" href="#_1-inotifypropertychanged-communitytoolkit" aria-hidden="true">#</a> 1. INotifyPropertyChanged(CommunityToolkit)</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    class ViewModelBase : ObservableObject
    {
        private string title;

        public string Title
        {
            get { return title; }
            set =&gt; SetProperty(ref title, value);

        }

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-icommand-原生" tabindex="-1"><a class="header-anchor" href="#_1-icommand-原生" aria-hidden="true">#</a> 1. ICommand(原生)</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    class RealyCommand : ICommand
    {

        /// &lt;summary&gt;
        /// 命令是否可以执行
        /// &lt;/summary&gt;
        readonly Func&lt;bool&gt; _canExecute;
        /// &lt;summary&gt;
        /// 记录委托事件
        /// &lt;/summary&gt;
        readonly Action _execute;
        //public RelayCommond(Action action, Func&lt;bool&gt; canExecute)
        //{
        //    _canExecute = canExecute;
        //    _execute = action;
        //}

        public event EventHandler CanExecuteChanged
        {
            add
            {
                if (_canExecute != null)
                {
                    CommandManager.RequerySuggested += value;
                }
            }
            remove
            {
                if (_canExecute != null)
                {
                    CommandManager.RequerySuggested -= value;
                }
            }
        }

        public bool CanExecute(object parameter)
        {
            if (_canExecute == null)
                return true;
            return _canExecute();
        }

        public void Execute(object? parameter)
        {
            _execute();
        }



    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-icommand-communitytoolkit" tabindex="-1"><a class="header-anchor" href="#_1-icommand-communitytoolkit" aria-hidden="true">#</a> 1. ICommand(CommunityToolkit)</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public MainViewModel()
{
    // 初始化赋值命令
    ButtonClickCommand = new RelayCommand(() =&gt; Title = &quot;good bye&quot;, () =&gt; IsEnabled); // binding IsEnbled 

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mvvm-小例子" tabindex="-1"><a class="header-anchor" href="#mvvm-小例子" aria-hidden="true">#</a> MVVM 小例子</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>class MainViewModel : ObservableObject
{
    private string title = &quot;hello world&quot;;
    public MainViewModel()
    {
        // 初始化赋值命令
        ButtonClickCommand = new RelayCommand(() =&gt; Title = &quot;good bye&quot;, () =&gt; IsEnabled); // binding IsEnbled 

    }

    public string Title
    {
        get { return title; }
        set =&gt; SetProperty(ref title, value); // binding 

    }

    private bool isEnabled;
    public RelayCommand ButtonClickCommand { get; set; }

    public bool IsEnabled
    {
        get { return isEnabled; }
        set
        {
            SetProperty(ref isEnabled, value); // binding 
            ButtonClickCommand.NotifyCanExecuteChanged(); // 通知binding 数据已刷新
        }

    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xaml line-numbers-mode" data-ext="xaml"><pre class="language-xaml"><code>&lt;Grid TextElement.FontSize=&quot;20&quot;&gt;
    &lt;StackPanel&gt;
        &lt;TextBox Text=&quot;{Binding Title}&quot; /&gt;
        &lt;CheckBox Content=&quot;Is Enabled&quot; IsChecked=&quot;{Binding IsEnabled}&quot;/&gt;
        &lt;TextBox x:Name=&quot;textInput&quot; /&gt;
        &lt;Button  Command=&quot;{Binding ButtonClickCommand}&quot;
                    Content=&quot;Show&quot; 
                    /&gt;
        &lt;Button Margin=&quot;10&quot; Height=&quot;20&quot; BorderBrush=&quot;{StaticResource SolidColor}&quot;/&gt;
        &lt;Button Margin=&quot;10&quot; Height=&quot;20&quot; BorderBrush=&quot;{DynamicResource SolidColor}&quot;/&gt;
    &lt;/StackPanel&gt;
&lt;/Grid&gt;
&lt;/Grid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="效果图" tabindex="0" loading="lazy"><figcaption>效果图</figcaption></figure>',15);function h(p,C){const i=d("ExternalLinkIcon");return s(),a("div",null,[m,o,n("p",null,[n("a",b,[e("官方文档 内容不太全 8.1.0 以后版本无详细说明"),r(i)])]),g])}const _=l(c,[["render",h],["__file","1.html.vue"]]);export{_ as default};
