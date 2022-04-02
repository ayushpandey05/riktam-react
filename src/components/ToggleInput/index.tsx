import { FC } from "react";
import View from "../View";

interface ToggleInputProps {
  value?: boolean;
  onChangeValue?: (arg: boolean) => void;
}

const ToggleInput: FC<ToggleInputProps> = ({ value, onChangeValue }) => {
  const onClick = () => {
    if (typeof onChangeValue === "function") {
      onChangeValue(!value);
    }
  };

  return (
    <View
      onClick={onClick}
      style={{
        width: 30,
        backgroundColor: value ? "#0f4cff" : "#000000",
        height: 16,
        flexDirection: "row",
        borderRadius: 15,
        alignItems: "center",
        paddingLeft: 4,
        paddingRight: 4,
        justifyContent: value ? "flex-end" : "flex-start",
        cursor: 'pointer',
      }}
    >
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: "#ffffff",
        }}
      />
    </View>
  );
};

export default ToggleInput;
