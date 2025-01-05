// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BadgeSdFilledIcon(props) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-4 4h-1a1 1 0 00-1 1v6a1 1 0 001 1h1a3 3 0 003-3v-2a3 3 0 00-3-3zM9.25 8H8a2 2 0 00-2 2v1a2 2 0 002 2h1v1H7.967l-.025-.087A1 1 0 006 14.25c0 .966.784 1.75 1.75 1.75H9a2 2 0 002-2v-1a2 2 0 00-2-2H8v-1h1.032l.026.087A1 1 0 0011 9.75 1.75 1.75 0 009.25 8zM15 10a1 1 0 011 1v2a1 1 0 01-.883.993L15 14v-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadgeSdFilledIcon;
/* prettier-ignore-end */
