// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AlertTriangleFilledIcon(props) {
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
          "M12 1.67c.955 0 1.845.467 2.39 1.247l.105.16 8.114 13.548a2.913 2.913 0 01-2.307 4.363l-.195.008H3.882a2.913 2.913 0 01-2.582-4.2l.099-.185 8.11-13.538A2.914 2.914 0 0112 1.67zM12.01 15l-.127.007a1 1 0 000 1.986L12 17l.127-.007a1 1 0 000-1.986L12.01 15zM12 8a1 1 0 00-.993.883L11 9v4l.007.117a1 1 0 001.986 0L13 13V9l-.007-.117A1 1 0 0012 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlertTriangleFilledIcon;
/* prettier-ignore-end */