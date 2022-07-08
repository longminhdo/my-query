import '@/App.scss';
import AppLayout from '@/components/Layout/AppLayout';
import MyRoutes from '@/routes/MyRoutes';
import { useLayoutEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

function App() {
  const Wrapper = ({ children }: any) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <AppLayout>
          <MyRoutes />
        </AppLayout>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
