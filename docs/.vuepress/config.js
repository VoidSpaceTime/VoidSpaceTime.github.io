module.exports = {
  base: '/',
  title :"时空的博客",
  description: "个人笔记",
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    subSidebar: 'auto', // 侧边栏自动展开
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    nav: [
      { text: '首页', link: '/' },
      {
        text: '时空的 GitHub 博客',
        items: [
          { text: 'Github', link: 'https://github.com/VoidSpaceTime' },
        ]
      }
    ],
    nav: [
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'Guide', link: '/guide/', target:'_blank' }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "基础学习",
        path: '/handbook/ConditionalTypes',
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" }
        ],
      }
    ],
    
  }
}
