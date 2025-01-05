// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HexagonLetterQFilledIcon(props) {
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
          "M13.666 1.429l6.75 3.98.096.063.093.078.106.074a3.22 3.22 0 011.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 012 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015zM12 7a3 3 0 00-3 3v4a3 3 0 004.168 2.764l.125-.057a1 1 0 001.414-1.414l.057-.125A3 3 0 0015 14v-4a3 3 0 00-3-3zm1 7.002h-.059A.996.996 0 0012 15a1 1 0 01-1-1v-4a1 1 0 012 0v4.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HexagonLetterQFilledIcon;
/* prettier-ignore-end */