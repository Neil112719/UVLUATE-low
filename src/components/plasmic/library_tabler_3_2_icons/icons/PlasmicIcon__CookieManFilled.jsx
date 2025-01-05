// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CookieManFilledIcon(props) {
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
          "M12.007 1l.238.005a6 6 0 015.405 3.974l.078.233a6 6 0 01-.182 4.08l-.093.21.05-.002a2.94 2.94 0 012.638 1.511l.081.158a2.887 2.887 0 01-1.234 3.764l-.19.096L17 15.85v.963l1.166 1.166.14.154a2.96 2.96 0 01-.17 4.002c-1.087 1.088-2.827 1.161-4.03.144l-.16-.146L12 20.185l-1.946 1.947a2.96 2.96 0 01-3.95.22l-.15-.128c-1.17-1.073-1.284-2.879-.234-4.12l.146-.158L7 16.812v-.962l-1.834-.84-.181-.093a2.88 2.88 0 01-1.205-3.75 2.93 2.93 0 012.646-1.661l.13.003-.03-.064a6.1 6.1 0 01-.503-1.968l-.017-.26V7a6 6 0 015.775-5.996L12.005 1h.002zm.003 15H12a1 1 0 000 2h.01a1 1 0 000-2zm0-3H12a1 1 0 000 2h.01a1 1 0 000-2zm0-5H12a1 1 0 100 2h.01a1 1 0 100-2zm-2-3H10a1 1 0 000 2h.01a1 1 0 100-2zm4 0H14a1 1 0 100 2h.01a1 1 0 100-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CookieManFilledIcon;
/* prettier-ignore-end */