// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BrandTetherIcon(props) {
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
          "M14.08 20.188c-1.15 1.083-3.02 1.083-4.17 0L2.98 13.64c-.96-.906-1.27-2.624-.69-3.831l2.4-5.018C5.16 3.8 6.41 3 7.47 3h9.06c1.06 0 2.31.802 2.78 1.79l2.4 5.019c.58 1.207.26 2.925-.69 3.83-3.453 3.293-3.466 3.279-6.94 6.549zM12 15V8M8 8h8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTetherIcon;
/* prettier-ignore-end */