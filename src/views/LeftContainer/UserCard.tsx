import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { UserPhoto } from "../../assets/images";
import Avatar from "../../components/Avatar";
import Text from "../../components/Text";
import ToggleInput from "../../components/ToggleInput";
import View from "../../components/View";
import { currentUser } from "../../tempData/users";
import Menu from "./Menu";

const UserCard = () => {
  const [isUserActive, setIsUserActive] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

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
        <Text style={{ fontWeight: 600, textAlign: "center" }}>
          {currentUser.name}
        </Text>
        <AiOutlineSetting
          style={{ cursor: "pointer" }}
          onBlur={() => {
            setPosition({ x: 0, y: 0 });
          }}
          tabIndex={1}
          onClick={(e) => {
            const { clientX, clientY } = e;
            setPosition({ x: clientX, y: clientY });
          }}
        />
      </View>
      <Text style={{ fontSize: 12, textAlign: "center" }}>
        {currentUser.designation}
      </Text>
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

      {position.x && position.y ? (
        <Menu top={position.y} left={position.x} />
      ) : (
        void 0
      )}
    </View>
  );
};

export default UserCard;
