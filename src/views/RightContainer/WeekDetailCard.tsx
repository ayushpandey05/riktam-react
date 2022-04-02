import { FC } from "react";
import { IconType } from "react-icons";
import { FiClock, FiUsers } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { BiMessageX } from "react-icons/bi";
import Text from "../../components/Text";
import View from "../../components/View";
import Activity from "./Activity";

interface CardProps {
  containerColor: string;
  iconContainerColor: string;
  iconColor: string;
  textColor: string;
  icon: IconType;
  title: string;
  subTitle: string;
}

const Card: FC<CardProps> = ({
  containerColor,
  iconContainerColor,
  icon: Icon,
  iconColor,
  textColor,
  title,
  subTitle,
}) => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 12,
        backgroundColor: containerColor,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: iconContainerColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon size={18} color={iconColor} />
      </View>
      <View style={{ gap: 3 }}>
        <Text style={{ color: textColor, fontSize: 14, fontWeight: 600 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 10, color: "#7688a0" }}>{subTitle}</Text>
      </View>
    </View>
  );
};

const detailsCarddata = [
  {
    containerColor: "#d9e4fd",
    iconContainerColor: "#b2c7ff",
    iconColor: "#366bff",
    textColor: "#144fff",
    icon: FiClock,
    title: "13h",
    subTitle: "Time",
  },
  {
    containerColor: "#e3f6f3",
    iconContainerColor: "#c8f0ea",
    iconColor: "#28bda0",
    textColor: "#23bb9e",
    icon: FiUsers,
    title: "188",
    subTitle: "Attended",
  },
  {
    containerColor: "#f7f3ff",
    iconContainerColor: "#d9d3ff",
    iconColor: "#7e6dcd",
    textColor: "#725fc6",
    icon: MdDateRange,
    title: "119",
    subTitle: "Meetings",
  },
  {
    containerColor: "#fff1e8",
    iconContainerColor: "#fee1d3",
    iconColor: "#fb521f",
    textColor: "#fc5524",
    icon: BiMessageX,
    title: "41",
    subTitle: "Rejected",
  },
];

const WeekDetailCard = () => {
  return (
    <View style={{ backgroundColor: "#f9fafd", padding: 18, borderRadius: 12, border: '1px solid #dfe8f2' }}>
      <View style={{ gap: 12 }}>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Card {...detailsCarddata[0]} />
          <Card {...detailsCarddata[1]} />
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Card {...detailsCarddata[2]} />
          <Card {...detailsCarddata[3]} />
        </View>
      </View>
      <Activity />
    </View>
  );
};

export default WeekDetailCard;
