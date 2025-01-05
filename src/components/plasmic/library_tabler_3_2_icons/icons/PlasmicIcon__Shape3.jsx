// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape3Icon(props) {
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
          "M3 5a2 2 0 104 0 2 2 0 00-4 0zm14 14a2 2 0 104 0 2 2 0 00-4 0zm0-14a2 2 0 104 0 2 2 0 00-4 0zM3 19a2 2 0 104 0 2 2 0 00-4 0zM7 5h10M5 7v10M19 7v10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Shape3Icon;
/* prettier-ignore-end */