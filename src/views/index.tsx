import View from "../components/View";
import { IoIosArrowBack } from "react-icons/io";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import "./index.css";
import MiddleContainer from "./MiddleContainer";
import useWindowSize from "../utils/useWindowSize";
import { useEffect, useState } from "react";
import Text from "../components/Text";

const MainView = () => {
  const { width } = useWindowSize();

  const [receiverId, setReceiverId] = useState(0);

  const [chatVisible, setChatVisible] = useState(false);
  const [detailVisible, setDetailVisible] = useState(width > 900 ? 1 : 0);

  const showChat = () => {
    if (width <= 900) {
      setChatVisible(true);
    }
  };

  const showDetail = (userId: number) => {
    console.log('!@#!@#!!>>>>>>', userId)
    setDetailVisible(userId);
  };

  const goBack = () => {
    if (detailVisible) {
      setDetailVisible(0);
    } else if (chatVisible) {
      setChatVisible(false);
    }
  };

  useEffect(() => {
    if (width > 900 && !detailVisible) {
      setDetailVisible(1);
    }
  }, [width]);

  return (
    <View
      className="container"
      style={{
        flex: 1,
        padding: width <= 900 ? 8 : 20,
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
      <View style={{ flexDirection: "row",  flex: 1, ...(width > 900 && {gap: 28}) }}>
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
          <LeftContainer
            receiverId={receiverId}
            setReceiverId={setReceiverId}
            showChat={showChat}
          />
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
            <MiddleContainer receiverId={receiverId} showDetail={showDetail} />
          </View>
        )}
        {(width > 900 || detailVisible) ? (
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
            <RightContainer userId={detailVisible} />
          </View>
        ) : void 0}
      </View>
    </View>
  );
};

export default MainView;
