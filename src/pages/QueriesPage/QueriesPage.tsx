import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';
import { FunctionComponent, useState } from 'react';
import { Icon } from '@iconify/react';
import { ArrowDownOutlined } from '@ant-design/icons';
import './QueriesPage.scss';

interface QueriesPageProps {}

const QueriesPage: FunctionComponent<QueriesPageProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formSearch] = Form.useForm();

  //start search input
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const handleSearchKeyUp = (event: any) => {
    if (event.key === 'Enter') {
      if (formSearch.getFieldValue('searchQuery')) {
        formSearch.submit();
      }
      event.target.blur();
    }
  };

  const handleSortOnChange = (v: any) => {
    formSearch.submit();
  };

  //end search input

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Row className='queries-page' gutter={[20, 15]} justify={'center'}>
      <Col className='queries-page-filter' lg={{ span: 4 }}>
        <div className='filter-by-query'>
          <b>Queries</b>
          <div className='filter-by-query-list'>
            <div className='filter-by-query-item active'>All queries</div>
            <div className='filter-by-query-item '>My queries</div>
            <div className='filter-by-query-item'>Saved queries</div>
          </div>
        </div>
      </Col>
      <Col className='queries-page-content' lg={{ span: 14 }}>
        <Modal
          destroyOnClose
          title='New Query'
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          // footer={<button>New Query</button>}
          okText={'Post'}
          okButtonProps={{
            style: { background: '#ee834e', border: 'none', fontWeight: 500 },
          }}
          cancelButtonProps={{
            style: { fontWeight: 500 },
          }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <div className='queries-page-content-header'>
          <div className='new-query-btn' onClick={showModal}>
            New Query
          </div>
          <Form
            form={formSearch}
            onFinish={onFinish}
            className={'search-query-form'}
          >
            <Form.Item name={'searchQuery'}>
              <Input
                placeholder='Seach query'
                allowClear
                onKeyUp={(e) => handleSearchKeyUp(e)}
              />
            </Form.Item>
            <Form.Item name={'sortQuery'}>
              <Select
                placeholder='Sort'
                allowClear
                onChange={handleSortOnChange}
                className={'sort-query'}
                style={{
                  width: 'fit-content',
                  minWidth: 80,
                }}
                dropdownMatchSelectWidth={false}
                suffixIcon={<Icon icon='gg:sort-az' style={{ fontSize: 20 }} />}
                placement={'bottomRight'}
                optionLabelProp='label'
              >
                <Select.Option value='newest' label={'Sort by: Newest'}>
                  <span>Newest</span>
                </Select.Option>
                <Select.Option value='oldest' label={'Sort by: Oldest'}>
                  <span>Oldest</span>
                </Select.Option>
                <Select.Option
                  value='vote-asc'
                  label={'Sort by: Vote Ascending'}
                >
                  <span>Vote Ascending</span>
                </Select.Option>
                <Select.Option
                  value='vote-des'
                  label={'Sort by: Vote Descending'}
                >
                  <span>Vote Descending</span>
                </Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </Col>
      <Col className='queries-page-recommendation' lg={{ span: 6 }}>
        <div className='query-recommendation'>a</div>
      </Col>
    </Row>
  );
};

export default QueriesPage;
