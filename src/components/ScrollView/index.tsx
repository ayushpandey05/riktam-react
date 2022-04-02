import React, { CSSProperties, forwardRef } from "react";
import { defaultStyle } from "../defaultStyle";
import "./index.css";

interface ScrollViewProps {
  style?: CSSProperties;
  contentContainerStyle?: CSSProperties;
  className?: string;
  children?: any;
  horizontal?: boolean;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
}

export default forwardRef(
  (props: ScrollViewProps, ref?: React.LegacyRef<HTMLDivElement>) => {
    const {
      children,
      style,
      horizontal,
      className = "",
      contentContainerStyle,
      showsVerticalScrollIndicator = true,
      showsHorizontalScrollIndicator = true,
      ...restProps
    } = props || {};

    const mergedStyle = {
      ...defaultStyle,
      ...style,
    };

    const mergedContentContainerStyle = {
      ...defaultStyle,
      ...contentContainerStyle,
    };

    delete mergedStyle?.overflow;
    delete mergedContentContainerStyle?.overflow;
    delete mergedContentContainerStyle?.overflowX;
    delete mergedContentContainerStyle?.overflowY;
    let modifiedClassName = className;

    if (horizontal) {
      mergedStyle.flexDirection = "row";
      mergedStyle.overflowX = "auto";
      mergedStyle.overflowY = "hidden";
      mergedContentContainerStyle.flexDirection = "row";
      if (!showsHorizontalScrollIndicator) {
        modifiedClassName = `${className} hide-scroll-indicator`;
      }
    } else {
      mergedStyle.flexDirection = "column";
      mergedStyle.overflowX = "hidden";
      mergedStyle.overflowY = "auto";
      mergedContentContainerStyle.flexDirection = "column";
      if (!showsVerticalScrollIndicator) {
        modifiedClassName = `${className} hide-scroll-indicator`;
      }
    }

    return (
      <div {...restProps} style={mergedStyle} ref={ref}>
        <div
          style={{ ...defaultStyle, ...contentContainerStyle }}
          children={children}
        />
      </div>
    );
  }
);

export type { ScrollViewProps };
