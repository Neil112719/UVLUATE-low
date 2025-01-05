// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function RosetteNumber7Icon(props) {
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
        d={"M10 8h4l-2 8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 7.2A2.2 2.2 0 017.2 5h1a2.2 2.2 0 001.55-.64l.7-.7a2.2 2.2 0 013.12 0l.7.7c.412.41.97.64 1.55.64h1a2.2 2.2 0 012.2 2.2v1c0 .58.23 1.138.64 1.55l.7.7a2.199 2.199 0 010 3.12l-.7.7a2.2 2.2 0 00-.64 1.55v1a2.2 2.2 0 01-2.2 2.2h-1a2.2 2.2 0 00-1.55.64l-.7.7a2.199 2.199 0 01-3.12 0l-.7-.7a2.2 2.2 0 00-1.55-.64h-1a2.2 2.2 0 01-2.2-2.2v-1a2.2 2.2 0 00-.64-1.55l-.7-.7a2.2 2.2 0 010-3.12l.7-.7A2.2 2.2 0 005 8.2v-1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RosetteNumber7Icon;
/* prettier-ignore-end */