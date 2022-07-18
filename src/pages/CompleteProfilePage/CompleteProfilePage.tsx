import UploadPictureProfile from '@/components/UploadPictureProfile/UploadPictureProfile';
import { getUser, login, updateUser } from '@/services/auth.service';
import {
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
} from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyQueryLogoOrange from '@/assets/myquery-logo.svg';
import './CompleteProfilePage.scss';
import { validatePhoneNumber } from '@/utils/utils';
import { routePaths } from '@/const/routePaths';
import { updateTutor } from '@/services/tutor.service';

interface CompleteProfilePageProps {}

const { Item } = Form;
const { Option } = Select;

const CompleteProfilePage: FunctionComponent<CompleteProfilePageProps> = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState(() => {
    const type = localStorage.getItem('accountType');
    if (type) {
      return type;
    }
    return null;
  });
  const [isDesktop, setIsDesktop] = useState(() => {
    if (window.innerWidth < 768) {
      return false;
    }
    return true;
  });
  const [, setReload] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const myUserId = localStorage.getItem('userId');
    const myToken = localStorage.getItem('myQueryToken');

    if (myToken && myUserId) {
      getUser(myUserId).then((res) => {
        const data = res?.data?.data[0];
        if (
          data?.account_type &&
          data?.first_name &&
          data?.last_name &&
          data?.gender &&
          data?.phone &&
          data?.dob
        ) {
          navigate(routePaths.HOME);
        }
      });
    }
  }, [navigate]);

  const handleSubmit = async (v: any) => {
    const data = {
      account_type: v.accountType,
      first_name: v.firstName,
      last_name: v.lastName,
      phone: v.phoneNumber,
      payment_status: true,
      avatar: v.pictureProfile,
      dob: v?.dob,
      gender: v?.gender,
    };

    const res = await updateUser(
      data,
      localStorage.getItem('myQueryToken') as string
    );

    if (res?.data?.status_code === 1) {
      if (v.accountType === 'Instructor') {
        const dataTutor = {
          hour_price: v?.chargeCallPrice,
          lesson_price: v?.lessonPrice,
        };

        updateTutor(
          dataTutor,
          localStorage.getItem('myQueryToken') as string
        ).then((res) => {
          return navigate(routePaths.HOME, { replace: true });
        });
      }

      return navigate(routePaths.HOME, { replace: true });
    }
  };

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    if (windowSize.innerWidth < 768) {
      setReload((prev) => !prev);
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
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

  return (
    <div className='complete-profile-page'>
      {isDesktop ? (
        <Form
          className='main-form'
          layout={'vertical'}
          labelCol={{ style: { fontWeight: 700 } }}
          form={form}
          onFinish={handleSubmit}
        >
          <img src={MyQueryLogoOrange} alt='' />
          <b
            style={{
              fontStyle: 'italic',
              fontSize: 20,
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            Please fill in the following details to complete your profile
          </b>
          <Item name={'pictureProfile'}>
            <UploadPictureProfile form={form} size={75} />
          </Item>

          <Row style={{ width: '100%' }}>
            <Col md={{ span: 11, offset: 0 }}>
              <Item
                label={'First Name'}
                name={'firstName'}
                style={{ margin: 0, marginBottom: 10 }}
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Input placeholder='-- First Name --' />
              </Item>
            </Col>
            <Col md={{ span: 11, offset: 2 }}>
              <Item
                name={'lastName'}
                label={'Last Name'}
                style={{ margin: 0, marginBottom: 10 }}
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Input placeholder='-- Last Name --' />
              </Item>
            </Col>
            <Col></Col>
          </Row>

          <Row style={{ width: '100%' }}>
            <Col md={{ span: 11, offset: 0 }}>
              <Item
                label={'Phone Number'}
                name={'phoneNumber'}
                style={{ margin: 0, marginBottom: 10 }}
                validateTrigger={'onBlur'}
                rules={[
                  { required: true, message: 'This field is required' },
                  {
                    validator: (_, v) => {
                      if (v && !validatePhoneNumber(v)) {
                        return Promise.reject(
                          new Error('Invalid phone number.')
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input placeholder='-- Phone Number --' />
              </Item>
            </Col>
            <Col md={{ span: 11, offset: 2 }}>
              <Item
                label={'Date of Birth'}
                name={'dob'}
                style={{ margin: 0, marginBottom: 10 }}
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <DatePicker
                  placeholder='-- Select Date --'
                  style={{ width: '100%' }}
                />
              </Item>
            </Col>
            <Col></Col>
          </Row>

          <Row style={{ width: '100%' }}>
            <Col md={{ span: 11, offset: 0 }}>
              <Item
                label={'Gender'}
                name={'gender'}
                style={{ margin: 0, marginBottom: 10 }}
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Select placeholder='-- Gender --'>
                  <Option value='Male'>Male</Option>
                  <Option value='Female'>Female</Option>
                </Select>
              </Item>
            </Col>
            <Col md={{ span: 11, offset: 2 }}>
              <Item
                name={'accountType'}
                label={'Account Type'}
                style={{ margin: 0, marginBottom: 10 }}
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Select
                  placeholder='-- Type --'
                  onChange={(v) => setAccountType(v)}
                >
                  <Option value='Instructor'>Instructor</Option>
                  <Option value='Learner'>Student</Option>
                </Select>
              </Item>
            </Col>
            <Col></Col>
          </Row>

          {accountType === 'Instructor' && (
            <Row style={{ width: '100%' }}>
              <Col md={{ span: 11, offset: 0 }}>
                <Item
                  label={'Charge Call Price'}
                  name={'chargeCallPrice'}
                  style={{ margin: 0, marginBottom: 10 }}
                  rules={[
                    { required: true, message: 'This field is required' },
                  ]}
                >
                  <InputNumber
                    placeholder='-- Price --'
                    style={{ width: '100%' }}
                    addonAfter='VNĐ'
                    formatter={(value) =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                  />
                </Item>
              </Col>
              <Col md={{ span: 11, offset: 2 }}>
                <Item
                  name={'lessonPrice'}
                  label={'Lesson Price'}
                  style={{ margin: 0, marginBottom: 10 }}
                  rules={[
                    { required: true, message: 'This field is required' },
                  ]}
                >
                  <InputNumber
                    placeholder='-- Price --'
                    style={{ width: '100%' }}
                    addonAfter='VNĐ'
                    formatter={(value) =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                  />
                </Item>
              </Col>
              <Col></Col>
            </Row>
          )}

          <div className='btn-field'>
            <div className='btn reset-btn' onClick={() => form.resetFields()}>
              Reset
            </div>
            <div className='btn submit-btn' onClick={() => form.submit()}>
              Submit
            </div>
          </div>
        </Form>
      ) : (
        <div className='mobile-login'></div>
      )}
    </div>
  );
};

export default CompleteProfilePage;
