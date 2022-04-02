import { useEffect, useRef, useState } from "react";
import View from "../View";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Text from "../Text";
import styles from "./index.style";
interface CollapseProps {
  title: string;
  count?: number;
  openAtMount?: boolean
}

const Collapse: React.FC<CollapseProps> = ({ children, title, count, openAtMount }) => {
  const [visible, setVisible] = useState(false);

  const outerRef: any = useRef();
  const innerRef: any = useRef();

  let height = 0;

  if (visible) {
    if (innerRef?.current) {
      height = innerRef.current.clientHeight;
    }
  } else {
    height = 0;
  }

  const ArrowComponent = visible ? FaAngleUp : FaAngleDown;

  const countText = count && (count > 9 ? `9+` : `${count}`);

  useEffect(()=>{
    if(openAtMount){
      setVisible(true)
    }
  },[])

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
