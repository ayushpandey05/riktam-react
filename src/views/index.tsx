import View from "../components/View";
import { IoIosArrowBack } from "react-icons/io";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import "./index.css";
import MiddleContainer from "./MiddleContainer";
import useWindowSize from "../utils/useWindowSize";
import { useState } from "react";
import Text from "../components/Text";

const MainView = () => {
  const { width } = useWindowSize();
  const [chatVisible, setChatVisible] = useState(false);
  const [detailVisible, setDetailVisible] = useState(false);

  const showChat = () => {
    setChatVisible(true);
  };

  const showDetail = () => {
    setDetailVisible(true);
  };

  const goBack = () => {
    if (detailVisible) {
      setDetailVisible(false);
    } else if (chatVisible) {
      setChatVisible(false);
    }
  };

  return (
    <View
      className="container"
      style={{
        flex: 1,
        padding: width < 900 ? 8 : 20,
        borderRadius: 18,
        backgroundColor: "#ffffff",
      }}
    >
      {width <= 900 && (detailVisible || chatVisible) && (
        <View
          style={{
            marginBottom: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            onClick={goBack}
            style={{ width: 32, height: 32, cursor: "pointer" }}
          >
            <IoIosArrowBack size={32} />
          </View>
          <Text style={{ fontWeight: 700, fontSize: 18 }}>
            {detailVisible ? "User Detail" : chatVisible ? "Chat" : ""}
          </Text>
        </View>
      )}
      <View style={{ flexDirection: "row", gap: 28, flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
          <LeftContainer showChat={showChat} />
        </View>
        {(width > 900 || (!detailVisible && chatVisible)) && (
          <View
            style={{
              flex: width > 900 ? 2 : 1,
              backgroundColor: "#f3f6fb",
              borderRadius: 16,
              ...(width <= 900 && {
                position: "absolute",
                width: "100%",
                height: "100%",
              }),
            }}
          >
            <MiddleContainer showDetail={showDetail} />
          </View>
        )}
        {(width > 900 || detailVisible) && (
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              ...(width <= 900 && {
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff",
              }),
            }}
          >
            <RightContainer />
          </View>
        )}
      </View>
    </View>
  );
};

export default MainView;
