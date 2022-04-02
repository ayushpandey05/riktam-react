import logo from "./logo.svg";
import "./App.css";
import View from "./components/View";
import ScrollView from "./components/ScrollView";
import Collapse from "./components/Collapse";
import MainView from "./views";
import useWindowSize from "./utils/useWindowSize";

export const tempText = `Here is some more text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae urna nulla. Vivamus a purus mi. In hac habitasse platea dictumst. In ac tempor quam. Vestibulum eleifend vehicula ligula, et cursus nisl gravida sit
amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`;

function App() {
  const {width}=useWindowSize()
  return (
    <View style={{ backgroundColor: "#f7f9fc", flex: 1, padding: width < 900 ? 8 :40 }} className="App">
        <MainView />
      {/* <ScrollView style={{ flex: 1 }}>
      <Collapse title="Active Conversations" count={44} >{tempText}</Collapse>
      </ScrollView> */}
    </View>
  );
}

export default App;
