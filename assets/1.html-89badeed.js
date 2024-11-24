import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as a,a as e,b as n,d as t,f as r}from"./app-e7c092b1.js";const u={},c=e("h1",{id:"sqlite-codefirst",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sqlite-codefirst","aria-hidden":"true"},"#"),n(" Sqlite&CodeFirst")],-1),v={href:"https://www.donet5.com/home/doc?masterId=1&typeId=1222",target:"_blank",rel:"noopener noreferrer"},o=r(`<div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>    public class DB_Helper
    {
        public static SqlSugarScope Sqlite { get; set; }


        public DB_Helper()
        {

            //Sqlite = new SqlSugarScope(new ConnectionConfig()
            //{
            //    ConnectionString = @&quot;DataSource=to.sqlite&quot;,//连接符字串
            //    DbType = DbType.Sqlite,//数据库类型
            //    IsAutoCloseConnection = true //不设成true要手动close
            //});
        }
        public static void Init()
        {


            Sqlite = new SqlSugarScope(new ConnectionConfig()
            {
                ConnectionString = &quot;DataSource=to.sqlite&quot;,//连接符字串
                DbType = DbType.Sqlite,//数据库类型
                IsAutoCloseConnection = true,//不设成true要手动close
                InitKeyType = InitKeyType.Attribute,
                MoreSettings = new ConnMoreSettings()
                {

                    SqliteCodeFirstEnableDefaultValue = true //启用默认值
                }
            });

            Sqlite.DbMaintenance.CreateDatabase();

            Sqlite.CodeFirst.InitTables(typeof(CodeFirstTable1)); // 初始化表(根据实际类)

        }

        public class CodeFirstTable1
        {
            [SugarColumn(IsIdentity = true, IsPrimaryKey = true)]
            public int Id { get; set; } 
            public string Name { get; set; }
            //ColumnDataType 一般用于单个库数据库，如果多库不建议用
            [SugarColumn(ColumnDataType = &quot;Nvarchar(255)&quot;)]
            public string Text { get; set; }
            [SugarColumn(IsNullable = true)]//可以为NULL
            public DateTime CreateTime { get; set; }
            [SugarColumn(DefaultValue = &quot;(strftime(&#39;%Y-%m-%d %H:%M:%S&#39;, &#39;now&#39;, &#39;localtime&#39;))&quot;)]
            public DateTime Name { get; set; }
            [SugarColumn(DefaultValue = &quot;1&quot;)]
            public string Name2 { get; set; }
        }
 
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(b,p){const i=s("ExternalLinkIcon");return d(),a("div",null,[c,e("p",null,[e("a",v,[n("官方文档"),t(i)])]),o])}const C=l(u,[["render",m],["__file","1.html.vue"]]);export{C as default};
