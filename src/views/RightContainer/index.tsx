import View from "../../components/View";
import LinkCard from "./LinkCard";
import UserDetailCard from "./UserDetailCard";
import WeekDetailCard from "./WeekDetailCard";

const RightContainer = () => {
  return (
    <View style={{ flex: 1, gap: 12 }}>
      <UserDetailCard />
      <WeekDetailCard />
      <LinkCard /> 
    </View>
  );
};

export default RightContainer;
