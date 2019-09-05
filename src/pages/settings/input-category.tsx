import React, {useState, useEffect} from 'react';
import { Form, Row, Col, Input, Button } from 'antd';

type Props = {
  getFieldDecorator: any,
  onSubmit: (value: string) => void,
  defaultValue: string,
}

const InputCategory: React.SFC<Props> = ({
  getFieldDecorator = () => {},
  onSubmit = () => {},
  defaultValue = '',
}) => {
  const [value, setValue] = useState(defaultValue);
  ////////////////////
  useEffect(() => setValue(defaultValue), [defaultValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label='Category'>
        {getFieldDecorator('category', {
          rules: [
            {
              required: true,
              message: 'Please input Category to add!',
            },
          ]
        })(
          <Row gutter={8}>
            <Col span={16}>
              <Input placeholder='Add new category' value={value} onChange={e => setValue(e.target.value)} />
            </Col>
            <Col span={8}>
              <Button htmlType='submit' block type='ghost'>Add</Button>
            </Col>
          </Row>
        )}
      </Form.Item>
    </Form>
  );
}

export default InputCategory;
