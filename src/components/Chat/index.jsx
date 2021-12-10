import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ChatIcon from '@material-ui/icons/Chat';
import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';
import { io } from 'socket.io-client';

const socket = io("http://teamedicine.tk:3000")

function Chat(props) {
  const [logs, setLogs] = useState([
    {
      id: 1,
      text: 'dsfds',
      sender: 'me',
    },
  ]);
  const [newMessage, setNewMessage] = useState({});

  socket.on("connect", () => {
     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
   });

  const onEnterChat = (e) => {
    e.preventDefault();
    setLogs([
      ...logs,
      {
        newMessage,
      },
    ]);
    setNewMessage('');
    socket.emit("chat_text", {roomId: 'anhkhoa', roomName: "Anh Khoa", message: newMessage})
  };

  useEffect(()=>{
  },[])

  socket.emit("join_room", {roomId: "anhkhoa"})
  socket.on("res_chat_text", (res) => {
       console.log(res)
  })

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
            <div className="chat-logs">
              {logs.map((log, index) => {
                return (
                  <div className="log_inline" key={index}>
                    {log.text}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="chat-input">
            <form onSubmit={onEnterChat}>
              <input
                type="text"
                id="chat-input"
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
