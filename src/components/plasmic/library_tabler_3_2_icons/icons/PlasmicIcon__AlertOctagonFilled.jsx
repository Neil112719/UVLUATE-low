// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AlertOctagonFilledIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.897 1a4 4 0 012.664 1.016l.165.156 4.1 4.1a4 4 0 011.168 2.605l.006.227v5.794a4 4 0 01-1.016 2.664l-.156.165-4.1 4.1a4 4 0 01-2.603 1.168l-.227.006H9.103a3.999 3.999 0 01-2.664-1.017l-.165-.156-4.1-4.1a4 4 0 01-1.168-2.604L1 14.897V9.103a4 4 0 011.016-2.664l.156-.165 4.1-4.1a4 4 0 012.605-1.168L9.104 1h5.793zM12.01 15l-.127.007a1 1 0 000 1.986L12 17l.127-.007a1 1 0 000-1.986L12.01 15zM12 7a1 1 0 00-.993.883L11 8v4l.007.117a1 1 0 001.986 0L13 12V8l-.007-.117A1 1 0 0012 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlertOctagonFilledIcon;
/* prettier-ignore-end */