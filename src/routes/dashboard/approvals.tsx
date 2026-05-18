import { CheckCircleOutlined, ClockCircleOutlined, FilterOutlined } from '@ant-design/icons'
import { createFileRoute } from '@tanstack/react-router'
import { Button, Card, Col, Row, Segmented, Space, Statistic, Table, Tag, Typography } from 'antd'
import type { TableColumnsType } from 'antd'
import { useState } from 'react'

type ApprovalRow = {
  key: string
  item: string
  owner: string
  stage: 'Pending' | 'Review' | 'Approved'
  updatedAt: string
}

const approvalRows: ApprovalRow[] = [
  {
    key: 'approval-1',
    item: 'Q3 regional hiring expansion',
    owner: 'People Ops',
    stage: 'Pending',
    updatedAt: '15 min ago',
  },
  {
    key: 'approval-2',
    item: 'Data sync policy revision',
    owner: 'Platform',
    stage: 'Review',
    updatedAt: '45 min ago',
  },
  {
    key: 'approval-3',
    item: 'Marketing vendor renewal',
    owner: 'Finance',
    stage: 'Approved',
    updatedAt: 'Today, 09:10',
  },
]

const approvalColumns: TableColumnsType<ApprovalRow> = [
  { title: 'Request', dataIndex: 'item', key: 'item' },
  { title: 'Owner', dataIndex: 'owner', key: 'owner' },
  {
    title: 'Stage',
    dataIndex: 'stage',
    key: 'stage',
    render: (value: ApprovalRow['stage']) => {
      const color = value === 'Approved' ? 'green' : value === 'Review' ? 'blue' : 'gold'
      return <Tag color={color}>{value}</Tag>
    },
  },
  { title: 'Updated', dataIndex: 'updatedAt', key: 'updatedAt' },
]

export const Route = createFileRoute('/dashboard/approvals')({
  component: ApprovalsPage,
  head: () => ({
    meta: [{ title: 'Approvals | Operations Hub' }],
  }),
})

function ApprovalsPage() {
  const [view, setView] = useState<'Pending' | 'All'>('Pending')

  const data = view === 'Pending' ? approvalRows.filter((row) => row.stage !== 'Approved') : approvalRows

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 32 }}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Keep approvals visible without turning the queue into noise.
        </Typography.Title>
        <Typography.Paragraph style={{ marginBottom: 0, color: 'var(--app-text-muted)' }}>
          This view gives the sidebar a real second-level destination for review work, not just a label.
        </Typography.Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="Pending Approvals" value={12} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="In Review" value={7} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="Approved Today" value={19} />
          </Card>
        </Col>
      </Row>

      <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Space style={{ width: '100%', justifyContent: 'space-between' }} wrap>
            <Segmented
              value={view}
              options={['Pending', 'All']}
              onChange={(value) => setView(value as 'Pending' | 'All')}
            />
            <Button icon={<FilterOutlined />}>Filter Queue</Button>
          </Space>

          <Table rowKey="key" dataSource={data} columns={approvalColumns} pagination={false} />

          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Card size="small" style={{ borderRadius: 22 }}>
                <Space>
                  <ClockCircleOutlined style={{ color: '#ff9f0a' }} />
                  <Typography.Text>Most requests are waiting on finance and legal review.</Typography.Text>
                </Space>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card size="small" style={{ borderRadius: 22 }}>
                <Space>
                  <CheckCircleOutlined style={{ color: '#34c759' }} />
                  <Typography.Text>Auto-routing rules covered 68% of requests this week.</Typography.Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>
    </Space>
  )
}