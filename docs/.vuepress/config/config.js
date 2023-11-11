const sidebar = require('./config/sidebar')
import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'VuePress',
    base: '/',
    head: [],
    markdown: {
        code: {
            lineNumbers: false,
        }
    },
    theme: defaultTheme({
        docsBranch: 'master',
        navbar: [
            {
                text: '时空的空间',
                link: 'https://github.com/VoidSpaceTime/VoidSpaceTime.github.io',
            },
        ],
        repo: '',
        sidebar,
    })

})