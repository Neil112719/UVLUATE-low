// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TransitionRightFilledIcon(props) {
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
          "M18 2a4 4 0 014 4v12a4 4 0 01-4 4 1 1 0 01-.117-1.993L18 20a2 2 0 002-2V6a2 2 0 00-2-2 1 1 0 110-2zm-8 16a4 4 0 11-8 0V6a4 4 0 018 0v5h4.585l-1.292-1.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.414 0l3 3 .097.112.071.11.031.062.034.081.024.076.03.148L18 12l-.004.085-.016.116-.03.111-.044.111-.052.098-.074.104-.073.082-3 3a1 1 0 01-1.414-1.414L14.585 13H10v5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TransitionRightFilledIcon;
/* prettier-ignore-end */