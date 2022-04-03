import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { UserPhoto } from "../../assets/images";
import Avatar from "../../components/Avatar";
import Text from "../../components/Text";
import ToggleInput from "../../components/ToggleInput";
import View from "../../components/View";
import { currentUser } from "../../tempData/users";


const UserCard = () => {
  const [isUserActive, setIsUserActive] = useState(false);

  const [menuVisible, setMenuVisible]=useState(false)

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
      <Avatar size={60} image={currentUser.photo} />
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text style={{ fontWeight: 600, textAlign: 'center' }}>{currentUser.name}</Text>
        <AiOutlineSetting />
      </View>
      <Text style={{ fontSize: 12, textAlign: 'center' }}>{currentUser.designation}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <ToggleInput
          value={isUserActive}
          onChangeValue={(value: boolean) => {
            setIsUserActive(value);
          }}
        />
        <Text style={{ fontSize: 10 }}>
          {isUserActive ? "Active" : "Inactive"}
        </Text>
      </View>
    </View>
  );
};

export default UserCard;
