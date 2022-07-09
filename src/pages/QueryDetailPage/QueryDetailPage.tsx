import CreateQueryModal from '@/components/CreateQueryModal/CreateQueryModal';
import QueryAnswerCard from '@/components/QueryAnswerCard/QueryAnswerCard';
import QueryDetailPageQuestionCard from '@/components/QueryDetailPage/QueryDetailPageQuestionCard';
import { FormOutlined, MessageOutlined } from '@ant-design/icons';
import { Col, Divider, Form, Input, Modal, Row } from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import './QueryDetailPage.scss';

interface QueryDetailPageProps {}

const QueryDetailPage: FunctionComponent<QueryDetailPageProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formAnswer] = Form.useForm();
  const [isDesktop, setIsDesktop] = useState(true);
  const [, setReload] = useState(false);

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    if (windowSize.innerWidth < 994) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
      setReload((prev) => !prev);
    }
  }, [windowSize]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  /************** */

  /**
   * Start new query handle
   */
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  /**
   * End new query handle
   */

  /************** */

  const handleFormAnswerFinish = (v: any) => {
    console.log(v);
  };

  return (
    <Row className='query-detail-page' gutter={[20, 15]} justify={'center'}>
      <Col className='query-detail-page-content' lg={{ span: 18 }}>
        <Modal
          title='New Query'
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <CreateQueryModal />
        </Modal>
        <div className='query-detail-page-content-header'>
          <div className='user-card-info'>
            <img
              src='https://thumbs.dreamstime.com/b/portrait-smiling-school-teacher-holding-books-classroom-77909586.jpg'
              alt=''
            />
            <div className='info-detail'>
              <b className='info-detail-name'>Ana</b>
              <span className='info-detail-date'>June 23, 2022</span>
            </div>
          </div>

          <div className='user-card-statistic'>
            <div className='user-card-statistic-item'>
              <b>43</b>
              <span>Answers</span>
            </div>
            <div className='user-card-statistic-item'>
              <b>222</b>
              <span>Votes</span>
            </div>
            <div className='user-card-statistic-item'>
              <b>2</b>
              <span>Stared</span>
            </div>
          </div>
        </div>

        <div className='query-detail-page-content-main'>
          <QueryDetailPageQuestionCard />
          <Form
            className='answer-field'
            form={formAnswer}
            onFinish={handleFormAnswerFinish}
            layout={'vertical'}
          >
            <Form.Item name={'queryAnswer'} label={'Your Answer'}>
              <Input.TextArea
                autoSize
                style={{ minHeight: 100 }}
              ></Input.TextArea>
            </Form.Item>
            <div className='btn answer-btn' onClick={() => formAnswer.submit()}>
              <MessageOutlined />
              Answer it
            </div>
          </Form>
          <Divider orientation='left'>
            <p style={{ fontSize: 16, margin: 0 }}>Answers</p>
          </Divider>

          <div className='answer-list'>
            <QueryAnswerCard />
            <QueryAnswerCard />
            <QueryAnswerCard />
            <QueryAnswerCard />
            <QueryAnswerCard />
            <QueryAnswerCard />
          </div>
        </div>
      </Col>
      {isDesktop ? (
        <Col className='query-detail-page-recommendation' lg={{ span: 6 }}>
          <div className='query-recommendation'>
            <b>Related queries</b>
            <Divider
              style={{
                borderTopColor: '#1C1D1F',
                color: '#1C1D1F',
                margin: '12px 0',
              }}
            />
            <div className='recommend-query-list'>
              <div className='recommend-query'>
                <FormOutlined />
                <span className='recommend-query-title'>Recommend title 1</span>
              </div>
              <div className='recommend-query'>
                <FormOutlined />
                <span className='recommend-query-title'>Recommend title 1</span>
              </div>
              <div className='recommend-query'>
                <FormOutlined />
                <span className='recommend-query-title'>Recommend title 1</span>
              </div>
              <div className='recommend-query'>
                <FormOutlined />
                <span className='recommend-query-title'>
                  Recommend title long long long long long long long
                </span>
              </div>
              <div className='recommend-query'>
                <FormOutlined />
                <span className='recommend-query-title'>Recommend title 1</span>
              </div>
            </div>
          </div>
        </Col>
      ) : null}
    </Row>
  );
};

export default QueryDetailPage;
