import { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/chats/");
      console.log(res);
      setChats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      hello from ChatPage ChatPhat
      <div>
        {chats.map((chat) => (
          <div key={chat._id}>{chat.chatName}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
