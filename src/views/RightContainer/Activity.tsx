import Text from "../../components/Text";
import View from "../../components/View";

const weekData = [
  { title: "MON", status: 70 },
  { title: "TUE", status: 100, active: true },
  { title: "WED", status: 50 },
  { title: "THU", status: 40 },
  { title: "FRI", status: 30 },
  { title: "SAT", status: 20 },
  { title: "SUN", status: 20 },
];

const WeekIndicator = () => {
  return (
    <View style={{ flexDirection: "row", height: 200 }}>
      {weekData.map((item, index) => {
        const { title, status, active } = item || {};
        return (
          <View style={{ flex: 1, alignItems: "center", gap: 10 }}>
            <View
              style={{
                flex: 1,
                width: 10,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: `${status}%`,
                  backgroundColor: active ? "#0f4cff" : '#c7d7fe',
                  borderRadius: 5,
                }}
              />
            </View>
            <View
              style={{
                width: active ? 10 : 6,
                height: active ? 10 : 6,
                borderRadius: active ? 5 : 3,
                backgroundColor: active ?"#0f4cff" : '#c7d7fe',
              }}
            />
            <Text style={{fontSize: 10}}>{title}</Text>
          </View>
        );
      })}
    </View>
  );
};

const Activity = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 600 }}>Current Week</Text>
        <Text style={{ fontSize: 10 }}>Activity</Text>
      </View>
      <WeekIndicator />
    </View>
  );
};

export default Activity;
