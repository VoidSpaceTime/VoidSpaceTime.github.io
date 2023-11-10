import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'VuePress',
    base: '/docs/',
    head: [],
    theme: defaultTheme({
        docsBranch: 'master',
        navbar: [
            {
                text: '时空的空间',
                link: 'https://github.com/VoidSpaceTime/VoidSpaceTime.github.io',
            },
        ],
        repo: '',
        sidebar: [{
            'text': '前言',
            'link': '/',
        }],
    })

})