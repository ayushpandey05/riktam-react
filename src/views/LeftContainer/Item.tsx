import { UserPhoto } from "../../assets/images";
import Avatar from "../../components/Avatar";
import Text from "../../components/Text";
import View from "../../components/View";

const Item = ({ active, onClick }: any) => {
  return (
    <View
    onClick={onClick}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: active ? "#f3f6fb" : "transparent",
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        cursor: 'pointer'
      }}
    >
      <View
        style={{ flexDirection: "row", flex: 1, alignItems: "center", gap: 16 }}
      >
        <Avatar image={UserPhoto} />
        <Text style={{ fontWeight: active ? "600" : "400" }}>Ayush Pandey</Text>
      </View>
      <View
        style={{
          marginLeft: 4,
          backgroundColor: "#fc5655",
          width: 24,
          height: 24,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>4+</Text>
      </View>
    </View>
  );
};

export default Item