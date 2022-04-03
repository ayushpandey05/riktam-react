import { useEffect, useState } from "react";
import Text from "../../components/Text";
import View from "../../components/View";

const Menu = ({ top, left }: any) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(52);
  }, []);

  return (
    <View
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      style={{
        position: "fixed",
        width: 100,
        height,
        backgroundColor: "#ffffff",
        top,
        left,
        zIndex: 1,
        transition: "height 0.25s",
        borderRadius: 8,
        padding: 4,
        gap: 4
      }}
    >
      <View style={{ height: 20, cursor: 'pointer' }}>
        <Text>Profile</Text>
      </View>
      <View style={{ height: 20, cursor: 'pointer' }}>
        <Text>Settings</Text>
      </View>
    </View>
  );
};

export default Menu;
