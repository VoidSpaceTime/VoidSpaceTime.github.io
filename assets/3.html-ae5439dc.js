import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as s}from"./app-bab2e26c.js";const l={},d=s(`<h1 id="messenger-进行通信" tabindex="-1"><a class="header-anchor" href="#messenger-进行通信" aria-hidden="true">#</a> Messenger 进行通信</h1><h2 id="_1-message-简单原理" tabindex="-1"><a class="header-anchor" href="#_1-message-简单原理" aria-hidden="true">#</a> 1.Message 简单原理</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// LINQ
var rec = new MessageReceiver();
EventAggregator.Instance.Send(new StringMessage(&quot;hello world&quot;));

class MessageReceiver
{
 public MessageReceiver()
 {
  // 注册一个 StringMessage类型
  EventAggregator.Instance.Register&lt;StringMessage&gt;(this,Receive);
 }
 // 执行方法
 void Receive(StringMessage m)
 {
  m.Message.Dump(&quot;string message received&quot;);
 }
}
record StringMessage(string Message);
class EventAggregator
{
 // 单例模式
 public static EventAggregator Instance { get; } = new EventAggregator();
 // 记录执行对象及方法
 record MessageReceiver(object Receiver, Action&lt;object&gt; Method);
 // 创建一个 字典 key 是泛型 类型, value 储存 传递过来的类 以及 委托
 private Dictionary&lt;Type,List&lt;MessageReceiver&gt;&gt; events = new();
 // 订阅接收消息
 public void Register&lt;TMessage&gt;(object receiver, Action&lt;TMessage&gt; method)
 {
  var type = typeof(TMessage);
  if (!events.ContainsKey(type))
   events[type]= new List&lt;MessageReceiver&gt;();
  // 存入list , 类 及 委托,  无法将派生类直接按基类进行传递, 可以先传递object 然后回调为 TMessage
  events[type].Add(new(receiver,o=&gt; method((TMessage)o)));
 }
 // 发送消息 所有订阅Message类型方法的 订阅者接收消息
 public void Send&lt;Tmessage&gt;(Tmessage message)
 {
  var type = typeof(Tmessage);
  if (!events.ContainsKey(type))
   return;
  foreach (var rec in events[type])
  {
   rec.Method.Invoke(message);
  }
 }
}

// Results
// string message received
// hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-toolkit-使用message" tabindex="-1"><a class="header-anchor" href="#_1-toolkit-使用message" aria-hidden="true">#</a> 1.Toolkit 使用Message</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>// LINQ

var rec = new ViewModel();
var sdr = new ViewMode2();

WeakReferenceMessenger.Default.Send(new StringMessage(&quot;hello world!&quot;));
sdr.Number = 10;


record StringMessage(string Message);
class ViewModel
{
 public ViewModel()
 {
  WeakReferenceMessenger.Default.Register&lt;StringMessage&gt;(this, Receive);
  WeakReferenceMessenger.Default.Register&lt;PropertyChangedMessage&lt;int&gt;&gt;(this, Receive2);
 }

 void Receive2(object recipient, PropertyChangedMessage&lt;int&gt; message)
 {
  $&quot;Property:{message.PropertyName} from :{message.Sender.GetType().Name} received ,new value is {message.NewValue}&quot;.Dump();
 }


 void Receive(object recipient, StringMessage message)
 {
  message.Message.Dump(&quot;Sting message received&quot;);
 }
}

// 实际应用场景 例子
class ViewMode2 : ObservableObject
{
 int number;

 public int Number
 {
  get { return number; }
  set
  {
    // 数值变动后触发  SetProperty 判断两个值 是否一致 一致返回true 并且 ref = value
   if (SetProperty(ref number , value))
   {
    WeakReferenceMessenger.Default.Send(new PropertyChangedMessage&lt;int&gt;(this,nameof(Number),default,value)) ;   
   }
  }
 }

}
// results
// Sting message received
// hello world!
// Property:Number from :ViewMode2 received ,new value is 10

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-toolkit-message-返回值" tabindex="-1"><a class="header-anchor" href="#_1-toolkit-message-返回值" aria-hidden="true">#</a> 1. Toolkit Message 返回值</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>
var rec = new ReceiverViewModel();
var sdr = new SenderViewModle();

// 实际应用场景 例子
class ReceiverViewModel : ObservableObject , IRecipient&lt;RequestMessage&lt;string&gt;&gt;
{
 ReceiverViewModel()
 {
  WeakReferenceMessenger.Default.Register(this);
 }
 // 需要复写
 public void Receive(RequestMessage&lt;string&gt; message)
 {
  &quot;Request Message Received.&quot;.Dump();
  // 回复消息
  message.Reply(&quot;Hello&quot;);
 }

}

class SenderViewModle : ObservableObject
{
 public SenderViewModle()
 {
  var res = WeakReferenceMessenger.Default.Send(new RequestMessage&lt;string&gt;());
  res.Response.Dump(&quot;Response Received&quot;);
 }
}
// Results
// Request Message Received.
// Response REceived
// Hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-observablerecipient-进一步简化" tabindex="-1"><a class="header-anchor" href="#_1-observablerecipient-进一步简化" aria-hidden="true">#</a> 1. ObservableRecipient 进一步简化</h2><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>var rec = new ReceiverViewModel();
// 需要给予boll 确定可以执行
rec.IsActive = true;
var sdr = new SenderViewModel();

// 实际应用场景 例子
class ReceiverViewModel : ObservableRecipient, IRecipient&lt;RequestMessage&lt;string&gt;&gt;
{

 public void Receive(RequestMessage&lt;string&gt; message)
 {
  &quot;Request Message Received.&quot;.Dump();
  // 回复消息
  message.Reply(&quot;Hello&quot;);
 }

}

class SenderViewModel : ObservableObject
{
 public SenderViewModel()
 {
  var res = WeakReferenceMessenger.Default.Send(new RequestMessage&lt;string&gt;());
  res.Response.Dump(&quot;Response REceived&quot;);
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=[d];function a(r,c){return i(),n("div",null,v)}const m=e(l,[["render",a],["__file","3.html.vue"]]);export{m as default};
