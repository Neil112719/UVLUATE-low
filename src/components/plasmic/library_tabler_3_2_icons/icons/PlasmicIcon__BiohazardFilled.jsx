// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BiohazardFilledIcon(props) {
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
          "M16.41 2.072a6.25 6.25 0 011.514 6.387l-.051.137.223.044c.217.048.432.108.645.18l.318.117.25.105c2.155.97 3.572 3.067 3.681 5.483v.217a1.5 1.5 0 11-3-.003l.002-.145a3.25 3.25 0 00-4.412-2.886l-.091.037.004.038.007.217a3.5 3.5 0 01-1.817 3.07l-.16.082.014.11c.082.511.285.997.595 1.416l.14.175a3.25 3.25 0 002.27 1.136l.203.006a1.5 1.5 0 110 3 6.25 6.25 0 01-4.575-1.991l-.177-.199-.078.092a6.3 6.3 0 01-3.921 2.054l-.273.028-.259.016h-.217a1.5 1.5 0 11.003-3l.145.002a3.25 3.25 0 003.074-2.82l.003-.03-.161-.083a3.5 3.5 0 01-1.804-2.883l-.005-.195.006-.191.003-.043-.075-.032a3.25 3.25 0 00-2.398.008l-.191.084a3.25 3.25 0 00-1.85 2.933 1.5 1.5 0 01-3 0 6.25 6.25 0 015.036-6.13l.077-.014-.05-.143-.08-.26-.066-.25a6.27 6.27 0 011.47-5.678l.163-.172a1.5 1.5 0 112.171 2.07l-.137.143a3.25 3.25 0 00.386 4.723l.084.062.05-.034a3.5 3.5 0 011.673-.555L12 8.5c.683 0 1.336.197 1.894.556l.048.033.067-.048a3.25 3.25 0 001.111-1.669l.05-.2a3.25 3.25 0 00-.74-2.828l-.141-.15a1.5 1.5 0 112.121-2.122z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BiohazardFilledIcon;
/* prettier-ignore-end */