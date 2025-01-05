// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SquareRoundedArrowRightFilledIcon(props) {
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
          "M12 2c-.218 0-.432.002-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579c-.005.098-.01.198-.013.299l-.017.616-.004.318L2 12c0 .218.002.432.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034c.098.005.198.01.299.013l.616.017L12 22l.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579c.005-.098.01-.198.013-.299l.017-.616L22 12l-.005-.642-.017-.616-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034c-.1-.005-.2-.01-.299-.013l-.616-.017-.318-.004L12 2zm.613 5.21l.094.083 4 4a.923.923 0 01.097.112l.071.11.054.114.035.105.03.148L17 12l-.003.075-.017.126-.03.111-.044.111-.052.098-.074.104-.073.082-4 4a1 1 0 01-1.497-1.32l.083-.094L13.585 13H8a1 1 0 01-.117-1.993L8 11h5.585l-2.292-2.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareRoundedArrowRightFilledIcon;
/* prettier-ignore-end */