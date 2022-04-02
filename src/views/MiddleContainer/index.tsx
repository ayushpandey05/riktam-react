import View from "../../components/View";
import ChatInput from "./ChatInput";
import ChatScreen from "./ChatScreen";

const MiddleContainer = () => {
  return (
    <View
      style={{
        paddingLeft: 20,
        // paddingRight: 0,
        // paddingTop: 16,
        paddingBottom: 16,
        flex: 1
      }}
    >
      <ChatScreen />
      <ChatInput />
    </View>
  );
};

export default MiddleContainer;
