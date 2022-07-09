import CategoryTag from '@/components/CategoryTag/CategoryTag';
import {
  CaretDownFilled,
  CaretUpFilled,
  EditOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';
import { FunctionComponent } from 'react';
import './QueryDetailPageQuestionCard.scss';

interface QueryDetailPageQuestionCardProps {}

const QueryDetailPageQuestionCard: FunctionComponent<
  QueryDetailPageQuestionCardProps
> = () => {
  return (
    <div className='query-detail-page-question-card'>
      <b className='title'>
        How to iterate through list infinitely with +1 offset each loop?
      </b>
      <Divider style={{ marginTop: 12, marginBottom: 12 }} />
      <div className='question-card-content'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        non quia fuga repudiandae harum incidunt, at aliquid. Molestias dolorem
        nemo modi, voluptatum commodi rem et dignissimos expedita, illo
        accusantium nulla! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Exercitationem non quia fuga repudiandae harum incidunt, at
        aliquid. Molestias dolorem nemo modi, voluptatum commodi rem et
        dignissimos expedita, illo accusantium nulla!
      </div>
      <div className='question-card-tags'>
        <CategoryTag tagName='math' />
        <CategoryTag tagName='C++' />
        <CategoryTag tagName='network' />
      </div>
      <Divider style={{ marginTop: 12, marginBottom: 20 }} />
      <div className='question-card-functions'>
        <div className='vote-field'>
          <CaretUpFilled className='vote-item' />
          <CaretDownFilled className='vote-item' />
        </div>
        <div className='function-buttons'>
          <div className='btn edit-btn'>
            <EditOutlined />
            Edit
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryDetailPageQuestionCard;
