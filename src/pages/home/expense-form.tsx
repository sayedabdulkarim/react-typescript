import React from 'react';
import { Form, Input, Icon, DatePicker, Select } from 'antd';
import { connect } from 'react-redux';

const {Option} = Select;

const ItemNameConfig = {
  rules: [{ required: true, message: 'Please input Item name!' }],
};
const expenseDateConfig = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

interface Props {
  form: any,
  Setting: any,
}

class NormalExpenseForm extends React.PureComponent<Props, {}> {
  render() {
    const {Setting} = this.props;
    const categories:Array<string> = Setting.categories.items;
    const { getFieldDecorator } = this.props.form;
    // console.log(this.props, ' setting');
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('itemName', ItemNameConfig)(
            <Input
              prefix={<Icon type='edit' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Item name'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('amount', ItemNameConfig)(
            <Input
              prefix={<Icon type='dollar' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Amount'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('expense-date', expenseDateConfig)(<DatePicker />)}
        </Form.Item>
        <Form.Item>
        <Select placeholder='Select a category'>
          {categories.map(cat => (<Option key={cat} value={cat}>{cat}</Option>))}
        </Select>
        </Form.Item>
      </Form>
    )
  }
}

const ExpenseForm = Form.create({name: 'expense_form'})(NormalExpenseForm);
const mapStateToProps = ({Setting, Expense}: any) => ({Setting, Expense});
export default connect(mapStateToProps)(ExpenseForm);
