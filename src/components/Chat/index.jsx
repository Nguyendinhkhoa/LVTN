import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ChatIcon from '@material-ui/icons/Chat';
import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';
import { io } from 'socket.io-client';
const socket = io('http://teamedicine.tk:3000');
function Chat(props) {
  const [logs, setLogs] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  // CONNECT: ket noi server chat
  socket.on('connect', () => {
    socket.emit('join_room', { roomId: user.id });
  });

  // Gui chat len server
  const onEnterChat = (e) => {
    console.log(newMessage);
    e.preventDefault();
    let mess = newMessage;
    socket.emit('chat_text', {
      roomId: user.id,
      senderId: user.id,
      roomName: 'Khoa Đẹp Trai',
      message: mess,
    });
    setLogs([...logs, { userId: user.id, message: mess }]);
    mess = ' ';
    setNewMessage(mess);
  };

  useEffect(() => {
    socket.on('res_chat_text', (res) => {
      console.log(res);
      // setLogs([...logs, { name: res.roomName, message: res.message }]);
    });
  }, []);
  const renderChat = () => {
    console.log(logs);
    return logs.map((log, index) => {
      return (
        <div className='chat-msg' key={index}>
          <div className="log_inline cm-msg-text" >
            <span>{log.message}</span>
          </div>
          <br />
        </div>
      );
    });
  };

  const onChangeText = (e) => {
    e.preventDefault();
    setNewMessage(e.target.value);
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
            <span>Hi,Nguyễn Đình Khoa</span>
            <span className="chat-box-toggle">
              <CancelIcon />
            </span>
          </div>
          <div className="chat-box-body">
            <div className="chat-box-overlay" />
            <div className="chat-logs">{renderChat()}</div>
          </div>
          <div className="chat-input">
            <form onSubmit={onEnterChat}>
              <input
                type="text"
                id="chat-input"
                name="message"
                value={newMessage}
                onChange={(e) => onChangeText(e)}
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
