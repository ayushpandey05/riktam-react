import { MdSend } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import Text from "../../components/Text";
import View from "../../components/View";
import { FiSmile } from "react-icons/fi";
import { useRef } from "react";

const ChatInput = () => {
  const inputRef: any = useRef();

  const onClickInput = () => {
    if (inputRef?.current?.focus) {
      inputRef.current.focus();
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#fbfcff",
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        gap: 12,
        boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.1)",
        WebkitBoxShadow: "0px 0px 6px 1px rgba(0,0,0,0.1)",
        MozBoxShadow: "0px 0px 6px 1px rgba(0,0,0,0.1)",
        borderRadius: 12,
        marginRight: 16,
      }}
    >
      <View style={{ width: 16, height: 16 }}>
        <GrAttachment size={16} />
      </View>
      <View
        onClick={onClickInput}
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          border: "1px solid #e6e6e9",
          borderRadius: 4,
          height: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 12,
          paddingTop: 8,
          paddingBottom: 8,
          cursor: "text",
        }}
      >
        <View style={{ flex: 1 }}>
          <input
            style={{ color: "#222222" }}
            placeholder="Enter your message here"
            ref={inputRef}
          />
        </View>
        <View
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          style={{
            width: 20,
            height: 20,
            marginLeft: 12,
            marginRight: 12,
            cursor: "pointer",
          }}
        >
          <FiSmile size={20} color="#fdbd03" />
        </View>
      </View>
      <View
        style={{
          borderRadius: 8,
          backgroundColor: "#0f4cff",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
          paddingLeft: 12,
          paddingRight: 12,
          gap: 6,
          height: "100%",
          cursor: "pointer",
        }}
      >
        <Text style={{ fontSize: 12, color: "#ffffff" }}>Send</Text>
        <View style={{ width: 14, height: 14 }}>
          <MdSend size={14} color="#ffffff" />
        </View>
      </View>
    </View>
  );
};

export default ChatInput;
