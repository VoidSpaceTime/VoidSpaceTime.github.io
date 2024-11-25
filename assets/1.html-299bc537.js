const e=JSON.parse(`{"key":"v-59fe4cab","path":"/zh/posts/SqlSugar/1.html","title":"Sqlite&CodeFirst","lang":"zh-CN","frontmatter":{"lang":"zh-CN","icon":"pen-to-square","date":"2023-11-14T00:00:00.000Z","isOriginal":true,"category":["Sql"],"tag":["SqlSugar","CodeFirst","Sqlite"],"description":"Sqlite&amp;CodeFirst 官方文档 public class DB_Helper { public static SqlSugarScope Sqlite { get; set; } public DB_Helper() { //Sqlite = new SqlSugarScope(new ConnectionConfig() //{ // ConnectionString = @\\"DataSource=to.sqlite\\",//连接符字串 // DbType = DbType.Sqlite,//数据库类型 // IsAutoCloseConnection = true //不设成true要手动close //}); } public static void Init() { Sqlite = new SqlSugarScope(new ConnectionConfig() { ConnectionString = \\"DataSource=to.sqlite\\",//连接符字串 DbType = DbType.Sqlite,//数据库类型 IsAutoCloseConnection = true,//不设成true要手动close InitKeyType = InitKeyType.Attribute, MoreSettings = new ConnMoreSettings() { SqliteCodeFirstEnableDefaultValue = true //启用默认值 } }); Sqlite.DbMaintenance.CreateDatabase(); Sqlite.CodeFirst.InitTables(typeof(CodeFirstTable1)); // 初始化表(根据实际类) } public class CodeFirstTable1 { [SugarColumn(IsIdentity = true, IsPrimaryKey = true)] public int Id { get; set; } public string Name { get; set; } //ColumnDataType 一般用于单个库数据库，如果多库不建议用 [SugarColumn(ColumnDataType = \\"Nvarchar(255)\\")] public string Text { get; set; } [SugarColumn(IsNullable = true)]//可以为NULL public DateTime CreateTime { get; set; } [SugarColumn(DefaultValue = \\"(strftime('%Y-%m-%d %H:%M:%S', 'now', 'localtime'))\\")] public DateTime Name { get; set; } [SugarColumn(DefaultValue = \\"1\\")] public string Name2 { get; set; } } }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/posts/SqlSugar/1.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Sqlite&CodeFirst"}],["meta",{"property":"og:description","content":"Sqlite&amp;CodeFirst 官方文档 public class DB_Helper { public static SqlSugarScope Sqlite { get; set; } public DB_Helper() { //Sqlite = new SqlSugarScope(new ConnectionConfig() //{ // ConnectionString = @\\"DataSource=to.sqlite\\",//连接符字串 // DbType = DbType.Sqlite,//数据库类型 // IsAutoCloseConnection = true //不设成true要手动close //}); } public static void Init() { Sqlite = new SqlSugarScope(new ConnectionConfig() { ConnectionString = \\"DataSource=to.sqlite\\",//连接符字串 DbType = DbType.Sqlite,//数据库类型 IsAutoCloseConnection = true,//不设成true要手动close InitKeyType = InitKeyType.Attribute, MoreSettings = new ConnMoreSettings() { SqliteCodeFirstEnableDefaultValue = true //启用默认值 } }); Sqlite.DbMaintenance.CreateDatabase(); Sqlite.CodeFirst.InitTables(typeof(CodeFirstTable1)); // 初始化表(根据实际类) } public class CodeFirstTable1 { [SugarColumn(IsIdentity = true, IsPrimaryKey = true)] public int Id { get; set; } public string Name { get; set; } //ColumnDataType 一般用于单个库数据库，如果多库不建议用 [SugarColumn(ColumnDataType = \\"Nvarchar(255)\\")] public string Text { get; set; } [SugarColumn(IsNullable = true)]//可以为NULL public DateTime CreateTime { get; set; } [SugarColumn(DefaultValue = \\"(strftime('%Y-%m-%d %H:%M:%S', 'now', 'localtime'))\\")] public DateTime Name { get; set; } [SugarColumn(DefaultValue = \\"1\\")] public string Name2 { get; set; } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-06T17:19:35.000Z"}],["meta",{"property":"article:author","content":"Mr.SpaceTime"}],["meta",{"property":"article:tag","content":"SqlSugar"}],["meta",{"property":"article:tag","content":"CodeFirst"}],["meta",{"property":"article:tag","content":"Sqlite"}],["meta",{"property":"article:published_time","content":"2023-11-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-06T17:19:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sqlite&CodeFirst\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-06T17:19:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.SpaceTime\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1701883175000,"updatedTime":1701883175000,"contributors":[{"name":"时空","email":"Space_Time_@outlook.com","commits":1}]},"readingTime":{"minutes":0.78,"words":233},"filePathRelative":"zh/posts/SqlSugar/1.md","localizedDate":"2023年11月14日","excerpt":"<h1> Sqlite&amp;CodeFirst</h1>\\n<p><a href=\\"https://www.donet5.com/home/doc?masterId=1&amp;typeId=1222\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></p>\\n<div class=\\"language-C# line-numbers-mode\\" data-ext=\\"C#\\"><pre class=\\"language-C#\\"><code>    public class DB_Helper\\n    {\\n        public static SqlSugarScope Sqlite { get; set; }\\n\\n\\n        public DB_Helper()\\n        {\\n\\n            //Sqlite = new SqlSugarScope(new ConnectionConfig()\\n            //{\\n            //    ConnectionString = @\\"DataSource=to.sqlite\\",//连接符字串\\n            //    DbType = DbType.Sqlite,//数据库类型\\n            //    IsAutoCloseConnection = true //不设成true要手动close\\n            //});\\n        }\\n        public static void Init()\\n        {\\n\\n\\n            Sqlite = new SqlSugarScope(new ConnectionConfig()\\n            {\\n                ConnectionString = \\"DataSource=to.sqlite\\",//连接符字串\\n                DbType = DbType.Sqlite,//数据库类型\\n                IsAutoCloseConnection = true,//不设成true要手动close\\n                InitKeyType = InitKeyType.Attribute,\\n                MoreSettings = new ConnMoreSettings()\\n                {\\n\\n                    SqliteCodeFirstEnableDefaultValue = true //启用默认值\\n                }\\n            });\\n\\n            Sqlite.DbMaintenance.CreateDatabase();\\n\\n            Sqlite.CodeFirst.InitTables(typeof(CodeFirstTable1)); // 初始化表(根据实际类)\\n\\n        }\\n\\n        public class CodeFirstTable1\\n        {\\n            [SugarColumn(IsIdentity = true, IsPrimaryKey = true)]\\n            public int Id { get; set; } \\n            public string Name { get; set; }\\n            //ColumnDataType 一般用于单个库数据库，如果多库不建议用\\n            [SugarColumn(ColumnDataType = \\"Nvarchar(255)\\")]\\n            public string Text { get; set; }\\n            [SugarColumn(IsNullable = true)]//可以为NULL\\n            public DateTime CreateTime { get; set; }\\n            [SugarColumn(DefaultValue = \\"(strftime('%Y-%m-%d %H:%M:%S', 'now', 'localtime'))\\")]\\n            public DateTime Name { get; set; }\\n            [SugarColumn(DefaultValue = \\"1\\")]\\n            public string Name2 { get; set; }\\n        }\\n \\n    }\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"Mr.SpaceTime"},"autoDesc":true}`);export{e as data};