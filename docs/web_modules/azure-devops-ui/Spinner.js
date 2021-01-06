import { r as react } from '../common/index-c314220c.js';
import { e as announce, c as css, g as getSafeId } from '../common/Accessibility-7d6906ea.js';

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Spinner/Spinner.css */
function __snowpack__injectStyle(css) {
  const headEl = document.head || document.getElementsByTagName('head')[0];
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  if (styleEl.styleSheet) {
    styleEl.styleSheet.cssText = css;
  } else {
    styleEl.appendChild(document.createTextNode(css));
  }
  headEl.appendChild(styleEl);
}
__snowpack__injectStyle(".bolt-spinner {\n  align-items: center;\n  justify-content: center; }\n\n@keyframes spinner-anim {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.bolt-spinner-circle {\n  border:  1.5px solid;\n  border-color: rgba( 200, 200, 200 ,  1 );\n  border-color: rgba( var(--palette-neutral-20,200, 200, 200) ,  1 );\n  border-top-color: rgba(0, 90, 158, 1);\n  border-top-color: var(--communication-foreground,rgba(0, 90, 158, 1));\n  border-radius: 50%;\n  animation-name: spinner-anim;\n  animation-duration: 1.3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67); }\n  .bolt-spinner-circle.xsmall {\n    width: 0.75rem;\n    height: 0.75rem; }\n  .bolt-spinner-circle.small {\n    width: 1rem;\n    height: 1rem; }\n  .bolt-spinner-circle.medium {\n    width: 1.25rem;\n    height: 1.25rem; }\n  .bolt-spinner-circle.large {\n    width: 1.75rem;\n    height: 1.75rem; }\n\n.bolt-spinner-label {\n  color: rgba(0, 90, 158, 1);\n  color: var(--communication-foreground,rgba(0, 90, 158, 1)); }\n");

var SpinnerSize;
(function (SpinnerSize) {
    /**
     * 12px diameter
     */
    SpinnerSize["xSmall"] = "xsmall";
    /**
     * 16px diameter
     */
    SpinnerSize["small"] = "small";
    /**
     * 20px diameter
     */
    SpinnerSize["medium"] = "medium";
    /**
     * 28px diameter
     */
    SpinnerSize["large"] = "large";
})(SpinnerSize || (SpinnerSize = {}));
var SpinnerOrientation;
(function (SpinnerOrientation) {
    /**
     * When a label is used render the label and animation in a row (label to the right).
     */
    SpinnerOrientation[SpinnerOrientation["row"] = 0] = "row";
    /**
     * When a label is used render the label and animation in a column (label below).
     */
    SpinnerOrientation[SpinnerOrientation["column"] = 1] = "column";
})(SpinnerOrientation || (SpinnerOrientation = {}));

var Spinner = function (props) {
    var ariaLabel = props.ariaLabel, ariaLive = props.ariaLive, className = props.className, id = props.id, label = props.label, _a = props.orientation, orientation = _a === void 0 ? SpinnerOrientation.column : _a, _b = props.size, size = _b === void 0 ? SpinnerSize.medium : _b;
    // Only do this on mount; the aria-live region will handle any updates to props
    react.useEffect(function () {
        if (ariaLive === "assertive" || ariaLive === "polite") {
            announce(ariaLabel || label, ariaLive === "assertive");
        }
    }, []);
    return (react.createElement("div", { "aria-label": ariaLabel, "aria-live": ariaLive, className: css(className, "bolt-spinner", orientation === SpinnerOrientation.column ? "flex-column text-center rhythm-vertical-8" : "flex-row flex-center rhythm-horizontal-8"), id: getSafeId(id) },
        react.createElement("div", { className: css("bolt-spinner-circle", size) }),
        label && react.createElement("div", { className: "bolt-spinner-label" }, label)));
};
// TODO: Remove if we fix Jest issue
Spinner.displayName = "Spinner";

export { Spinner };
