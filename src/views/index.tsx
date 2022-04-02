import View from "../components/View";
import ContainerOne from "./LeftContainer";
import ContainerTwo from "./RightContainer";
import "./index.css";
import MiddleContainer from "./MiddleContainer";

const MainView = () => {
  return (
    <View
      className="container"
      style={{
        flex: 1,
        flexDirection: "row",
        padding: 20,
        borderRadius: 18,
        backgroundColor: "#ffffff",
        gap: 28,
      }}
    >
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <ContainerOne />
      </View>
      <View style={{ flex: 2, backgroundColor: "#f3f6fb", borderRadius: 16 }}>
        <MiddleContainer />
      </View>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <ContainerTwo />
      </View>
    </View>
  );
};

export default MainView;
