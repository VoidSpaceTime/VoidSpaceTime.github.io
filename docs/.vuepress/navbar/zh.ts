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
          "3",
          "4",
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
