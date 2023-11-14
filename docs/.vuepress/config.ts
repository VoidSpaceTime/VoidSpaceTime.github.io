import { defineUserConfig } from "vuepress";
import theme from "./theme.js";




export default defineUserConfig({
  base: "/",
  theme,
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },


  // Enable it with pwa
  // shouldPrefetch: false,
});

