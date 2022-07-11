import Dots from '@/assets/pictures/dots.png';
import SignInPageIllus from '@/assets/pictures/login-illus-1.png';
import { Checkbox, Divider, Form, Input } from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.scss';

interface SignUpPageProps {}

const { Item } = Form;

const SignUpPage: FunctionComponent<SignUpPageProps> = () => {
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
    <div className='sign-up-page'>
      {isDesktop ? (
        <div className='sign-up-page-main'>
          {isDesktop ? (
            <div className='sign-up-page-sider'>
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
            <Item
              label={'Confirm Password'}
              name={'confirmPassword'}
              style={{ width: '100%', marginBottom: 10 }}
            >
              <Input.Password style={{ borderRadius: 4 }} />
            </Item>

            <Form.Item
              name='confirmToTerm'
              valuePropName='checked'
              style={{ width: '100%', marginBottom: 25 }}
            >
              <Checkbox style={{ marginLeft: 2 }}>
                I have read and agree to the Privacy Policy
              </Checkbox>
            </Form.Item>

            <div className='sign-up-btn'>Sign Up</div>

            <Divider />
            <div className='sign-up-navigation'>
              <span>Already have account?</span>
              <span
                className={'sign-up-navigate'}
                onClick={() => {
                  navigate('/sign-in', { replace: true });
                }}
              >
                Sign In
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
            <Item
              label={'Confirm Password'}
              name={'confirmPassword'}
              style={{ width: '100%', marginBottom: 10 }}
            >
              <Input.Password style={{ borderRadius: 4 }} />
            </Item>

            <Form.Item
              name='confirmToTerm'
              valuePropName='checked'
              style={{ width: '100%', marginBottom: 25 }}
            >
              <Checkbox style={{ marginLeft: 2 }}>
                I have read and agree to the Privacy Policy
              </Checkbox>
            </Form.Item>

            <div className='sign-up-btn'>Sign Up</div>

            <Divider />
            <div className='sign-up-navigation'>
              <span>Already have account?</span>
              <span
                className={'sign-up-navigate'}
                onClick={() => {
                  navigate('/sign-in', { replace: true });
                }}
              >
                Sign In
              </span>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
