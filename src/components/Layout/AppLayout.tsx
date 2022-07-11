import MyQueryLogo from '@/assets/myquery-logo.svg';
import MyQueryLogoWhite from '@/assets/myquery-logo-white.svg';
import { routePaths } from '@/const/routePaths';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PhoneFilled,
  HomeFilled,
  MailFilled,
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
  CopyrightOutlined,
} from '@ant-design/icons';
import { Col, Drawer, Layout, Row } from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './AppLayout.scss';

interface AppLayoutProps {
  children: any;
}

const { Header, Content, Footer } = Layout;

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [, setReload] = useState(false);
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    if (windowSize.innerWidth < 768) {
      setReload((prev) => !prev);
    } else {
      setVisible(false);
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

  //drawer mobile

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return location.pathname === '/sign-in' ||
    location.pathname === '/sign-up' ? (
    <Content style={{}}>{children}</Content>
  ) : (
    <Layout className='app-layout'>
      {windowSize.innerWidth > 768 ? (
        <Header
          className='app-layout-header'
          style={{ position: 'fixed', zIndex: 1, width: '100%' }}
        >
          <div className='logo'>
            <Link
              to={routePaths.HOME}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img src={MyQueryLogo} alt='' height={62} />
            </Link>
          </div>
          <div className='header-sections'>
            <NavLink to={routePaths.QUERIES_PAGE} className='section-item'>
              Query
            </NavLink>
            <NavLink to={routePaths.TUTOR_LIST_PAGE} className='section-item'>
              Tutor Market
            </NavLink>
            <NavLink to={routePaths.ABOUT_US} className='section-item'>
              About us
            </NavLink>
            <Link to={routePaths.SIGN_IN_PAGE}>
              <div className='login-btn'>
                <span>Sign In</span>
              </div>
            </Link>
          </div>
        </Header>
      ) : (
        <Header className='app-layout-header-mobile'>
          <MenuUnfoldOutlined
            onClick={showDrawer}
            style={{ fontSize: 20, color: '#1c1d1f !important' }}
          />
          <div className='logo' style={{ transform: 'translateX(-5px)' }}>
            <Link
              to={routePaths.HOME}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img src={MyQueryLogo} alt='' height={62} />
            </Link>
          </div>
          <span></span>
        </Header>
      )}
      <Drawer
        title='Menu'
        placement='left'
        onClose={onClose}
        visible={visible}
        width={'75%'}
        closeIcon={
          <MenuFoldOutlined style={{ fontSize: 20, color: '#1c1d1f' }} />
        }
        destroyOnClose
      >
        <div className='header-sections-mobile'>
          <NavLink to={routePaths.QUERIES_PAGE}>
            <p className='section-item-mobile'>Query</p>
          </NavLink>
          <NavLink to={routePaths.TUTOR_LIST_PAGE}>
            <p className='section-item-mobile'>Tutor Market</p>
          </NavLink>
          <NavLink to={routePaths.ABOUT_US}>
            <p className='section-item-mobile'>About us</p>
          </NavLink>
          <Link to={routePaths.SIGN_IN_PAGE}>
            <div className='login-btn'>
              <span>Sign In</span>
            </div>
          </Link>
        </div>
      </Drawer>
      <Content style={{ marginTop: 70 }}>{children}</Content>
      <Footer className='app-layout-footer'>
        <Row className='footer-content' gutter={[24, 16]}>
          <Col
            className='logo-col'
            xs={{ span: 24, order: 1 }}
            md={{ span: 17, order: 1 }}
            lg={{ span: 8, order: 1 }}
            style={{ transform: 'translateY(-3px)' }}
          >
            <img
              src={MyQueryLogoWhite}
              alt=''
              style={{ transform: 'translateY(-7px)' }}
            />
            <p style={{ marginBottom: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
              amet, diam neque, justo, magna amet, turpis tempus sed. Est auctor
              sit eleifend mi nulla. At donec fusce rutrum in scelerisque
              tincidunt.{' '}
            </p>
          </Col>
          <Col
            className='footer-col'
            xs={{ span: 14, order: 2 }}
            md={{ span: 7, order: 2 }}
            lg={{ span: 5, order: 2 }}
          >
            <b>Quick Links</b>
            <div className='footer-col-content'>
              <div className='content-item'>About us</div>
              <div className='content-item'>Term and Conditions</div>
              <div className='content-item'>User's Guide</div>
              <div className='content-item'>Support Center</div>
            </div>
          </Col>
          <Col
            className='footer-col'
            xs={{ span: 24, order: 4 }}
            md={{ span: 17, order: 3 }}
            lg={{ span: 8, order: 3 }}
          >
            <b>Contact us</b>
            <div className='footer-col-content'>
              <div className='content-item'>
                <Row>
                  <Col xs={2} md={{ span: 2 }} lg={3}>
                    <MailFilled />
                  </Col>
                  <Col xs={{ span: 21 }} md={{ span: 22 }} lg={21}>
                    <div style={{ width: 'fit-content', marginLeft: 5 }}>
                      customer.support@myquery.com
                    </div>
                  </Col>
                </Row>
              </div>
              <div className='content-item'>
                <Row>
                  <Col xs={2} md={{ span: 2 }} lg={3}>
                    <PhoneFilled />
                  </Col>
                  <Col xs={{ span: 22 }} md={{ span: 22 }} lg={21}>
                    <div style={{ width: 'fit-content', marginLeft: 5 }}>
                      +84 823-232-222
                    </div>
                  </Col>
                </Row>
              </div>
              <div className='content-item'>
                <Row>
                  <Col xs={2} md={{ span: 2 }} lg={3}>
                    <HomeFilled />
                  </Col>
                  <Col xs={{ span: 21 }} md={{ span: 22 }} lg={21}>
                    <div style={{ width: 'fit-content', marginLeft: 5 }}>
                      Sailling Tower, 111A Pastuer Street, District 1, Ho Chi
                      Minh City, Viet Nam
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col
            className='footer-col'
            xs={{ span: 10, order: 3 }}
            md={{ span: 7, order: 4 }}
            lg={{ span: 3, order: 4 }}
          >
            <b>Follow us</b>
            <div className='footer-col-content-media'>
              <p>
                <FacebookFilled style={{ fontSize: 24 }} />
              </p>
              <p>
                <InstagramFilled style={{ fontSize: 24 }} />
              </p>
              <p>
                <TwitterSquareFilled style={{ fontSize: 24 }} />
              </p>
            </div>
          </Col>
        </Row>
        <div className='footer-copyright'>
          <CopyrightOutlined style={{ fontSize: 16, marginRight: 8 }} />
          <span>myquery Inc. 2022 All rights reserved</span>
        </div>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
