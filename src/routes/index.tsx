import {
  ArrowRightOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  ControlOutlined,
  DashboardOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import {
  Badge,
  Button,
  Card,
  Col,
  Flex,
  List,
  Progress,
  Row,
  Space,
  Statistic,
  Tag,
  Typography,
} from 'antd'

const heroMetrics = [
  { label: 'Active Workspaces', value: '128', suffix: '' },
  { label: 'Automations Live', value: '42', suffix: '' },
  { label: 'Report Accuracy', value: '93', suffix: '%' },
]

const capabilityCards = [
  {
    icon: <DashboardOutlined style={{ fontSize: 20 }} />,
    title: 'Executive Overview',
    description: 'A calm, high-signal control surface for revenue, operations, and team momentum.',
  },
  {
    icon: <TeamOutlined style={{ fontSize: 20 }} />,
    title: 'Team Coordination',
    description: 'Track owners, approvals, and delivery flow without switching between scattered tools.',
  },
  {
    icon: <BarChartOutlined style={{ fontSize: 20 }} />,
    title: 'Reporting Layer',
    description: 'Understand trend direction, channel quality, and weak signals through clean analytics.',
  },
  {
    icon: <ControlOutlined style={{ fontSize: 20 }} />,
    title: 'System Controls',
    description: 'Manage policies, sync intervals, and communication preferences from one refined surface.',
  },
]

const landingHighlights = [
  'A lighter, Apple-inspired visual language with generous spacing and softer hierarchy',
  'A dedicated dashboard route with sidebar, overview, users, reports, and settings',
  'A clean starting point for integrating real data, auth, and operational workflows',
]

const previewActivities = [
  'Regional review deck delivered to stakeholders',
  'Exception monitor cleared 14 stale alerts',
  'Revenue pipeline refreshed from CRM sync',
]

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [{ title: 'Operations Hub | Apple-Inspired Landing' }],
  }),
})

