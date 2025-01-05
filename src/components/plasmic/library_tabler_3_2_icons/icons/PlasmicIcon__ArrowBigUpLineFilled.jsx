// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowBigUpLineFilledIcon(props) {
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
          "M10.586 3L4 9.586a2 2 0 00-.434 2.18l.068.145A2 2 0 005.414 13H8v5a1 1 0 001 1h6l.117-.007A1 1 0 0016 18l-.001-5h2.587A2 2 0 0020 9.586L13.414 3a2 2 0 00-2.828 0zM15 20a1 1 0 01.117 1.993L15 22H9a1 1 0 01-.117-1.993L9 20h6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBigUpLineFilledIcon;
/* prettier-ignore-end */