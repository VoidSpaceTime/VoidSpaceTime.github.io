import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "WPF",
        icon: "pen-to-square",
        prefix: "WPF/",
        children: [
          { text: "布局模板", icon: "pen-to-square", link: "1" },
          { text: "数据绑定", icon: "pen-to-square", link: "2" },
          { text: "资源基础", icon: "pen-to-square", link: "3" },
          { text: "动画基础", icon: "pen-to-square", link: "4" },
        ],
      },
      {
        text: "CommunityToolkit.MVVM",
        icon: "pen-to-square",
        prefix: "WPF&CommunitToolkit/",
        children: [
          { text: "CommunityToolkit.MVVM 入门", icon: "pen-to-square", link: "1" },
          { text: "CommunityToolkit 8.1.0+ 修饰器", icon: "pen-to-square", link: "2" },
          // { text: "资源基础", icon: "pen-to-square", link: "3" },
          // { text: "动画基础", icon: "pen-to-square", link: "4" },
          // "3",
          // "4",
        ],
      },
      {
        text: "Prism",
        icon: "pen-to-square",
        prefix: "WPF&Prism/",
        children: [
          // { text: "CommunityToolkit.MVVM 入门", icon: "pen-to-square", link: "1" },
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
