import { App as AntdApp, ConfigProvider } from 'antd'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

const appTheme = {
  token: {
    borderRadius: 18,
    colorBgBase: '#f5f5f7',
    colorBgContainer: 'rgba(255, 255, 255, 0.72)',
    colorBorderSecondary: 'rgba(15, 23, 42, 0.08)',
    colorPrimary: '#0a84ff',
    colorText: '#101114',
    colorTextSecondary: '#6e6e73',
    controlHeight: 44,
    fontFamily:
      'SF Pro Display, SF Pro Text, Inter, Helvetica Neue, Arial, sans-serif',
  },
  components: {
    Layout: {
      bodyBg: '#f5f5f7',
      headerBg: 'rgba(255, 255, 255, 0.62)',
      siderBg: 'rgba(255, 255, 255, 0.56)',
      triggerBg: 'rgba(255, 255, 255, 0.72)',
      triggerColor: '#101114',
    },
    Menu: {
      itemBg: 'transparent',
      itemColor: '#6e6e73',
      itemHoverColor: '#101114',
      itemHoverBg: 'rgba(255, 255, 255, 0.72)',
      itemSelectedBg: 'rgba(255, 255, 255, 0.92)',
      itemSelectedColor: '#101114',
      itemBorderRadius: 14,
      itemHeight: 44,
    },
    Card: {
      borderRadiusLG: 28,
    },
    Button: {
      borderRadius: 999,
      contentFontSizeLG: 15,
      controlHeightLG: 48,
      paddingInlineLG: 22,
    },
    Table: {
      headerBg: 'rgba(248, 248, 250, 0.96)',
      headerColor: '#6e6e73',
      borderColor: 'rgba(15, 23, 42, 0.08)',
      rowHoverBg: 'rgba(255, 255, 255, 0.88)',
    },
  },
} as const

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Operations Hub',
      },
      {
        name: 'description',
        content:
          'Apple-inspired operations dashboard with overview, users, reports, and settings.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="app-body">
        <ConfigProvider theme={appTheme}>
          <AntdApp>{children}</AntdApp>
        </ConfigProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
