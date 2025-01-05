// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LungsOffIcon(props) {
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
          "M6.583 6.608c-1.206 1.058-2.07 2.626-2.933 5.449-.42 1.37-.636 2.962-.648 4.775-.012 1.675 1.261 3.054 2.877 3.161l.203.007C7.693 20 9 18.665 9 17.02V9m6 2V7.257C15 6.563 15.552 6 16.233 6c.204 0 .405.052.584.15l.13.083c1.46 1.059 2.432 2.647 3.405 5.824.42 1.37.636 2.962.648 4.775v.187m-1.455 2.51c-.417.265-.9.43-1.419.464l-.202.007c-1.613 0-2.92-1.335-2.92-2.98V15M9 12a2.99 2.99 0 002.132-.89M12 4v4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LungsOffIcon;
/* prettier-ignore-end */