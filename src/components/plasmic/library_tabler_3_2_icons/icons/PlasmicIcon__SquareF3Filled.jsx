// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SquareF3FilledIcon(props) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM14.5 8h-1l-.144.007A1.5 1.5 0 0012 9.5a1 1 0 001 1l.117-.007a1 1 0 00.727-.457l.02-.036h.636l.09.008a.5.5 0 010 .984L14.5 11H14l-.133.007c-1.156.124-1.156 1.862 0 1.986L14 13h.5l.09.008a.5.5 0 01.41.492l-.008.09a.5.5 0 01-.492.41h-.635l-.02-.036A1 1 0 0012 14.5a1.5 1.5 0 001.5 1.5h1l.164-.005A2.5 2.5 0 0017 13.5l-.005-.164a2.487 2.487 0 00-.477-1.312L16.499 12l.126-.183A2.5 2.5 0 0014.5 8zM10 8H8l-.117.007A1 1 0 007 9v6l.007.117A1 1 0 008 16l.117-.007A1 1 0 009 15v-2h1l.117-.007A1 1 0 0010 11H9v-1h1l.117-.007A1 1 0 0010 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareF3FilledIcon;
/* prettier-ignore-end */