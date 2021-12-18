import React, { useEffect } from 'react';
import './style.css';
import ChatIcon from '@material-ui/icons/Chat';
import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';
import { io } from 'socket.io-client';
import { useForm } from 'react-hook-form';
const socket = io('http://teamedicine.tk:3000');
function Chat(props) {
  const [logs, setLogs] = useState([]);
  const { handleSubmit, register, reset } = useForm();

  const user = JSON.parse(localStorage.getItem('user'));
  socket.on('connect', () => {
    socket.emit('join_room', { room: user.id });
  });

  const onEnterChat = (data, e) => {
    e.preventDefault();
    let mess = data.message;
    socket.emit('chat_text', {
      roomId: user.id,
      senderId: user.id,
      message: mess,
    });
    setLogs([...logs, { senderId: user.id, message: mess }]);
    reset();
    var objDiv = document.getElementById('main-chat-logs');
    objDiv.scrollTop = objDiv.scrollHeight;
  };

  socket.on('res_chat_text',(res) => {
    console.log(res);
    setLogs([...logs, { senderId: res.senderId, message: res.message }]);
    var objDiv = document.getElementById('main-chat-logs');
    objDiv.scrollTop = objDiv.scrollHeight;
  });

  const renderChat = () => {
    return logs.map((log, index) => (
      <div className={`chat-msg ${log.senderId === user.id ? 'me' : 'other'}`} key={index}>
        <div className="log_inline cm-msg-text">
          <span>{log.message}</span>
        </div>
        <br />
      </div>
    ));
  };
  return (
    <>
      <div id="body">
        <div id="chat-circle" className="btn btn-raised">
          <div id="chat-overlay" />
          <ChatIcon />
        </div>
        <div className="chat-box">
          <div className="chat-box-header">
            <span>Hi , {user.name}</span>
            <span className="chat-box-toggle">
              <CancelIcon />
            </span>
          </div>
          <div className="chat-box-body">
            <div className="chat-box-overlay" />
            <div className="chat-logs" id="main-chat-logs">
              {renderChat()}
            </div>
          </div>
          <div className="chat-input">
            <form onSubmit={handleSubmit(onEnterChat)}>
              <input
                type="text"
                id="chat-input"
                ref={register}
                name="message"
                placeholder="Send a message..."
              />
              <button type="submit" className="chat-submit" id="chat-submit">
                <SendIcon className="sendIcon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
