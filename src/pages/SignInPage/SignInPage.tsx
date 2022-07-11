import Dots from '@/assets/pictures/dots.png';
import SignInPageIllus from '@/assets/pictures/login-illus-1.png';
import { Checkbox, Divider, Form, Input } from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.scss';

interface SignInPageProps {}

const { Item } = Form;

const SignInPage: FunctionComponent<SignInPageProps> = () => {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(() => {
    if (window.innerWidth < 768) {
      return false;
    }
    return true;
  });
  const [, setReload] = useState(false);
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
    <div className='sign-in-page'>
      {isDesktop ? (
        <div className='sign-in-page-main'>
          {isDesktop ? (
            <div className='sign-in-page-sider'>
              <img src={SignInPageIllus} alt='' className='sider-illus' />
              <img src={Dots} alt='' className='dots-1' />
              <img src={Dots} alt='' className='dots-2' />
            </div>
          ) : null}
          <Form
            className='main-form'
            layout={'vertical'}
            labelCol={{ style: { fontWeight: 700 } }}
          >
            <b>Welcome</b>
            <Item
              label={'Username'}
              name={'username'}
              style={{ width: '100%', marginBottom: 10 }}
            >
              <Input />
            </Item>
            <Item
              label={'Password'}
              name={'password'}
              style={{ width: '100%', marginBottom: 10 }}
            >
              <Input.Password style={{ borderRadius: 4 }} />
            </Item>
            <Form.Item
              name='remember'
              valuePropName='checked'
              style={{ width: '100%', marginBottom: 25 }}
            >
              <Checkbox style={{ marginLeft: 2 }}>Remember me</Checkbox>
            </Form.Item>

            <div className='sign-in-btn'>Sign In</div>
            <div className='forgot-password'>Forgot your password?</div>
            <Divider />
            <div className='sign-up-navigation'>
              <span>New to My Query?</span>
              <span
                className={'sign-up-navigate'}
                onClick={() => {
                  navigate('/sign-up', { replace: true });
                }}
              >
                {' '}
                Sign Up
              </span>
            </div>
          </Form>
        </div>
      ) : (
        <div className='mobile-login'>
          <Form
            className='main-form'
            layout={'vertical'}
            labelCol={{ style: { fontWeight: 700 } }}
          >
            <b>Welcome</b>
            <Item
              label={'Username'}
              name={'username'}
              style={{ width: '100%', marginBottom: 10 }}
            >
              <Input />
            </Item>
            <Item
              label={'Password'}
              name={'password'}
              style={{ width: '100%', marginBottom: 10 }}
            >
              <Input.Password style={{ borderRadius: 4 }} />
            </Item>
            <Form.Item
              name='remember'
              valuePropName='checked'
              style={{ width: '100%', marginBottom: 25 }}
            >
              <Checkbox style={{ marginLeft: 2 }}>Remember me</Checkbox>
            </Form.Item>

            <div className='sign-in-btn'>Sign In</div>
            <div className='forgot-password'>Forgot your password?</div>
            <Divider />
            <div className='sign-up-navigation'>
              <span>New to My Query?</span>
              <span
                className={'sign-up-navigate'}
                onClick={() => {
                  navigate('/sign-up', { replace: true });
                }}
              >
                Sign Up
              </span>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
