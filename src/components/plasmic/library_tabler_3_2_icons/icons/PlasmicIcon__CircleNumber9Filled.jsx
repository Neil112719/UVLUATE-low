// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CircleNumber9FilledIcon(props) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 5h-2l-.15.005a2 2 0 00-1.844 1.838L9 9v2l.005.15a2 2 0 001.838 1.844L11 13h2v2h-2l-.007-.117A1 1 0 009 15a2 2 0 001.85 1.995L11 17h2l.15-.005a2 2 0 001.844-1.838L15 15V9l-.005-.15a2 2 0 00-1.838-1.844L13 7zm0 2v2h-2V9h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNumber9FilledIcon;
/* prettier-ignore-end */
