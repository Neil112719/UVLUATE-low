// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CertificateOffIcon(props) {
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
          "M12.876 12.881a3 3 0 104.243 4.243m.588-3.42a3.012 3.012 0 00-1.437-1.423"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M13 17.5V22l2-1.5 2 1.5v-4.5M10 19H5a2 2 0 01-2-2V7c0-1.1.9-2 2-2m4 0h10a2 2 0 012 2v10M6 9h3m4 0h5M6 12h3m-3 3h2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CertificateOffIcon;
/* prettier-ignore-end */