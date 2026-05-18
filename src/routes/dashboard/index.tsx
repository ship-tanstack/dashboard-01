import {
  ArrowUpOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  RiseOutlined,
  WarningOutlined,
} from '@ant-design/icons'
import { createFileRoute } from '@tanstack/react-router'
import { Card, Col, List, Progress, Row, Space, Statistic, Table, Tag, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const kpiCards = [
  { title: 'Monthly Revenue', value: 2480000, prefix: '$', trend: '+12.6%', tone: '#0a84ff' },
  { title: 'Active Members', value: 12480, suffix: '', trend: '+8.4%', tone: '#5e5ce6' },
  { title: 'Open Requests', value: 86, suffix: '', trend: '-6.1%', tone: '#ff9f0a' },
  { title: 'On-Time Delivery', value: 96.2, suffix: '%', trend: '+2.3%', tone: '#30b0c7' },
]

const trendData = [
  { month: 'Jan', revenue: 182, target: 176 },
  { month: 'Feb', revenue: 196, target: 185 },
  { month: 'Mar', revenue: 221, target: 198 },
  { month: 'Apr', revenue: 236, target: 214 },
  { month: 'May', revenue: 248, target: 230 },
  { month: 'Jun', revenue: 263, target: 244 },
]

const channelData = [
  { name: 'Direct Sales', value: 82 },
  { name: 'Regional Partners', value: 68 },
  { name: 'Digital', value: 54 },
  { name: 'Referrals', value: 41 },
]

const activityItems = [
  { title: 'Regional review brief synced to leadership', time: '10 min ago', tag: 'Ops' },
  { title: 'Approval template v3 rolled out', time: '32 min ago', tag: 'Flow' },
  { title: 'Eight high-risk alerts surfaced this week', time: '1 hour ago', tag: 'Risk' },
  { title: 'Morning operating report delivered', time: 'Today, 08:30', tag: 'Automation' },
]

const todoItems = [
  { task: 'Renewal outreach', progress: 72, owner: 'Customer Success' },
  { task: 'Budget review', progress: 54, owner: 'Finance' },
  { task: 'Headcount update', progress: 88, owner: 'People Ops' },
]

type PipelineRow = {
  name: string
  manager: string
  revenue: string
  status: 'Healthy' | 'Watch' | 'Risk'
}

const pipelineData: PipelineRow[] = [
  { name: 'Eastern Manufacturing', manager: 'Ian Lee', revenue: '$620,000', status: 'Healthy' },
  { name: 'South Channel', manager: 'Claire Zhou', revenue: '$480,000', status: 'Watch' },
  { name: 'Renewal Portfolio', manager: 'Mo Chen', revenue: '$360,000', status: 'Risk' },
]

const pipelineColumns: ColumnsType<PipelineRow> = [
  { title: 'Business Unit', dataIndex: 'name', key: 'name' },
  { title: 'Owner', dataIndex: 'manager', key: 'manager' },
  { title: 'Forecast', dataIndex: 'revenue', key: 'revenue' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (value: PipelineRow['status']) => {
      const color = value === 'Healthy' ? 'green' : value === 'Watch' ? 'gold' : 'red'
      return <Tag color={color}>{value}</Tag>
    },
  },
]

export const Route = createFileRoute('/dashboard/')({
  component: DashboardOverview,
  head: () => ({
    meta: [{ title: 'Overview | Operations Hub' }],
  }),
})

function DashboardOverview() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 32 }}>
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <Tag color="blue" bordered={false} style={{ width: 'fit-content', borderRadius: 999 }}>
            Executive Surface
          </Tag>
          <Typography.Title level={2} style={{ margin: 0 }}>
            Operational clarity, shaped into a calmer overview.
          </Typography.Title>
          <Typography.Paragraph style={{ marginBottom: 0, color: 'var(--app-text-muted)' }}>
            This page now reads more like a modern Apple-style workspace: softer contrast,
            quieter panels, and fewer competing accents while keeping enterprise utility intact.
          </Typography.Paragraph>
        </Space>
      </Card>

      <Row gutter={[16, 16]}>
        {kpiCards.map((item) => (
          <Col xs={24} md={12} xl={6} key={item.title}>
            <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
              <Statistic
                title={item.title}
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                precision={item.suffix === '%' ? 1 : 0}
              />
              <Space size="small" style={{ marginTop: 12, color: item.tone }}>
                <RiseOutlined />
                <Typography.Text style={{ color: item.tone }}>{item.trend}</Typography.Text>
                <Typography.Text type="secondary">vs last period</Typography.Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} xl={16}>
          <Card
            className="glass-panel-soft"
            bordered={false}
            title="Revenue vs Target"
            extra={<Tag color="blue">Monthly</Tag>}
            style={{ borderRadius: 28 }}
          >
            <div style={{ width: '100%', height: 320 }}>
              <ResponsiveContainer>
                <LineChart data={trendData}>
                  <CartesianGrid stroke="#edf0f5" strokeDasharray="3 3" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#0a84ff" strokeWidth={3} />
                  <Line type="monotone" dataKey="target" stroke="#9fa7b3" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card
            className="glass-panel-soft"
            bordered={false}
            title="Channel Mix"
            extra={<Tag color="green">Quarter</Tag>}
            style={{ borderRadius: 28 }}
          >
            <div style={{ width: '100%', height: 320 }}>
              <ResponsiveContainer>
                <BarChart data={channelData} layout="vertical" margin={{ left: 16 }}>
                  <CartesianGrid stroke="#eef3f8" strokeDasharray="3 3" />
                  <XAxis type="number" stroke="#6b7280" />
                  <YAxis dataKey="name" type="category" width={104} stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0a84ff" radius={[0, 10, 10, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} xl={9}>
          <Card className="glass-panel-soft" bordered={false} title="Recent Activity" style={{ borderRadius: 28 }}>
            <List
              dataSource={activityItems}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<ClockCircleOutlined style={{ color: '#0a84ff', fontSize: 18 }} />}
                    title={<Typography.Text strong>{item.title}</Typography.Text>}
                    description={
                      <Space size="small">
                        <Typography.Text type="secondary">{item.time}</Typography.Text>
                        <Tag>{item.tag}</Tag>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={24} xl={7}>
          <Card className="glass-panel-soft" bordered={false} title="Priority Progress" style={{ borderRadius: 28 }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {todoItems.map((item) => (
                <div key={item.task}>
                  <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Typography.Text strong>{item.task}</Typography.Text>
                    <Typography.Text type="secondary">{item.owner}</Typography.Text>
                  </Space>
                  <Progress percent={item.progress} strokeColor="#0a84ff" />
                </div>
              ))}
            </Space>
          </Card>
        </Col>

        <Col xs={24} xl={8}>
          <Card className="glass-panel-soft" bordered={false} title="Signals" style={{ borderRadius: 28 }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Card size="small" style={{ borderRadius: 18, background: '#fff8e6' }}>
                <Space>
                  <WarningOutlined style={{ color: '#d46b08' }} />
                  <Typography.Text strong>12 high-priority requests need review</Typography.Text>
                </Space>
              </Card>
              <Card size="small" style={{ borderRadius: 18, background: '#f6ffed' }}>
                <Space>
                  <CheckCircleOutlined style={{ color: '#389e0d' }} />
                  <Typography.Text strong>Finance sync finished without exceptions</Typography.Text>
                </Space>
              </Card>
              <Card size="small" style={{ borderRadius: 18, background: '#e6f4ff' }}>
                <Space>
                  <ArrowUpOutlined style={{ color: '#0a84ff' }} />
                  <Typography.Text strong>21 new renewal opportunities surfaced</Typography.Text>
                </Space>
              </Card>
            </Space>
          </Card>
        </Col>
      </Row>

      <Card className="glass-panel-soft" bordered={false} title="Pipeline Health" style={{ borderRadius: 28 }}>
        <Table
          rowKey="name"
          dataSource={pipelineData}
          columns={pipelineColumns}
          pagination={false}
          size="middle"
        />
      </Card>
    </Space>
  )
}