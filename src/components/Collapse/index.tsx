import { useEffect, useRef, useState } from "react";
import View from "../View";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Text from "../Text";
import styles from "./index.style";
interface CollapseProps {
  title: string;
  count?: number;
}

const Collapse: React.FC<CollapseProps> = ({ children, title, count }) => {
  const [visible, setVisible] = useState(false);

  const outerRef: any = useRef();
  const innerRef: any = useRef();

  let height = 0;

  if (outerRef?.current && outerRef.current.clientHeight) {
    height = 0;
  } else if (innerRef?.current) {
    height = innerRef.current.clientHeight;
  }

  useEffect(() => {
    // setVisible(true);
  }, []);

  const ArrowComponent = visible ? FaAngleUp : FaAngleDown;

  const countText = count && (count > 9 ? `9+` : `${count}`);

  return (
    <View>
      <View
        style={styles.headerContainer}
        onClick={() => {
          setVisible((old) => !old);
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {countText && (
            <View style={styles.countContainer}>
              <Text style={styles.count}>{countText}</Text>
            </View>
          )}
        </View>
        <ArrowComponent size={20} fill="black" />
      </View>
      <View
        ref={outerRef}
        style={{
          ...styles.contentContainer,
          height,
        }}
      >
        <View ref={innerRef}>{children}</View>
      </View>
    </View>
  );
};

export default Collapse;
