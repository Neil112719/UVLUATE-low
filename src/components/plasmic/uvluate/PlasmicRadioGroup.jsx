// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4uR12v7QrPwop4VtjZSzHQ
// Component: lPjPj3eaIla_
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
import { BaseRadioGroup } from "@plasmicpkgs/react-aria/skinny/registerRadioGroup";
import Label from "../../Label"; // plasmic-import: nyiDjvcaZII_/component
import Radio from "../../Radio"; // plasmic-import: DTJGt47M8dJA/component
import Description from "../../Description"; // plasmic-import: p5tKZ8xmXkDB/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4uR12v7QrPwop4VtjZSzHQ/projectcss
import sty from "./PlasmicRadioGroup.module.css"; // plasmic-import: lPjPj3eaIla_/css

createPlasmicElementProxy;

export const PlasmicRadioGroup__VariantProps = new Array();

export const PlasmicRadioGroup__ArgProps = new Array(
  "defaultValue",
  "showLabel",
  "showDescription",
  "disabled",
  "ariaLabel",
  "onChange",
  "label",
  "options",
  "description"
);

const $$ = {};

function PlasmicRadioGroup__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showDescription: false
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
        path: "ariaRadioGroup.value",
        type: "readonly",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultValue"],
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
    <BaseRadioGroup
      data-plasmic-name={"ariaRadioGroup"}
      data-plasmic-override={overrides.ariaRadioGroup}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.ariaRadioGroup
      )}
      defaultValue={args.defaultValue}
      isDisabled={args.disabled}
      isReadOnly={$ccVariants["readonly"] ? true : undefined}
      onChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, ["ariaRadioGroup", "value"]).apply(
          null,
          eventArgs
        );
      }}
      plasmicUpdateVariant={updateVariant}
      value={generateStateValueProp($state, ["ariaRadioGroup", "value"])}
    >
      {$props.showLabel ? (
        <Label
          data-plasmic-name={"label"}
          data-plasmic-override={overrides.label}
          className={classNames("__wab_instance", sty.label)}
        >
          {renderPlasmicSlot({
            defaultContents: <Trans__>{"Label"}</Trans__>,
            value: args.label
          })}
        </Label>
      ) : null}
      {renderPlasmicSlot({
        defaultContents: (
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__sAoXm)}
          >
            <Radio
              className={classNames("__wab_instance", sty.radio__lp72A)}
              label={<Trans__>{"Option 1"}</Trans__>}
              value={"option1"}
            />

            <Radio
              className={classNames("__wab_instance", sty.radio___5MT3U)}
              label={<Trans__>{"Option 2"}</Trans__>}
              value={"option2"}
            />

            <Radio
              className={classNames("__wab_instance", sty.radio__cLoEu)}
              label={<Trans__>{"Option 3"}</Trans__>}
              value={"option3"}
            />
          </Stack__>
        ),

        value: args.options
      })}
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        >
          {renderPlasmicSlot({
            defaultContents: <Trans__>{"Description..."}</Trans__>,
            value: args.description
          })}
        </Description>
      ) : null}
    </BaseRadioGroup>
  );
}

const PlasmicDescendants = {
  ariaRadioGroup: ["ariaRadioGroup", "label", "description"],
  label: ["label"],
  description: ["description"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRadioGroup__ArgProps,
          internalVariantPropNames: PlasmicRadioGroup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRadioGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaRadioGroup") {
    func.displayName = "PlasmicRadioGroup";
  } else {
    func.displayName = `PlasmicRadioGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicRadioGroup = Object.assign(
  // Top-level PlasmicRadioGroup renders the root element
  makeNodeComponent("ariaRadioGroup"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    description: makeNodeComponent("description"),
    // Metadata about props expected for PlasmicRadioGroup
    internalVariantProps: PlasmicRadioGroup__VariantProps,
    internalArgProps: PlasmicRadioGroup__ArgProps
  }
);

export default PlasmicRadioGroup;
/* prettier-ignore-end */