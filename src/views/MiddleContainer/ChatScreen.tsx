import { useEffect, useRef } from "react";
import { UserPhoto } from "../../assets/images";
import Avatar from "../../components/Avatar";
import ScrollView from "../../components/ScrollView";
import Text from "../../components/Text";
import View from "../../components/View";
import { currentUser, getUserById } from "../../tempData/users";

const textTemp = `Hey Bill, nice to meet you! Hey Bill, nice to meet you! Hey Bill, nice to meet you! Hey Bill, nice to meet you!  Hey Bill, nice to meet you! Hey Bill, nice to meet you!`;

const otherUserColors = {
  container: "#ffffff",
  text: "#222222",
};

const currentUserColors = {
  container: "#1a233c",
  text: "#c5c7ce",
};

const ChatCard = ({ me, showDetail, message, photo }: any) => {
  const colors = me ? currentUserColors : otherUserColors;

  return (
    <View style={{ flexDirection: me ? "row-reverse" : "row" }}>
      <View
        style={{
          flexDirection: me ? "row-reverse" : "row",
          maxWidth: "70%",
          gap: 12,
          padding: 2,
        }}
      >
        <Avatar pointer onClick={showDetail} size={50} image={photo} />
        <View style={{ flex: 1, overflow: void 0, gap: 4 }}>
          <View
            style={{
              backgroundColor: colors.container,
              boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.3)",
              WebkitBoxShadow: "0px 0px 6px 1px rgba(0,0,0,0.1)",
              MozBoxShadow: "0px 0px 6px 1px rgba(0,0,0,0.1)",
              borderRadius: 12,
              padding: 12,
              paddingTop: 14,
              paddingBottom: 14,
              overflow: void 0,
            }}
          >
            <Text style={{ color: colors.text, fontSize: 14 }}>{message}</Text>
          </View>
          <Text style={{ fontSize: 10, ...(me && { alignSelf: "flex-end" }) }}>
            9h ago
          </Text>
        </View>
      </View>
    </View>
  );
};

const ChatScreen = ({ showDetail, chats }: any) => {

    const bottomRef: any = useRef();

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
      }

    useEffect(scrollToBottom, [chats])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ gap: 12, paddingBottom: 20, paddingTop: 20 }}
        style={{ flex: 1, paddingRight: 20 }}
      >
        {chats?.length &&
          chats.map((item: any) => {
            const { senderId, receiverId, message } = item || {};
            const user = getUserById(senderId);
            const showDetailUser = ()=>{
                if(typeof showDetail === 'function'){
                    showDetail(senderId)
                }
            }
            return (
              <ChatCard
                message={message}
                me={senderId === currentUser.id}
                showDetail={showDetailUser}
                photo={user.photo}
              />
            );
          })}
          <div ref={bottomRef} />
      </ScrollView>
    </View>
  );
};

export default ChatScreen;
