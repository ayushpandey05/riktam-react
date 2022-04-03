import { useEffect } from "react";
import { Logo } from "../../assets/images";
import Collapse from "../../components/Collapse";
import ScrollView from "../../components/ScrollView";
import Text from "../../components/Text";
import View from "../../components/View";
import { users } from "../../tempData/users";
import useWindowSize from "../../utils/useWindowSize";
import Item from "./Item";
import UserCard from "./UserCard";

const LeftContainer = ({ showChat, receiverId, setReceiverId }: any) => {
  useEffect(() => {
    setReceiverId(2);
  }, []);

  const {width}=useWindowSize()

  const renderUsers = () => {
    return users.map((item, index) => {
      const { name, photo, id: userId } = item || {};
      const onClick = () => {
        setReceiverId(userId);
        showChat();
      };
      return (
        <Item
          name={name}
          photo={photo}
          onClick={onClick}
          active={width > 900 && receiverId === userId}
        />
      );
    });
  };

  return (
    <View style={{ flex: 1, gap: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <img src={Logo} style={{ width: 40, height: 40 }} />
        <Text style={{ fontWeight: 700 }}>QuickChat</Text>
      </View>
      <UserCard />
      <Collapse openAtMount title="Active Conversations" count={4}>
        <ScrollView
          contentContainerStyle={{ gap: 10 }}
          style={{ maxHeight: 200 }}
        >
          {renderUsers()}
        </ScrollView>
      </Collapse>
      <Collapse title="Archived Conversations" count={4}>
        <ScrollView
          contentContainerStyle={{ gap: 10 }}
          style={{ maxHeight: 200 }}
        >
          {renderUsers()}
        </ScrollView>
      </Collapse>
    </View>
  );
};

export default LeftContainer;
