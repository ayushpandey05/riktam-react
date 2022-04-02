import React, { CSSProperties, forwardRef } from "react";

const getNumberOfLineStyle = (numberOfLines: number) => {
  let ellipsesStyle = {};
  if (numberOfLines === 1) {
    ellipsesStyle = {
      display: "block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    };
  } else if (numberOfLines) {
    ellipsesStyle = {
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: numberOfLines,
    };
  }
  return ellipsesStyle;
};

interface StyleProps extends CSSProperties {
  numberOfLines?: number;
}

interface TextProps {
  numberOfLines?: number;
  style?: StyleProps;
  children?: any;
}

export default forwardRef(
  (props: TextProps, ref?: React.LegacyRef<HTMLDivElement>) => {
    let {
      style = {},
      numberOfLines: propsNumberOfLines,
      children = void 0,
      ...rest
    } = props;

    let { numberOfLines, whiteSpace, lineHeight, ...restStyle } = style;
    if (numberOfLines === undefined && propsNumberOfLines !== undefined) {
      numberOfLines = propsNumberOfLines;
    }
    if (numberOfLines) {
      restStyle = { ...restStyle, ...getNumberOfLineStyle(numberOfLines) };
    }
    if (whiteSpace) {
      // @ts-ignore
      restStyle["whiteSpace"] = whiteSpace;
    }
    if (lineHeight) {
      if (typeof lineHeight === "number") {
        lineHeight = lineHeight + "px";
      }
      // @ts-ignore
      restStyle["lineHeight"] = lineHeight;
    }
    return (
      <div {...rest} ref={ref} style={restStyle}>
        {children}
      </div>
    );
  }
);
