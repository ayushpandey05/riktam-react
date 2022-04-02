import React, { CSSProperties, forwardRef } from "react";
import { defaultStyle } from "../defaultStyle";

interface ViewProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  style?: CSSProperties;
  // className?: string;
  children?: any;
//   onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default forwardRef(
  (props: ViewProps, ref?: React.LegacyRef<HTMLDivElement>) => {
    const mergedStyle = { ...defaultStyle, ...props?.style };
    return <div {...props} style={mergedStyle} ref={ref}></div>;
  }
);

export type { ViewProps };
