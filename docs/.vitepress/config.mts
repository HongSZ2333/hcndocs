import { defineConfig } from 'vitepress';
import vue from '@vitejs/plugin-vue'

let GTAG_ID = 'G-TBCY5W7YVR';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'HCN 使用文档',
  description: 'HCN 使用文档',
  head: [
    // ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', 
      { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}` }
    ],
    ['script', {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GTAG_ID}');`
    ]
  ],

  lastUpdated: true,
  sitemap: {
    hostname: 'https://manual.littlesk.in'
  },

  lang: 'zh',
  appearance: true,

  markdown: {
    theme: { light: 'catppuccin-latte', dark: 'one-dark-pro' },
    image: { lazyLoading: true },
  },

  cleanUrls: true,

  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    }
  },

  themeConfig: {
    // logo: '/favicon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '赞助支持', link: 'https://afdian.com/a/hongsz' },
      { text: '加入我们', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=XC8n-tl27s-NH-3ocgusQnGi1hSApyzi&jump_from=webapi&authKey=Dh8XFFdJx+o6gdPgBSMoqXekDRKXWrHJIGWjL7CbNy39UjqV+zBuumQdmaQv54fV' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true,
    lastUpdated: {
      text: '上次更新于'
    },
    outline: {
      'label': '在此页面上'
    },
    editLink: {
      pattern: 'https://github.com/HongSZ2333/hcndocs',
      text: '帮助我们完善这个页面'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: "8GVX0ZBWG5",
        // "This is the public API key which can be safely used in your frontend code." - Algolia Dashboard
        apiKey: "cdcbecb7692da969deaecbe7e6297924",
        indexName: "littleskin",
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索服务提供者：'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },

    sidebar: {
      '/': [
        {
          text: '关于我们',
          link: '/',
          items: [
            {
              text: '服务器信息',
              link: '/information/',
              items: [
                { text: '生电服 | 服务器信息', link: '/information/server' },
                { text: '申请白名单', link: '/information/whitelist' },
                { text: '入服流程', link: '/information/join'}
              ]
            },
            {
              text: '服务器功能',
              link: '/function/',
              items: [
                { text: 'MCDReforged', link: '/function/mcdreforged' },
                { text: 'Carpet', link: '/function/carpet' },
              ]
            },
          ]
        },
        
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HongSZ2333/hcndocs' },
    ],

  },
  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ],
    },
  },
});
