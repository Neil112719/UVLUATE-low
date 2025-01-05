// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BottleFilledIcon(props) {
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
          "M13 1a2 2 0 011.995 1.85L15 3v.5c0 1.317.381 2.604 1.094 3.705l.17.25.05.072a9.092 9.092 0 011.68 4.92l.006.354V19a3 3 0 01-2.824 2.995L15 22H9a3 3 0 01-2.995-2.824L6 19v-6.2a9.1 9.1 0 011.486-4.982l.2-.292.05-.069A6.823 6.823 0 009 3.5V3a2 2 0 011.85-1.995L11 1h2zm.362 5h-2.724a8.827 8.827 0 01-1.08 2.334l-.194.284-.05.069a7.091 7.091 0 00-1.307 3.798l-.003.125A3.33 3.33 0 019.979 12a3.4 3.4 0 012.833 1.417c.27.375.706.593 1.209.583a1.4 1.4 0 001.166-.583 3.4 3.4 0 01.81-.8L16 12.8c0-1.37-.396-2.707-1.137-3.852l-.228-.332A8.827 8.827 0 0113.362 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BottleFilledIcon;
/* prettier-ignore-end */