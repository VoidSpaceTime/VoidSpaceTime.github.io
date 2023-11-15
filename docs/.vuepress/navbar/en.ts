import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "WPF",
        icon: "pen-to-square",
        prefix: "WPF/",
        children: [
          { text: "layout", icon: "pen-to-square", link: "1" },
          { text: "dataBinding", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
