import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { chatRooms } from "../tempData/chats";

const mainStore = createSlice({
  name: "counter",
  initialState: {
    chatRooms: chatRooms,
  },
  reducers: {
    sendMessage: (state, { payload }) => {
      const { roomId, senderId, receiverId, message } = payload || {};

      const newMessageObj = { senderId, receiverId, message };
      const { chatRooms: oldChatRooms } = state || {};
      const chatRoomIndex = oldChatRooms.findIndex(
        (chatRoom) => chatRoom.id === roomId
      );
      if (chatRoomIndex > -1) {
        state.chatRooms[chatRoomIndex].chats.push(newMessageObj);
      }
    },
  },
});

export const { sendMessage } = mainStore.actions;

export const store = configureStore({
  reducer: mainStore.reducer,
});

interface Props {
  senderId: number;
  receiverId: number;
}

const useChat = ({ senderId, receiverId }: Props) => {

    const [chatRooms, setChatRooms]=useState(store.getState().chatRooms)

//   const { chatRooms } = store.getState();
  
  let currentChatRoom: any = {};
  chatRooms.forEach((chatRoom) => {
    if (
      (chatRoom.usersId[0] === senderId &&
        chatRoom.usersId[1] === receiverId) ||
      (chatRoom.usersId[0] === receiverId && chatRoom.usersId[1] === senderId)
    ) {
      currentChatRoom = chatRoom;
      return;
    }
  });
  const chats = currentChatRoom?.chats;
  const roomId = currentChatRoom?.id;

  const sendNewMessage = (message: string) => {
    store.dispatch(sendMessage({ roomId, senderId, receiverId, message }));
  };
  useEffect(()=>{
    store.subscribe(() => {
        setChatRooms(store.getState().chatRooms)
        // console.log(store.getState())
    })
})
console.log('@@@@chats!>>>>>>>>>', chats)
  return { chats, sendMessage: sendNewMessage };
};

export { useChat };

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));
