import React from 'react';
import { Input, Row, Col, Form, List, Button } from 'antd';
import { connect } from 'react-redux';

import * as SettingActions from '../../actions/setting';

import InputBudget from './input-budget';
import InputCategory from './input-category';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

interface Props {
  form: any,
  dispatch: any,
  Setting: any,
}

class NormalSettingsPage extends React.PureComponent<Props, {}> {
  handleSaveBudget = (value: number) => {
    this.props.dispatch(SettingActions.receiveBudget(value));
  }

  handleAddCategory = (value: string) => {
    const {Setting} = this.props;
    const categories: Array<string> = Setting.categories.items;
    if(categories.includes(value)) {
      alert('Category already exits');
      return;
    }
    this.props.dispatch(SettingActions.receiveCategories([...categories, value]));
  }

  render() {
    const {Setting} = this.props;
    // console.log(this.props)
    const { getFieldDecorator } = this.props.form;
    const budget = Setting.budget.total;
    const categories: Array<string> = Setting.categories.items;

    return (
      <div style={{maxWidth: 400}}>
        <InputBudget
          getFieldDecorator={getFieldDecorator}
          defaultValue={budget}
          onSubmit={this.handleSaveBudget}
        />

        <InputCategory
          getFieldDecorator={getFieldDecorator}
          defaultValue={''}
          onSubmit={this.handleAddCategory}
        />
        
        <Form>
          <Form.Item label='Categories'>
            <List
              bordered
              dataSource={categories}
              renderItem={item => <List.Item>{item}</List.Item>}
              rowKey={item => item}
            />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const SettingsPage = Form.create({name: 'settings_form'})(NormalSettingsPage);
const mapStateToProps = ({Setting, Expense}: any) => ({Setting, Expense});
export default connect(mapStateToProps)(SettingsPage);
