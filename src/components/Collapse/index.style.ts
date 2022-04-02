import { CSSProperties } from "react";

interface StyleProp {
  [key: string]: CSSProperties;
}
const styles: StyleProp = {
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 8,
    gap: 40,
    cursor: 'pointer'
  },
  titleContainer: { flex: 1, flexDirection: "row", alignItems: "center" },
  title: { fontSize: 16, fontWeight: 600 },
  countContainer: {
    marginLeft: 4,
    backgroundColor: "#ebedef",
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  count: { color: "black", fontSize: 14, fontWeight: 600 },
  contentContainer: {
    overflow: "hidden",
    transition: "height 0.5s",
  }
};

export default styles;
