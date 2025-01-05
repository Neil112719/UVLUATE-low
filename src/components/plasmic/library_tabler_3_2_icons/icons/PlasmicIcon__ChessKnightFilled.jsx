// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChessKnightFilledIcon(props) {
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
          "M8.959 1.99l-.147.028-.115.029a1 1 0 00-.646 1.27L8.8 5.562 5.985 7.297a2 2 0 00-.655 2.751l.089.133A2 2 0 007.033 11l1.563-.001-1.614 4.674A1 1 0 007.927 17h7.961a1 1 0 001-.978l.112-5c0-3.827-1.555-6.878-4.67-7.966l-2.399-.83-.375-.121-.258-.074L9.163 2l-.101-.013-.055-.001-.048.003v.001zM18 18H6a1 1 0 00-1 1 2 2 0 002 2h10a2 2 0 001.987-1.768l.011-.174A1 1 0 0018 18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChessKnightFilledIcon;
/* prettier-ignore-end */