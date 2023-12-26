import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { CHAT_ENGINE_PROJECT_ID } from './constants';

const ChatsPage = (props) => {

  console.log(props);

  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId={CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />

    </div>
  );
};

export default ChatsPage;