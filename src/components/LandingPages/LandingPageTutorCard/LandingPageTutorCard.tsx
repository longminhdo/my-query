import CategoryTag from '@/components/CategoryTag/CategoryTag';
import { DEFAULT_AVATAR } from '@/const/const';
import { Divider } from 'antd';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPageTutorCard.scss';

interface LandingPageTutorCardProps {
  tutor: any;
}

const LandingPageTutorCard: FunctionComponent<LandingPageTutorCardProps> = ({
  tutor,
}) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${tutor?.id}`);
  };

  console.log(tutor);

  return (
    <div className='landing-page-tutor-card'>
      <div className='card-content'>
        <img src={tutor?.avatar ? tutor?.avatar : DEFAULT_AVATAR} alt='' />
        <b className='tutor-name' onClick={() => handleOnClick()}>
          {tutor?.last_name}
        </b>
        <p> Rate: 8.5/10</p>
        <div className='tutor-tags'>
          {tutor?.tags?.map((t: any) => (
            <CategoryTag tagName={t} key={t} />
          ))}
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
  );
};

export default LandingPageTutorCard;
