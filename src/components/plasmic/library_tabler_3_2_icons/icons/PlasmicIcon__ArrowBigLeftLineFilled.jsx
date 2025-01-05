// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowBigLeftLineFilledIcon(props) {
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
          "M9.586 4L3 10.586a2 2 0 000 2.828L9.586 20a2 2 0 002.18.434l.145-.068A2 2 0 0013 18.586V16h5a1 1 0 001-1V9l-.007-.117A1 1 0 0018 8l-5-.001V5.414A2 2 0 009.586 4z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M4.415 12L11 5.414V9l.007.117A1 1 0 0012 10l5-.001v4L12 14a1 1 0 00-1 1v3.586L4.415 12zM21 8a1 1 0 01.993.883L22 9v6a1 1 0 01-1.993.117L20 15V9a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBigLeftLineFilledIcon;
/* prettier-ignore-end */