import { FunctionComponent } from 'react';
import {
  CalendarOutlined,
  CaretDownFilled,
  CaretUpFilled,
} from '@ant-design/icons';
import './QueryAnswerCard.scss';

interface QueryAnswerCardProps {}

const QueryAnswerCard: FunctionComponent<QueryAnswerCardProps> = () => {
  return (
    <div className='query-answer-card'>
      <img
        src='https://thumbs.dreamstime.com/b/portrait-smiling-school-teacher-holding-books-classroom-77909586.jpg'
        alt=''
      />
      <div className='query-answer-card-main'>
        <div className='user-info'>
          <span className='name'>This is a name</span>
          <span className='date'>
            <CalendarOutlined />
            <span>June 20, 2022</span>
          </span>
        </div>
        <div className='answer-content'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          omnis at vel culpa suscipit maxime similique laudantium placeat neque
          ut dicta, natus est, excepturi hic aliquam iure dignissimos sequi.
          Similique.
        </div>
        <div className='vote-field'>
          <CaretUpFilled className='vote-item' />
          <span>24</span>
          <CaretDownFilled className='vote-item' />
        </div>
      </div>
    </div>
  );
};

export default QueryAnswerCard;
