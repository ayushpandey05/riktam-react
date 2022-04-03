import { useChat } from "../../chatStore";
import View from "../../components/View";
import { currentUser } from "../../tempData/users";
import ChatInput from "./ChatInput";
import ChatScreen from "./ChatScreen";

const MiddleContainer = ({ showDetail, receiverId }: any) => {
  const { chats, sendMessage } = useChat({
    senderId: currentUser.id,
    receiverId,
  });

  return (
    <View
      style={{
        paddingLeft: 20,
        // paddingRight: 0,
        // paddingTop: 16,
        paddingBottom: 16,
        flex: 1,
      }}
    >
      <ChatScreen chats={chats} showDetail={showDetail} />
      <ChatInput key={`${receiverId}-chat-input`} sendMessage={sendMessage} />
    </View>
  );
};

export default MiddleContainer;
