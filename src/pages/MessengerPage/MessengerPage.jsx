import { AppContext } from '@/contexts/AppContext';
import { useContext, useState } from 'react';
import { Chat } from 'stream-chat-react';
import { ChannelContainer, ChannelListContainer } from './components';

import 'stream-chat-react/dist/css/index.css';
import './MessengerPage.scss';

const MessengerPage = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { client } = useContext(AppContext);

  return (
    <div className='messenger-page'>
      <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
          <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
          />
          <ChannelContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
          />
        </Chat>
      </div>
    </div>
  );
};

export default MessengerPage;
