import React from 'react'
import { Button, Space } from 'antd'

const Antd:React.FC = () => {
  return (
    <Space wrap>
        <Button type='primary'>Primary Btn</Button>
        <Button type='primary'>Primary Btn</Button>
        <Button type='primary'>Primary Btn</Button>
        <Button type='primary'>Primary Btn</Button>
    </Space>
  )
}

export default Antd