// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BrandGithubFilledIcon(props) {
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
          "M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161.16.1.397-.083a13.3 13.3 0 014.59-.08l.456.08.396.083.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008.147.017.076.014.05.011.144.047a1 1 0 01.53.514 5.2 5.2 0 01.397 2.91l-.047.267-.046.196.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061-.132.029.014.161.008.157.004.365-.002.213L16 21a1 1 0 01-.883.993L15 22H9a1 1 0 01-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 01.564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 01-.021-.824l.017-.185.019-.12-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 01.908-3.051l.152-.222.122-.163-.045-.196a5.2 5.2 0 01.145-2.642l.1-.282.106-.253a1 1 0 01.529-.514l.144-.047.154-.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandGithubFilledIcon;
/* prettier-ignore-end */
