import { FunctionComponent } from 'react';
import './LandingPageQuestionCard.scss';

interface LandingPageQuestionCardProps {}

const LandingPageQuestionCard: FunctionComponent<
  LandingPageQuestionCardProps
> = () => {
  return (
    <div className='landing-page-question-card'>
      <div className='question-card-header'>
        <h2>Title</h2>
        <p>Ambert - May 04, 2022</p>
      </div>
    </div>
  );
};

export default LandingPageQuestionCard;
