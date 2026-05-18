import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { createFileRoute } from '@tanstack/react-router'
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  Row,
  Select,
  Space,
  Statistic,
  Table,
  Tag,
  Typography,
} from 'antd'
import type { TableColumnsType } from 'antd'
import { useState } from 'react'

type UserRow = {
  key: string
  name: string
  title: string
  department: string
  status: 'Active' | 'Pending' | 'Paused'
  lastActive: string
}

const users: UserRow[] = [
  {
    key: 'u-01',
    name: 'Liam Carter',
    title: 'Regional Operations Lead',
    department: 'Operations',
    status: 'Active',
    lastActive: 'Today, 09:20',
  },
  {
    key: 'u-02',
    name: 'Sophie Lin',
    title: 'Customer Success Manager',
    department: 'Customer Success',
    status: 'Pending',
    lastActive: 'Today, 08:45',
  },
  {
    key: 'u-03',
    name: 'Ethan Zhao',
    title: 'Finance Analyst',
    department: 'Finance',
    status: 'Active',
    lastActive: 'Yesterday, 18:14',
  },
  {
    key: 'u-04',
    name: 'Maya Cho',
    title: 'Workflow Administrator',
    department: 'IT Systems',
    status: 'Paused',
    lastActive: 'May 12, 16:40',
  },
]

const columns: TableColumnsType<UserRow> = [
  {
    title: 'Member',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => (
      <Space>
        <Avatar style={{ background: '#0a84ff' }}>{record.name.slice(0, 1)}</Avatar>
        <div>
          <Typography.Text strong>{record.name}</Typography.Text>
          <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
            {record.title}
          </Typography.Paragraph>
        </div>
      </Space>
    ),
  },
  { title: 'Department', dataIndex: 'department', key: 'department' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (value: UserRow['status']) => {
      const color = value === 'Active' ? 'green' : value === 'Pending' ? 'gold' : 'default'
      return <Tag color={color}>{value}</Tag>
    },
  },
  { title: 'Last Active', dataIndex: 'lastActive', key: 'lastActive' },
]

export const Route = createFileRoute('/dashboard/users')({
  component: UsersPage,
  head: () => ({
    meta: [{ title: 'Users | Operations Hub' }],
  }),
})

function UsersPage() {
  const [keyword, setKeyword] = useState('')
  const [department, setDepartment] = useState<string | undefined>()

  const filteredUsers = users.filter((user) => {
    const matchKeyword = [user.name, user.title, user.department].some((field) =>
      field.toLowerCase().includes(keyword.toLowerCase()),
    )
    const matchDepartment = department ? user.department === department : true
    return matchKeyword && matchDepartment
  })

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 32 }}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          People and access, presented with less noise.
        </Typography.Title>
        <Typography.Paragraph style={{ marginBottom: 0, color: 'var(--app-text-muted)' }}>
          The page now keeps the enterprise structure but with a cleaner, more modern hierarchy.
        </Typography.Paragraph>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="Team Members" value={164} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="Active Today" value={97} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
            <Statistic title="Pending Accounts" value={11} />
          </Card>
        </Col>
      </Row>

      <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={10}>
              <Input
                allowClear
                size="large"
                prefix={<SearchOutlined />}
                placeholder="Search by name, role, or department"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
            </Col>
            <Col xs={24} lg={6}>
              <Select
                allowClear
                size="large"
                placeholder="Filter by department"
                style={{ width: '100%' }}
                value={department}
                options={[
                  { label: 'Operations', value: 'Operations' },
                  { label: 'Customer Success', value: 'Customer Success' },
                  { label: 'Finance', value: 'Finance' },
                  { label: 'IT Systems', value: 'IT Systems' },
                ]}
                onChange={setDepartment}
              />
            </Col>
            <Col xs={24} lg={8}>
              <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
                <Button size="large">Export</Button>
                <Button type="primary" size="large" icon={<PlusOutlined />}>
                  New Member
                </Button>
              </Space>
            </Col>
          </Row>

          <Table
            rowKey="key"
            columns={columns}
            dataSource={filteredUsers}
            pagination={{ pageSize: 6, showSizeChanger: false }}
          />
        </Space>
      </Card>
    </Space>
  )
}