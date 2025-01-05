// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChartDonutFilledIcon(props) {
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
          "M9.883 2.207a1.9 1.9 0 012.087 1.522l.025.167L12 4v4a1 1 0 01-.641.933l-.107.035a3.1 3.1 0 103.73 3.953l.05-.173a1 1 0 01.855-.742L16 12h3.8a2 2 0 012 2 1 1 0 01-.026.226A10 10 0 119.504 2.293l.27-.067.11-.02-.001.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.775 2.526a.996.996 0 01.22-.026l.122.007.112.02.103.03a10 10 0 016.003 5.817l.108.294a1 1 0 01-.824 1.325L20.5 10H16a1 1 0 01-.76-.35 7.995 7.995 0 00-.89-.89 1 1 0 01-.342-.636L14 8V3.505l.006-.118c.005-.042.012-.08.02-.116l.03-.103a.998.998 0 01.168-.299l.071-.08c.03-.028.058-.052.087-.075l.09-.063.088-.05.103-.043.112-.032z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChartDonutFilledIcon;
/* prettier-ignore-end */