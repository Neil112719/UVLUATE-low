// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DropletHalf2FilledIcon(props) {
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
          "M13.905 2.923l.098.135 4.92 7.306a7.565 7.565 0 011.043 3.167l.024.326c.007.047.01.094.01.143l-.002.06c.056 2.3-.944 4.582-2.87 6.14-2.969 2.402-7.286 2.402-10.255 0-1.904-1.54-2.904-3.787-2.865-6.071a1.052 1.052 0 01.013-.333 7.66 7.66 0 01.913-3.176l.172-.302 4.893-7.26c.185-.275.426-.509.709-.686 1.055-.66 2.446-.413 3.197.55v.001zm-2.06 1.107l-.077.038-.041.03-.037.036-.033.042-4.863 7.214c-.3.5-.519 1.043-.651 1.61h11.723a5.444 5.444 0 00-.49-1.313l-.141-.251-4.891-7.261a.428.428 0 00-.5-.145h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DropletHalf2FilledIcon;
/* prettier-ignore-end */