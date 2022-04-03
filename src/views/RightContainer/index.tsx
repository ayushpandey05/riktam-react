import View from "../../components/View";
import { getUserById } from "../../tempData/users";
import LinkCard from "./LinkCard";
import UserDetailCard from "./UserDetailCard";
import WeekDetailCard from "./WeekDetailCard";

const RightContainer = ({userId}: any) => {

  const user = getUserById(userId)

  return (
    <View style={{ flex: 1, gap: 12 }}>
      <UserDetailCard name={user?.name} email={user?.email} />
      <WeekDetailCard />
      <LinkCard /> 
    </View>
  );
};

export default RightContainer;
