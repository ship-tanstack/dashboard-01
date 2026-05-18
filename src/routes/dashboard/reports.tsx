import { CalendarOutlined, DownloadOutlined } from '@ant-design/icons'
import { createFileRoute } from '@tanstack/react-router'
import { Button, Card, Col, Row, Segmented, Space, Statistic, Table, Tag, Typography } from 'antd'
import type { TableColumnsType } from 'antd'
import { useState } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const reportTrend = {
  'Last 7 Days': [
    { label: 'Mon', value: 32 },
    { label: 'Tue', value: 35 },
    { label: 'Wed', value: 38 },
    { label: 'Thu', value: 41 },
    { label: 'Fri', value: 44 },
    { label: 'Sat', value: 36 },
    { label: 'Sun', value: 40 },
  ],
  'Last 30 Days': [
    { label: 'Week 1', value: 120 },
    { label: 'Week 2', value: 132 },
    { label: 'Week 3', value: 146 },
    { label: 'Week 4', value: 151 },
  ],
  Quarter: [
    { label: 'Apr', value: 480 },
    { label: 'May', value: 525 },
    { label: 'Jun', value: 568 },
  ],
} as const

const reportChannels = [
  { channel: 'Direct Sales', cost: 240000, roi: 5.6, leads: 318 },
  { channel: 'Regional Partners', cost: 186000, roi: 4.9, leads: 274 },
  { channel: 'Digital Campaigns', cost: 132000, roi: 3.7, leads: 198 },
  { channel: 'Referrals', cost: 64000, roi: 7.8, leads: 96 },
]

const channelColumns: TableColumnsType<(typeof reportChannels)[number]> = [
  { title: 'Channel', dataIndex: 'channel', key: 'channel' },
  {
    title: 'Spend',
    dataIndex: 'cost',
    key: 'cost',
    render: (value: number) => `$${value.toLocaleString()}`,
  },
  { title: 'ROI', dataIndex: 'roi', key: 'roi', render: (value: number) => `${value}x` },
  { title: 'Leads', dataIndex: 'leads', key: 'leads' },
]

export const Route = createFileRoute('/dashboard/reports')({
  component: ReportsPage,
  head: () => ({
    meta: [{ title: 'Reports | Operations Hub' }],
  }),
})

function ReportsPage() {
  const [range, setRange] = useState<keyof typeof reportTrend>('Last 30 Days')

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 32 }}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Reporting that feels more editorial than mechanical.
        </Typography.Title>
        <Typography.Paragraph style={{ marginBottom: 0, color: 'var(--app-text-muted)' }}>
          This view keeps enterprise reporting depth while dialing down noise and visual weight.
        </Typography.Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="ROI" value={5.4} suffix="x" precision={1} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="New Leads" value={886} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="Exports" value={42} />
          </Card>
        </Col>
      </Row>

      <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Space style={{ width: '100%', justifyContent: 'space-between' }} wrap>
            <div>
              <Typography.Title level={4} style={{ margin: 0 }}>
                Growth Analysis
              </Typography.Title>
              <Typography.Text type="secondary">
                A simplified reporting surface for weekly and monthly business reviews.
              </Typography.Text>
            </div>

            <Space wrap>
              <Segmented
                value={range}
                options={['Last 7 Days', 'Last 30 Days', 'Quarter']}
                onChange={(value) => setRange(value as keyof typeof reportTrend)}
              />
              <Button icon={<CalendarOutlined />}>Filter</Button>
              <Button type="primary" icon={<DownloadOutlined />}>
                Export Report
              </Button>
            </Space>
          </Space>

          <Row gutter={[16, 16]}>
            <Col xs={24} xl={15}>
              <Card className="glass-panel-soft" size="small" title="Conversion Trend" style={{ borderRadius: 22 }}>
                <div style={{ width: '100%', height: 320 }}>
                  <ResponsiveContainer>
                    <AreaChart data={reportTrend[range]}>
                      <defs>
                        <linearGradient id="reportTrendFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0a84ff" stopOpacity={0.32} />
                          <stop offset="95%" stopColor="#0a84ff" stopOpacity={0.03} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="#eaf0f6" strokeDasharray="3 3" />
                      <XAxis dataKey="label" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#0a84ff"
                        fillOpacity={1}
                        fill="url(#reportTrendFill)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>

            <Col xs={24} xl={9}>
              <Card className="glass-panel-soft" size="small" title="Channel Contribution" style={{ borderRadius: 22 }}>
                <div style={{ width: '100%', height: 320 }}>
                  <ResponsiveContainer>
                    <BarChart data={reportChannels}>
                      <CartesianGrid stroke="#eef3f8" strokeDasharray="3 3" />
                      <XAxis dataKey="channel" tick={{ fontSize: 12 }} stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip />
                      <Bar dataKey="leads" fill="#13c2c2" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>
          </Row>
        </Space>
      </Card>

      <Card className="glass-panel-soft" bordered={false} title="Channel Performance" style={{ borderRadius: 28 }}>
        <Table
          rowKey="channel"
          dataSource={reportChannels}
          columns={channelColumns}
          pagination={false}
          footer={() => (
            <Space>
              <Tag color="blue">Auto Summary</Tag>
              <Typography.Text type="secondary">
                This table is ready to plug into a real BI or warehouse feed.
              </Typography.Text>
            </Space>
          )}
        />
      </Card>
    </Space>
  )
}