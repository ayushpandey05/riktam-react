import { Logo } from "../../assets/images";
import Collapse from "../../components/Collapse";
import ScrollView from "../../components/ScrollView";
import Text from "../../components/Text";
import View from "../../components/View";
import Item from "./Item";
import UserCard from "./UserCard";

const data: any[] = [];
for (let i = 0; i < 10; i++) {
  data.push("Ayush" + i);
}

const LeftContainer = () => {
  return (
    <View style={{ flex: 1, gap: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <img src={Logo} style={{ width: 40, height: 40 }} />
        <Text style={{ fontWeight: 700 }}>QuickChat</Text>
      </View>
      <UserCard />
      <Collapse title="Active Conversations" count={4}>
        <ScrollView
          contentContainerStyle={{ gap: 10 }}
          style={{ maxHeight: 200 }}
        >
          {data.map((item, index) => {
            return <Item active={index === 0} />;
          })}
        </ScrollView>
      </Collapse>
      <Collapse title="Archived Conversations" count={4}>
        <ScrollView
          contentContainerStyle={{ gap: 10 }}
          style={{ maxHeight: 200 }}
        >
          {data.map((item) => {
            return <Item />;
          })}
        </ScrollView>
      </Collapse>
    </View>
  );
};

export default LeftContainer;
