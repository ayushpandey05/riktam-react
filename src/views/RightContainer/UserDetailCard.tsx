import { useState } from "react";
import { AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import Text from "../../components/Text";
import View from "../../components/View";

const UserDetailCard = ({name, email}: any) => {
  const [isUserActive, setIsUserActive] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "#f5f8fc",
        padding: 12,
        borderRadius: 12,
        alignItems: "center",
        gap: 8,
        border: "1px solid #dfe8f2",
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#b5ccff",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 700, color: "#3c5773" }}>
          AP
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          maxWidth: "100%",
        }}
      >
        <View style={{ width: 18, height: 18 }}>
          <AiOutlineMail size={18} />
        </View>
        <Text numberOfLines={1} style={{ fontWeight: 600 }}>
          {email}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          maxWidth: "100%",
        }}
      >
        <View style={{ width: 18, height: 18 }}>
          <FaRegUserCircle size={18} />
        </View>
        <Text style={{ fontSize: 12, numberOfLines: 1 }}>{name}</Text>
      </View>
      <View
          style={{
            borderRadius: 5,
            border: "1px solid #134dff",
            padding: 8,
            gap: 8,
            alignItems: "center",
            flexDirection: "row",
            cursor: 'pointer'
          }}
        >
          <Text style={{ color: "#134dff", fontSize: 14, fontWeight: 600, userSelect: 'none' }}>
            Archive
          </Text>
          <IoTrashBinOutline size={16} color="#134dff" />
        </View>
    </View>
  );
};

export default UserDetailCard;
