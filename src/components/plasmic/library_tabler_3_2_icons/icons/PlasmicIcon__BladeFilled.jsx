// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BladeFilledIcon(props) {
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
          "M11.586 3a2 2 0 012.828 0l.586.585.586-.585a2 2 0 012.7-.117l.128.117L21 5.586a2 2 0 010 2.828L20.414 9l.586.586a2 2 0 010 2.828L12.414 21a2 2 0 01-2.828 0L9 20.414 8.414 21a2 2 0 01-2.828 0L3 18.414a2 2 0 010-2.828l.585-.587L3 14.414a2 2 0 01-.117-2.7L3 11.585 11.586 3zm3.027 4.21a1 1 0 00-1.32 1.497l.292.293-1.068 1.067a2.002 2.002 0 00-2.512 1.784L10 12l.005.15c.01.125.03.248.062.367L9 13.585l-.293-.292-.094-.083a1 1 0 00-1.32 1.497l.292.293-.292.293-.083.094a1 1 0 001.497 1.32L9 16.415l.293.292.094.083a1 1 0 001.32-1.497L10.415 15l1.069-1.067a2.003 2.003 0 002.449-2.45L15 10.415l.293.292.094.083a1 1 0 001.32-1.497L16.415 9l.292-.293.083-.094a1 1 0 00-1.497-1.32L15 7.585l-.293-.292-.094-.083z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BladeFilledIcon;
/* prettier-ignore-end */