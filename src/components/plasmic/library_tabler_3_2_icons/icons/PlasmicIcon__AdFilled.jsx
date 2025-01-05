// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AdFilledIcon(props) {
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
          "M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zM9 8a3 3 0 012.995 2.824L12 11v4a1 1 0 01-1.993.117L10 15v-1H8v1a1 1 0 01-1.993.117L6 15v-4a3 3 0 013-3zm0 2a1 1 0 00-.993.883L8 11v1h2v-1a1 1 0 00-1-1zm8-2a1 1 0 01.993.883L18 9v6a1 1 0 01-.883.993L17 16h-1.5a2.5 2.5 0 11.326-4.979l.174.029V9a1 1 0 01.883-.993L17 8zm-1.41 5.008L15.5 13a.5.5 0 00-.09.992l.09.008h.5v-.5l-.008-.09a.501.501 0 00-.318-.379l-.084-.023z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AdFilledIcon;
/* prettier-ignore-end */