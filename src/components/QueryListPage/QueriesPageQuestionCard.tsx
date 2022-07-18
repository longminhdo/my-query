import QuestionTag from '@/components/CategoryTag/CategoryTag';
import { Divider } from 'antd';
import { FunctionComponent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './QueriesPageQuestionCard.scss';

interface QueriesPageQuestionCardProps {
  post: any;
}

const QueriesPageQuestionCard: FunctionComponent<
  QueriesPageQuestionCardProps
> = ({ post }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`${location.pathname}/${post.id}`, { replace: false });
  };

  const handleCardClick = () => {
    if (window.innerWidth < 800) {
      navigate(`${location.pathname}/${post.id}`, { replace: false });
    }
  };

  return (
    <div className='queries-page-question-card' onClick={handleCardClick}>
      <div className='question-card-header'>
        <h2 className='card-title' onClick={handleOnClick}>
          {post?.title}
        </h2>
        <p className='card-info'>
          <b>
            {post?.user.last_name} {post?.user.first_name}
          </b>
          - May 04, 2022
        </p>
      </div>
      <Divider />
      <div className='card-content'>
        <p>{post?.content}</p>
        <div className='question-tags'>
          <QuestionTag tagName={'math'} />
          <QuestionTag tagName={'calculus'} />
          <QuestionTag tagName={'integral'} />
        </div>
      </div>
      <Divider />
      <div className='question-react-info-field'>
        <span className='question-react-info'>{post.upvote} Up votes</span>
        <span className='question-react-info'> {post.downvote} Down votes</span>
        <span className='question-react-info'> {post.comments} Comments</span>
      </div>
    </div>
  );
};

export default QueriesPageQuestionCard;
