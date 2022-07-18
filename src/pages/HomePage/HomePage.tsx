import { FunctionComponent, useEffect } from 'react';
import { Row, Col, Divider } from 'antd';
import { Icon } from '@iconify/react';
import BackgroundImage from '@/assets/pictures/landing-img-1.jpeg';
import Illustration1 from '@/assets/pictures/landing-illus-section-2_1.png';
import Illustration2 from '@/assets/pictures/landing-illus-section-2_2.png';
import Illustration3 from '@/assets/pictures/landing-illus-section-2_3.png';
import LandingPageQuestionCard from '@/components/LandingPages/LandingPageQuestionCard/LandingPageQuestionCard';
import { routePaths } from '@/const/routePaths';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LandingPageTutorCard from '@/components/LandingPages/LandingPageTutorCard/LandingPageTutorCard';
import './HomePage.scss';

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const myUserId = localStorage.getItem('userId');
  //   const myToken = localStorage.getItem('myQueryToken');

  //   if (myToken && myUserId) {
  //     getUser(myUserId).then((res) => {
  //       const data = res?.data?.data[0];
  //       console.log(data);
  //       if (
  //         !data.account_type ||
  //         !data?.first_name ||
  //         !data?.last_name ||
  //         !data?.gender ||
  //         !data?.phone ||
  //         !data?.dob
  //       ) {
  //         navigate(routePaths.COMPLETE_PROFILE);
  //       }
  //     });
  //   } else {
  //     if (locationPath === routePaths.MESSENGER) {
  //       navigate(routePaths.SIGN_IN_PAGE, { replace: true });
  //     }
  //   }
  // }, []);

  return (
    <div className='home-page'>
      <div
        className='first-section'
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className='first-section-content'>
          <h1>FAQ platform for Student</h1>
          <h2>Find yourself a satisfied answer for any subject. </h2>
          <h2>
            If you found those answers too hard to understand, or just simply
            wonder how they can solve the problem in a such way, <b>CONTACT </b>
            and <b>HIRE</b> them as tutors.
          </h2>
          <h2>Join with us now!</h2>
          <h1>You are...</h1>
          <div className='first-section-buttons'>
            <div
              className='first-section-btn'
              onClick={() => {
                localStorage.setItem('accountType', 'student');
                if (!localStorage.getItem('myQueryToken')) {
                  navigate(routePaths.SIGN_UP_PAGE, { replace: true });
                }
              }}
            >
              Student
            </div>
            <div
              className='first-section-btn'
              onClick={() => {
                localStorage.setItem('accountType', 'tutor');
                if (!localStorage.getItem('myQueryToken')) {
                  navigate(routePaths.SIGN_UP_PAGE, { replace: true });
                }
              }}
            >
              Tutor
            </div>
          </div>
        </div>
      </div>
      <div className='second-section'>
        <h1>What is Quality High Dose Tutoring?</h1>
        <Row className='second-section-content'>
          <Col className='second-section-segment' xs={24} xl={8}>
            <img src={Illustration1} alt='' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              neque aliquam faucibus in. Eget purus sed lorem neque, lectus.
              Odio hendrerit aliquet neque quam varius gravida at. In nunc urna
              morbi diam nulla. Aliquam, id pellentesque sem purus, mattis.{' '}
            </p>
          </Col>
          <Col className='second-section-segment' xs={24} xl={8}>
            <img src={Illustration2} alt='' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              neque aliquam faucibus in. Eget purus sed lorem neque, lectus.
              Odio hendrerit aliquet neque quam varius gravida at. In nunc urna
              morbi diam nulla. Aliquam, id pellentesque sem purus, mattis.{' '}
            </p>
          </Col>
          <Col className='second-section-segment' xs={24} xl={8}>
            <img src={Illustration3} alt='' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              neque aliquam faucibus in. Eget purus sed lorem neque, lectus.
              Odio hendrerit aliquet neque quam varius gravida at. In nunc urna
              morbi diam nulla. Aliquam, id pellentesque sem purus, mattis.{' '}
            </p>
          </Col>
        </Row>
      </div>
      <div className='third-section'>
        <h1>Query for you</h1>
        <div className='third-section-content'>
          <LandingPageQuestionCard />
          <LandingPageQuestionCard />
          <LandingPageQuestionCard />
          <Divider
            style={{
              borderTopColor: '#1C1D1F',
              color: '#1C1D1F',
              margin: '0 0',
            }}
          >
            <Link to={routePaths.QUERIES_PAGE}>
              <div className='my-more-icon'>
                <p style={{ marginBottom: '0', transform: 'translateY(10px)' }}>
                  More
                </p>
                <Icon
                  icon='ic:baseline-expand-more'
                  width='36'
                  style={{ transform: 'translateY(0px)' }}
                />
              </div>
            </Link>
          </Divider>
        </div>
      </div>
      <div className='fourth-section'>
        <h1>Tutor for you</h1>
        <Row className='fourth-section-content' gutter={[0, 13]}>
          <Col className='fourth-section-segment' xs={24} xl={8}>
            <LandingPageTutorCard />
          </Col>
          <Col className='fourth-section-segment' xs={24} xl={8}>
            <LandingPageTutorCard />
          </Col>
          <Col className='fourth-section-segment' xs={24} xl={8}>
            <LandingPageTutorCard />
          </Col>
          <Divider
            style={{
              borderTopColor: '#1C1D1F',
              color: '#1C1D1F',
              margin: '0 0',
            }}
          >
            <Link to={routePaths.TUTOR_LIST_PAGE}>
              <div className='my-more-icon'>
                <p style={{ marginBottom: '0', transform: 'translateY(10px)' }}>
                  More
                </p>
                <Icon
                  icon='ic:baseline-expand-more'
                  width='36'
                  style={{ transform: 'translateY(0px)' }}
                />
              </div>
            </Link>
          </Divider>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
