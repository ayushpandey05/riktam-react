import { FC } from "react";
import Text from "../Text";
import View from "../View";

interface AvatarProps {
  size?: number;
  image?: string;
  text?: string;
}
const Avatar: FC<AvatarProps> = ({ size = 40, image, text }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {image && (
        <img src={image} style={{ flex: 1, width: "100%", height: "100%" }} />
      )}
      {!image && text && <Text>{text}</Text>}
    </View>
  );
};

export default Avatar;