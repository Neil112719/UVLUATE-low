// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CircleArrowUpLeftFilledIcon(props) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM15 8H9l-.117.007-.149.029-.105.035-.113.054-.111.071a1.01 1.01 0 00-.112.097l-.08.09-.067.096-.052.098-.044.11-.03.112-.017.126L8 15l.007.117A1 1 0 009 16l.117-.007A1 1 0 0010 15v-3.585l4.293 4.292.094.083a1 1 0 001.32-1.497L11.415 10H15l.117-.007A1 1 0 0015 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleArrowUpLeftFilledIcon;
/* prettier-ignore-end */