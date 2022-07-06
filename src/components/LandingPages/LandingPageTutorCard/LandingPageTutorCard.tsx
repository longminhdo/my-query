import CategoryTag from '@/components/CategoryTag/CategoryTag';
import { Divider } from 'antd';
import { FunctionComponent } from 'react';
import './LandingPageTutorCard.scss';

interface LandingPageTutorCardProps {}

const LandingPageTutorCard: FunctionComponent<
  LandingPageTutorCardProps
> = () => {
  const handleOnClick = () => {
    //navigate to
  };

  return (
    <div className='landing-page-tutor-card'>
      <div className='card-content'>
        <img
          src='https://thumbs.dreamstime.com/b/portrait-smiling-school-teacher-holding-books-classroom-77909586.jpg'
          alt=''
        />
        <b className='tutor-name'>Ana</b>
        <p> Rate: 8.5/10</p>
        <div className='tutor-tags'>
          <CategoryTag tagName='math' />
          <CategoryTag tagName='pascal' />
          <CategoryTag tagName='C++' />
        </div>
      </div>
    </div>
  );
};

export default LandingPageTutorCard;
