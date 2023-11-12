import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    navbar: [
      // 单个 link可以是外部链接'https://juejin.cn/user/4107431174222391'
      {
        text: '首页',
        link: '/',
      },
      // 下拉 - children为数组
      // children的text默认情况下：md文件的h1标题 -> children的key值
      {
        text: 'css',
        children: ['/pages/css/css01.md', '/pages/css/css02.md'],
      },
      // 下拉 - children为对象数组
      // children的text自定义
      {
        text: 'html',
        children: [
          {
            text: 'html1',
            link: '/pages/html/html01.md',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'html2',
            link: '/pages/html/html02.md',
            // 该元素在当前路由路径是 /pages/js/ 开头时激活 支持正则表达式
            activeMatch: '^/pages/js/',
          },
        ],
      },
      // 下拉嵌套 - 最大深度为 2
      {
        text: 'js',
        children: [
          {
            text: 'js基础',
            children: ['/pages/js/js01.md', '/pages/js/js02.md'],
          },
          {
            text: 'js高级',
            children: ['/pages/js/js03.md'],
          },
        ],
      }
    ],
  }),
}