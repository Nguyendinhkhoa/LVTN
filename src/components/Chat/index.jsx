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
  const userId = JSON.parse(localStorage.getItem('user')).id;

  // CONNECT: ket noi server chat
  socket.on('connect', () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    // JOIN ROOM: vao room -> anhkhoa dang online, da vao chat
    socket.emit('join_room', { roomId: 'anhkhoa' });
  });

  // Gui chat len server
  const onEnterChat = (e) => {
    console.log(newMessage);
    e.preventDefault();
    let mess = newMessage;
    socket.emit('chat_text', {
      roomId: 'anhkhoa',
      senderId: 'anhkhoa',
      roomName: 'Anh Khoa',
      message: mess,
    });
    mess = ' ';
    setNewMessage(mess);
  };

  useEffect(() => {
    // ON: recieve message -> set state
    socket.on('res_chat_text', (res) => {
      console.log(res.message);
      setLogs([...logs, { name: res.roomName, message: res.message }]);
    });
  });
  const renderChat = () => {
    console.log(logs);
    return logs.map((log, index) => {
      return (
        <>
          <div className="log_inline" key={index}>
            <span>{log.name}</span> - 
            <span> {log.message}</span>
          </div>
          <br />
        </>
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
