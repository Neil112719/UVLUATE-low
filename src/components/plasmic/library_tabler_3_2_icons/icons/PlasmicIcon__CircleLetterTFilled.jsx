// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CircleLetterTFilledIcon(props) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 5h-4a1 1 0 000 2h1v7a1 1 0 00.883.993L12 17a1 1 0 001-1V9h1a1 1 0 00.993-.883L15 8a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterTFilledIcon;
/* prettier-ignore-end */