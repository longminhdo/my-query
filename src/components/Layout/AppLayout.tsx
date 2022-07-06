import { Layout } from 'antd';
import { routePaths } from '@/const/routePaths';
import { FunctionComponent } from 'react';
import './AppLayout.scss';
import MyQueryLogo from '@/assets/myquery-logo.svg';
import { Link, NavLink } from 'react-router-dom';

interface AppLayoutProps {
  children: any;
}

const { Header, Content, Footer } = Layout;

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  return (
    <Layout className='app-layout'>
      <Header
        className='app-layout-header'
        style={{ position: 'fixed', zIndex: 1, width: '100%' }}
      >
        <div className='logo'>
          <NavLink
            to={routePaths.HOME}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img src={MyQueryLogo} alt='' height={62} />
          </NavLink>
        </div>
        <div className='header-sections'>
          <NavLink to={routePaths.QUERIES_PAGE} className='section-item'>
            Query
          </NavLink>
          <NavLink to={routePaths.TUTOR_LIST_PAGE} className='section-item'>
            Tutor Market
          </NavLink>
          <NavLink to={routePaths.HOME} className='section-item'>
            About us
          </NavLink>

          <Link to={routePaths.SIGN_IN_PAGE}>
            <div className='login-btn'>
              <span>Sign In</span>
            </div>
          </Link>
        </div>
      </Header>
      <Content style={{ marginTop: 64 }}>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
