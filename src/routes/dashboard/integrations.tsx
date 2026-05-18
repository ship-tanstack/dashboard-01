import { ApiOutlined, CheckCircleOutlined, SyncOutlined } from '@ant-design/icons'
import { createFileRoute } from '@tanstack/react-router'
import { Card, Col, Row, Space, Statistic, Table, Tag, Typography } from 'antd'
import type { TableColumnsType } from 'antd'

type IntegrationRow = {
  key: string
  service: string
  category: string
  status: 'Healthy' | 'Syncing' | 'Attention'
  latency: string
}

const integrations: IntegrationRow[] = [
  {
    key: 'integration-1',
    service: 'Salesforce',
    category: 'CRM',
    status: 'Healthy',
    latency: '1.3 min',
  },
  {
    key: 'integration-2',
    service: 'NetSuite',
    category: 'Finance',
    status: 'Syncing',
    latency: '4.8 min',
  },
  {
    key: 'integration-3',
    service: 'Slack',
    category: 'Notifications',
    status: 'Attention',
    latency: 'Delayed',
  },
]

const columns: TableColumnsType<IntegrationRow> = [
  { title: 'Service', dataIndex: 'service', key: 'service' },
  { title: 'Category', dataIndex: 'category', key: 'category' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (value: IntegrationRow['status']) => {
      const color = value === 'Healthy' ? 'green' : value === 'Syncing' ? 'blue' : 'gold'
      return <Tag color={color}>{value}</Tag>
    },
  },
  { title: 'Latency', dataIndex: 'latency', key: 'latency' },
]

export const Route = createFileRoute('/dashboard/integrations')({
  component: IntegrationsPage,
  head: () => ({
    meta: [{ title: 'Integrations | Operations Hub' }],
  }),
})

function IntegrationsPage() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 32 }}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Integrations deserve a place in navigation when operations depend on them.
        </Typography.Title>
        <Typography.Paragraph style={{ marginBottom: 0, color: 'var(--app-text-muted)' }}>
          This page gives the platform section real depth and makes the sidebar feel like an actual control plane.
        </Typography.Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="Connected Services" value={14} prefix={<ApiOutlined />} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="Healthy Syncs" value={11} prefix={<CheckCircleOutlined />} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="Live Jobs" value={3} prefix={<SyncOutlined spin />} />
          </Card>
        </Col>
      </Row>

      <Card className="glass-panel-soft" bordered={false} title="Connection Health" style={{ borderRadius: 28 }}>
        <Table rowKey="key" dataSource={integrations} columns={columns} pagination={false} />
      </Card>
    </Space>
  )
}