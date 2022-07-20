import QuestionTag from '@/components/CategoryTag/CategoryTag';
import { calculateDate } from '@/utils/utils';
import { Divider } from 'antd';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPageQuestionCard.scss';

interface LandingPageQuestionCardProps {
  post: any;
}

const LandingPageQuestionCard: FunctionComponent<
  LandingPageQuestionCardProps
> = ({ post }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/query/${post?.id}`);
  };
  console.log(post);

  return (
    <div className='landing-page-question-card'>
      <div className='question-card-header'>
        <h2 className='card-title' onClick={handleOnClick}>
          {post?.title}
        </h2>
        <div className='card-info'>
          <b>{`${post?.user?.last_name} ${post?.user?.first_name}`}</b>
          <span> - </span>
          <span>{calculateDate(post?.created_at)}</span>
        </div>
      </div>
      <Divider />
      <div className='card-content'>
        <p>{post?.content}</p>
        <div className='question-tags'>
          {post?.tags.map((el: any) => (
            <QuestionTag tagName={el} key={el} />
          ))}
        </div>
      </div>
      <Divider />
      <div className='question-react-info-field'>
        <span className='question-react-info'>{post?.upvote} Up votes</span>
        <span className='question-react-info'>{post?.downvote} Down votes</span>
        <span className='question-react-info'> {post?.comments} Comments</span>
      </div>
    </div>
  );
};

export default LandingPageQuestionCard;
