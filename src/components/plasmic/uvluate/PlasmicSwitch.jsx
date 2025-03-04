// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4uR12v7QrPwop4VtjZSzHQ
// Component: ymxmjINI_tzV
import * as React from "react";
import {
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  renderPlasmicSlot,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseSwitch } from "@plasmicpkgs/react-aria/skinny/registerSwitch";
import Description from "../../Description"; // plasmic-import: p5tKZ8xmXkDB/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4uR12v7QrPwop4VtjZSzHQ/projectcss
import sty from "./PlasmicSwitch.module.css"; // plasmic-import: ymxmjINI_tzV/css

createPlasmicElementProxy;

export const PlasmicSwitch__VariantProps = new Array();

export const PlasmicSwitch__ArgProps = new Array(
  "showLabel",
  "showDescription",
  "autoFocus",
  "isSelected",
  "disabled",
  "readOnly",
  "ariaLabel",
  "onChange",
  "label"
);

const $$ = {};

function PlasmicSwitch__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showDescription: false,
          autoFocus: false,
          disabled: false
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "ariaSwitch.isSelected",
        type: "writable",
        variableType: "boolean",
        valueProp: "isSelected",
        onChangeProp: "onChange"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const [$ccVariants, setDollarCcVariants] = React.useState({
    hovered: false,
    pressed: false,
    focused: false,
    focusVisible: false,
    selected: false,
    disabled: false,
    readonly: false
  });
  const updateVariant = React.useCallback(changes => {
    setDollarCcVariants(prev => {
      if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
        return prev;
      }
      return { ...prev, ...changes };
    });
  }, []);
  return (
    <BaseSwitch
      data-plasmic-name={"ariaSwitch"}
      data-plasmic-override={overrides.ariaSwitch}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      autoFocus={args.autoFocus}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.ariaSwitch
      )}
      isDisabled={args.disabled}
      isReadOnly={args.readOnly}
      isSelected={generateStateValueProp($state, ["ariaSwitch", "isSelected"])}
      onChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, ["ariaSwitch", "isSelected"]).apply(
          null,
          eventArgs
        );
      }}
      plasmicUpdateVariant={updateVariant}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"switchIndicator"}
          data-plasmic-override={overrides.switchIndicator}
          className={classNames(projectcss.all, sty.switchIndicator)}
        >
          <div
            data-plasmic-name={"thumb"}
            data-plasmic-override={overrides.thumb}
            className={classNames(projectcss.all, sty.thumb)}
          />
        </div>
        {$props.showLabel
          ? renderPlasmicSlot({
              defaultContents: <Trans__>{"Label"}</Trans__>,
              value: args.label
            })
          : null}
      </Stack__>
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        />
      ) : null}
    </BaseSwitch>
  );
}

const PlasmicDescendants = {
  ariaSwitch: [
    "ariaSwitch",
    "freeBox",
    "switchIndicator",
    "thumb",
    "description"
  ],

  freeBox: ["freeBox", "switchIndicator", "thumb"],
  switchIndicator: ["switchIndicator", "thumb"],
  thumb: ["thumb"],
  description: ["description"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSwitch__ArgProps,
          internalVariantPropNames: PlasmicSwitch__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSwitch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaSwitch") {
    func.displayName = "PlasmicSwitch";
  } else {
    func.displayName = `PlasmicSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitch = Object.assign(
  // Top-level PlasmicSwitch renders the root element
  makeNodeComponent("ariaSwitch"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    switchIndicator: makeNodeComponent("switchIndicator"),
    thumb: makeNodeComponent("thumb"),
    description: makeNodeComponent("description"),
    // Metadata about props expected for PlasmicSwitch
    internalVariantProps: PlasmicSwitch__VariantProps,
    internalArgProps: PlasmicSwitch__ArgProps
  }
);

export default PlasmicSwitch;
/* prettier-ignore-end */
