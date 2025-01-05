// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BikeOffIcon(props) {
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
          "M2 18a3 3 0 106 0 3 3 0 00-6 0zm14.437-1.56a3 3 0 004.123 4.123M22 18a3 3 0 00-3-3m-7 4v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3m-3-6a1 1 0 102 0 1 1 0 00-2 0zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BikeOffIcon;
/* prettier-ignore-end */
