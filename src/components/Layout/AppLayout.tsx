import MyQueryLogo from '@/assets/myquery-logo.svg';
import { routePaths } from '@/const/routePaths';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Drawer, Layout } from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppLayout.scss';

interface AppLayoutProps {
  children: any;
}

const { Header, Content, Footer } = Layout;

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
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

  return (
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
        <Header className='app-layout-header-mobile' hasSider>
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
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
