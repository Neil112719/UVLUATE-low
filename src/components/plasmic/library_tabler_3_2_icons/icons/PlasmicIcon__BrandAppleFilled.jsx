// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BrandAppleFilledIcon(props) {
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
          "M15.079 5.999l.239.012c1.43.097 3.434 1.013 4.508 2.586a.999.999 0 01-.344 1.44c-.05.028-.372.158-.497.217a4.159 4.159 0 00-.722.431c-.614.461-.948 1.009-.942 1.694.01.885.339 1.454.907 1.846.208.143.436.253.666.33.126.043.426.116.444.122a1 1 0 01.662.942C20 18.24 16.96 22 14.714 22c-.79 0-1.272-.091-1.983-.315l-.098-.031c-.463-.146-.702-.192-1.133-.192-.52 0-.863.06-1.518.237l-.197.053c-.575.153-.964.226-1.5.248C5.536 22 3 16.907 3 12.928c0-3.87 1.786-6.92 5.286-6.92.297 0 .598.045.909.128.403.107.774.26 1.296.508.787.374.948.44 1.009.44h.016c.03-.003.128-.047 1.056-.457 1.061-.467 1.864-.685 2.746-.616l-.24-.012h.001zM14 1a1 1 0 011 1 3 3 0 01-3 3 1 1 0 01-1-1 3 3 0 013-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandAppleFilledIcon;
/* prettier-ignore-end */