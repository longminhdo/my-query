import MyUploadImage from '@/components/MyUploadImage/MyUploadImage';
import TagsDropDown from '@/components/TagsDropDown/TagsDropDown';
import { PictureOutlined, TagsOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { FunctionComponent, useState } from 'react';
import './CreateQueryModal.scss';

interface CreateQueryModalProps {
  tags?: any;
}

const { Item } = Form;

const CreateQueryModal: FunctionComponent<CreateQueryModalProps> = ({
  tags,
}) => {
  const [formCreate] = Form.useForm();
  const [isTagSelectVisible, setIsTagSelectVisible] = useState(false);
  const [isUploadMediaShown, setIsUploadMediaShown] = useState(false);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  /**
   * Upload img
   */

  /**
   * Upload img
   */

  return (
    <div className='create-query-modal'>
      <Form layout='vertical' form={formCreate} onFinish={onFinish}>
        <Item name={'title'} label={'Title'}>
          <Input placeholder='Title' style={{ borderRadius: 4 }}></Input>
        </Item>
        <Item name={'mainQuery'} label={'Query'}>
          <Input.TextArea
            placeholder='Put your query here'
            autoSize
            style={{ minHeight: 100, borderRadius: 4 }}
          ></Input.TextArea>
        </Item>

        {isTagSelectVisible ? (
          <TagsDropDown form={formCreate} tags={tags} />
        ) : null}

        {isUploadMediaShown ? <MyUploadImage form={formCreate} /> : null}

        <div className='optional-fields'>
          <TagsOutlined
            className='optional-item'
            onClick={() => setIsTagSelectVisible((prev) => !prev)}
          />
          <PictureOutlined
            className='optional-item'
            onClick={() => setIsUploadMediaShown((prev) => !prev)}
          />
        </div>

        <Item style={{ marginBottom: 10 }}>
          <div
            className='create-submit-btn'
            onClick={() => formCreate.submit()}
          >
            Post
          </div>
        </Item>
      </Form>
    </div>
  );
};

export default CreateQueryModal;
