import {
  ApartmentOutlined,
  BellOutlined,
  DashboardOutlined,
  FileTextOutlined,
  HomeOutlined,
  LinkOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PartitionOutlined,
  SearchOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Link, Outlet, createFileRoute, useLocation, useNavigate } from '@tanstack/react-router'
import type { MenuProps } from 'antd'
import { Avatar, Badge, Breadcrumb, Button, Grid, Input, Layout, Menu, Space, Tag, Typography } from 'antd'
import { useEffect, useState } from 'react'

const navigationItems: MenuProps['items'] = [
  {
    key: 'workspace-group',
    icon: <DashboardOutlined />,
    label: 'Workspace',
    children: [
      { key: '/dashboard', label: 'Overview' },
      { key: '/dashboard/reports', label: 'Reports' },
    ],
  },
  {
    key: 'organization-group',
    icon: <TeamOutlined />,
    label: 'Organization',
    children: [
      { key: '/dashboard/users', label: 'Users' },
      { key: '/dashboard/approvals', label: 'Approvals' },
    ],
  },
  {
    key: 'platform-group',
    icon: <SettingOutlined />,
    label: 'Platform',
    children: [
      { key: '/dashboard/settings', label: 'Settings' },
      { key: '/dashboard/integrations', label: 'Integrations' },
    ],
  },
]

const pageLabels: Record<string, string> = {
  '/dashboard': 'Overview',
  '/dashboard/users': 'Users',
  '/dashboard/reports': 'Reports',
  '/dashboard/approvals': 'Approvals',
  '/dashboard/settings': 'Settings',
  '/dashboard/integrations': 'Integrations',
}

const pageDescriptions: Record<string, string> = {
  '/dashboard': 'Executive snapshot',
  '/dashboard/users': 'People and access',
  '/dashboard/reports': 'Performance and trends',
  '/dashboard/approvals': 'Queues and reviews',
  '/dashboard/settings': 'System preferences',
  '/dashboard/integrations': 'Connected services',
}

const openGroupByRoute: Record<string, string> = {
  '/dashboard': 'workspace-group',
  '/dashboard/reports': 'workspace-group',
  '/dashboard/users': 'organization-group',
  '/dashboard/approvals': 'organization-group',
  '/dashboard/settings': 'platform-group',
  '/dashboard/integrations': 'platform-group',
}

const pinnedViews = [
  { key: '/dashboard', label: 'Executive Pulse', icon: <DashboardOutlined /> },
  { key: '/dashboard/approvals', label: 'Approval Queue', icon: <ApartmentOutlined /> },
  { key: '/dashboard/integrations', label: 'Connected Apps', icon: <LinkOutlined /> },
]

const sidebarStats = [
  { label: 'Open', value: '18' },
  { label: 'Syncs', value: '12' },
  { label: 'Risk', value: '03' },
  { label: 'Team', value: '97' },
]

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayoutRoute,
  head: () => ({
    meta: [{ title: 'Dashboard | Operations Hub' }],
  }),
})

