import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    dest: __dirname + '/dist',
    theme: defaultTheme({
        navbar: [
            {
                text: 'Group',
                children: [
                  {
                    text: '数据结构与算法',
                    link: '/algorithms/'
                  }
                ],
            },
        ],
        sidebar: {
            '/algorithms/': [
                {
                    text: '数据结构与算法',
                    children: ['/guide/README.md', '/guide/getting-started.md']
                }
            ]
        }
    })
})