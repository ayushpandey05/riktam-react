const chatRooms = [
  {
    id: 1,
    usersId: [1, 2],
    chats: [
      {
        senderId: 1,
        receiverId: 2,
        message: "Hi Henry!!",
      },
      {
        senderId: 1,
        receiverId: 2,
        message: "How can I help you today?",
      },
      {
        senderId: 2,
        receiverId: 1,
        message: "Hey Ayush, nice to meet you!",
      },
      {
        senderId: 2,
        receiverId: 1,
        message: "Hope you're doing fine.",
      },
      {
        senderId: 1,
        receiverId: 2,
        message: `I'm good, thanks for asking.`,
      },
    ],
  },
  {
    id: 2,
    usersId: [1, 3],
    chats: [
      {
        senderId: 1,
        receiverId: 3,
        message: "Hi",
      },
      {
        senderId: 3,
        receiverId: 1,
        message: "Hello",
      },
      {
        senderId: 3,
        receiverId: 1,
        message: "How are you?",
      },
      {
        senderId: 1,
        receiverId: 3,
        message: `I'm fine, How about you?`,
      },
    ],
  },
  {
    id: 3,
    usersId: [1, 4],
    chats: [
      {
        senderId: 1,
        receiverId: 4,
        message: "Hi",
      },
      {
        senderId: 4,
        receiverId: 1,
        message: "Hello Ayush",
      },
      {
        senderId: 4,
        receiverId: 1,
        message: "How are you?",
      },
      {
        senderId: 1,
        receiverId: 4,
        message: `I'm good, how about you?`,
      },
    ],
  },
  {
    id: 4,
    usersId: [1, 5],
    chats: [
      {
        senderId: 1,
        receiverId: 5,
        message: "Hi",
      },
      {
        senderId: 5,
        receiverId: 1,
        message: "Hello Sir!",
      },
      {
        senderId: 5,
        receiverId: 1,
        message: "How can I help you?",
      },
      {
        senderId: 1,
        receiverId: 5,
        message: `Please help me with the code.`,
      },
    ],
  },
];
export { chatRooms };
