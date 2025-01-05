// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BellRingingFilledIcon(props) {
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
          "M17.451 2.344a1 1 0 011.41-.099 12.051 12.051 0 013.048 4.064 1 1 0 11-1.818.836 10.05 10.05 0 00-2.54-3.39 1 1 0 01-.1-1.411zM5.136 2.245a1 1 0 011.312 1.51 10.05 10.05 0 00-2.54 3.39 1 1 0 11-1.817-.835 12.05 12.05 0 013.045-4.065zM14.235 19c.865 0 1.322 1.024.745 1.668A3.992 3.992 0 0112 22a3.991 3.991 0 01-2.98-1.332c-.552-.616-.158-1.579.634-1.661l.11-.006L14.235 19zM12 2c1.358 0 2.506.903 2.875 2.141l.046.171.008.043a8.012 8.012 0 014.024 6.069l.028.287L19 11v2.931l.021.136a3 3 0 001.143 1.847l.167.117.162.099c.86.487.56 1.766-.377 1.864L20 18H4c-1.028 0-1.387-1.364-.493-1.87a3 3 0 001.472-2.063L5 13.924l.001-2.97A8 8 0 018.822 4.5l.248-.146.01-.043a3.003 3.003 0 012.562-2.29l.182-.017L12 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BellRingingFilledIcon;
/* prettier-ignore-end */