function DashboardLayoutRoute() {
  const navigate = useNavigate()
  const pathname = useLocation({ select: (location) => location.pathname })
  const screens = Grid.useBreakpoint()
  const isDesktop = screens.lg ?? true
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>(['workspace-group'])

  useEffect(() => {
    if (!isDesktop) {
      setCollapsed(true)
      return
    }

    setCollapsed(false)
  }, [isDesktop])

  const currentKey =
    Object.keys(pageLabels)
      .filter((key) => pathname === key || pathname.startsWith(`${key}/`))
      .sort((left, right) => right.length - left.length)[0] ?? '/dashboard'

  useEffect(() => {
    const nextOpenGroup = openGroupByRoute[currentKey]
    if (!nextOpenGroup || !isDesktop) {
      return
    }

    setOpenKeys([nextOpenGroup])
  }, [currentKey, isDesktop])

  const isCollapsed = !isDesktop ? true : collapsed

  const breadcrumbItems = [
    {
      title: <Link to="/">Landing</Link>,
    },
    {
      title:
        currentKey === '/dashboard' ? (
          'Overview'
        ) : (
          <Link to="/dashboard">Overview</Link>
        ),
    },
    ...(currentKey !== '/dashboard'
      ? [
          {
            title: pageLabels[currentKey],
          },
        ]
      : []),
  ]

  return (
    <div className="workspace-shell">
      <Layout className="workspace-layout" style={{ minHeight: '100%', background: 'transparent' }}>
        <Layout.Sider
          theme="light"
          width={248}
          collapsedWidth={96}
          collapsed={isCollapsed}
          className="workspace-sidebar"
          style={{
            overflow: 'auto',
            background: 'transparent',
          }}
        >
          <div className="sidebar-stack">
            <div style={{ padding: 20 }}>
              <Space align="center" size={12}>
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, #101114 0%, #41424a 100%)',
                    color: '#fff',
                    fontWeight: 700,
                  }}
                >
                  OH
                </div>
                {!isCollapsed && (
                  <div>
                    <Typography.Text style={{ display: 'block', color: '#101114' }} strong>
                      Operations Hub
                    </Typography.Text>
                    <Typography.Text style={{ color: '#6e6e73' }}>
                      Refined workspace
                    </Typography.Text>
                  </div>
                )}
              </Space>
            </div>

            <div className="sidebar-section">
              {!isCollapsed && (
                <Typography.Text className="sidebar-caption">Navigation</Typography.Text>
              )}
              <Menu
                mode="inline"
                theme="light"
                selectedKeys={[currentKey]}
                openKeys={isCollapsed ? [] : openKeys}
                items={navigationItems}
                style={{ borderInlineEnd: 'none', paddingInline: 12, background: 'transparent' }}
                onOpenChange={(keys) => setOpenKeys(keys as string[])}
                onClick={({ key }) => navigate({ to: key as '/dashboard' })}
              />
            </div>

            {!isCollapsed && (
              <>
                <div className="sidebar-section">
                  <Typography.Text className="sidebar-caption">Pinned Views</Typography.Text>
                  <div className="sidebar-links-grid">
                    {pinnedViews.map((item) => (
                      <button
                        key={item.key}
                        className="sidebar-link-card"
                        onClick={() => navigate({ to: item.key as '/dashboard' })}
                        type="button"
                      >
                        <span className="sidebar-link-icon">{item.icon}</span>
                        <span className="sidebar-link-label">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sidebar-section sidebar-status-panel">
                  <Typography.Text className="sidebar-caption">Workspace Status</Typography.Text>
                  <div className="sidebar-stats-grid">
                    {sidebarStats.map((item) => (
                      <div key={item.label} className="sidebar-stat-card">
                        <span className="sidebar-stat-value">{item.value}</span>
                        <span className="sidebar-stat-label">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div style={{ padding: 20, marginTop: 'auto' }}>
              <Button block icon={<HomeOutlined />} onClick={() => navigate({ to: '/' })}>
                {!isCollapsed ? 'Back to Landing' : ''}
              </Button>
            </div>
          </div>
        </Layout.Sider>

        <Layout className="workspace-main" style={{ background: 'transparent' }}>
          <Layout.Header className="workspace-header glass-panel-soft" style={{ height: 'auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              minHeight: 56,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                minWidth: 0,
                flex: '1 1 360px',
              }}
            >
              <Button
                shape="circle"
                icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed((value) => !value)}
              />

              <div style={{ minWidth: 0 }}>
                <Typography.Text
                  style={{
                    display: 'block',
                    marginBottom: 2,
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#8e8e93',
                  }}
                >
                  Control Center
                </Typography.Text>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    minWidth: 0,
                    flexWrap: 'wrap',
                  }}
                >
                  <Typography.Title
                    level={4}
                    style={{
                      margin: 0,
                      fontSize: 22,
                      lineHeight: 1.05,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {pageLabels[currentKey]}
                  </Typography.Title>

                  {isDesktop && (
                    <Tag
                      bordered={false}
                      style={{
                        marginInlineEnd: 0,
                        paddingInline: 10,
                        borderRadius: 999,
                        background: 'rgba(255, 255, 255, 0.8)',
                        color: '#6e6e73',
                      }}
                    >
                      {pageDescriptions[currentKey]}
                    </Tag>
                  )}
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 10,
                flex: '0 1 auto',
                flexWrap: 'wrap',
              }}
            >
              {screens.md && (
                <Input
                  allowClear
                  prefix={<SearchOutlined style={{ color: '#8e8e93' }} />}
                  placeholder="Search"
                  variant="borderless"
                  style={{
                    width: 168,
                    height: 40,
                    borderRadius: 999,
                    background: 'rgba(255, 255, 255, 0.78)',
                    paddingInline: 14,
                  }}
                />
              )}

              <Button
                style={{
                  height: 40,
                  borderRadius: 999,
                  paddingInline: 14,
                  background: 'rgba(255, 255, 255, 0.78)',
                  borderColor: 'rgba(15, 23, 42, 0.08)',
                }}
                icon={<BellOutlined />}
              >
                <Space size={6}>
                  <span>Alerts</span>
                  <Badge count={5} size="small" />
                </Space>
              </Button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  height: 40,
                  paddingInline: 8,
                  borderRadius: 999,
                  background: 'rgba(255, 255, 255, 0.82)',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                }}
              >
                <Avatar size={30} style={{ background: '#0a84ff' }}>
                  ZS
                </Avatar>
                {screens.sm && (
                  <Typography.Text style={{ color: '#6e6e73', paddingRight: 6 }}>
                    Zhang San
                  </Typography.Text>
                )}
              </div>
            </div>
          </div>
          </Layout.Header>

          <Layout.Content className="workspace-content">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div className="workspace-breadcrumb-row">
                <Breadcrumb items={breadcrumbItems} />
              </div>
              <div className="workspace-body">
                <Outlet />
              </div>
            </Space>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}