function Home() {
  const navigate = useNavigate()

  return (
    <main style={{ padding: '24px 0 40px' }}>
      <div className="section-shell">
        <Card
          className="glass-panel"
          bordered={false}
          style={{
            marginBottom: 24,
            borderRadius: 36,
            background: 'var(--landing-hero)',
            overflow: 'hidden',
          }}
          styles={{ body: { padding: 0 } }}
        >
          <div style={{ padding: 24 }}>
            <Flex align="center" justify="space-between" wrap="wrap" gap={16}>
              <Flex align="center" gap={12}>
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 46,
                    height: 46,
                    borderRadius: 16,
                    background: 'linear-gradient(135deg, #101114 0%, #3a3b42 100%)',
                    color: '#fff',
                    fontWeight: 700,
                  }}
                >
                  OH
                </div>
                <div>
                  <Typography.Title level={4} style={{ margin: 0 }}>
                    Operations Hub
                  </Typography.Title>
                  <Typography.Text type="secondary">
                    Apple-inspired operations workspace
                  </Typography.Text>
                </div>
              </Flex>

              <Space size="middle" wrap>
                <Tag bordered={false} style={{ borderRadius: 999, paddingInline: 14 }}>
                  Product Preview
                </Tag>
                <Button size="large" onClick={() => navigate({ to: '/dashboard' })}>
                  Open Dashboard
                </Button>
              </Space>
            </Flex>
          </div>

          <div style={{ padding: '18px 24px 28px' }}>
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} lg={14}>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <Space wrap>
                    <Badge status="processing" text="Visual system refreshed" />
                    <Badge status="success" text="English-only UI" />
                  </Space>

                  <div>
                    <Typography.Title
                      level={1}
                      className="hero-display"
                      style={{ marginBottom: 16, fontSize: 'clamp(3rem, 5vw, 5.2rem)' }}
                    >
                      A quieter dashboard for teams that need clarity, not clutter.
                    </Typography.Title>
                    <Typography.Paragraph
                      style={{
                        fontSize: 18,
                        lineHeight: 1.7,
                        marginBottom: 0,
                        maxWidth: 720,
                        color: 'var(--app-text-muted)',
                      }}
                    >
                      Designed with a lighter Apple-like sensibility, this workspace balances
                      operational depth with visual restraint. It gives your team a strong default
                      shell for overview, people, reports, and controls.
                    </Typography.Paragraph>
                  </div>

                  <Space direction="vertical" size="small">
                    {landingHighlights.map((item) => (
                      <Flex key={item} align="center" gap={10}>
                        <CheckCircleOutlined style={{ color: '#1677ff' }} />
                        <Typography.Text>{item}</Typography.Text>
                      </Flex>
                    ))}
                  </Space>

                  <Space size="middle" wrap>
                    <Button
                      type="primary"
                      size="large"
                      icon={<ArrowRightOutlined />}
                      iconPosition="end"
                      onClick={() => navigate({ to: '/dashboard' })}
                    >
                      Explore the Console
                    </Button>
                    <Button size="large">Review Capabilities</Button>
                  </Space>
                </Space>
              </Col>

              <Col xs={24} lg={10}>
                <Card
                  className="glass-panel-soft"
                  bordered={false}
                  style={{ borderRadius: 30, background: 'rgba(255, 255, 255, 0.62)' }}
                >
                  <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <Flex justify="space-between" align="center">
                      <div>
                        <Typography.Text type="secondary">Live Preview</Typography.Text>
                        <Typography.Title level={4} style={{ margin: 0 }}>
                          Executive Snapshot
                        </Typography.Title>
                      </div>
                      <Tag color="green">Stable This Week</Tag>
                    </Flex>

                    <Row gutter={[12, 12]}>
                      {heroMetrics.map((item) => (
                        <Col xs={24} sm={8} key={item.label}>
                          <Card size="small" style={{ borderRadius: 18 }}>
                            <Statistic
                              title={item.label}
                              value={item.value}
                              suffix={item.suffix}
                            />
                          </Card>
                        </Col>
                      ))}
                    </Row>

                    <Card className="glass-panel-soft" size="small" style={{ borderRadius: 22 }}>
                      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                        <Flex justify="space-between">
                          <Typography.Text strong>Quarterly Delivery</Typography.Text>
                          <Typography.Text type="secondary">Q2</Typography.Text>
                        </Flex>
                        <Progress percent={76} strokeColor="#0a84ff" />
                        <Row gutter={[16, 16]}>
                          <Col span={12}>
                            <Typography.Text type="secondary">Pending Reviews</Typography.Text>
                            <Typography.Title level={4} style={{ margin: '4px 0 0' }}>
                              18
                            </Typography.Title>
                          </Col>
                          <Col span={12}>
                            <Typography.Text type="secondary">Active Alerts</Typography.Text>
                            <Typography.Title level={4} style={{ margin: '4px 0 0' }}>
                              3
                            </Typography.Title>
                          </Col>
                        </Row>
                      </Space>
                    </Card>

                    <List
                      size="small"
                      dataSource={previewActivities}
                      renderItem={(item) => (
                        <List.Item style={{ paddingInline: 0 }}>
                          <Typography.Text style={{ color: 'var(--app-text-muted)' }}>
                            {item}
                          </Typography.Text>
                        </List.Item>
                      )}
                    />
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>

        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          {heroMetrics.map((item) => (
            <Col xs={24} md={8} key={item.label}>
              <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
                <Statistic title={item.label} value={item.value} suffix={item.suffix} />
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[16, 16]}>
          {capabilityCards.map((item) => (
            <Col xs={24} md={12} xl={6} key={item.title}>
              <Card
                className="glass-panel-soft"
                bordered={false}
                style={{ height: '100%', borderRadius: 28 }}
                styles={{ body: { height: '100%' } }}
              >
                <Space direction="vertical" size="middle">
                  <div
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      width: 46,
                      height: 46,
                      borderRadius: 16,
                      background: 'rgba(10, 132, 255, 0.12)',
                      color: '#0a84ff',
                    }}
                  >
                    {item.icon}
                  </div>
                  <Typography.Title level={4} style={{ margin: 0 }}>
                    {item.title}
                  </Typography.Title>
                  <Typography.Paragraph style={{ marginBottom: 0, color: '#5f6b7a' }}>
                    {item.description}
                  </Typography.Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <Card
          className="glass-panel"
          bordered={false}
          style={{
            marginTop: 24,
            borderRadius: 32,
            background:
              'linear-gradient(135deg, rgba(16, 17, 20, 0.88) 0%, rgba(39, 42, 51, 0.84) 100%)',
            color: '#fff',
          }}
        >
          <Flex align="center" justify="space-between" wrap="wrap" gap={16}>
            <Space direction="vertical" size={4}>
              <Typography.Title level={3} style={{ margin: 0, color: '#fff' }}>
                The shell is ready for real product data.
              </Typography.Title>
              <Typography.Text style={{ color: 'rgba(255, 255, 255, 0.72)' }}>
                Landing, overview, users, reports, and settings are already wired into the route tree.
              </Typography.Text>
            </Space>
            <Button
              type="primary"
              size="large"
              icon={<SafetyCertificateOutlined />}
              onClick={() => navigate({ to: '/dashboard' })}
            >
              Launch Console
            </Button>
          </Flex>
        </Card>
      </div>
    </main>
  )
}
