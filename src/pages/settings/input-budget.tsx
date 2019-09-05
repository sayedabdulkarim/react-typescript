import React, {useState, useEffect} from 'react';
import { Form, Row, Col, Input, Button } from 'antd';

type Props = {
  getFieldDecorator: any,
  defaultValue: number,
  onSubmit: (value: number) => void,
}

const InputBudget: React.SFC<Props> = ({
  getFieldDecorator = () => {},
  defaultValue = 0,
  onSubmit = () => {},
}) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => setValue(defaultValue), [defaultValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label='Total Budget'>
        {getFieldDecorator('total_budget', {
          rules: [{
            required: true,
            message: 'Please input Total Budget!',
          }]
        })(
          <Row gutter={8}>
            <Col span={16}>
              <Input type='number' min={0} value={value} onChange={e => setValue(+e.target.value)} />
            </Col>
            <Col span={8}>
              <Button htmlType='submit' block type='ghost'>Save</Button>
            </Col>
          </Row>
        )}
      </Form.Item>
    </Form>
  );
}

export default InputBudget;
