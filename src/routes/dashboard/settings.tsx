import { App, Button, Card, Col, Form, Input, InputNumber, Row, Select, Space, Switch, Typography } from 'antd'
import { createFileRoute } from '@tanstack/react-router'

type SettingsFormValues = {
  companyName: string
  timezone: string
  syncInterval: number
  approvalFlow: boolean
  notificationChannel: string
}

export const Route = createFileRoute('/dashboard/settings')({
  component: SettingsPage,
  head: () => ({
    meta: [{ title: 'Settings | Operations Hub' }],
  }),
})

function SettingsPage() {
  const { message } = App.useApp()

  const handleSubmit = (values: SettingsFormValues) => {
    message.success(`Settings saved for ${values.companyName}.`) 
  }

  return (
    <Card className="glass-panel-soft" bordered={false} style={{ borderRadius: 28 }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Typography.Title level={3} style={{ marginBottom: 8 }}>
            Settings
          </Typography.Title>
          <Typography.Text type="secondary">
            Configure the base environment, sync cadence, approval behavior, and default notifications.
          </Typography.Text>
        </div>

        <Form<SettingsFormValues>
          layout="vertical"
          initialValues={{
            companyName: 'Operations Hub Demo',
            timezone: 'Asia/Shanghai',
            syncInterval: 30,
            approvalFlow: true,
            notificationChannel: 'Slack',
          }}
          onFinish={handleSubmit}
        >
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Card className="glass-panel-soft" size="small" title="Organization" style={{ borderRadius: 22 }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item label="Organization Name" name="companyName" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Enter a workspace name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Timezone" name="timezone" rules={[{ required: true }]}>
                    <Select
                      size="large"
                      options={[
                        { label: 'Asia/Shanghai', value: 'Asia/Shanghai' },
                        { label: 'UTC', value: 'UTC' },
                        { label: 'Asia/Singapore', value: 'Asia/Singapore' },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>

            <Card className="glass-panel-soft" size="small" title="Workflow Preferences" style={{ borderRadius: 22 }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Sync Interval (minutes)"
                    name="syncInterval"
                    rules={[{ required: true }]}
                  >
                    <InputNumber size="large" min={5} max={240} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Notification Channel" name="notificationChannel" rules={[{ required: true }]}>
                    <Select
                      size="large"
                      options={[
                        { label: 'Slack', value: 'Slack' },
                        { label: 'Email', value: 'Email' },
                        { label: 'Teams', value: 'Teams' },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Approval Flow Enabled"
                name="approvalFlow"
                valuePropName="checked"
                style={{ marginBottom: 0 }}
              >
                <Switch checkedChildren="On" unCheckedChildren="Off" />
              </Form.Item>
            </Card>

            <Space>
              <Button type="primary" size="large" htmlType="submit">
                Save Changes
              </Button>
              <Button size="large">Reset Defaults</Button>
            </Space>
          </Space>
        </Form>
      </Space>
    </Card>
  )
}