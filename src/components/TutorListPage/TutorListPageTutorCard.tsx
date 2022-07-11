import CategoryTag from '@/components/CategoryTag/CategoryTag';
import { Divider } from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import './TutorListPageTutorCard.scss';

interface TutorListPageTutorCardProps {}

const TutorListPageTutorCard: FunctionComponent<
  TutorListPageTutorCardProps
> = () => {
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
    if (windowSize.innerWidth < 999) {
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

  return isDesktop ? (
    <div className='tutor-list-page-tutor-card'>
      <div className='card-content'>
        <img
          src='https://thumbs.dreamstime.com/b/portrait-smiling-school-teacher-holding-books-classroom-77909586.jpg'
          alt=''
        />
        <b className='tutor-name'>Veryveryveyryer log namemmsaksd </b>
        <p> Rate: 8.5/10</p>
        <div className='tutor-tags'>
          <CategoryTag tagName='math' />
          <CategoryTag tagName='pascal' />
          <CategoryTag tagName='C++' />
        </div>
        <div className='tutor-rewards'>
          <div className='tutor-rewards-item'>
            <b> 53</b>
            <p>Student trained</p>
          </div>
          <Divider
            type='vertical'
            style={{ height: 80, borderColor: '#b5b5b5' }}
          />
          <div className='tutor-rewards-item'>
            <b> 153</b>
            <p>Reviews received</p>
          </div>
        </div>
        <div className='card-button'>Hire this tutor</div>
      </div>
    </div>
  ) : (
    <div className='tutor-card-mobile'>
      <img
        src='https://thumbs.dreamstime.com/b/portrait-smiling-school-teacher-holding-books-classroom-77909586.jpg'
        alt=''
      />
      <div className='tutor-card-mobile-content'>
        <b className='tutor-name-mobile'>Anasdasdasdasdasdadasdadasda</b>
        <p> Rate: 8.5/10</p>
        <div className='tutor-tags-mobile'>
          <CategoryTag tagName='math' />
          <CategoryTag tagName='pascal' />
          <CategoryTag tagName='C++' />
          <CategoryTag tagName='C+asdasd+' />
          <CategoryTag tagName='C++' />
          <CategoryTag tagName='C++' />
          <CategoryTag tagName='asdasd' />
          <CategoryTag tagName='C++' />
          <CategoryTag tagName='C++' />
        </div>
      </div>
    </div>
  );
};

export default TutorListPageTutorCard;
