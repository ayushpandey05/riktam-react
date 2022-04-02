import { AiOutlineLink } from "react-icons/ai";
import Text from "../../components/Text";
import View from "../../components/View";

const LinkCard = () => {
  return (
    <View
      style={{
        backgroundColor: "#f5f7fb",
        padding: 12,
        borderRadius: 12,
        alignItems: "center",
        gap: 24,
        border: "1px solid #dfe8f2",
      }}
    >
      <Text style={{ fontWeight: 700, fontSize: 16 }}>Onboard Clients</Text>
      <Text style={{ textAlign: "center", fontSize: 12 }}>
        Share the link with prospects and discuss all stuff
      </Text>
      <View
        style={{
          minWidth: 100,
          maxWidth: "90%",
          padding: 10,
          borderRadius: 8,
          backgroundColor: "#0f4cff",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 8,
          cursor: "pointer",
        }}
      >
        <Text style={{ fontSize: 12, color: "#ffffff", userSelect: "none" }}>
          Copy Link
        </Text>
        <AiOutlineLink color="#ffffff" size={17} />
      </View>
    </View>
  );
};

export default LinkCard;
