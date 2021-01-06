import { r as react } from '../common/index-c314220c.js';
import { r as reactDom } from '../common/index-5a0b1fc3.js';
import { n as noop, g as getSafeId, s as shimRef, K as KeyCode, a as getRelationship, E as ElementRelationship, c as css, i as isFunctionalChildren, b as getFocusVisible, M as Mouse, d as childCount, e as announce, f as setFocusVisible } from '../common/Accessibility-7d6906ea.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Button/Button.css */
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
__snowpack__injectStyle(".bolt-button {\n  align-items: center;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  display: inline-flex;\n  flex-direction: row;\n  flex-shrink: 0;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 600;\n  justify-content: center;\n  line-height: inherit;\n  outline: none;\n  overflow: visible;\n  /* IE11 needs overflow visible for the focus treatment to show up */\n  padding: 6px 12px;\n  position: relative;\n  transition: background 80ms linear; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-button {\n      border: 1px solid windowtext; } }\n\n/* This is here to work around Legacy styles setting the heights of all buttons to 30px */\nbutton.bolt-button {\n  height: auto; }\n\n/* Needed to remove the focus-rectangle from FireFox. */\n.bolt-button::-moz-focus-inner {\n  border: 0; }\n\n/* Danger modifiers */\n.bolt-button.danger {\n  background-color: rgba(232, 17, 35, 1);\n  background-color: var(--palette-error,rgba(232, 17, 35, 1));\n  color: rgba(255, 255, 255, 1);\n  color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n\n.bolt-button.danger:hover {\n  background-color: rgba(203, 15, 31, 1);\n  background-color: var(--palette-error-6,rgba(203, 15, 31, 1)); }\n\n.bolt-button.danger:active,\n.bolt-button.danger.active {\n  background-color: rgba(184, 14, 28, 1);\n  background-color: var(--palette-error-10,rgba(184, 14, 28, 1)); }\n\n/* Primary modifiers */\n.bolt-button.primary {\n  background-color: rgba(0, 120, 212, 1);\n  background-color: var(--communication-background,rgba(0, 120, 212, 1));\n  color: rgba(255, 255, 255, 1);\n  color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n\n.bolt-button.primary:hover {\n  background-color: rgba( 0, 103, 181 ,  1 );\n  background-color: rgba( var(--palette-primary-darkened-6,0, 103, 181) ,  1 ); }\n\n.bolt-button.primary:active,\n.bolt-button.primary.active {\n  background-color: rgba( 0, 91, 161 ,  1 );\n  background-color: rgba( var(--palette-primary-darkened-10,0, 91, 161) ,  1 ); }\n\n@media screen and (-ms-high-contrast: active) {\n  .bolt-button:not(.disabled):hover {\n    color: HighLight; } }\n\n/* Disabled modifiers */\n.bolt-button.disabled,\n.bolt-button.disabled:hover,\n.bolt-button.disabled:focus {\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06));\n  color: rgba(0, 0, 0, .38);\n  color: var(--text-disabled-color,rgba(0, 0, 0, .38));\n  cursor: default; }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-button.disabled,\n    .bolt-button.disabled:hover,\n    .bolt-button.disabled:focus {\n      color: GrayText;\n      forced-color-adjust: none; } }\n\n/* Subtle modifiers (before standard for overrides) */\n.bolt-button.subtle,\n.bolt-button.subtle.disabled:hover,\n.bolt-button.subtle.disabled:focus {\n  background-color: transparent; }\n\n.bolt-button.subtle:hover {\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06)); }\n\n.bolt-button.subtle:active {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n\n/* Basic button colors */\n.bolt-button {\n  background-color: rgba(0, 0, 0, 0.06);\n  background-color: var(--palette-black-alpha-6,rgba(0, 0, 0, 0.06));\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9));\n  margin: 0; }\n\n.bolt-button:focus {\n  z-index: 1; }\n\n.bolt-button:hover {\n  background-color: rgba(0, 0, 0, 0.10);\n  background-color: var(--palette-black-alpha-10,rgba(0, 0, 0, 0.10)); }\n\n.bolt-button:active,\n.bolt-button.active {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n\n.bolt-link-button {\n  text-decoration: none; }\n\n.bolt-button.icon-only {\n  padding: 8px 22px;\n  font-weight: normal; }\n\n.bolt-button.icon-only.subtle {\n  padding: 8px; }\n\n.bolt-button:not(.icon-only) > .left-icon {\n  font-weight: normal;\n  padding-right: 10px; }\n\n.bolt-button.bolt-link-button {\n  color: rgba(0, 0, 0, .9);\n  color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n  .bolt-button.bolt-link-button:hover {\n    color: rgba(0, 0, 0, .9);\n    color: var(--text-primary-color,rgba(0, 0, 0, .9));\n    text-decoration: none; }\n  .bolt-button.bolt-link-button:visited {\n    color: rgba(0, 0, 0, .9);\n    color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n  .bolt-button.bolt-link-button:active, .bolt-button.bolt-link-button.active {\n    color: rgba(0, 0, 0, .9);\n    color: var(--text-primary-color,rgba(0, 0, 0, .9)); }\n  .bolt-button.bolt-link-button.disabled {\n    color: rgba(0, 0, 0, .38);\n    color: var(--text-disabled-color,rgba(0, 0, 0, .38)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-button.bolt-link-button.disabled {\n        color: GrayText;\n        forced-color-adjust: none; } }\n\n.bolt-button.bolt-link-button.primary {\n  color: rgba(255, 255, 255, 1);\n  color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n  .bolt-button.bolt-link-button.primary:hover {\n    color: rgba(255, 255, 255, 1);\n    color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n  .bolt-button.bolt-link-button.primary:visited {\n    color: rgba(255, 255, 255, 1);\n    color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n  .bolt-button.bolt-link-button.primary:active, .bolt-button.bolt-link-button.primary.active {\n    color: rgba(255, 255, 255, 1);\n    color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n\n.bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n  animation: ms-focus-shadow-pulse 4s ease-in-out infinite;\n  box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23);\n  box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23));\n  border-color: rgba(0, 120, 212, 1);\n  border-color: var(--focus-border-color,rgba(0, 120, 212, 1)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n      animation: none; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n      forced-color-adjust: none;\n      border-color: highlight; } }\n  @media screen and (-ms-high-contrast: black-on-white) {\n    .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n      outline: 1px solid highlight;\n      outline-offset: 1px; } }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus {\n      background: window;\n      color: windowtext; } }\n  .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus.primary {\n    animation: ms-focus-shadow-with-border-pulse 4s ease-in-out infinite;\n    box-shadow: 0 0 0 3px rgba(0, 120, 212, 0.23), 0 0 0 1px rgba(0, 120, 212, 1);\n    box-shadow: 0 0 0 3px var(--focus-pulse-max-color,rgba(0, 120, 212, 0.23)), 0 0 0 1px var(--focus-border-color,rgba(0, 120, 212, 1));\n    border-color: rgba(255, 255, 255, 1);\n    border-color: var(--text-on-communication-background,rgba(255, 255, 255, 1)); }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus.primary {\n        animation: none; } }\n    @media screen and (-ms-high-contrast: active) {\n      .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus.primary {\n        border-color: highlight;\n        box-shadow: none; } }\n  .bolt-focus-visible .bolt-button.bolt-focus-treatment:focus:after {\n    content: none !important; }\n\n.ms-Dialog-action .bolt-button {\n  font-size: 0.875rem; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Button/ExpandableButton.css */
function __snowpack__injectStyle$1(css) {
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
__snowpack__injectStyle$1(".bolt-expandable-button .icon-right {\n  padding-left: 10px; }\n\n.bolt-expandable-button .subtle.active {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n");

var FocusGroupContext = react.createContext({
    onFocus: noop
});
var FocusGroup = /** @class */ (function (_super) {
    __extends(FocusGroup, _super);
    function FocusGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.onFocus = function (focusedElementId) {
            // Only setState if the focusedElement is changing. This prevents us from setting the state
            // when focus keeps getting fired on the same element. Example: Browser keeps losing and
            // getting focus.
            if (_this.state.focusedElementId !== focusedElementId) {
                _this.setState({ focusedElementId: focusedElementId });
            }
        };
        _this.state = { defaultElementId: props.defaultElementId, focusedElementId: props.defaultElementId };
        return _this;
    }
    FocusGroup.getDerivedStateFromProps = function (props, state) {
        if (state.defaultElementId !== props.defaultElementId) {
            return __assign(__assign({}, state), { defaultElementId: props.defaultElementId, focusedElementId: props.defaultElementId });
        }
        return null;
    };
    FocusGroup.prototype.render = function () {
        return (react.createElement(FocusGroupContext.Provider, { value: {
                focusedElementId: this.state.focusedElementId,
                onFocus: this.onFocus
            } }, this.props.children));
    };
    FocusGroup.prototype.focus = function (elementId) {
        var id = getSafeId(elementId || this.state.focusedElementId);
        if (id) {
            var element = document.getElementById(id);
            if (element) {
                element.focus();
            }
        }
    };
    return FocusGroup;
}(react.Component));

/**
 * Which direction focus moves within a FocusZone
 */
var FocusZoneDirection;
(function (FocusZoneDirection) {
    FocusZoneDirection[FocusZoneDirection["Horizontal"] = 1] = "Horizontal";
    FocusZoneDirection[FocusZoneDirection["Vertical"] = 2] = "Vertical";
})(FocusZoneDirection || (FocusZoneDirection = {}));
/**
 * The preprocessKeyStroke method can return one of the following values
 * to modify how the current and parent focus zones treat the keystroke.
 */
var FocusZoneKeyStroke;
(function (FocusZoneKeyStroke) {
    /**
     * Dont alter the keystroke in any way.
     */
    FocusZoneKeyStroke[FocusZoneKeyStroke["IgnoreNone"] = 1] = "IgnoreNone";
    /**
     * All parent focus zones should ignore the keystroke, but it should be
     * processed normally by the current focuszone.
     */
    FocusZoneKeyStroke[FocusZoneKeyStroke["IgnoreParents"] = 2] = "IgnoreParents";
    /**
     * All focuszones that receive the keystroke should ignore it.
     */
    FocusZoneKeyStroke[FocusZoneKeyStroke["IgnoreAll"] = 3] = "IgnoreAll";
})(FocusZoneKeyStroke || (FocusZoneKeyStroke = {}));

// The FocusZoneContext carries the identifier for the current FocusZone.
var FocusZoneContext = react.createContext({ direction: undefined, focuszoneId: undefined });
// As an event propagates through the hierarchy of focus zones it may
// be marked as ignored. This allows a child focus zone to mark an event
// as "pass-through" for all of its parents.
var ignoreEvent = false;
// An internal identifier used to created unique focuszoneId's.
var focuszoneId = 1;
var FocusZone = /** @class */ (function (_super) {
    __extends(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this.rootElements = [];
        _this.state = {
            focuszoneId: "focuszone-" + focuszoneId++
        };
        return _this;
    }
    FocusZone.prototype.render = function () {
        var _this = this;
        // We need to shim the KeyDown event on each of the children. This allows us to capture
        // the event and process it for focus changes.
        var content = (react.createElement(FocusZoneContext.Consumer, null, function (parentContext) { return (react.createElement(FocusZoneContext.Provider, { value: { direction: _this.props.direction, focuszoneId: _this.state.focuszoneId } }, react.Children.map(_this.props.children, function (child, index) {
            if (child === null || typeof child === "string" || typeof child === "number") {
                return child;
            }
            // All direct children MUST be DOM elements.
            if (typeof child.type !== "string") {
                throw Error("Children of a focus zone MUST be DOM elements");
            }
            // Save the supplied keydown event handler so we can forward the event to it.
            var existingOnKeyDown = child.props.onKeyDown;
            var existingOnFocus = child.props.onFocus;
            // Save the component reference for this element, either the one from the original
            // component or the one we added.
            _this.rootElements[index] = shimRef(child);
            return react.cloneElement(child, __assign(__assign({ key: index }, child.props), { ref: _this.rootElements[index], onFocus: function (event) {
                    var _a;
                    if (existingOnFocus) {
                        existingOnFocus(event);
                    }
                    var focusCurrent = document.activeElement;
                    for (var index_1 = 0; index_1 < _this.rootElements.length; index_1++) {
                        var rootElement = (_a = _this.rootElements[index_1]) === null || _a === void 0 ? void 0 : _a.current;
                        if (rootElement && (rootElement.contains(focusCurrent) || rootElement === focusCurrent)) {
                            _this.lastFocusElement = event.target;
                        }
                    }
                }, onKeyDown: function (event) {
                    var ignoreKeystroke = FocusZoneKeyStroke.IgnoreNone;
                    if (existingOnKeyDown) {
                        existingOnKeyDown(event);
                    }
                    // Determine whether or not this focuszone wants to preprocess this keystroke
                    // and mark the current propagation as ignored.
                    if (!ignoreEvent && _this.props.preprocessKeyStroke) {
                        ignoreKeystroke = _this.props.preprocessKeyStroke(event);
                        if (ignoreKeystroke === FocusZoneKeyStroke.IgnoreAll) {
                            ignoreEvent = true;
                        }
                    }
                    if (!ignoreEvent) {
                        if (!event.defaultPrevented && !_this.props.disabled) {
                            var nodeName = event.target.nodeName;
                            var offset = void 0;
                            // Logic to handle input / text area tags
                            var inputPosition = void 0;
                            var inputLength = void 0;
                            if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
                                var input = event.target;
                                try {
                                    inputPosition = typeof input.selectionStart === "number" ? input.selectionStart : undefined;
                                }
                                catch (_a) {
                                    // Microsoft Edge throws InvalidStateError when calling 'input.selectionStart' on non-supported input element types
                                    // according to https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
                                    // Ignore this error
                                }
                                inputLength = input.value.length;
                            }
                            var allowLeftArrow = inputPosition === undefined || (inputPosition === 0 && _this.props.allowArrowOutOfInputs);
                            var allowRightArrow = inputPosition === undefined ||
                                inputLength === undefined ||
                                (inputPosition === inputLength && _this.props.allowArrowOutOfInputs);
                            switch (event.which) {
                                case KeyCode.upArrow:
                                    if (nodeName !== "TEXTAREA") {
                                        if (_this.props.direction === FocusZoneDirection.Vertical) {
                                            offset = -1;
                                        }
                                    }
                                    break;
                                case KeyCode.downArrow:
                                    if (nodeName !== "TEXTAREA") {
                                        if (_this.props.direction === FocusZoneDirection.Vertical) {
                                            offset = 1;
                                        }
                                    }
                                    break;
                                case KeyCode.rightArrow:
                                    if (allowRightArrow) {
                                        if (_this.props.direction === FocusZoneDirection.Horizontal) {
                                            offset = 1;
                                        }
                                    }
                                    break;
                                case KeyCode.leftArrow:
                                    if (allowLeftArrow) {
                                        if (_this.props.direction === FocusZoneDirection.Horizontal) {
                                            offset = -1;
                                        }
                                    }
                                    break;
                                case KeyCode.tab:
                                    if (_this.props.handleTabKey) {
                                        offset = event.shiftKey ? -1 : 1;
                                    }
                                    break;
                                case KeyCode.enter:
                                    if (_this.props.activateOnEnter) {
                                        event.target.click();
                                    }
                            }
                            if (offset) {
                                if (_this.focusNextElement(event, offset)) {
                                    event.preventDefault();
                                }
                            }
                        }
                    }
                    if (ignoreKeystroke === FocusZoneKeyStroke.IgnoreParents) {
                        ignoreEvent = true;
                    }
                    // Perform any supplied event post processing.
                    if (!ignoreEvent && _this.props.postprocessKeyStroke) {
                        if (_this.props.postprocessKeyStroke(event) === FocusZoneKeyStroke.IgnoreParents) {
                            ignoreEvent = true;
                        }
                    }
                    // Once we reach the root focuszone we need to clear the ignoredEvent.
                    if (!parentContext.focuszoneId) {
                        ignoreEvent = false;
                    }
                } }));
        }))); }));
        if (this.props.focusGroupProps) {
            content = react.createElement(FocusGroup, __assign({}, this.props.focusGroupProps), content);
        }
        return content;
    };
    FocusZone.prototype.componentDidMount = function () {
        var focusElement;
        // If a defaultActiveElement is supplied we will focus it. It is not required to
        // be member of the focus zone, it can be any element.
        if (this.props.focusOnMount) {
            var defaultActiveElement = this.props.defaultActiveElement;
            var focusElements = this.getFocusElements(typeof defaultActiveElement === "function" ? defaultActiveElement() : defaultActiveElement);
            if (focusElements.length > 0) {
                focusElement = focusElements[0];
            }
        }
        if (focusElement) {
            focusElement.focus();
        }
    };
    FocusZone.prototype.focusNextElement = function (event, offset) {
        var focusElements = this.getFocusElements();
        if (focusElements.length > 0) {
            var focusCurrent = document.activeElement;
            var rootElements = this.rootElements;
            // Determine if an element in the focus zone has focus.
            var focusIndex = focusElements.indexOf(focusCurrent);
            // Focus may not be on an element in the zone so we need to
            // figure out which one we are between in this case.
            if (focusIndex === -1) {
                var index = 0;
                // Determine if the element is in a portal or directly within a focuszone root.
                for (index = 0; index < rootElements.length; index++) {
                    var elementRef = rootElements[index];
                    if (elementRef.current) {
                        if (elementRef.current.contains(event.target)) {
                            break;
                        }
                    }
                }
                // If this is coming from a portal, we will use the element that last had focus.
                if (index === this.rootElements.length && this.lastFocusElement) {
                    focusIndex = focusElements.indexOf(this.lastFocusElement);
                }
                else {
                    for (index = 0; index < focusElements.length; index++) {
                        var relationship = getRelationship(focusCurrent, focusElements[index]);
                        if (relationship === ElementRelationship.Before) {
                            focusIndex = index - (offset > 0 ? 1 : 0);
                            break;
                        }
                        else if (relationship === ElementRelationship.Child) {
                            focusIndex = index;
                            break;
                        }
                        else if (relationship === ElementRelationship.After && index === focusElements.length - 1) {
                            focusIndex = focusElements.length;
                        }
                    }
                }
            }
            // Move to the next component in the set of focus zone components.
            focusIndex += offset;
            // If the FocusZone supports circular navigation and we are on the end
            // we will move to the element on the opposite end.
            if (this.props.circularNavigation) {
                if (focusIndex < 0) {
                    focusIndex = focusElements.length - 1;
                }
                else if (focusIndex >= focusElements.length) {
                    focusIndex = 0;
                }
            }
            // If we ended up on a focusable element update the focus.
            if (focusIndex > -1 && focusIndex < focusElements.length) {
                focusElements[focusIndex].focus();
                return true;
            }
        }
        return false;
    };
    FocusZone.prototype.getFocusElements = function (customSelector) {
        var focusElements = [];
        var selector = customSelector;
        // If a custom selector was supplied we will use it.
        if (!selector) {
            // The default selector will just pick up items tagged with this focuszone id.
            selector = "[data-focuszone~=" + this.state.focuszoneId + "]";
            // If we are including the default elements from the DOM we will add the
            // default selector to our list of selectors.
            if (this.props.includeDefaults) {
                selector += ",a[href],button,iframe,input,select,textarea,[tabIndex]";
            }
        }
        // Filter the elements that matched our query to the elements that are elligible
        // for receiving focus in this focuszone.
        for (var _i = 0, _a = this.rootElements; _i < _a.length; _i++) {
            var rootElement = _a[_i];
            if (rootElement.current) {
                var focusChildren = rootElement.current.querySelectorAll(selector);
                // Check if the root element matches our selector.
                if (rootElement.current.matches(selector) && this.isFocusElement(rootElement.current, customSelector)) {
                    focusElements.push(rootElement.current);
                }
                // Check all the children of the root that are potential focus elements.
                for (var rootIndex = 0; rootIndex < focusChildren.length; rootIndex++) {
                    var element = focusChildren[rootIndex];
                    if (this.isFocusElement(element, customSelector)) {
                        focusElements.push(element);
                    }
                }
            }
        }
        return focusElements;
    };
    /**
     * isFocusElement is used to determine whether or not an element should participate
     * in this focus zone.
     *
     * @param element HTML Element that you are testing as a valid focus element.
     *
     * @param customSelector A custom selector that is used to match elements with
     *  negative tabIndex. These wont match normally unless targetted by the custom
     *  selector.
     */
    FocusZone.prototype.isFocusElement = function (element, customSelector) {
        // Filter out elements that are disabled.
        if (element.hasAttribute("disabled")) {
            return false;
        }
        if (!customSelector) {
            // Filter out elements that are not visible.
            if (!this.props.skipHiddenCheck) {
                var style = window.getComputedStyle(element);
                if (style.visibility === "hidden" ||
                    style.display === "none" ||
                    !(element.offsetWidth || element.offsetHeight || element.getClientRects().length)) {
                    return false;
                }
            }
            // Filter out elements with negative tabIndex that aren't
            // explicity marked for this focuszone.
            var tabIndex = element.getAttribute("tabindex");
            if (tabIndex && parseInt(tabIndex) < 0) {
                var focuszoneId_1 = element.getAttribute("data-focuszone");
                if (!focuszoneId_1 || focuszoneId_1.indexOf(this.state.focuszoneId) < 0) {
                    return false;
                }
            }
        }
        return true;
    };
    return FocusZone;
}(react.Component));

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Icon/FabricIcons.css */
function __snowpack__injectStyle$2(css) {
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
__snowpack__injectStyle$2("@font-face {\n  font-family: \"AzureDevOpsMDL2Assets\";\n  src: url(\"./fonts/AzDevMDL2.woff\") format(\"woff\"); }\n\n.fabric-icon {\n  align-self: center;\n  display: inline-flex;\n  font-family: \"AzureDevOpsMDL2Assets\";\n  -webkit-font-smoothing: antialiased; }\n  .fabric-icon.small {\n    font-size: 0.75rem;\n    line-height: 0.75rem; }\n  .fabric-icon.medium {\n    font-size: 1rem;\n    line-height: 1rem; }\n  .fabric-icon.large {\n    font-size: 1.5rem;\n    line-height: 1.5rem; }\n\n/**\r\n * Adjustments to specific icon placements based on their default layout.\r\n */\n.ms-Icon--FabricFolder,\n.ms-Icon--FabricFolderFill {\n  transform: translateY(1px); }\n\n.ms-Icon--Tag {\n  transform: translateY(1px); }\n\n/**\r\n * Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license\r\n */\n.ms-Icon--Insights:before {\n  content: \"\\E3AF\"; }\n\n.ms-Icon--GlobalNavButton:before {\n  content: \"\\E700\"; }\n\n.ms-Icon--Airplane:before {\n  content: \"\\E709\"; }\n\n.ms-Icon--ChevronDown:before {\n  content: \"\\E70D\"; }\n\n.ms-Icon--ChevronUp:before {\n  content: \"\\E70E\"; }\n\n.ms-Icon--Edit:before {\n  content: \"\\E70F\"; }\n\n.ms-Icon--Add:before {\n  content: \"\\E710\"; }\n\n.ms-Icon--Cancel:before {\n  content: \"\\E711\"; }\n\n.ms-Icon--More:before {\n  content: \"\\E712\"; }\n\n.ms-Icon--Settings:before {\n  content: \"\\E713\"; }\n\n.ms-Icon--Video:before {\n  content: \"\\E714\"; }\n\n.ms-Icon--Mail:before {\n  content: \"\\E715\"; }\n\n.ms-Icon--People:before {\n  content: \"\\E716\"; }\n\n.ms-Icon--Phone:before {\n  content: \"\\E717\"; }\n\n.ms-Icon--Pin:before {\n  content: \"\\E718\"; }\n\n.ms-Icon--Shop:before {\n  content: \"\\E719\"; }\n\n.ms-Icon--Link:before {\n  content: \"\\E71B\"; }\n\n.ms-Icon--Filter:before {\n  content: \"\\E71C\"; }\n\n.ms-Icon--Zoom:before {\n  content: \"\\E71E\"; }\n\n.ms-Icon--ZoomOut:before {\n  content: \"\\E71F\"; }\n\n.ms-Icon--Search:before {\n  content: \"\\E721\"; }\n\n.ms-Icon--Attach:before {\n  content: \"\\E723\"; }\n\n.ms-Icon--Send:before {\n  content: \"\\E724\"; }\n\n.ms-Icon--FavoriteList:before {\n  content: \"\\E728\"; }\n\n.ms-Icon--Forward:before {\n  content: \"\\E72A\"; }\n\n.ms-Icon--Back:before {\n  content: \"\\E72B\"; }\n\n.ms-Icon--Refresh:before {\n  content: \"\\E72C\"; }\n\n.ms-Icon--Share:before {\n  content: \"\\E72D\"; }\n\n.ms-Icon--Lock:before {\n  content: \"\\E72E\"; }\n\n.ms-Icon--BlockedSite:before {\n  content: \"\\E72F\"; }\n\n.ms-Icon--ReportHacked:before {\n  content: \"\\E730\"; }\n\n.ms-Icon--EMI:before {\n  content: \"\\E731\"; }\n\n.ms-Icon--Blocked:before {\n  content: \"\\E733\"; }\n\n.ms-Icon--FavoriteStar:before {\n  content: \"\\E734\"; }\n\n.ms-Icon--FavoriteStarFill:before {\n  content: \"\\E735\"; }\n\n.ms-Icon--ReadingMode:before {\n  content: \"\\E736\"; }\n\n.ms-Icon--Remove:before {\n  content: \"\\E738\"; }\n\n.ms-Icon--CheckboxComposite:before {\n  content: \"\\E73A\"; }\n\n.ms-Icon--CheckboxCompositeReversed:before {\n  content: \"\\E73D\"; }\n\n.ms-Icon--CheckMark:before {\n  content: \"\\E73E\"; }\n\n.ms-Icon--BackToWindow:before {\n  content: \"\\E73F\"; }\n\n.ms-Icon--FullScreen:before {\n  content: \"\\E740\"; }\n\n.ms-Icon--Print:before {\n  content: \"\\E749\"; }\n\n.ms-Icon--Up:before {\n  content: \"\\E74A\"; }\n\n.ms-Icon--Down:before {\n  content: \"\\E74B\"; }\n\n.ms-Icon--OEM:before {\n  content: \"\\E74C\"; }\n\n.ms-Icon--Delete:before {\n  content: \"\\E74D\"; }\n\n.ms-Icon--Save:before {\n  content: \"\\E74E\"; }\n\n.ms-Icon--Flashlight:before {\n  content: \"\\E754\"; }\n\n.ms-Icon--Sad:before {\n  content: \"\\E757\"; }\n\n.ms-Icon--MultiSelect:before {\n  content: \"\\E762\"; }\n\n.ms-Icon--KeyboardClassic:before {\n  content: \"\\E765\"; }\n\n.ms-Icon--Play:before {\n  content: \"\\E768\"; }\n\n.ms-Icon--Pause:before {\n  content: \"\\E769\"; }\n\n.ms-Icon--ChevronLeft:before {\n  content: \"\\E76B\"; }\n\n.ms-Icon--ChevronRight:before {\n  content: \"\\E76C\"; }\n\n.ms-Icon--Emoji2:before {\n  content: \"\\E76E\"; }\n\n.ms-Icon--SearchAndApps:before {\n  content: \"\\E773\"; }\n\n.ms-Icon--Globe:before {\n  content: \"\\E774\"; }\n\n.ms-Icon--ContactInfo:before {\n  content: \"\\E779\"; }\n\n.ms-Icon--Unpin:before {\n  content: \"\\E77A\"; }\n\n.ms-Icon--Contact:before {\n  content: \"\\E77B\"; }\n\n.ms-Icon--Paste:before {\n  content: \"\\E77F\"; }\n\n.ms-Icon--WindowsLogo:before {\n  content: \"\\E782\"; }\n\n.ms-Icon--Error:before {\n  content: \"\\E783\"; }\n\n.ms-Icon--Unlock:before {\n  content: \"\\E785\"; }\n\n.ms-Icon--Calendar:before {\n  content: \"\\E787\"; }\n\n.ms-Icon--Megaphone:before {\n  content: \"\\E789\"; }\n\n.ms-Icon--Color:before {\n  content: \"\\E790\"; }\n\n.ms-Icon--SaveAs:before {\n  content: \"\\E792\"; }\n\n.ms-Icon--Undo:before {\n  content: \"\\E7A7\"; }\n\n.ms-Icon--RedEye:before {\n  content: \"\\E7B3\"; }\n\n.ms-Icon--Package:before {\n  content: \"\\E7B8\"; }\n\n.ms-Icon--Warning:before {\n  content: \"\\E7BA\"; }\n\n.ms-Icon--ShoppingCart:before {\n  content: \"\\E7BF\"; }\n\n.ms-Icon--Flag:before {\n  content: \"\\E7C1\"; }\n\n.ms-Icon--Page:before {\n  content: \"\\E7C3\"; }\n\n.ms-Icon--Car:before {\n  content: \"\\E804\"; }\n\n.ms-Icon--EatDrink:before {\n  content: \"\\E807\"; }\n\n.ms-Icon--Home:before {\n  content: \"\\E80F\"; }\n\n.ms-Icon--SwitcherStartEnd:before {\n  content: \"\\E810\"; }\n\n.ms-Icon--IncidentTriangle:before {\n  content: \"\\E814\"; }\n\n.ms-Icon--History:before {\n  content: \"\\E81C\"; }\n\n.ms-Icon--Work:before {\n  content: \"\\E821\"; }\n\n.ms-Icon--Recent:before {\n  content: \"\\E823\"; }\n\n.ms-Icon--LocationDot:before {\n  content: \"\\E827\"; }\n\n.ms-Icon--Dictionary:before {\n  content: \"\\E82D\"; }\n\n.ms-Icon--Pinned:before {\n  content: \"\\E840\"; }\n\n.ms-Icon--RevToggleKey:before {\n  content: \"\\E845\"; }\n\n.ms-Icon--View:before {\n  content: \"\\E890\"; }\n\n.ms-Icon--Previous:before {\n  content: \"\\E892\"; }\n\n.ms-Icon--Next:before {\n  content: \"\\E893\"; }\n\n.ms-Icon--Clear:before {\n  content: \"\\E894\"; }\n\n.ms-Icon--Download:before {\n  content: \"\\E896\"; }\n\n.ms-Icon--Help:before {\n  content: \"\\E897\"; }\n\n.ms-Icon--Upload:before {\n  content: \"\\E898\"; }\n\n.ms-Icon--Emoji:before {\n  content: \"\\E899\"; }\n\n.ms-Icon--ClosePane:before {\n  content: \"\\E89F\"; }\n\n.ms-Icon--OpenPane:before {\n  content: \"\\E8A0\"; }\n\n.ms-Icon--PreviewLink:before {\n  content: \"\\E8A1\"; }\n\n.ms-Icon--ZoomIn:before {\n  content: \"\\E8A3\"; }\n\n.ms-Icon--ViewAll:before {\n  content: \"\\E8A9\"; }\n\n.ms-Icon--Switch:before {\n  content: \"\\E8AB\"; }\n\n.ms-Icon--Rename:before {\n  content: \"\\E8AC\"; }\n\n.ms-Icon--Import:before {\n  content: \"\\E8B5\"; }\n\n.ms-Icon--Folder:before {\n  content: \"\\E8B7\"; }\n\n.ms-Icon--ChromeClose:before {\n  content: \"\\E8BB\"; }\n\n.ms-Icon--ShowResults:before {\n  content: \"\\E8BC\"; }\n\n.ms-Icon--PaymentCard:before {\n  content: \"\\E8C7\"; }\n\n.ms-Icon--Copy:before {\n  content: \"\\E8C8\"; }\n\n.ms-Icon--FontColor:before {\n  content: \"\\E8D3\"; }\n\n.ms-Icon--Permissions:before {\n  content: \"\\E8D7\"; }\n\n.ms-Icon--Italic:before {\n  content: \"\\E8DB\"; }\n\n.ms-Icon--Underline:before {\n  content: \"\\E8DC\"; }\n\n.ms-Icon--Bold:before {\n  content: \"\\E8DD\"; }\n\n.ms-Icon--Like:before {\n  content: \"\\E8E1\"; }\n\n.ms-Icon--FontSize:before {\n  content: \"\\E8E9\"; }\n\n.ms-Icon--Tag:before {\n  content: \"\\E8EC\"; }\n\n.ms-Icon--Library:before {\n  content: \"\\E8F1\"; }\n\n.ms-Icon--BlockContact:before {\n  content: \"\\E8F8\"; }\n\n.ms-Icon--AddFriend:before {\n  content: \"\\E8FA\"; }\n\n.ms-Icon--Accept:before {\n  content: \"\\E8FB\"; }\n\n.ms-Icon--BulletedList:before {\n  content: \"\\E8FD\"; }\n\n.ms-Icon--Preview:before {\n  content: \"\\E8FF\"; }\n\n.ms-Icon--Chat:before {\n  content: \"\\E901\"; }\n\n.ms-Icon--Group:before {\n  content: \"\\E902\"; }\n\n.ms-Icon--World:before {\n  content: \"\\E909\"; }\n\n.ms-Icon--Comment:before {\n  content: \"\\E90A\"; }\n\n.ms-Icon--Repair:before {\n  content: \"\\E90F\"; }\n\n.ms-Icon--Accounts:before {\n  content: \"\\E910\"; }\n\n.ms-Icon--Stopwatch:before {\n  content: \"\\E916\"; }\n\n.ms-Icon--Clock:before {\n  content: \"\\E917\"; }\n\n.ms-Icon--WorldClock:before {\n  content: \"\\E918\"; }\n\n.ms-Icon--Completed:before {\n  content: \"\\E930\"; }\n\n.ms-Icon--MiniExpand:before {\n  content: \"\\E93A\"; }\n\n.ms-Icon--Code:before {\n  content: \"\\E943\"; }\n\n.ms-Icon--Streaming:before {\n  content: \"\\E93E\"; }\n\n.ms-Icon--LightningBolt:before {\n  content: \"\\E945\"; }\n\n.ms-Icon--Info:before {\n  content: \"\\E946\"; }\n\n.ms-Icon--CalculatorAddition:before {\n  content: \"\\E948\"; }\n\n.ms-Icon--MediaStorageTower:before {\n  content: \"\\E965\"; }\n\n.ms-Icon--ChevronUpSmall:before {\n  content: \"\\E96D\"; }\n\n.ms-Icon--ChevronDownSmall:before {\n  content: \"\\E96E\"; }\n\n.ms-Icon--ChevronLeftSmall:before {\n  content: \"\\E96F\"; }\n\n.ms-Icon--ChevronRightSmall:before {\n  content: \"\\E970\"; }\n\n.ms-Icon--ChevronUpMed:before {\n  content: \"\\E971\"; }\n\n.ms-Icon--ChevronDownMed:before {\n  content: \"\\E972\"; }\n\n.ms-Icon--ChevronLeftMed:before {\n  content: \"\\E973\"; }\n\n.ms-Icon--ChevronRightMed:before {\n  content: \"\\E974\"; }\n\n.ms-Icon--PC1:before {\n  content: \"\\E977\"; }\n\n.ms-Icon--Reply:before {\n  content: \"\\E97A\"; }\n\n.ms-Icon--Chart:before {\n  content: \"\\E999\"; }\n\n.ms-Icon--LockSolid:before {\n  content: \"\\E9A2\"; }\n\n.ms-Icon--DashKey:before {\n  content: \"\\E9AE\"; }\n\n.ms-Icon--CloudWeather:before {\n  content: \"\\E9BE\"; }\n\n.ms-Icon--Cloudy:before {\n  content: \"\\E9BF\"; }\n\n.ms-Icon--Unknown:before {\n  content: \"\\E9CE\"; }\n\n.ms-Icon--SortLines:before {\n  content: \"\\E9D0\"; }\n\n.ms-Icon--Ribbon:before {\n  content: \"\\E9D1\"; }\n\n.ms-Icon--Assign:before {\n  content: \"\\E9D3\"; }\n\n.ms-Icon--FlowChart:before {\n  content: \"\\E9D4\"; }\n\n.ms-Icon--CheckList:before {\n  content: \"\\E9D5\"; }\n\n.ms-Icon--Diagnostic:before {\n  content: \"\\E9D9\"; }\n\n.ms-Icon--Equalizer:before {\n  content: \"\\E9E9\"; }\n\n.ms-Icon--Processing:before {\n  content: \"\\E9F5\"; }\n\n.ms-Icon--WorkFlow:before {\n  content: \"\\EA01\"; }\n\n.ms-Icon--Diamond2Solid:before {\n  content: \"\\EA0A\"; }\n\n.ms-Icon--Teamwork:before {\n  content: \"\\EA12\"; }\n\n.ms-Icon--PeopleAdd:before {\n  content: \"\\EA15\"; }\n\n.ms-Icon--DateTime2:before {\n  content: \"\\EA17\"; }\n\n.ms-Icon--Shield:before {\n  content: \"\\EA18\"; }\n\n.ms-Icon--PageAdd:before {\n  content: \"\\EA1A\"; }\n\n.ms-Icon--NumberedList:before {\n  content: \"\\EA1C\"; }\n\n.ms-Icon--PowerBILogo:before {\n  content: \"\\EA1E\"; }\n\n.ms-Icon--MusicInCollectionFill:before {\n  content: \"\\EA36\"; }\n\n.ms-Icon--List:before {\n  content: \"\\EA37\"; }\n\n.ms-Icon--ErrorBadge:before {\n  content: \"\\EA39\"; }\n\n.ms-Icon--CircleRing:before {\n  content: \"\\EA3A\"; }\n\n.ms-Icon--CircleFill:before {\n  content: \"\\EA3B\"; }\n\n.ms-Icon--Lightbulb:before {\n  content: \"\\EA80\"; }\n\n.ms-Icon--Puzzle:before {\n  content: \"\\EA86\"; }\n\n.ms-Icon--Ringer:before {\n  content: \"\\EA8F\"; }\n\n.ms-Icon--PDF:before {\n  content: \"\\EA90\"; }\n\n.ms-Icon--CirclePlus:before {\n  content: \"\\EAEE\"; }\n\n.ms-Icon--StockDown:before {\n  content: \"\\EB0F\"; }\n\n.ms-Icon--StockUp:before {\n  content: \"\\EB11\"; }\n\n.ms-Icon--MSNVideos:before {\n  content: \"\\EB1C\"; }\n\n.ms-Icon--Soccer:before {\n  content: \"\\EB21\"; }\n\n.ms-Icon--CollegeFootball:before {\n  content: \"\\EB26\"; }\n\n.ms-Icon--ProFootball:before {\n  content: \"\\EB27\"; }\n\n.ms-Icon--Snowflake:before {\n  content: \"\\EB46\"; }\n\n.ms-Icon--AirplaneSolid:before {\n  content: \"\\EB4C\"; }\n\n.ms-Icon--Heart:before {\n  content: \"\\EB51\"; }\n\n.ms-Icon--HeartFill:before {\n  content: \"\\EB52\"; }\n\n.ms-Icon--AzureLogo:before {\n  content: \"\\EB6A\"; }\n\n.ms-Icon--OfficeLogo:before {\n  content: \"\\EB6E\"; }\n\n.ms-Icon--SkypeLogo:before {\n  content: \"\\EB6F\"; }\n\n.ms-Icon--StatusErrorFull:before {\n  content: \"\\EB90\"; }\n\n.ms-Icon--Certificate:before {\n  content: \"\\EB95\"; }\n\n.ms-Icon--Rewind:before {\n  content: \"\\EB9E\"; }\n\n.ms-Icon--Photo2:before {\n  content: \"\\EB9F\"; }\n\n.ms-Icon--OpenSource:before {\n  content: \"\\EBC2\"; }\n\n.ms-Icon--Project:before {\n  content: \"\\EBC6\"; }\n\n.ms-Icon--CloudDownload:before {\n  content: \"\\EBD3\"; }\n\n.ms-Icon--CityNext:before {\n  content: \"\\EC06\"; }\n\n.ms-Icon--Documentation:before {\n  content: \"\\EC17\"; }\n\n.ms-Icon--Giftbox:before {\n  content: \"\\EC1F\"; }\n\n.ms-Icon--VisualStudioLogo:before {\n  content: \"\\EC22\"; }\n\n.ms-Icon--CompletedSolid:before {\n  content: \"\\EC61\"; }\n\n.ms-Icon--MicrosoftLogo:before {\n  content: \"\\EC6A\"; }\n\n.ms-Icon--CloudUpload:before {\n  content: \"\\EC8E\"; }\n\n.ms-Icon--ScrollUpDown:before {\n  content: \"\\EC8F\"; }\n\n.ms-Icon--Tiles:before {\n  content: \"\\ECA5\"; }\n\n.ms-Icon--Org:before {\n  content: \"\\ECA6\"; }\n\n.ms-Icon--PartyLeader:before {\n  content: \"\\ECA7\"; }\n\n.ms-Icon--AppIconDefault:before {\n  content: \"\\ECAA\"; }\n\n.ms-Icon--POI:before {\n  content: \"\\ECAF\"; }\n\n.ms-Icon--AddTo:before {\n  content: \"\\ECC8\"; }\n\n.ms-Icon--RadioBtnOff:before {\n  content: \"\\ECCA\"; }\n\n.ms-Icon--RadioBtnOn:before {\n  content: \"\\ECCB\"; }\n\n.ms-Icon--ExploreContent:before {\n  content: \"\\ECCD\"; }\n\n.ms-Icon--Embed:before {\n  content: \"\\ECCE\"; }\n\n.ms-Icon--Product:before {\n  content: \"\\ECDC\"; }\n\n.ms-Icon--ProgressLoopOuter:before {\n  content: \"\\ECDF\"; }\n\n.ms-Icon--Blocked2:before {\n  content: \"\\ECE4\"; }\n\n.ms-Icon--FangBody:before {\n  content: \"\\ECEB\"; }\n\n.ms-Icon--ChatInviteFriend:before {\n  content: \"\\ECFE\"; }\n\n.ms-Icon--Feedback:before {\n  content: \"\\ED15\"; }\n\n.ms-Icon--YammerLogo:before {\n  content: \"\\ED19\"; }\n\n.ms-Icon--AADLogo:before {\n  content: \"\\ED68\"; }\n\n.ms-Icon--AccessLogo:before {\n  content: \"\\ED69\"; }\n\n.ms-Icon--SecurityGroup:before {\n  content: \"\\ED85\"; }\n\n.ms-Icon--Table:before {\n  content: \"\\ED86\"; }\n\n.ms-Icon--Waffle:before {\n  content: \"\\ED89\"; }\n\n.ms-Icon--RemoveLink:before {\n  content: \"\\ED90\"; }\n\n.ms-Icon--EditNote:before {\n  content: \"\\ED9D\"; }\n\n.ms-Icon--DoubleChevronUp:before {\n  content: \"\\EDBD\"; }\n\n.ms-Icon--DoubleChevronLeft:before {\n  content: \"\\EDBE\"; }\n\n.ms-Icon--DoubleChevronRight:before {\n  content: \"\\EDBF\"; }\n\n.ms-Icon--Ascending:before {\n  content: \"\\EDC0\"; }\n\n.ms-Icon--Descending:before {\n  content: \"\\EDC1\"; }\n\n.ms-Icon--TextField:before {\n  content: \"\\EDC3\"; }\n\n.ms-Icon--Dynamics365Logo:before {\n  content: \"\\EDCC\"; }\n\n.ms-Icon--ClearFormatting:before {\n  content: \"\\EDDD\"; }\n\n.ms-Icon--Strikethrough:before {\n  content: \"\\EDE0\"; }\n\n.ms-Icon--Export:before {\n  content: \"\\EDE1\"; }\n\n.ms-Icon--ExportMirrored:before {\n  content: \"\\EDE2\"; }\n\n.ms-Icon--DoubleChevronDown:before {\n  content: \"\\EE04\"; }\n\n.ms-Icon--ReplyMirrored:before {\n  content: \"\\EE35\"; }\n\n.ms-Icon--AddGroup:before {\n  content: \"\\EE3D\"; }\n\n.ms-Icon--SortUp:before {\n  content: \"\\EE68\"; }\n\n.ms-Icon--SortDown:before {\n  content: \"\\EE69\"; }\n\n.ms-Icon--AwayStatus:before {\n  content: \"\\EE6A\"; }\n\n.ms-Icon--MyMoviesTV:before {\n  content: \"\\EE6C\"; }\n\n.ms-Icon--CPU:before {\n  content: \"\\EEA1\"; }\n\n.ms-Icon--ContactCard:before {\n  content: \"\\EEBD\"; }\n\n.ms-Icon--CustomList:before {\n  content: \"\\EEBE\"; }\n\n.ms-Icon--OfflineOneDriveParachute:before {\n  content: \"\\EEC8\"; }\n\n.ms-Icon--OfflineOneDriveParachuteDisabled:before {\n  content: \"\\EEC9\"; }\n\n.ms-Icon--TriangleSolidUp12:before {\n  content: \"\\EECC\"; }\n\n.ms-Icon--TriangleSolidDown12:before {\n  content: \"\\EECD\"; }\n\n.ms-Icon--TriangleSolidRight12:before {\n  content: \"\\EECF\"; }\n\n.ms-Icon--TriangleRight12:before {\n  content: \"\\EED3\"; }\n\n.ms-Icon--ArrowUpRight8:before {\n  content: \"\\EED4\"; }\n\n.ms-Icon--DocumentSet:before {\n  content: \"\\EED6\"; }\n\n.ms-Icon--ArrowDownRightMirrored8:before {\n  content: \"\\EEF0\"; }\n\n.ms-Icon--ViewAll2:before {\n  content: \"\\EF56\"; }\n\n.ms-Icon--PlayerSettings:before {\n  content: \"\\EF58\"; }\n\n.ms-Icon--ReceiptCheck:before {\n  content: \"\\EF5B\"; }\n\n.ms-Icon--EditStyle:before {\n  content: \"\\EF60\"; }\n\n.ms-Icon--Lifesaver:before {\n  content: \"\\EF62\"; }\n\n.ms-Icon--DocumentSearch:before {\n  content: \"\\EF6C\"; }\n\n.ms-Icon--ExcelDocument:before {\n  content: \"\\EF73\"; }\n\n.ms-Icon--Starburst:before {\n  content: \"\\EF78\"; }\n\n.ms-Icon--SkypeCircleCheck:before {\n  content: \"\\EF7D\"; }\n\n.ms-Icon--SkypeCircleMinus:before {\n  content: \"\\EF7F\"; }\n\n.ms-Icon--SkypeMinus:before {\n  content: \"\\EF82\"; }\n\n.ms-Icon--Hide2:before {\n  content: \"\\EF89\"; }\n\n.ms-Icon--ClearFilter:before {\n  content: \"\\EF8F\"; }\n\n.ms-Icon--TimeEntry:before {\n  content: \"\\EF95\"; }\n\n.ms-Icon--PageEdit:before {\n  content: \"\\EFB6\"; }\n\n.ms-Icon--PageArrowRight:before {\n  content: \"\\EFB8\"; }\n\n.ms-Icon--Database:before {\n  content: \"\\EFC7\"; }\n\n.ms-Icon--ConnectContacts:before {\n  content: \"\\EFD4\"; }\n\n.ms-Icon--ActivateOrders:before {\n  content: \"\\EFE0\"; }\n\n.ms-Icon--ZipFolder:before {\n  content: \"\\F012\"; }\n\n.ms-Icon--Configuration:before {\n  content: \"\\F01E\"; }\n\n.ms-Icon--TextDocument:before {\n  content: \"\\F029\"; }\n\n.ms-Icon--Script:before {\n  content: \"\\F03A\"; }\n\n.ms-Icon--ActivityFeed:before {\n  content: \"\\F056\"; }\n\n.ms-Icon--CaretSolidDown:before {\n  content: \"\\F08E\"; }\n\n.ms-Icon--FabricFolder:before {\n  content: \"\\F0A9\"; }\n\n.ms-Icon--FabricFolderFill:before {\n  content: \"\\F0AA\"; }\n\n.ms-Icon--FabricNewFolder:before {\n  content: \"\\F0AB\"; }\n\n.ms-Icon--PublishContent:before {\n  content: \"\\F0D4\"; }\n\n.ms-Icon--CannedChat:before {\n  content: \"\\F0F2\"; }\n\n.ms-Icon--SettingsApp:before {\n  content: \"\\F0FF\"; }\n\n.ms-Icon--FolderHorizontal:before {\n  content: \"\\F12B\"; }\n\n.ms-Icon--GiftboxOpen:before {\n  content: \"\\F133\"; }\n\n.ms-Icon--StatusCircleInner:before {\n  content: \"\\F137\"; }\n\n.ms-Icon--StatusCircleRing:before {\n  content: \"\\F138\"; }\n\n.ms-Icon--StatusCircleErrorX:before {\n  content: \"\\F13D\"; }\n\n.ms-Icon--StatusCircleCheckmark:before {\n  content: \"\\F13E\"; }\n\n.ms-Icon--InfoSolid:before {\n  content: \"\\F167\"; }\n\n.ms-Icon--ProgressRingDots:before {\n  content: \"\\F16A\"; }\n\n.ms-Icon--WordLogo:before {\n  content: \"\\F1E3\"; }\n\n.ms-Icon--ExcelLogo:before {\n  content: \"\\F1E5\"; }\n\n.ms-Icon--OneNoteLogo:before {\n  content: \"\\F1E7\"; }\n\n.ms-Icon--OutlookLogo:before {\n  content: \"\\F1E9\"; }\n\n.ms-Icon--PowerPointLogo:before {\n  content: \"\\F1EB\"; }\n\n.ms-Icon--ScheduleEventAction:before {\n  content: \"\\F1EF\"; }\n\n.ms-Icon--FlameSolid:before {\n  content: \"\\F1F3\"; }\n\n.ms-Icon--ServerProcesses:before {\n  content: \"\\F1FE\"; }\n\n.ms-Icon--Server:before {\n  content: \"\\F201\"; }\n\n.ms-Icon--SaveAll:before {\n  content: \"\\F203\"; }\n\n.ms-Icon--TwoKeys:before {\n  content: \"\\F229\"; }\n\n.ms-Icon--GridViewSmall:before {\n  content: \"\\F232\"; }\n\n.ms-Icon--ViewDashboard:before {\n  content: \"\\F246\"; }\n\n.ms-Icon--ViewList:before {\n  content: \"\\F247\"; }\n\n.ms-Icon--ViewListGroup:before {\n  content: \"\\F248\"; }\n\n.ms-Icon--ViewListTree:before {\n  content: \"\\F249\"; }\n\n.ms-Icon--TriggerAuto:before {\n  content: \"\\F24A\"; }\n\n.ms-Icon--TriggerUser:before {\n  content: \"\\F24B\"; }\n\n.ms-Icon--StackedBarChart:before {\n  content: \"\\F24D\"; }\n\n.ms-Icon--StackedLineChart:before {\n  content: \"\\F24E\"; }\n\n.ms-Icon--BuildQueue:before {\n  content: \"\\F24F\"; }\n\n.ms-Icon--BuildQueueNew:before {\n  content: \"\\F250\"; }\n\n.ms-Icon--UserFollowed:before {\n  content: \"\\F25C\"; }\n\n.ms-Icon--Clicked:before {\n  content: \"\\F268\"; }\n\n.ms-Icon--Signin:before {\n  content: \"\\F286\"; }\n\n.ms-Icon--CloneToDesktop:before {\n  content: \"\\F28C\"; }\n\n.ms-Icon--Build:before {\n  content: \"\\F28F\"; }\n\n.ms-Icon--BranchFork2:before {\n  content: \"\\F291\"; }\n\n.ms-Icon--BranchCommit:before {\n  content: \"\\F293\"; }\n\n.ms-Icon--BranchMerge:before {\n  content: \"\\F295\"; }\n\n.ms-Icon--BranchPullRequest:before {\n  content: \"\\F296\"; }\n\n.ms-Icon--BranchShelveset:before {\n  content: \"\\F298\"; }\n\n.ms-Icon--RawSource:before {\n  content: \"\\F299\"; }\n\n.ms-Icon--RowsGroup:before {\n  content: \"\\F29B\"; }\n\n.ms-Icon--Deploy:before {\n  content: \"\\F29D\"; }\n\n.ms-Icon--ServerEnviroment:before {\n  content: \"\\F29F\"; }\n\n.ms-Icon--VisioLogo:before {\n  content: \"\\F2A7\"; }\n\n.ms-Icon--Backlog:before {\n  content: \"\\F2AC\"; }\n\n.ms-Icon--TeamFavorite:before {\n  content: \"\\F2AD\"; }\n\n.ms-Icon--TaskGroup:before {\n  content: \"\\F2AE\"; }\n\n.ms-Icon--CommentAdd:before {\n  content: \"\\F2B3\"; }\n\n.ms-Icon--ShopServer:before {\n  content: \"\\F2B6\"; }\n\n.ms-Icon--QueryList:before {\n  content: \"\\F2B8\"; }\n\n.ms-Icon--StreamingOff:before {\n  content: \"\\F2BB\"; }\n\n.ms-Icon--MoreVertical:before {\n  content: \"\\F2BC\"; }\n\n.ms-Icon--ArrowTallUpRight:before {\n  content: \"\\F2BE\"; }\n\n.ms-Icon--RingerOff:before {\n  content: \"\\F2C5\"; }\n\n.ms-Icon--PlayResume:before {\n  content: \"\\F2C6\"; }\n\n.ms-Icon--Repo:before {\n  content: \"\\F2CB\"; }\n\n.ms-Icon--FolderQuery:before {\n  content: \"\\F2CD\"; }\n\n.ms-Icon--FolderList:before {\n  content: \"\\F2CE\"; }\n\n.ms-Icon--CirclePauseSolid:before {\n  content: \"\\F2D8\"; }\n\n.ms-Icon--CirclePause:before {\n  content: \"\\F2D9\"; }\n\n.ms-Icon--MSNVideosSolid:before {\n  content: \"\\F2DA\"; }\n\n.ms-Icon--CircleStopSolid:before {\n  content: \"\\F2DB\"; }\n\n.ms-Icon--CircleStop:before {\n  content: \"\\F2DC\"; }\n\n.ms-Icon--NavigateForward:before {\n  content: \"\\F2DF\"; }\n\n.ms-Icon--FileTemplate:before {\n  content: \"\\F2E6\"; }\n\n.ms-Icon--FileJAVA:before {\n  content: \"\\F2E8\"; }\n\n.ms-Icon--FileCSS:before {\n  content: \"\\F2EA\"; }\n\n.ms-Icon--FileSass:before {\n  content: \"\\F2EB\"; }\n\n.ms-Icon--FileHTML:before {\n  content: \"\\F2ED\"; }\n\n.ms-Icon--JavaScriptLanguage:before {\n  content: \"\\F2EE\"; }\n\n.ms-Icon--CSharpLanguage:before {\n  content: \"\\F2EF\"; }\n\n.ms-Icon--TypeScriptLanguage:before {\n  content: \"\\F2F7\"; }\n\n.ms-Icon--MarkDownLanguage:before {\n  content: \"\\F2FB\"; }\n\n.ms-Icon--PlugConnected:before {\n  content: \"\\F302\"; }\n\n.ms-Icon--PlugDisconnected:before {\n  content: \"\\F303\"; }\n\n.ms-Icon--UnlockSolid:before {\n  content: \"\\F304\"; }\n\n.ms-Icon--Variable:before {\n  content: \"\\F305\"; }\n\n.ms-Icon--FileBug:before {\n  content: \"\\F30D\"; }\n\n.ms-Icon--FileCode:before {\n  content: \"\\F30E\"; }\n\n.ms-Icon--FileImage:before {\n  content: \"\\F311\"; }\n\n.ms-Icon--AutoFillTemplate:before {\n  content: \"\\F313\"; }\n\n.ms-Icon--WorkItem:before {\n  content: \"\\F314\"; }\n\n.ms-Icon--FullHistory:before {\n  content: \"\\F31C\"; }\n\n.ms-Icon--TripleColumnEdit:before {\n  content: \"\\F323\"; }\n\n.ms-Icon--AlertSolid:before {\n  content: \"\\F331\"; }\n\n.ms-Icon--MegaphoneSolid:before {\n  content: \"\\F332\"; }\n\n.ms-Icon--TaskSolid:before {\n  content: \"\\F333\"; }\n\n.ms-Icon--CrownSolid:before {\n  content: \"\\F336\"; }\n\n.ms-Icon--Trophy2Solid:before {\n  content: \"\\F337\"; }\n\n.ms-Icon--QuickNoteSolid:before {\n  content: \"\\F338\"; }\n\n.ms-Icon--ConstructionConeSolid:before {\n  content: \"\\F339\"; }\n\n.ms-Icon--PageListSolid:before {\n  content: \"\\F33A\"; }\n\n.ms-Icon--StarburstSolid:before {\n  content: \"\\F33C\"; }\n\n.ms-Icon--ReadingModeSolid:before {\n  content: \"\\F33D\"; }\n\n.ms-Icon--ShieldSolid:before {\n  content: \"\\F340\"; }\n\n.ms-Icon--GiftBoxSolid:before {\n  content: \"\\F341\"; }\n\n.ms-Icon--RibbonSolid:before {\n  content: \"\\F345\"; }\n\n.ms-Icon--FinancialSolid:before {\n  content: \"\\F346\"; }\n\n.ms-Icon--HeadsetSolid:before {\n  content: \"\\F348\"; }\n\n.ms-Icon--PermissionsSolid:before {\n  content: \"\\F349\"; }\n\n.ms-Icon--ParkingSolid:before {\n  content: \"\\F34A\"; }\n\n.ms-Icon--DiamondSolid:before {\n  content: \"\\F34C\"; }\n\n.ms-Icon--AsteriskSolid:before {\n  content: \"\\F34D\"; }\n\n.ms-Icon--OfflineStorageSolid:before {\n  content: \"\\F34E\"; }\n\n.ms-Icon--BankSolid:before {\n  content: \"\\F34F\"; }\n\n.ms-Icon--DecisionSolid:before {\n  content: \"\\F350\"; }\n\n.ms-Icon--ParachuteSolid:before {\n  content: \"\\F352\"; }\n\n.ms-Icon--FiltersSolid:before {\n  content: \"\\F353\"; }\n\n.ms-Icon--ColorSolid:before {\n  content: \"\\F354\"; }\n\n.ms-Icon--ReviewSolid:before {\n  content: \"\\F355\"; }\n\n.ms-Icon--ReviewRequestSolid:before {\n  content: \"\\F356\"; }\n\n.ms-Icon--ReviewResponseSolid:before {\n  content: \"\\F358\"; }\n\n.ms-Icon--FeedbackRequestSolid:before {\n  content: \"\\F359\"; }\n\n.ms-Icon--FeedbackResponseSolid:before {\n  content: \"\\F35B\"; }\n\n.ms-Icon--NavigateExternalInline:before {\n  content: \"\\F35F\"; }\n\n.ms-Icon--PlanView:before {\n  content: \"\\F360\"; }\n\n.ms-Icon--EngineeringGroup:before {\n  content: \"\\F362\"; }\n\n.ms-Icon--ProjectCollection:before {\n  content: \"\\F363\"; }\n\n.ms-Icon--ChevronUnfold10:before {\n  content: \"\\F369\"; }\n\n.ms-Icon--ChevronFold10:before {\n  content: \"\\F36A\"; }\n\n.ms-Icon--VSTSLogo:before {\n  content: \"\\F381\"; }\n\n.ms-Icon--TestBeaker:before {\n  content: \"\\F3A5\"; }\n\n.ms-Icon--TestBeakerSolid:before {\n  content: \"\\F3A6\"; }\n\n.ms-Icon--TestAutoSolid:before {\n  content: \"\\F3A8\"; }\n\n.ms-Icon--TestPlan:before {\n  content: \"\\F3AB\"; }\n\n.ms-Icon--TestStep:before {\n  content: \"\\F3AC\"; }\n\n.ms-Icon--TestParameter:before {\n  content: \"\\F3AD\"; }\n\n.ms-Icon--TestSuite:before {\n  content: \"\\F3AE\"; }\n\n.ms-Icon--TestCase:before {\n  content: \"\\F3AF\"; }\n\n.ms-Icon--Sprint:before {\n  content: \"\\F3B0\"; }\n\n.ms-Icon--TriggerApproval:before {\n  content: \"\\F3B2\"; }\n\n.ms-Icon--Rocket:before {\n  content: \"\\F3B3\"; }\n\n.ms-Icon--AzureKeyVault:before {\n  content: \"\\F3B4\"; }\n\n.ms-Icon--LikeSolid:before {\n  content: \"\\F3BF\"; }\n\n.ms-Icon--CRMCustomerInsightsApp:before {\n  content: \"\\F3C8\"; }\n\n.ms-Icon--FilterSolid:before {\n  content: \"\\F412\"; }\n\n.ms-Icon--Inbox:before {\n  content: \"\\F41C\"; }\n\n.ms-Icon--NotExecuted:before {\n  content: \"\\F440\"; }\n\n.ms-Icon--NotImpactedSolid:before {\n  content: \"\\F441\"; }\n\n.ms-Icon--BacklogBoard:before {\n  content: \"\\F444\"; }\n\n.ms-Icon--IssueSolid:before {\n  content: \"\\F448\"; }\n\n.ms-Icon--DefectSolid:before {\n  content: \"\\F449\"; }\n\n.ms-Icon--LadybugSolid:before {\n  content: \"\\F44A\"; }\n\n.ms-Icon--NugetLogo:before {\n  content: \"\\F44C\"; }\n\n.ms-Icon--TFVCLogo:before {\n  content: \"\\F44D\"; }\n\n.ms-Icon--ProjectLogo32:before {\n  content: \"\\F47E\"; }\n\n.ms-Icon--WaffleOffice365:before {\n  content: \"\\F4E0\"; }\n\n.ms-Icon--FontColorA:before {\n  content: \"\\F4EC\"; }\n\n.ms-Icon--FontColorSwatch:before {\n  content: \"\\F4ED\"; }\n\n.ms-Icon--SemiboldWeight:before {\n  content: \"\\F4F0\"; }\n\n.ms-Icon--ChartSeries:before {\n  content: \"\\F513\"; }\n\n.ms-Icon--AlignJustify:before {\n  content: \"\\F51E\"; }\n\n.ms-Icon--BlockedSolid:before {\n  content: \"\\F531\"; }\n\n.ms-Icon--DownloadDocument:before {\n  content: \"\\F549\"; }\n\n.ms-Icon--WaitlistConfirm:before {\n  content: \"\\F550\"; }\n\n.ms-Icon--LaptopSecure:before {\n  content: \"\\F552\"; }\n\n.ms-Icon--EntryView:before {\n  content: \"\\F554\"; }\n\n.ms-Icon--AccountManagement:before {\n  content: \"\\F55C\"; }\n\n.ms-Icon--ExploreData:before {\n  content: \"\\F5B6\"; }\n\n.ms-Icon--BitbucketLogo32:before {\n  content: \"\\F5D2\"; }\n\n.ms-Icon--GradleLogo32:before {\n  content: \"\\F5D4\"; }\n\n.ms-Icon--PasteAsCode:before {\n  content: \"\\F5D6\"; }\n\n.ms-Icon--FileYML:before {\n  content: \"\\F5DA\"; }\n\n.ms-Icon--ClipboardSolid:before {\n  content: \"\\F5DC\"; }\n\n.ms-Icon--AnalyticsView:before {\n  content: \"\\F5F1\"; }\n\n.ms-Icon--Trending12:before {\n  content: \"\\F62D\"; }\n\n.ms-Icon--CircleShapeSolid:before {\n  content: \"\\F63C\"; }\n\n.ms-Icon--GitLogo:before {\n  content: \"\\F65D\"; }\n\n.ms-Icon--GitHubLogo:before {\n  content: \"\\F65E\"; }\n\n.ms-Icon--ApacheMavenLogo:before {\n  content: \"\\F65F\"; }\n\n.ms-Icon--NPMLogo:before {\n  content: \"\\F660\"; }\n\n.ms-Icon--GitFork:before {\n  content: \"\\F661\"; }\n\n.ms-Icon--SVNLogo:before {\n  content: \"\\F662\"; }\n\n.ms-Icon--JenkinsLogo:before {\n  content: \"\\F663\"; }\n\n.ms-Icon--ExternalGit:before {\n  content: \"\\F665\"; }\n\n.ms-Icon--QuadColumn:before {\n  content: \"\\F66F\"; }\n\n.ms-Icon--DictionaryRemove:before {\n  content: \"\\F69A\"; }\n\n.ms-Icon--UserRemove:before {\n  content: \"\\F69B\"; }\n\n.ms-Icon--OpenInNewTab:before {\n  content: \"\\F6AB\"; }\n\n.ms-Icon--VerifiedBrandSolid:before {\n  content: \"\\F6AD\"; }\n\n.ms-Icon--AuthenticatorApp:before {\n  content: \"\\F6B1\"; }\n\n.ms-Icon--BacklogList:before {\n  content: \"\\F6BF\"; }\n\n.ms-Icon--ButtonControl:before {\n  content: \"\\F6C0\"; }\n\n.ms-Icon--UserGauge:before {\n  content: \"\\F6ED\"; }\n\n.ms-Icon--PeopleSettings:before {\n  content: \"\\F72C\"; }\n\n.ms-Icon--Blocked2Solid:before {\n  content: \"\\F737\"; }\n\n.ms-Icon--BulletedListText:before {\n  content: \"\\F792\"; }\n\n.ms-Icon--BulletedListBullet:before {\n  content: \"\\F793\"; }\n\n.ms-Icon--NumberedListText:before {\n  content: \"\\F796\"; }\n\n.ms-Icon--NumberedListNumber:before {\n  content: \"\\F797\"; }\n\n.ms-Icon--RemoveLinkChain:before {\n  content: \"\\F79A\"; }\n\n.ms-Icon--RemoveLinkX:before {\n  content: \"\\F79B\"; }\n\n.ms-Icon--FabricTextHighlight:before {\n  content: \"\\F79C\"; }\n\n.ms-Icon--ClearFormattingA:before {\n  content: \"\\F79D\"; }\n\n.ms-Icon--ClearFormattingEraser:before {\n  content: \"\\F79E\"; }\n\n.ms-Icon--Photo2Fill:before {\n  content: \"\\F79F\"; }\n\n.ms-Icon--IncreaseIndentText:before {\n  content: \"\\F7A0\"; }\n\n.ms-Icon--IncreaseIndentArrow:before {\n  content: \"\\F7A1\"; }\n\n.ms-Icon--DecreaseIndentText:before {\n  content: \"\\F7A2\"; }\n\n.ms-Icon--DecreaseIndentArrow:before {\n  content: \"\\F7A3\"; }\n\n.ms-Icon--CheckListText:before {\n  content: \"\\F7A8\"; }\n\n.ms-Icon--CheckListCheck:before {\n  content: \"\\F7A9\"; }\n\n.ms-Icon--NumberSymbol:before {\n  content: \"\\F7AC\"; }\n\n.ms-Icon--VerifiedBrand:before {\n  content: \"\\F7BD\"; }\n\n.ms-Icon--ReleaseGate:before {\n  content: \"\\F7BE\"; }\n\n.ms-Icon--ReleaseGateCheck:before {\n  content: \"\\F7BF\"; }\n\n.ms-Icon--ReleaseGateError:before {\n  content: \"\\F7C0\"; }\n\n.ms-Icon--FabricTextHighlightComposite:before {\n  content: \"\\F7DA\"; }\n\n.ms-Icon--SkypeCircleSlash:before {\n  content: \"\\F825\"; }\n\n.ms-Icon--PythonLogoBlue:before {\n  content: \"\\F84D\"; }\n\n.ms-Icon--PythonLogoYellow:before {\n  content: \"\\F84E\"; }\n\n.ms-Icon--RustLanguageLogo:before {\n  content: \"\\F84F\"; }\n\n.ms-Icon--RubyGemsLogo:before {\n  content: \"\\F850\"; }\n\n.ms-Icon--AddReaction:before {\n  content: \"\\F85D\"; }\n\n.ms-Icon--DecreaseIndentLegacy:before {\n  content: \"\\E290\"; }\n\n.ms-Icon--IncreaseIndentLegacy:before {\n  content: \"\\E291\"; }\n\n.ms-Icon--SurveyQuestions:before {\n  content: \"\\F01B\"; }\n\n.ms-Icon--BranchCompare:before {\n  content: \"\\F294\"; }\n\n.ms-Icon--DiffInline:before {\n  content: \"\\F309\"; }\n\n.ms-Icon--DiffSideBySide:before {\n  content: \"\\F30A\"; }\n\n.ms-Icon--ImageDiff:before {\n  content: \"\\F30B\"; }\n\n.ms-Icon--GitGraph:before {\n  content: \"\\F2CA\"; }\n\n.ms-Icon--WordDocument:before {\n  content: \"\\EF71\"; }\n\n.ms-Icon--PowerPointDocument:before {\n  content: \"\\EF72\"; }\n\n.ms-Icon--PowerShell:before {\n  content: \"\\F1FD\"; }\n\n.ms-Icon--FilePDB:before {\n  content: \"\\F2E5\"; }\n\n.ms-Icon--FileSQL:before {\n  content: \"\\F2E7\"; }\n\n.ms-Icon--FileASPX:before {\n  content: \"\\F2E9\"; }\n\n.ms-Icon--FileSass:before {\n  content: \"\\F2EB\"; }\n\n.ms-Icon--FileLess:before {\n  content: \"\\F2EC\"; }\n\n.ms-Icon--CSharpLanguage:before {\n  content: \"\\F2EF\"; }\n\n.ms-Icon--VisualBasicLanguage:before {\n  content: \"\\F2F1\"; }\n\n.ms-Icon--CPlusPlusLanguage:before {\n  content: \"\\F2F3\"; }\n\n.ms-Icon--FSharpLanguage:before {\n  content: \"\\F2F5\"; }\n\n.ms-Icon--PythonLanguage:before {\n  content: \"\\F2F8\"; }\n\n.ms-Icon--CoffeeScript:before {\n  content: \"\\F2FA\"; }\n\n.ms-Icon--RowsChild:before {\n  content: \"\\F29C\"; }\n\n.ms-Icon--SemanticZoom:before {\n  content: \"\\E833\"; }\n\n.ms-Icon--FileTypeSolution:before {\n  content: \"\\F387\"; }\n\n.ms-Icon--FileYML:before {\n  content: \"\\F5DA\"; }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/TooltipEx/Tooltip.css */
function __snowpack__injectStyle$3(css) {
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
__snowpack__injectStyle$3(".bolt-tooltip {\n  max-width: 320px;\n  animation: tooltip-fade-in 300ms ease-in; }\n  .bolt-tooltip .bolt-callout-content {\n    background-color: transparent; }\n\n.bolt-tooltip-content {\n  background-color: rgba( 51, 51, 51 ,  0.95 );\n  background-color: rgba( var(--palette-neutral-80,51, 51, 51) ,  0.95 );\n  border-radius: 2px;\n  color: rgba( 255, 255, 255 ,  1 );\n  color: rgba( var(--palette-neutral-0,255, 255, 255) ,  1 );\n  padding: 8px 12px;\n  text-align: left;\n  /* @NOTE: List break-all first and break-word second, IE11/Firefox dont support break-word, they will fallback to break-all */\n  word-break: break-all;\n  word-break: break-word; }\n\n.bolt-tooltip-fade-out {\n  animation: tooltip-fade-out 300ms ease-in; }\n  .bolt-tooltip-fade-out.bolt-callout {\n    pointer-events: none; }\n\n@keyframes tooltip-fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes tooltip-fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n");

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Callout/Callout.css */
function __snowpack__injectStyle$4(css) {
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
__snowpack__injectStyle$4(".bolt-callout {\n  background-color: transparent;\n  pointer-events: auto; }\n\n/* NOTE: Create a element that overlaps the container by 5000px on all sides.\r\n * This allows callouts to layout naturally and not be influenced by edges of\r\n * the window.\r\n */\n.bolt-portal.bolt-layout-relative {\n  bottom: -5000px;\n  left: -5000px;\n  right: -5000px;\n  top: -5000px; }\n\n.bolt-light-dismiss {\n  pointer-events: auto; }\n\n.bolt-callout-modal {\n  background-color: rgba(0, 0, 0, 0.20);\n  background-color: var(--palette-black-alpha-20,rgba(0, 0, 0, 0.20)); }\n  @media screen and (-ms-high-contrast: active) {\n    .bolt-callout-modal {\n      background: transparent; } }\n\n.bolt-callout-content {\n  background-color: rgba(255, 255, 255, 1);\n  background-color: var(--callout-background-color,rgba(255, 255, 255, 1));\n  z-index: 1; }\n\n.bolt-callout-shadow {\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, .132);\n  box-shadow: 0px 6px 12px var(--callout-shadow-color,rgba(0, 0, 0, .132)); }\n\n.bolt-callout-extra-large {\n  width: 800px; }\n\n.bolt-callout-large {\n  width: 640px; }\n\n.bolt-callout-medium {\n  width: 480px; }\n\n.bolt-callout-small {\n  width: 320px; }\n\n.bolt-callout-auto {\n  width: auto; }\n");

var FocusWithinContext = react.createContext({});
var FocusWithin = /** @class */ (function (_super) {
    __extends(FocusWithin, _super);
    function FocusWithin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blurTimeout = -1;
        _this.focusCount = 0;
        _this.focus = false;
        /**
         * onBlur method that should be attached to the onBlur handler of the
         * continers root element.
         */
        _this.onBlur = function () {
            // Don't let the focus count go below 0.
            // We have seen cases where we get a blur event, even when we
            // do not have focus. One such example is the Office Fabric TrapZone,
            // which will lose focus, then regain focus and stop propagation on
            // the event.
            _this.focusCount = Math.max(0, _this.focusCount - 1);
            // Clear any previous timeout if we somehow got a second blur event before
            // ever processing the timeout from the first one.
            if (_this.blurTimeout !== -1) {
                window.clearTimeout(_this.blurTimeout);
            }
            // We must delay the blur processing for two basic reasons:
            // 1) If focus is transitioning to a child element we will fire a Blur
            //  followed quickly by a Focus even though focus never left the element.
            //  This causes problems for things like menus that close on loss of focus.
            // 2) IE 11 fires the blur before the focus (no other browser does this)
            //  and this causes the same issue above but also causes focusCount
            //  inconsistencies.
            _this.blurTimeout = window.setTimeout(function () {
                _this.blurTimeout = -1;
                if (!_this.focusCount) {
                    _this.focus = false;
                    // If we are tracking the focus state we will force a component update.
                    if (_this.props.updateStateOnFocusChange) {
                        _this.forceUpdate();
                    }
                    if (_this.props.onBlur) {
                        _this.props.onBlur();
                    }
                }
            }, 0);
        };
        /**
         * onFocus method that should be attached to the onFocus handler of the
         * continer's root element.
         */
        _this.onFocus = function (event) {
            _this.focusCount++;
            // If focus is just entering one of the child components and not just moving
            // one child to another we will call the onFocus delegate if supplied.
            if (!_this.focus) {
                _this.focus = true;
                // If we are tracking the focus state we will force a component update.
                if (_this.props.updateStateOnFocusChange) {
                    _this.forceUpdate();
                }
                if (_this.props.onFocus) {
                    _this.props.onFocus(event);
                }
            }
        };
        return _this;
    }
    FocusWithin.prototype.render = function () {
        var _this = this;
        return (react.createElement(FocusWithinContext.Consumer, null, function (focusWithinContext) {
            var children;
            var newProps = {
                onBlur: _this.onBlur,
                onFocus: _this.onFocus
            };
            // Save ou parent focus within for potential communication.
            _this.parentFocusWithin = focusWithinContext.focusWithin;
            if (typeof _this.props.children === "function") {
                var child = _this.props.children;
                // For functional components we pass the hasFocus attribute as well.
                newProps.hasFocus = _this.focus;
                children = child(newProps);
            }
            else {
                var child = react.Children.only(_this.props.children);
                children = react.cloneElement(child, __assign(__assign({}, child.props), newProps), child.props.children);
            }
            return react.createElement(FocusWithinContext.Provider, { value: { focusWithin: _this } }, children);
        }));
    };
    /**
     * componentWillUnmount is used to cleanup the component state.
     *
     * @NOTE: The main thing we need to deal with is when this component is unmounted
     * while it has focus. We need to get this FocusWithin and all of its parents state
     * updated since focus will move directly to the body without a blur event.
     */
    FocusWithin.prototype.componentWillUnmount = function () {
        if (this.blurTimeout !== -1) {
            window.clearTimeout(this.blurTimeout);
            this.blurTimeout = -1;
        }
        if (this.focusCount > 0) {
            this.unmountWithFocus(false);
        }
    };
    /**
     * hasFocus returns true if the focus is contained within the focus component
     * hierarchy. This includes portals, the element may or may not
     * be a direct descendant of the focus component in the DOM structure.
     */
    FocusWithin.prototype.hasFocus = function () {
        return this.focusCount > 0;
    };
    /**
     * When the focusWithin unmounts we need to determine if we currently have focus.
     * If we do, focus will be moved silently to the body. We need to cleanup the
     * focusWithin's that are affected by this silent change.
     */
    FocusWithin.prototype.unmountWithFocus = function (fromParent) {
        if (this.focusCount > 0) {
            this.focusCount--;
            if (this.focusCount > 0) {
                // If we are tracking the focus state we will force a component update.
                if (fromParent) {
                    this.focusCount = 0;
                    this.focus = false;
                    if (this.props.updateStateOnFocusChange) {
                        this.forceUpdate();
                    }
                    if (this.props.onBlur) {
                        this.props.onBlur();
                    }
                }
            }
            // Notify the parent focus within that the mounted focus component is unmounting.
            if (this.parentFocusWithin) {
                this.parentFocusWithin.unmountWithFocus(true);
            }
        }
    };
    FocusWithin.defaultProps = {
        updateStateOnFocusChange: true
    };
    return FocusWithin;
}(react.Component));

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Portal/Portal.css */
function __snowpack__injectStyle$5(css) {
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
__snowpack__injectStyle$5(".bolt-portal-host {\n  position: fixed;\n  /* 1 million used because OF used it and the product has built around this number */\n  z-index: 1000000; }\n\n.bolt-portal {\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 10; }\n");

/**
 * An Observable implementation that will track a set of subscribers and supports
 * notifications when the underlying system changes.
 */
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = {};
        this.subscriberCount = 0;
    }
    /**
     * notify is used to send the event to all subscribers that have signed up for this events
     * action. This means they have subscribed directly to this action, or to all actions.
     * If the caller requested the event be persisted the event will be fired in order to new
     * subscribers as well when they subscribe.
     *
     * @param value - The object that represents the event data.
     *
     * @param action - The action that happened on this observable to produce the event.
     *
     * @param persistEvent - Optional value that determines if all future subscribers will
     *  recieve the event as well.
     */
    Observable.prototype.notify = function (value, action, persistEvent) {
        var executeObserverAction = function (observer, value, action) {
            try {
                observer(value, action);
            }
            catch (ex) {
                console.warn(ex);
                if (ex && typeof ErrorEvent === "function") {
                    window.dispatchEvent(new ErrorEvent("error", {
                        error: ex,
                        filename: "Observable.ts",
                        message: ex.message
                    }));
                }
            }
        };
        // NOTE: We need to make a copy of the observers since they may change during notification.
        if (this.observers[action]) {
            var observers = this.observers[action].slice();
            for (var observerIndex = 0; observerIndex < observers.length; observerIndex++) {
                executeObserverAction(observers[observerIndex], value, action);
            }
        }
        if (this.observers[""]) {
            var observers = this.observers[""].slice();
            for (var observerIndex = 0; observerIndex < observers.length; observerIndex++) {
                executeObserverAction(observers[observerIndex], value, action);
            }
        }
        // If the caller wants this event sent to all subscribers, even future ones, track it.
        if (persistEvent) {
            if (!this.events) {
                this.events = [];
            }
            this.events.push({ action: action, value: value });
        }
    };
    Observable.prototype.subscribe = function (observer, action) {
        action = action || "";
        if (!this.observers[action]) {
            this.observers[action] = [];
        }
        this.observers[action].push(observer);
        this.subscriberCount++;
        // Fire the callback for any events that were persisted when they were sent.
        if (this.events) {
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var event_1 = _a[_i];
                if (!action || event_1.action === action) {
                    observer(event_1.value, event_1.action);
                }
            }
        }
    };
    Observable.prototype.unsubscribe = function (observer, action) {
        action = action || "";
        if (this.observers[action]) {
            var observerIndex = this.observers[action].indexOf(observer);
            if (observerIndex >= 0) {
                this.observers[action].splice(observerIndex, 1);
                this.subscriberCount--;
            }
        }
    };
    return Observable;
}());
var ObservableLike;
(function (ObservableLike) {
    /**
     * Check whether the specified object is an observable or not.
     *
     * @param observableLike Object to perform observable check.
     */
    function isObservable(observableLike) {
        return observableLike && typeof observableLike.subscribe === "function";
    }
    ObservableLike.isObservable = isObservable;
    function getValue(observableLike) {
        if (isObservable(observableLike)) {
            return observableLike.value;
        }
        return observableLike;
    }
    ObservableLike.getValue = getValue;
    /**
     * Subscribes to the specified object if it is an observable.
     *
     * @param observableLike Object to subscribe its value change if applicable.
     * @param observer Delegate to be executed when the underlying data changes.
     * @param action Optional argument that allows the consumer to supply a action
     *  with the delegate. If the action is supplied only those actions are delievered,
     *  while all actions are delivered is no action is supplied.
     */
    function subscribe(observableLike, observer, action) {
        if (isObservable(observableLike)) {
            observableLike.subscribe(observer, action);
        }
    }
    ObservableLike.subscribe = subscribe;
    /**
     * Unsubscribes from the specified object if it is an observable.
     *
     * @param observableLike Object to subscribe its value change if applicable.
     * @param observer Delegate to be executed when the underlying data changes.
     * @param action Optional argument that allows the consumer to supply a action
     *  with the delegate. If the action is supplied only those actions are delievered,
     *  while all actions are delivered is no action is supplied.
     */
    function unsubscribe(observableLike, observer, action) {
        if (isObservable(observableLike)) {
            observableLike.unsubscribe(observer, action);
        }
    }
    ObservableLike.unsubscribe = unsubscribe;
})(ObservableLike || (ObservableLike = {}));
var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value) {
        var _this = _super.call(this) || this;
        _this.v = value;
        return _this;
    }
    Object.defineProperty(ObservableValue.prototype, "value", {
        get: function () {
            return this.v;
        },
        set: function (value) {
            this.v = value;
            this.notify(this.v, "set");
        },
        enumerable: true,
        configurable: true
    });
    return ObservableValue;
}(Observable));
/**
 * An ObservableObject can be used to key a named collection of properties
 * and offer an observable endpoint.
 */
var ObservableObject = /** @class */ (function (_super) {
    __extends(ObservableObject, _super);
    function ObservableObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.objects = {};
        return _this;
    }
    ObservableObject.prototype.add = function (objectName, objectDefinition) {
        if (!this.objects.hasOwnProperty(objectName)) {
            this.objects[objectName] = objectDefinition;
            this.notify({ key: objectName, value: objectDefinition }, "add");
        }
    };
    ObservableObject.prototype.get = function (objectName) {
        return this.objects[objectName];
    };
    ObservableObject.prototype.set = function (objectName, objectDefinition) {
        if (this.objects.hasOwnProperty(objectName)) {
            this.objects[objectName] = objectDefinition;
            this.notify({ key: objectName, value: objectDefinition }, "replace");
        }
        else {
            this.add(objectName, objectDefinition);
        }
    };
    ObservableObject.prototype.keys = function () {
        return Object.keys(this.objects);
    };
    return ObservableObject;
}(Observable));
/**
 * EventTypes:
 *  change - { changedItems, index }
 *  push - {addedItems, index }
 *  pop - { index, removedItems}
 *  removeAll - {index, removedItems }
 *  splice - { addedItems, index, removedItems }
 */
var ObservableArray = /** @class */ (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(items) {
        if (items === void 0) { items = []; }
        var _this = _super.call(this) || this;
        _this.internalItems = items || [];
        return _this;
    }
    ObservableArray.prototype.change = function (start) {
        var _a;
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        (_a = this.internalItems).splice.apply(_a, __spreadArrays([start, items.length], items));
        this.notify({ index: start, changedItems: items }, "change");
        return items.length;
    };
    Object.defineProperty(ObservableArray.prototype, "length", {
        get: function () {
            return this.internalItems.length;
        },
        enumerable: true,
        configurable: true
    });
    ObservableArray.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        if (items.length) {
            var index = this.internalItems.length;
            (_a = this.internalItems).push.apply(_a, items);
            this.notify({ addedItems: items, index: index }, "push");
        }
        return items.length;
    };
    ObservableArray.prototype.pop = function () {
        var item = this.internalItems.pop();
        if (item !== undefined) {
            this.notify({ index: this.internalItems.length, removedItems: [item] }, "pop");
        }
        return item;
    };
    ObservableArray.prototype.removeAll = function (filter) {
        var removedItems = [];
        var remainingItems = [];
        for (var _i = 0, _a = this.internalItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!filter || filter(item)) {
                removedItems.push(item);
            }
            else {
                remainingItems.push(item);
            }
        }
        if (removedItems.length > 0) {
            this.internalItems.splice(0, this.internalItems.length);
            for (var _b = 0, remainingItems_1 = remainingItems; _b < remainingItems_1.length; _b++) {
                var item = remainingItems_1[_b];
                this.internalItems.push(item);
            }
            this.notify({ index: 0, removedItems: removedItems }, "removeAll");
        }
        return removedItems;
    };
    ObservableArray.prototype.splice = function (start, deleteCount) {
        var _a;
        var itemsToAdd = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            itemsToAdd[_i - 2] = arguments[_i];
        }
        var removedItems = (_a = this.internalItems).splice.apply(_a, __spreadArrays([start, deleteCount], itemsToAdd));
        this.notify({ addedItems: itemsToAdd, index: start, removedItems: removedItems }, "splice");
        return removedItems;
    };
    Object.defineProperty(ObservableArray.prototype, "value", {
        get: function () {
            return this.internalItems;
        },
        set: function (items) {
            // Preserve the original array, but avoid the "..." arguments issue with splice/push
            var removedItems;
            if (items === this.internalItems) {
                // Special case for someone passing us the same internal array that we are already using
                // We don't need to modify the internalItems. The "removedItems" in the event is
                // not going to be accurate in the case that someone modified this internal array
                // outside of the observable -- we won't know the prior state in that case.
                removedItems = this.internalItems;
            }
            else {
                // Clear out the existing items
                removedItems = this.internalItems.slice();
                this.internalItems.length = 0;
                // Add all new items
                if (items.length) {
                    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                        var item = items_1[_i];
                        this.internalItems.push(item);
                    }
                }
            }
            this.notify({ addedItems: items, index: 0, removedItems: removedItems }, "splice");
        },
        enumerable: true,
        configurable: true
    });
    return ObservableArray;
}(Observable));
/**
 * An Observable Collection takes an arry of arrays or observable arrays
 * and flattens out the items into a single readonly observable array
 * (with all the underlying array values aggregated together).
 *
 * This handles subscribing to any underlying observable arrays and
 * updating the aggregate array as appropriate (and notifying subscribers)
 */
var ObservableCollection = /** @class */ (function (_super) {
    __extends(ObservableCollection, _super);
    function ObservableCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.collections = [];
        _this.items = [];
        return _this;
    }
    Object.defineProperty(ObservableCollection.prototype, "length", {
        get: function () {
            if (!this.subscriberCount) {
                this.recalculateItems();
            }
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableCollection.prototype, "value", {
        get: function () {
            if (!this.subscriberCount) {
                this.recalculateItems();
            }
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds an additional collection of items to the end of the array
     *
     * @param collection Array of items or an observable array of items
     * @params transformItems Delegate to process each item that is pulled from the given collection
     */
    ObservableCollection.prototype.push = function (collection, transformItems) {
        var collectionEntry;
        var pushedItems;
        if (ObservableLike.isObservable(collection)) {
            var observable = collection;
            var subscriber = this.getSubscriber(this.collections.length, transformItems);
            collectionEntry = { observable: observable, subscriber: subscriber, transformItems: transformItems, items: [] };
            pushedItems = observable.value;
            if (this.subscriberCount) {
                ObservableLike.subscribe(collectionEntry.observable, subscriber);
            }
        }
        else if (collection.length) {
            pushedItems = collection;
            collectionEntry = { items: this.transformItems(pushedItems, transformItems) };
        }
        if (collectionEntry) {
            this.collections.push(collectionEntry);
            if (this.subscriberCount && pushedItems.length) {
                var newItems = this.transformItems(pushedItems, transformItems);
                for (var _i = 0, newItems_1 = newItems; _i < newItems_1.length; _i++) {
                    var newItem = newItems_1[_i];
                    this.items.push(newItem);
                }
                this.notify({ addedItems: newItems, index: this.items.length - newItems.length }, "push");
            }
        }
    };
    ObservableCollection.prototype.subscribe = function (observer, action) {
        _super.prototype.subscribe.call(this, observer, action);
        if (this.subscriberCount === 1) {
            this.recalculateItems();
            for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
                var collection = _a[_i];
                if (collection.subscriber) {
                    collection.observable.subscribe(collection.subscriber);
                }
            }
        }
    };
    ObservableCollection.prototype.unsubscribe = function (observer, action) {
        _super.prototype.unsubscribe.call(this, observer, action);
        if (this.subscriberCount === 0) {
            for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
                var collection = _a[_i];
                if (collection.subscriber) {
                    collection.observable.unsubscribe(collection.subscriber);
                }
            }
        }
    };
    /**
     * Recalculate items. This is necessary while we work without subscribers, as we're not listening to changes in observable inner collections.
     * Once the first subscriber joins, items collection will be in sync real-time.
     */
    ObservableCollection.prototype.recalculateItems = function () {
        this.items.length = 0;
        for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
            var collection = _a[_i];
            if (collection.observable) {
                collection.items = this.transformItems(collection.observable.value, collection.transformItems);
            }
            for (var _b = 0, _c = collection.items; _b < _c.length; _b++) {
                var item = _c[_b];
                this.items.push(item);
            }
        }
    };
    ObservableCollection.prototype.transformItems = function (inputItems, transformInput) {
        var transformedItems;
        if (!inputItems) {
            transformedItems = [];
        }
        else if (transformInput) {
            transformedItems = [];
            for (var _i = 0, inputItems_1 = inputItems; _i < inputItems_1.length; _i++) {
                var inputItem = inputItems_1[_i];
                var transformedItem = transformInput(inputItem);
                if (transformedItem !== undefined) {
                    transformedItems.push(transformedItem);
                }
            }
        }
        else {
            transformedItems = inputItems;
        }
        return transformedItems;
    };
    ObservableCollection.prototype.getSubscriber = function (collectionIndex, transformInput) {
        var _this = this;
        return function (args) {
            var _a;
            // Find the index in our aggregate array
            var index = args.index;
            for (var i = 0; i < collectionIndex; i++) {
                index += _this.collections[i].items.length;
            }
            if (args.changedItems) {
                // Handle change event
                var changedItems = _this.transformItems(args.changedItems, transformInput);
                (_a = _this.items).splice.apply(_a, __spreadArrays([index, args.changedItems.length], changedItems));
                _this.notify({ changedItems: changedItems, index: index }, "change");
            }
            else {
                // Handle splice, push, pop events
                var removedItems = _this.transformItems(args.removedItems, transformInput);
                var addedItems = _this.transformItems(args.addedItems, transformInput);
                // We would normally just call splice here with 3 arguments, but splice takes a "..." argument for added items
                // which passes array elements on the stack and is therefore limited (to 32K/64K on some browsers)
                // Remove the removedItems first
                _this.items.splice(index, removedItems.length);
                // Slice-off any remaining items past where we want to insert
                var endItems = _this.items.splice(index);
                // Push the addedItems followed by the endItems that we just removed
                for (var _i = 0, addedItems_1 = addedItems; _i < addedItems_1.length; _i++) {
                    var item = addedItems_1[_i];
                    _this.items.push(item);
                }
                for (var _b = 0, endItems_1 = endItems; _b < endItems_1.length; _b++) {
                    var item = endItems_1[_b];
                    _this.items.push(item);
                }
                _this.notify({ removedItems: removedItems, addedItems: addedItems, index: index }, "splice");
            }
        };
    };
    return ObservableCollection;
}(Observable));
var ReadyableObservableArray = /** @class */ (function (_super) {
    __extends(ReadyableObservableArray, _super);
    function ReadyableObservableArray(items, ready) {
        if (items === void 0) { items = []; }
        if (ready === void 0) { ready = false; }
        var _this = _super.call(this, items) || this;
        _this.ready = new ObservableValue(ready);
        return _this;
    }
    return ReadyableObservableArray;
}(ObservableArray));

/**
 * Basic ItemProvider that surfaces an array of items through the IItemProvider
 * interface.
 */
var ArrayItemProvider = /** @class */ (function () {
    function ArrayItemProvider(items) {
        this.items = items;
    }
    Object.defineProperty(ArrayItemProvider.prototype, "length", {
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayItemProvider.prototype, "value", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    return ArrayItemProvider;
}());
/**
 * Helper function to get the value of a set of items that can be an itemProvider or normal array.
 * @param items the items to retrieve the value from.
 */
function getItemsValue(items) {
    return Array.isArray(items) ? items : items.value;
}

/**
 * Handles subscription to properties that are IObservableValues, so that components don't have to handle on their own.
 *
 * Usage:
 *
 * <Observer myObservableValue={observableValue} className='foo'>
 *     <MyComponent myObservableValue='' />
 * </Observer>
 *
 * Your component will get re-rendered with the new value of myObservableValue whenever that value changes.
 * Additionally, any additional props set on the Observer will also get passed down.
 */
var Observer = /** @class */ (function (_super) {
    __extends(Observer, _super);
    function Observer(props) {
        var _this = _super.call(this, props) || this;
        _this.subscriptions = {};
        // Initialize the state with the initial value of the observable.
        var state = { values: {}, oldProps: {} };
        for (var propName in props) {
            state.values[propName] = getPropValue(props[propName]);
        }
        _this.state = state;
        return _this;
    }
    Observer.getDerivedStateFromProps = function (props, state) {
        var newState = updateSubscriptionsAndState(state.oldProps, props, state);
        if (newState != null) {
            return __assign(__assign({}, newState), { oldProps: props });
        }
        return { oldProps: props };
    };
    Observer.prototype.render = function () {
        var newProps = {};
        // Copy over any properties from the observable component to the children.
        for (var key in this.state.values) {
            if (key !== "children") {
                newProps[key] = this.state.values[key];
            }
        }
        if (typeof this.props.children === "function") {
            var child = this.props.children;
            return child(newProps);
        }
        else {
            var child = react.Children.only(this.props.children);
            return react.cloneElement(child, __assign(__assign({}, child.props), newProps), child.props.children);
        }
    };
    Observer.prototype.componentDidMount = function () {
        this.updateSubscriptionsAndStateAfterRender();
    };
    Observer.prototype.componentDidUpdate = function () {
        this.updateSubscriptionsAndStateAfterRender();
        if (this.props.onUpdate) {
            this.props.onUpdate();
        }
    };
    Observer.prototype.componentWillUnmount = function () {
        // Unsubscribe from any of the observable properties.
        for (var propName in this.subscribedProps) {
            this.unsubscribe(propName, this.subscribedProps);
        }
    };
    Observer.prototype.subscribe = function (propName, props) {
        if (propName !== "children") {
            var observableExpression = void 0;
            var observableValue = props[propName];
            var action = void 0;
            // If this is an observableExpression, we need to subscribe to the value
            // and execute the filter on changes.
            if (observableValue && observableValue.observableValue !== undefined) {
                observableExpression = observableValue;
                observableValue = observableExpression.observableValue;
                action = observableExpression.action;
            }
            if (ObservableLike.isObservable(observableValue)) {
                var delegate = this.onValueChanged.bind(this, propName, observableValue, observableExpression);
                ObservableLike.subscribe(observableValue, delegate, action);
                this.subscriptions[propName] = { delegate: delegate, action: action };
            }
        }
    };
    Observer.prototype.unsubscribe = function (propName, props) {
        if (propName !== "children") {
            var observableValue = getObservableValue(props[propName]);
            if (ObservableLike.isObservable(observableValue)) {
                var subscription = this.subscriptions[propName];
                ObservableLike.unsubscribe(observableValue, subscription.delegate, subscription.action);
                delete this.subscriptions[propName];
            }
        }
    };
    Observer.prototype.updateSubscriptionsAndStateAfterRender = function () {
        var newState = updateSubscriptionsAndState(this.subscribedProps, this.props, this.state, this);
        if (newState != null) {
            this.setState(newState);
        }
        this.subscribedProps = __assign({}, this.props);
    };
    Observer.prototype.onValueChanged = function (propName, observableValue, observableExpression, value, action) {
        var setState = true;
        if (!(propName in this.subscriptions)) {
            return;
        }
        // If this is an ObservableExpression we will call the filter before setting state.
        if (observableExpression && observableExpression.filter) {
            setState = observableExpression.filter(value, action);
        }
        if (setState) {
            this.setState(function (prevState, props) {
                var _a;
                return {
                    values: __assign(__assign({}, prevState.values), (_a = {}, _a[propName] = observableValue.value || value, _a))
                };
            });
        }
    };
    return Observer;
}(react.Component));
function getObservableValue(propValue) {
    if (propValue && propValue.observableValue !== undefined) {
        return propValue.observableValue;
    }
    return propValue;
}
function getPropValue(propValue) {
    return ObservableLike.getValue(getObservableValue(propValue));
}
function updateSubscriptionsAndState(oldProps, newProps, state, component) {
    // We need to unsubscribe from any observable values on old props and
    // subscribe to any observable values on new props.
    // In addition, if any of the values of the observables on the new props
    // differ from the value on the state, then we need to update the state.
    // This is possible if the value of the observable changed while the value
    // was being rendered, but before we had set up the subscription.
    // If we want to unsubscribe/resubscribe, then a component should be passed,
    // since this method is always called statically.
    var newState = __assign({}, state);
    var stateChanged = false;
    if (oldProps) {
        for (var propName in oldProps) {
            var oldValue = getObservableValue(oldProps[propName]);
            var newValue = getObservableValue(newProps[propName]);
            if (oldValue !== newValue) {
                component && component.unsubscribe(propName, oldProps);
                if (newValue === undefined) {
                    delete newState.values[propName];
                    stateChanged = true;
                }
            }
        }
    }
    for (var propName in newProps) {
        var oldValue = oldProps && getObservableValue(oldProps[propName]);
        var newValue = getObservableValue(newProps[propName]);
        if (oldValue !== newValue) {
            component && component.subscribe(propName, newProps);
            // Look for changes in the observables between creation and now.
            if (state.values[propName] !== getPropValue(newValue)) {
                newState.values[propName] = getPropValue(newValue);
                stateChanged = true;
            }
        }
    }
    // If any state updates occurred update the state now.
    if (stateChanged) {
        return newState;
    }
    return null;
}

var ItemsObserver = /** @class */ (function (_super) {
    __extends(ItemsObserver, _super);
    function ItemsObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onItemsChanged = function (value, action) {
            var _a = _this.props, getUnselectableRanges = _a.getUnselectableRanges, items = _a.items, selection = _a.selection;
            selection.onItemsChanged(value, action);
            selection.unselectableRanges = getUnselectableRanges(getItemsValue(items));
            return false;
        };
        return _this;
    }
    ItemsObserver.prototype.componentDidMount = function () {
        this.props.selection.unselectableRanges = this.props.getUnselectableRanges(getItemsValue(this.props.items));
    };
    ItemsObserver.prototype.render = function () {
        var itemsObservable = {
            observableValue: this.props.items,
            filter: this.onItemsChanged
        };
        return react.createElement(Observer, { itemsObservable: itemsObservable }, this.props.children);
    };
    return ItemsObserver;
}(react.Component));

var ReadyableArrayObserver = /** @class */ (function (_super) {
    __extends(ReadyableArrayObserver, _super);
    function ReadyableArrayObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loaded = false;
        _this.handleLoaded = function () {
            if (_this.props.data.ready.value && !_this.loaded) {
                _this.props.onReady && _this.props.onReady();
                _this.loaded = true;
            }
        };
        return _this;
    }
    ReadyableArrayObserver.prototype.render = function () {
        var _a = this.props, dataComponent = _a.dataComponent, loadingComponent = _a.loadingComponent, zeroDataComponent = _a.zeroDataComponent;
        return (react.createElement(Observer, { data: this.props.data, onUpdate: this.handleLoaded, ready: this.props.data.ready }, function (props) {
            if (!props.ready) {
                return loadingComponent ? loadingComponent() : null;
            }
            if (props.data.length) {
                return dataComponent(props.data);
            }
            return zeroDataComponent ? zeroDataComponent() : null;
        }));
    };
    ReadyableArrayObserver.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.data !== this.props.data) {
            this.loaded = false;
            this.handleLoaded();
        }
    };
    ReadyableArrayObserver.prototype.componentDidMount = function () {
        this.handleLoaded();
    };
    return ReadyableArrayObserver;
}(react.Component));

var SelectionObserver = /** @class */ (function (_super) {
    __extends(SelectionObserver, _super);
    function SelectionObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelectionChanged = function (value, action) {
            var shouldUpdate = false;
            if (action === "select" && _this.props.onSelect) {
                shouldUpdate = _this.props.onSelect(value);
            }
            if ((action === "select" || action === "unselect" || action === "set") && _this.props.onSelectionChanged) {
                shouldUpdate = _this.props.onSelectionChanged(_this.props.selection.value, action);
            }
            return shouldUpdate;
        };
        return _this;
    }
    SelectionObserver.prototype.render = function () {
        var selectionObservable = { observableValue: this.props.selection, filter: this.onSelectionChanged };
        return react.createElement(Observer, { selectionObservable: selectionObservable }, this.props.children);
    };
    return SelectionObserver;
}(react.Component));

/**
 * The Portal component is used to create a React Portal through a well known component.
 * This component allows the platform to control where portals are rooted in the document
 * and ensure these are managed properly.
 */
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal(props) {
        var _this = _super.call(this, props) || this;
        _this.mounted = new ObservableValue(false);
        // Determine the element that will host the portal.
        var parentElement = _this.props.portalElement;
        if (!parentElement && _this.props.portalSelector) {
            parentElement = document.querySelector(_this.props.portalSelector);
        }
        if (!parentElement) {
            parentElement = document.querySelector(".bolt-portal-host");
            if (!parentElement) {
                parentElement = document.createElement("div");
                parentElement.className = "bolt-portal-host absolute-fill no-events scroll-hidden";
                document.body.appendChild(parentElement);
            }
        }
        if (_this.props.parentClassName && !parentElement.classList.contains(_this.props.parentClassName)) {
            parentElement.classList.add(_this.props.parentClassName);
        }
        _this.parentElement = parentElement;
        // Create the hosting element for the portal.
        _this.hostElement = document.createElement("div");
        _this.hostElement.classList.add("bolt-portal");
        _this.hostElement.classList.add("absolute-fill");
        // If custom class's are supplied add them (1 at a time since IE doesnt support multiple args).
        if (props.className) {
            var classNames = props.className.split(" ");
            for (var _i = 0, classNames_1 = classNames; _i < classNames_1.length; _i++) {
                var className = classNames_1[_i];
                _this.hostElement.classList.add(className);
            }
        }
        return _this;
    }
    Portal.prototype.render = function () {
        var _this = this;
        // NOTE: We dont render the children until after we have mounted the portal.
        //  If the caller needs to access the document while mounting the content this
        //  will ensure the children of the portal are not mounted until the portal
        //  is attached to the DOM.
        return reactDom.createPortal(react.createElement(Observer, { mounted: this.mounted }, function (props) { return (props.mounted ? _this.props.children : null); }), this.hostElement);
    };
    Portal.prototype.componentDidMount = function () {
        this.parentElement.appendChild(this.hostElement);
        this.mounted.value = true;
    };
    Portal.prototype.componentWillUnmount = function () {
        this.parentElement.removeChild(this.hostElement);
    };
    return Portal;
}(react.Component));

var Location;
(function (Location) {
    Location["start"] = "start";
    Location["center"] = "center";
    Location["end"] = "end";
})(Location || (Location = {}));
/**
 * The position method is used to set the location of an absolutely positioned element
 * using the standard positioning properties. The names of these properties conform to
 * the naming patterns used in the Material Popover https://material-ui.com. They
 * are not exact but follow the same pattern.
 *
 * For an example usage, look at the Callout component and how it uses this method to
 * position the element in the page.
 *
 * @param transformElement The element that is being positioned/transformed.
 * @param transformOrigin The origin within the transformed element to align with the
 *  anchor position.
 * @param anchorOffset Offset on the anchorElement that is applied to the computed location
 *  given the element/origin/point.
 * @param anchorElement The element used to anchor the position of the transformed element.
 *  The caller must supply either an anchorElement and anchorOrigin, or anchorPoint.
 * @param anchorOrigin When an anchorElement is supplied the anchorOrigin defines the location
 *  on the anchorElement used for positioning.
 * @param anchorPoint Instead of an anchorElement the caller can use an explicit point
 *  to be used as the basis for the anchorLocation. The anchorOffset will still be applied.
 */
function position(transformElement, transformOrigin, anchorOffset, anchorElement, anchorOrigin, anchorPoint) {
    // Translate the anchor location information to a point on the anchor element
    // if a specific point was not supplied.
    if (!anchorPoint) {
        if (anchorElement && anchorOrigin) {
            anchorPoint = pointFromOrigin(anchorOrigin, anchorElement.getBoundingClientRect());
        }
        else {
            return;
        }
    }
    var xPosition = anchorPoint.x;
    var yPosition = anchorPoint.y;
    var translateXFactor = 0;
    var translateYFactor = 0;
    // Update the anchorPoint by the anchorOffset if one was supplied.
    if (anchorOffset) {
        xPosition += anchorOffset.horizontal;
        yPosition += anchorOffset.vertical;
    }
    // Special case Start/Start since we dont need the parent rect.
    if (transformOrigin.horizontal !== Location.start || transformOrigin.vertical !== Location.start) {
        var windowHeight = document.documentElement.clientHeight;
        var windowWidth = document.documentElement.clientWidth;
        // Compute the effective horizontal position of the element.
        switch (transformOrigin.horizontal) {
            case Location.end:
                xPosition = windowWidth - xPosition;
                break;
            case Location.center:
                translateXFactor = -50;
                break;
        }
        // Compute the effective vertical position of the element.
        switch (transformOrigin.vertical) {
            case Location.end:
                yPosition = windowHeight - yPosition;
                break;
            case Location.center:
                translateYFactor = -50;
                break;
        }
    }
    // Update the transform elements position (it needs to be absolutely positioned in the window).
    // Void out other styles in case this is a re-call
    if (transformOrigin.horizontal !== Location.end) {
        transformElement.style.left = xPosition + 5000 + "px";
        transformElement.style.right = "";
    }
    else {
        transformElement.style.left = "";
        transformElement.style.right = xPosition + 5000 + "px";
    }
    if (transformOrigin.vertical !== Location.end) {
        transformElement.style.top = yPosition + 5000 + "px";
        transformElement.style.bottom = "";
    }
    else {
        transformElement.style.top = "";
        transformElement.style.bottom = yPosition + 5000 + "px";
    }
    // Apply centering as necessary
    if (translateXFactor !== 0 || translateYFactor !== 0) {
        transformElement.style.transform = "translate(" + translateXFactor + "%, " + translateYFactor + "%)";
    }
    else {
        transformElement.style.transform = "";
    }
}
/**
 * updateLayout is used to move an element to the "best" location based on it
 * layout. This will look at all the positioning attributes and move the
 * transformElement to a new location based on its size. This is usually done
 * after an initial call to position. After the element is positioned the
 * caller determines if the transformElement is in the desired location, which
 * generally translates to, is it clipped in the window.
 *
 * This is delayed because when position is called the transformElement is
 * frequently not fully laid out and we need to wait other a force reflow will
 * happen and cause performance issues.
 *
 * @param transformElement The element that is being positioned/transformed.
 * @param transformOrigin The origin within the transformed element to align with the
 *  anchor position.
 * @param anchorOffset Offset on the anchorElement that is applied to the computed location
 *  given the element/origin/point.
 * @param anchorElement The element used to anchor the position of the transformed element.
 *  The caller must supply either an anchorElement and anchorOrigin, or anchorPoint.
 * @param anchorOrigin When an anchorElement is supplie the anchorOrigin defines the location
 *  on the anchorElement used for positioning.
 * @param anchorPoint Instead of an anchorElement the caller can use an explicit point
 *  to be used as the basis for the anchorLocation. The anchorOffset will still be applied.
 */
function updateLayout(transformElement, transformOrigin, anchorOffset, anchorElement, anchorOrigin, anchorPoint) {
    var windowHeight = document.documentElement.clientHeight;
    var windowWidth = document.documentElement.clientWidth;
    // Get the current layout for the transformElement to determine the best layout.
    var transformElementRect = transformElement.getBoundingClientRect();
    // Determine which edges of the transform element are clipped by the window.
    var clippedBottom = Math.floor(transformElementRect.bottom) > windowHeight;
    var clippedRight = Math.floor(transformElementRect.right) > windowWidth;
    var clippedLeft = Math.floor(transformElementRect.left) < 0;
    var clippedTop = Math.floor(transformElementRect.top) < 0;
    // If any of the edges are clipped we will update the layout to a better layout if available.
    if (clippedBottom || clippedRight || clippedLeft || clippedTop) {
        // If we are positioned based on a point and and offset we will flip over
        // the clipped edge.
        if (anchorPoint) {
            // Flip vertically top/bottom depending on the clipping edges.
            if (clippedTop !== clippedBottom) {
                if (clippedTop) {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.bottom < windowHeight / 2 - 10) {
                        if (transformOrigin.vertical === Location.end) {
                            transformOrigin.vertical = Location.start;
                        }
                    }
                }
                else {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.top > windowHeight / 2 + 10) {
                        if (transformOrigin.vertical === Location.start) {
                            transformOrigin.vertical = Location.end;
                        }
                    }
                }
                if (anchorOffset) {
                    anchorOffset.vertical = -anchorOffset.vertical;
                }
            }
            // Flip hoizontally left/right depending on the clipping edges.
            if (clippedLeft !== clippedRight) {
                if (clippedLeft) {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.right < windowWidth / 2 - 10) {
                        if (transformOrigin.horizontal === Location.end) {
                            transformOrigin.horizontal = Location.start;
                        }
                    }
                }
                else {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.left > windowWidth / 2 + 10) {
                        if (transformOrigin.horizontal === Location.start) {
                            transformOrigin.horizontal = Location.end;
                        }
                    }
                }
                if (anchorOffset) {
                    anchorOffset.horizontal = -anchorOffset.horizontal;
                }
            }
        }
        // If the element is positioned based on an anchorElement/anchorOrigin
        // we need to look determine if the element can slide along any axis.
        else if (anchorOrigin && anchorElement) {
            // Flip vertically top/bottom depending on the clipping edges.
            if (clippedTop !== clippedBottom) {
                if (clippedTop) {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.bottom < windowHeight / 2 - 10) {
                        if (transformOrigin.vertical === Location.end && anchorOrigin.vertical === Location.start) {
                            transformOrigin.vertical = Location.start;
                            anchorOrigin.vertical = Location.end;
                        }
                        else if (transformOrigin.vertical === Location.center ||
                            (transformOrigin.vertical === Location.end && anchorOrigin.vertical === Location.end)) {
                            transformOrigin.vertical = Location.start;
                            anchorOrigin.vertical = Location.start;
                        }
                    }
                }
                else {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.top > windowHeight / 2 + 10) {
                        if (transformOrigin.vertical === Location.start && anchorOrigin.vertical === Location.end) {
                            transformOrigin.vertical = Location.end;
                            anchorOrigin.vertical = Location.start;
                        }
                        else if (transformOrigin.vertical === Location.center ||
                            (transformOrigin.vertical === Location.start && anchorOrigin.vertical === Location.start)) {
                            transformOrigin.vertical = Location.end;
                            anchorOrigin.vertical = Location.end;
                        }
                    }
                }
                if (anchorOffset) {
                    anchorOffset.vertical = -anchorOffset.vertical;
                }
            }
            if (clippedLeft !== clippedRight) {
                // Flip hoizontally left/right depending on the clipping edges.
                if (clippedLeft) {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.right < windowWidth / 2 - 10) {
                        if (transformOrigin.horizontal === Location.end && anchorOrigin.horizontal === Location.start) {
                            transformOrigin.horizontal = Location.start;
                            anchorOrigin.horizontal = Location.end;
                        }
                        else if (transformOrigin.horizontal === Location.center ||
                            (transformOrigin.horizontal === Location.end && anchorOrigin.horizontal === Location.end)) {
                            transformOrigin.horizontal = Location.start;
                            anchorOrigin.horizontal = Location.start;
                        }
                    }
                }
                else {
                    // Before we flip lets make sure we have at least 10 more pixels the other direction.
                    if (transformElementRect.left > windowWidth / 2 + 10) {
                        if (transformOrigin.horizontal === Location.start && anchorOrigin.horizontal === Location.end) {
                            transformOrigin.horizontal = Location.end;
                            anchorOrigin.horizontal = Location.start;
                        }
                        else if (transformOrigin.horizontal === Location.center ||
                            (transformOrigin.horizontal === Location.start && anchorOrigin.horizontal === Location.start)) {
                            transformOrigin.horizontal = Location.end;
                            anchorOrigin.horizontal = Location.end;
                        }
                    }
                }
                if (anchorOffset) {
                    anchorOffset.horizontal = -anchorOffset.horizontal;
                }
            }
        }
        // Update the position based on the changes made to the location details.
        position(transformElement, transformOrigin, anchorOffset, anchorElement, anchorOrigin, anchorPoint);
        // If the repositioned element doesnt fit, we will put max-height/max-width to
        // force the entire element into the viewport.
        transformElementRect = transformElement.getBoundingClientRect();
        // Determine which edges of the transform element are clipped by the window.
        clippedBottom = Math.floor(transformElementRect.bottom) > windowHeight;
        clippedRight = Math.floor(transformElementRect.right) > windowWidth;
        clippedLeft = Math.floor(transformElementRect.left) < 0;
        clippedTop = Math.floor(transformElementRect.top) < 0;
        // Since we are clipped compute the updated sizes and position a second time.
        if (clippedTop || clippedBottom || clippedLeft || clippedRight) {
            if (clippedTop || clippedBottom) {
                var maxHeight = transformElementRect.height -
                    (clippedTop ? -transformElementRect.top : 0) -
                    (clippedBottom ? transformElementRect.bottom - windowHeight : 0) -
                    5;
                transformElement.style.maxHeight = maxHeight + "px";
            }
            if (clippedLeft || clippedRight) {
                var maxWidth = transformElementRect.width -
                    (clippedLeft ? -transformElementRect.left : 0) -
                    (clippedRight ? transformElementRect.right - windowWidth : 0) -
                    5;
                transformElement.style.maxWidth = maxWidth + "px";
            }
            // Note the change to the component with the overflow className.
            transformElement.classList.add("overflow");
            // Update its position one final time.
            position(transformElement, transformOrigin, anchorOffset, anchorElement, anchorOrigin, anchorPoint);
        }
    }
}
function pointFromOrigin(location, rect) {
    var x;
    var y;
    // Compute the horizontal position based on the rectangle.
    switch (location.horizontal) {
        case Location.start:
            x = rect.left;
            break;
        case Location.end:
            x = rect.right;
            break;
        default:
            x = rect.left + rect.width / 2;
    }
    // Compute the vertical position based on the rectangle.
    switch (location.vertical) {
        case Location.start:
            y = rect.top;
            break;
        case Location.end:
            y = rect.bottom;
            break;
        default:
            y = rect.top + rect.height / 2;
    }
    return { x: x, y: y };
}

/**
 * The TimerManagement class is used to track a set of timers.
 */
var TimerManagement = /** @class */ (function () {
    function TimerManagement(parent) {
        this.disposed = false;
        this.immediateIds = null;
        this.intervals = [];
        this.timeouts = [];
        this.parent = parent || null;
    }
    /**
     * clearAllTimers is used to clear any active timers in the object.
     */
    TimerManagement.prototype.clearAllTimers = function () {
        for (var _i = 0, _a = this.intervals; _i < _a.length; _i++) {
            var intervalId = _a[_i];
            window.clearInterval(intervalId);
        }
        for (var _b = 0, _c = this.timeouts; _b < _c.length; _b++) {
            var timeoutId = _c[_b];
            window.clearTimeout(timeoutId);
        }
        this.intervals.splice(0, this.intervals.length);
        this.timeouts.splice(0, this.timeouts.length);
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    TimerManagement.prototype.clearImmediate = function (id) {
        if (this.immediateIds && this.immediateIds[id]) {
            window.clearTimeout(id);
            delete this.immediateIds[id];
        }
    };
    /**
     * clearInterval is used to stop the series of callbacks that was setup through setInterval.
     *
     * @param intervalId - The id returned from eh setInterval call that you want stopped.
     */
    TimerManagement.prototype.clearInterval = function (intervalId) {
        window.clearInterval(intervalId);
        this.removeInterval(intervalId);
    };
    /**
     * clearTimeout is used to stop a timeout callback that was setup through setTimeout.
     *
     * @param timeoutId - The id returned from the setTimeout call that you want stopped.
     */
    TimerManagement.prototype.clearTimeout = function (timeoutId) {
        window.clearTimeout(timeoutId);
        this.removeTimeout(timeoutId);
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    TimerManagement.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this.disposed) {
            if (!this.immediateIds) {
                this.immediateIds = {};
            }
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this.immediateIds) {
                        delete _this.immediateIds[immediateId];
                    }
                    callback.apply(_this.parent);
                }
                catch (e) { }
            };
            immediateId = window.setTimeout(setImmediateCallback, 0);
            this.immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * setInterval is used to setup a callback that is called on an interval.
     *
     * @param callback - The callback that should be called each interval time period.
     *
     * @param milliseconds - The number of milliseconds between each callback.
     *
     * @param args - Optional variable argument list passed to the callback.
     *
     * @returns - returns a handle to the interval, this can be used to cancel through clearInterval method.
     */
    TimerManagement.prototype.setInterval = function (callback, milliseconds) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        // Create the timer, and add a method to track the completion so we can
        // remove our tracked reference.
        var intervalId = window.setInterval.apply(window, __spreadArrays([callback, milliseconds], args));
        this.intervals.push(intervalId);
        return intervalId;
    };
    /**
     * setTimeout is used to setup a onetime callback that is called after the specified timeout.
     *
     * @param callback - The callback that should be called when the time period has elapsed.
     *
     * @param milliseconds - The number of milliseconds before the callback should be called.
     *  Even if a timeout of 0 is used the callback will be executed asynchronouly.
     *
     * @param args - Optional variable argument list passed to the callback.
     *
     * @returns - returns a handle to the timeout, this can be used to cancel through clearTimeout method.
     */
    TimerManagement.prototype.setTimeout = function (callback, milliseconds) {
        var _this = this;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var timeoutId = 0;
        // Create the timer, and add a method to track the completion so we can
        // remove our tracked reference.
        timeoutId = window.setTimeout.apply(window, __spreadArrays([function () {
                _this.removeTimeout(timeoutId);
                callback.apply(void 0, args);
            },
            milliseconds], args));
        this.timeouts.push(timeoutId);
        return timeoutId;
    };
    TimerManagement.prototype.dispose = function () {
        this.disposed = true;
        this.parent = null;
        this.clearAllTimers();
        // Clear immediates.
        if (this.immediateIds) {
            for (var id in this.immediateIds) {
                if (this.immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
        }
        this.immediateIds = null;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    TimerManagement.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this.disposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            noOpFunction.flush = (function () { return null; });
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = new Date().getTime();
        var lastResult;
        var lastArgs;
        var timeoutId = null;
        if (options) {
            leading = options.leading || false;
            trailing = options.trailing || true;
            maxWait = options.maxWait || null;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(null, lastArgs);
        };
        var callback = function (userCall) {
            var now = new Date().getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    TimerManagement.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this.disposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            noOpFunction.flush = (function () { return null; });
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === "boolean") {
            leading = options.leading;
        }
        if (options && typeof options.trailing === "boolean") {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = new Date().getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(null, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    TimerManagement.prototype.removeInterval = function (intervalId) {
        var index = this.intervals.indexOf(intervalId);
        if (index >= 0) {
            this.intervals.splice(index, 1);
        }
    };
    TimerManagement.prototype.removeTimeout = function (timeoutId) {
        var index = this.timeouts.indexOf(timeoutId);
        if (index >= 0) {
            this.timeouts.splice(index, 1);
        }
    };
    return TimerManagement;
}());

/** SNOWPACK INJECT STYLE: azure-devops-ui/Components/Surface/Surface.css */
function __snowpack__injectStyle$6(css) {
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
__snowpack__injectStyle$6(".bolt-condensed-horizontal-spacing {\n  padding-left: 16px;\n  padding-right: 16px; }\n\n.bolt-default-horizontal-spacing {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.bolt-relaxed-horizontal-spacing {\n  padding-left: 32px;\n  padding-right: 32px; }\n");

/**
 * Defines how spacing should be applied to the children of a container.
 */
var Spacing;
(function (Spacing) {
    Spacing[Spacing["condensed"] = 0] = "condensed";
    Spacing[Spacing["default"] = 1] = "default";
    Spacing[Spacing["relaxed"] = 2] = "relaxed";
})(Spacing || (Spacing = {}));
var SurfaceBackground;
(function (SurfaceBackground) {
    SurfaceBackground[SurfaceBackground["normal"] = 0] = "normal";
    SurfaceBackground[SurfaceBackground["neutral"] = 1] = "neutral";
    SurfaceBackground[SurfaceBackground["callout"] = 2] = "callout";
})(SurfaceBackground || (SurfaceBackground = {}));

var SurfaceContext = react.createContext({
    background: SurfaceBackground.normal,
    horizontalClassName: undefined,
    spacing: undefined,
    verticalClassName: undefined
});

var ContentJustification;
(function (ContentJustification) {
    ContentJustification[ContentJustification["Start"] = 0] = "Start";
    ContentJustification[ContentJustification["Center"] = 1] = "Center";
    ContentJustification[ContentJustification["End"] = 2] = "End";
    ContentJustification[ContentJustification["Stretch"] = 3] = "Stretch";
})(ContentJustification || (ContentJustification = {}));
var ContentLocation;
(function (ContentLocation) {
    ContentLocation[ContentLocation["Start"] = 0] = "Start";
    ContentLocation[ContentLocation["Center"] = 1] = "Center";
    ContentLocation[ContentLocation["End"] = 2] = "End";
})(ContentLocation || (ContentLocation = {}));
var ContentOrientation;
(function (ContentOrientation) {
    ContentOrientation[ContentOrientation["Column"] = 0] = "Column";
    ContentOrientation[ContentOrientation["Row"] = 1] = "Row";
})(ContentOrientation || (ContentOrientation = {}));
var ContentSize;
(function (ContentSize) {
    ContentSize[ContentSize["Small"] = 0] = "Small";
    ContentSize[ContentSize["Medium"] = 1] = "Medium";
    ContentSize[ContentSize["Large"] = 2] = "Large";
    ContentSize[ContentSize["Auto"] = 3] = "Auto";
    ContentSize[ContentSize["ExtraLarge"] = 4] = "ExtraLarge";
})(ContentSize || (ContentSize = {}));

var Callout = /** @class */ (function (_super) {
    __extends(Callout, _super);
    function Callout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.calloutContent = react.createRef();
        return _this;
    }
    Callout.prototype.render = function () {
        var portalProps = this.props.portalProps;
        return (react.createElement(Portal, __assign({}, portalProps, { className: css(portalProps && portalProps.className, this.props.anchorElement && "bolt-layout-relative") }),
            react.createElement(CalloutContent, __assign({ ref: this.calloutContent }, this.props))));
    };
    Callout.prototype.componentWillUnmount = function () {
        // We need to let the content handle the WillUnmount before the Portal, this
        // will ensure the the callout can deal with unmounting content that still has
        // focus. Otherwise the root will be detached from the document and focus will
        // have moved to the body.
        if (this.calloutContent.current) {
            this.calloutContent.current.portalWillUnmount();
        }
    };
    Callout.prototype.updateLayout = function () {
        if (this.calloutContent.current) {
            this.calloutContent.current.updateLayout();
        }
    };
    Callout.defaultProps = {
        blurDismiss: false,
        viewportChangeDismiss: true
    };
    return Callout;
}(react.Component));
var CalloutContent = /** @class */ (function (_super) {
    __extends(CalloutContent, _super);
    function CalloutContent(props) {
        var _this = _super.call(this, props) || this;
        _this.calloutElement = react.createRef();
        _this.relayoutTimer = new TimerManagement();
        _this.scrollListen = false;
        _this.scrollEvent = null;
        _this.initialScreenWidth = window.innerWidth;
        _this.onBlur = function () {
            _this.props.onDismiss && _this.props.onDismiss();
        };
        _this.onClick = function (event) {
            // If we click on the light dismiss div we will dismiss it.
            if (_this.props.lightDismiss && !event.defaultPrevented) {
                if (_this.props.onDismiss) {
                    _this.props.onDismiss();
                }
                event.preventDefault();
            }
        };
        _this.onKeyDown = function (event) {
            // If we press escape from within the callout this will dismiss it.
            if (_this.props.escDismiss && event.which === KeyCode.escape && !event.defaultPrevented) {
                if (_this.props.onDismiss) {
                    _this.props.onDismiss();
                }
                event.preventDefault();
            }
        };
        _this.onResize = function () {
            // Fix for issue where the soft keyboard on android closes callouts.
            if (_this.props.viewportChangeDismiss === true &&
                (_this.initialScreenWidth !== window.innerWidth ||
                    !document.activeElement ||
                    (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA"))) {
                _this.props.onDismiss && _this.props.onDismiss();
            }
            else if (_this.props.updateLayout) {
                _this.relayoutTimer.clearAllTimers();
                _this.relayoutTimer.setTimeout(function () {
                    _this.updateLayout();
                }, 200);
            }
        };
        _this.onScroll = function (event) {
            if (_this.scrollListen) {
                _this.scrollEvent = event.nativeEvent;
            }
        };
        _this.onScrollDocument = function (event) {
            if (_this.scrollListen) {
                if (event === _this.scrollEvent) {
                    _this.scrollEvent = null;
                }
                else {
                    if (_this.props.viewportChangeDismiss === true) {
                        var anchorElement = _this.props.anchorElement;
                        // If the element containing the anchor is scrolled dismiss the callout.
                        if (event.target && anchorElement && event.target.contains(anchorElement)) {
                            _this.props.onDismiss && _this.props.onDismiss();
                        }
                    }
                    else if (_this.props.updateLayout) {
                        _this.relayoutTimer.setTimeout(function () {
                            _this.updateLayout();
                        }, 50);
                    }
                }
            }
        };
        // Track the element that had focus when we mounted.
        _this.focusElement = document.activeElement;
        _this.contentElement = props.contentRef || react.createRef();
        return _this;
    }
    CalloutContent.prototype.render = function () {
        var _this = this;
        var _a = this.props, blurDismiss = _a.blurDismiss, contentJustification = _a.contentJustification, contentLocation = _a.contentLocation, contentOrientation = _a.contentOrientation, focuszoneProps = _a.focuszoneProps, lightDismiss = _a.lightDismiss, modal = _a.modal, onAnimationEnd = _a.onAnimationEnd, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, anchorElement = _a.anchorElement;
        var content;
        // If we have both a FocusWithin and a FocusZone we need to use the functional version
        // of the FocusWithin to allow the FocusZone to contain the content directly.
        if (blurDismiss && focuszoneProps) {
            content = (react.createElement(FocusWithin, { onBlur: this.onBlur, updateStateOnFocusChange: false }, function (props) { return react.createElement(FocusZone, __assign({}, focuszoneProps), _this.renderContent(props.onFocus, props.onBlur)); }));
        }
        else {
            content = this.renderContent();
            // Add the focus tracker to dismiss the callout if we are dismissing on blur.
            if (blurDismiss) {
                content = (react.createElement(FocusWithin, { onBlur: this.onBlur, updateStateOnFocusChange: false }, content));
            }
            // Add focus zone if focuszoneProperties are specified
            if (focuszoneProps) {
                content = react.createElement(FocusZone, __assign({}, focuszoneProps), content);
            }
        }
        var lightDismissDiv = lightDismiss ? (react.createElement("div", { className: css("absolute-fill bolt-light-dismiss", modal && "bolt-callout-modal"), onClick: this.onClick })) : null;
        // The callout is wrapped in a floating element in the portal.
        // If lightDismiss is enabled we will create an absolute-fill div to capture onClick events.
        return (react.createElement(SurfaceContext.Provider, { value: { background: SurfaceBackground.callout } },
            react.createElement("div", { className: "flex-row flex-grow" },
                react.createElement("div", { className: css(this.props.className, "bolt-callout absolute", contentLocation !== undefined && "absolute-fill", contentJustification === ContentJustification.Start && "justify-start", contentJustification === ContentJustification.Center && "justify-center", contentJustification === ContentJustification.End && "justify-end", contentLocation === ContentLocation.Start && "flex-start", contentLocation === ContentLocation.Center && "flex-center", contentLocation === ContentLocation.End && "flex-end", contentOrientation === ContentOrientation.Column && "flex-column", contentOrientation !== ContentOrientation.Column && "flex-row", modal && !lightDismiss && "bolt-callout-modal"), id: getSafeId(this.props.id), onAnimationEnd: onAnimationEnd, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onKeyDown: this.onKeyDown, ref: this.calloutElement, role: this.props.role },
                    !anchorElement && lightDismissDiv,
                    content),
                !!anchorElement && lightDismissDiv)));
    };
    CalloutContent.prototype.componentDidMount = function () {
        this.updateLayout();
        // If this is an element relative layout we need to listen for scroll events
        // on the document and dismiss the callout if the scroll event didnt pass
        // through the callout.
        if (this.props.anchorElement) {
            window.addEventListener("resize", this.onResize);
            document.addEventListener("scroll", this.onScrollDocument, true);
            this.scrollListen = true;
        }
    };
    CalloutContent.prototype.componentDidUpdate = function () {
        if (this.props.updateLayout) {
            this.updateLayout();
        }
    };
    CalloutContent.prototype.componentWillUnmount = function () {
        if (this.scrollListen) {
            document.removeEventListener("scroll", this.onScrollDocument, true);
            window.removeEventListener("resize", this.onResize);
        }
        if (this.relayoutTimer) {
            this.relayoutTimer.clearAllTimers();
        }
    };
    CalloutContent.prototype.portalWillUnmount = function () {
        var contentElement = this.contentElement.current;
        var focusElement = this.focusElement;
        // If the callout has focus when unmounted we need to set focus back to the last element with focus.
        // Need to wait for next tick otherwise focus/blur events are not fired.
        if (focusElement && contentElement && contentElement.contains(document.activeElement)) {
            window.setTimeout(function () {
                // We need to make sure the active element is portal after the timeout.
                // It may have moved through other means before the timeout expires.
                // Set focus to the focusElement if our element contains focus, or if the focus has gone back to the document body
                if (contentElement.contains(document.activeElement) || document.activeElement === document.body || document.activeElement === null) {
                    focusElement.focus();
                }
            }, 0);
        }
    };
    CalloutContent.prototype.updateLayout = function () {
        if (this.props.contentLocation === undefined) {
            if (this.calloutElement.current) {
                // Position the element based on the initial layout parameters.
                position(this.calloutElement.current, this.props.calloutOrigin || { horizontal: Location.start, vertical: Location.start }, this.props.anchorOffset, this.props.anchorElement, this.props.anchorOrigin, this.props.anchorPoint);
                // Now that the component is placed at the requested location, update
                // the layout if the caller didnt request a fixed layout.
                if (!this.props.fixedLayout) {
                    updateLayout(this.calloutElement.current, this.props.calloutOrigin || { horizontal: Location.start, vertical: Location.start }, this.props.anchorOffset, this.props.anchorElement, this.props.anchorOrigin, this.props.anchorPoint);
                }
            }
        }
    };
    CalloutContent.prototype.renderContent = function (onFocus, onBlur) {
        var _a = this.props, contentJustification = _a.contentJustification, contentOrientation = _a.contentOrientation, contentSize = _a.contentSize, height = _a.height, width = _a.width;
        return (react.createElement("div", { "aria-describedby": getSafeId(this.props.ariaDescribedBy), "aria-label": this.props.ariaLabel, "aria-labelledby": getSafeId(this.props.ariaLabelledBy), "aria-modal": this.props.modal, className: css(this.props.contentClassName, "bolt-callout-content", this.props.contentShadow && "bolt-callout-shadow", contentJustification === ContentJustification.Stretch && "flex-grow", contentOrientation === ContentOrientation.Column && "flex-column", contentOrientation === ContentOrientation.Row && "flex-row", contentSize === ContentSize.Small && "bolt-callout-small", contentSize === ContentSize.Medium && "bolt-callout-medium", contentSize === ContentSize.Large && "bolt-callout-large", contentSize === ContentSize.ExtraLarge && "bolt-callout-extra-large", contentSize === ContentSize.Auto && "bolt-callout-auto"), onBlur: onBlur, onFocus: onFocus, onScroll: this.onScroll, ref: this.contentElement, role: this.props.role || "dialog", style: { height: height, width: width } }, this.props.children));
    };
    return CalloutContent;
}(react.Component));

var MouseWithin = /** @class */ (function (_super) {
    __extends(MouseWithin, _super);
    function MouseWithin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enterTimeout = 0;
        _this.delayTimeout = 0;
        _this.mouse = false;
        /**
         * onMouseEnter method that should be attached to the onMouseEnter handler of the
         * continer's root element.
         */
        _this.onMouseEnter = function (event) {
            // If the mouse is just entering one of the child components and not just moving
            // from one child to another we will call the onMouseEnter delegate if supplied.
            if (!_this.mouse) {
                _this.mouse = true;
                // Clear any pending leave if we have left and re-entered the component during
                // the leaveTimeout.
                if (_this.delayTimeout) {
                    window.clearTimeout(_this.delayTimeout);
                    _this.delayTimeout = 0;
                }
                if (_this.props.enterDelay) {
                    event.persist();
                    // persist does not preserve the currentTarget so we do that manually
                    var currentTarget_1 = event.currentTarget;
                    _this.enterTimeout = window.setTimeout(function () {
                        _this.enterTimeout = 0;
                        var newCurrentTarget = event.currentTarget;
                        event.currentTarget = currentTarget_1;
                        _this.mouseEntered(event);
                        event.currentTarget = newCurrentTarget;
                    }, _this.props.enterDelay);
                }
                else {
                    _this.mouseEntered(event);
                }
            }
        };
        /**
         * onMouseLeave method that should be attached to the onMouseLeave handler of the
         * container's root element.
         */
        _this.onMouseLeave = function (event) {
            if (_this.mouse) {
                _this.mouse = false;
                // Clear any pending enterTimeout if we didnt stay over the element long enough.
                if (_this.enterTimeout) {
                    window.clearTimeout(_this.enterTimeout);
                    _this.enterTimeout = 0;
                }
                if (_this.props.leaveDelay) {
                    event.persist();
                    _this.delayTimeout = window.setTimeout(function () {
                        _this.delayTimeout = 0;
                        _this.mouseLeft(event);
                    }, _this.props.leaveDelay);
                }
                else {
                    _this.mouseLeft(event);
                }
            }
        };
        return _this;
    }
    MouseWithin.prototype.render = function () {
        var newProps = {
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
        };
        if (isFunctionalChildren(this.props.children)) {
            var child = this.props.children;
            // For functional components we pass the hasMouse attribute as well.
            newProps.hasMouse = this.mouse;
            return child(newProps);
        }
        else {
            var child = react.Children.only(this.props.children);
            return react.cloneElement(child, __assign(__assign({}, child.props), newProps), child.props.children);
        }
    };
    MouseWithin.prototype.componentWillUnmount = function () {
        if (this.enterTimeout) {
            window.clearTimeout(this.enterTimeout);
        }
        if (this.delayTimeout) {
            window.clearTimeout(this.delayTimeout);
        }
    };
    /**
     * hasMouse returns true if the mouse is contained within the component
     * hierarchy. This includes portals, the element may or may not
     * be a direct descendant of the component in the DOM structure.
     */
    MouseWithin.prototype.hasMouse = function () {
        return this.mouse;
    };
    MouseWithin.prototype.mouseEntered = function (event) {
        // If we are tracking the mouse state we will force a component update.
        if (this.props.updateStateOnMouseChange) {
            this.forceUpdate();
        }
        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(event);
        }
    };
    MouseWithin.prototype.mouseLeft = function (event) {
        // If we are tracking the mouse state we will force a component update.
        if (this.props.updateStateOnMouseChange) {
            this.forceUpdate();
        }
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event);
        }
    };
    MouseWithin.defaultProps = {
        updateStateOnMouseChange: true
    };
    return MouseWithin;
}(react.Component));

var TooltipStatus;
(function (TooltipStatus) {
    TooltipStatus[TooltipStatus["hidden"] = 0] = "hidden";
    TooltipStatus[TooltipStatus["visible"] = 1] = "visible";
    TooltipStatus[TooltipStatus["fadingout"] = 2] = "fadingout";
})(TooltipStatus || (TooltipStatus = {}));
var tooltipId = 1;
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.contentRef = react.createRef();
        _this.tooltipId = "tooltip-" + tooltipId++;
        _this.focus = false;
        _this.mouse = false;
        _this.showTooltip = function (event) {
            var anchorElement = event.currentTarget;
            if (_this.shouldShowTooltip(anchorElement)) {
                // If no anchorOrigin was specified use the Mouse.position when we show the toolip.
                var anchorPoint = void 0;
                if (!_this.props.anchorOrigin) {
                    anchorPoint = Mouse.position;
                }
                _this.mouse = true;
                document.addEventListener("keydown", _this.onKeyDown);
                _this.setState({
                    anchorElement: anchorElement,
                    anchorOffset: { horizontal: 8, vertical: 8 },
                    anchorOrigin: { horizontal: Location.center, vertical: Location.end },
                    anchorPoint: anchorPoint,
                    innerText: _this.props.overflowOnly && !_this.props.text ? anchorElement.innerText : undefined,
                    tooltipStatus: TooltipStatus.visible,
                    tooltipOrigin: { horizontal: Location.start, vertical: Location.start }
                });
            }
        };
        _this.closeTooltip = function () {
            if (!(_this.focus && getFocusVisible()) && _this.state.tooltipStatus === TooltipStatus.visible) {
                _this.mouse = false;
                document.removeEventListener("keydown", _this.onKeyDown);
                _this.setState({ tooltipStatus: _this.getDismissStatus() });
            }
        };
        _this.onKeyDown = function (event) {
            var _a;
            if (event.which === KeyCode.escape && _this.state.tooltipStatus === TooltipStatus.visible) {
                _this.closeTooltip();
            }
            if (event.which === KeyCode.ctrl && _this.state.tooltipStatus === TooltipStatus.visible) {
                var container = _this.contentRef.current;
                var selectionNode = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.anchorNode;
                var hasSelectionInTooltip = container && selectionNode && container.contains(selectionNode);
                // Ctrl keystroke anywhere will dismiss the callout as per MAS 1.4.13,
                // except if user has selected something inside, in which case we allow Ctrl-C.
                if (!hasSelectionInTooltip) {
                    _this.closeTooltip();
                }
            }
        };
        _this.onAnimationEnd = function () {
            if (_this.state.tooltipStatus === TooltipStatus.fadingout) {
                _this.setState({
                    tooltipStatus: TooltipStatus.hidden
                });
            }
        };
        _this.getDismissStatus = function () {
            return _this.props.disabled ? TooltipStatus.hidden : TooltipStatus.fadingout;
        };
        _this.shouldShowTooltip = function (anchorElement) {
            if (_this.state.tooltipStatus !== TooltipStatus.hidden) {
                return false;
            }
            // If the tooltip only appears when the anchorElement overflows its parent then
            // we need to check on mouse enter.
            if (_this.props.overflowOnly && !_this.overflowDetected(anchorElement)) {
                return false;
            }
            // Dont show the tooltip if there is not content to show.
            if (!(_this.props.text || _this.props.renderContent || (anchorElement.innerText && _this.props.overflowOnly))) {
                return false;
            }
            return !_this.props.disabled;
        };
        _this.overflowDetected = props.overflowDetected || overflowDetected;
        _this.state = {
            tooltipStatus: TooltipStatus.hidden
        };
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _this = this;
        return (react.createElement(MouseWithin, { leaveDelay: 50, enterDelay: this.props.delayMs, onMouseLeave: this.closeTooltip, onMouseEnter: this.showTooltip }, function (mouseWithinEvents) {
            var child = react.Children.only(_this.props.children);
            var id = _this.props.id || _this.tooltipId;
            var showTooltip = _this.state.tooltipStatus !== TooltipStatus.hidden && !_this.props.disabled && _this.state.anchorElement;
            // Save the existing events we will potentially proxy.
            var existingMouseEnter = child.props.onMouseEnter;
            var existingMouseLeave = child.props.onMouseLeave;
            var existingKeyDown = child.props.onKeyDown;
            var existingBlur;
            var existingFocus;
            var onMouseEnter = function (event) {
                if (mouseWithinEvents.onMouseEnter) {
                    mouseWithinEvents.onMouseEnter(event);
                }
                if (existingMouseEnter) {
                    existingMouseEnter(event);
                }
            };
            var onMouseLeave = function (event) {
                if (mouseWithinEvents.onMouseLeave) {
                    mouseWithinEvents.onMouseLeave(event);
                }
                if (existingMouseLeave) {
                    existingMouseLeave(event);
                }
            };
            var onKeyDown = function (event) {
                if (event.which === KeyCode.escape && showTooltip) {
                    _this.setState({ tooltipStatus: TooltipStatus.hidden });
                    event.preventDefault();
                }
                if (existingKeyDown) {
                    existingKeyDown(event);
                }
            };
            // to not let consumers have to care about an implementation detail, wrap
            // the tooltip id in getSafeId and use that as the aria-describedBy property
            // on the child.
            var ariaDescribedById = _this.props.addAriaDescribedBy && _this.state.tooltipStatus !== TooltipStatus.hidden ? getSafeId(id) : undefined;
            var childProps = __assign(__assign({}, child.props), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onKeyDown: onKeyDown });
            if (childProps["aria-describedby"] === undefined) {
                childProps["aria-describedby"] = ariaDescribedById;
            }
            var clonedChild = react.cloneElement(child, childProps, child.props.children);
            // If this tooltip should become visible when focus is within the component add the focus tracking.
            if (_this.props.showOnFocus && (_this.props.text || _this.props.renderContent || _this.props.overflowOnly)) {
                existingBlur = child.props.onBlur;
                existingFocus = child.props.onFocus;
                var onBlur = function () {
                    _this.focus = false;
                    if (!_this.mouse) {
                        _this.closeTooltip();
                    }
                    if (existingBlur) {
                        existingBlur();
                    }
                };
                var onFocus = function (event) {
                    var anchorElement = event.currentTarget;
                    if (_this.shouldShowTooltip(anchorElement)) {
                        _this.focus = true;
                        getFocusVisible() &&
                            _this.setState({
                                anchorElement: event.target,
                                anchorOffset: { horizontal: 0, vertical: 8 },
                                anchorOrigin: { horizontal: Location.center, vertical: Location.end },
                                anchorPoint: undefined,
                                innerText: _this.props.overflowOnly && !_this.props.text ? anchorElement.innerText : undefined,
                                tooltipStatus: TooltipStatus.visible,
                                tooltipOrigin: { horizontal: Location.center, vertical: Location.start }
                            });
                    }
                    if (existingFocus) {
                        existingFocus(event);
                    }
                };
                clonedChild = (react.createElement(FocusWithin, { onBlur: onBlur, onFocus: onFocus, updateStateOnFocusChange: false }, clonedChild));
            }
            return (react.createElement(react.Fragment, null,
                clonedChild,
                showTooltip ? (react.createElement(Callout, { anchorElement: _this.state.anchorElement, anchorOffset: _this.props.anchorOffset || _this.state.anchorOffset, anchorOrigin: _this.props.anchorOrigin || _this.state.anchorOrigin, anchorPoint: _this.state.anchorPoint, calloutOrigin: _this.props.tooltipOrigin || _this.state.tooltipOrigin, className: css(_this.props.className, "bolt-tooltip", _this.state.tooltipStatus === TooltipStatus.fadingout && "bolt-tooltip-fade-out"), fixedLayout: _this.props.fixedLayout, id: id, key: id, onAnimationEnd: _this.onAnimationEnd, onMouseEnter: mouseWithinEvents.onMouseEnter, onMouseLeave: mouseWithinEvents.onMouseLeave, portalProps: { className: "bolt-tooltip-portal" }, contentRef: _this.contentRef, role: "tooltip" },
                    react.createElement("div", { className: "bolt-tooltip-content body-m" }, (_this.props.renderContent && _this.props.renderContent()) || _this.props.text || _this.state.innerText))) : null));
        }));
    };
    Tooltip.prototype.componentWillUnmount = function () {
        document.removeEventListener("keydown", this.onKeyDown);
    };
    Tooltip.defaultProps = {
        delayMs: 250,
        showOnFocus: true
    };
    return Tooltip;
}(react.Component));
function overflowDetected(anchorElement) {
    return anchorElement.scrollWidth > Math.ceil(anchorElement.offsetWidth);
}

function Icon(props) {
    if (props.render) {
        return props.render(props.className);
    }
    var iconWrapperProps = {
        id: getSafeId(props.id),
        key: props.key,
        onClick: props.onClick,
        onMouseDown: props.onMouseDown,
        onKeyDown: props.onKeyDown,
        role: props.role ? props.role : props.ariaLabel || props.ariaLabelledBy ? "img" : undefined,
        style: props.style,
        tabIndex: props.tabIndex,
        title: props.title
    };
    var iconClassName = css(props.className, "flex-noshrink", props.iconName && "fabric-icon", props.iconName && "ms-Icon--" + props.iconName, props.size);
    var ariaHidden = props.ariaHidden !== undefined ? props.ariaHidden : "true";
    var icon = props.ariaLabel || props.ariaLabelledBy || props.ariaExpanded !== undefined ? (react.createElement("span", __assign({ "aria-expanded": props.ariaExpanded, "aria-label": props.ariaLabel, "aria-labelledby": getSafeId(props.ariaLabelledBy), className: props.wrapperClass }, iconWrapperProps),
        react.createElement("span", { "aria-hidden": ariaHidden, className: iconClassName }))) : (react.createElement("span", __assign({ "aria-hidden": ariaHidden, className: iconClassName }, iconWrapperProps)));
    if (props.tooltipProps) {
        icon = react.createElement(Tooltip, __assign({}, props.tooltipProps), icon);
    }
    return icon;
}

/**
 * Note the default IconSize when a custom size is not specified matches
 * the standard body-m font or 0.875rem - 14px.
 */
var IconSize;
(function (IconSize) {
    /**
     * Inherit has the icon take on the current text size.
     */
    IconSize["inherit"] = "";
    /**
     * 1.5rem - 24px
     */
    IconSize["large"] = "large";
    /**
     * 1rem - 16px
     */
    IconSize["medium"] = "medium";
    /**
     * 0.75rem - 12px
     */
    IconSize["small"] = "small";
})(IconSize || (IconSize = {}));

/**
 * getTabIndex takes in a standard set of focus related properties to determine
 * the correct tabIndex for the element.
 */
function getTabIndex(props, focusGroupContext) {
    // Return an explicit tabIndex if one was requested.
    if (props.tabIndex !== undefined) {
        return props.tabIndex;
    }
    // Make element tabbable if:
    //  The element is not disabled,
    //  The element does not have the excludeTabStop property
    //  Optionally, the component is within a focusGroup and is the focused element
    if (!props.disabled &&
        !props.excludeTabStop &&
        (!focusGroupContext || focusGroupContext.onFocus === noop || focusGroupContext.focusedElementId === props.id)) {
        return 0;
    }
    // Allow the element to have focus as long as the excludeFocusZone was not supplied.
    if (!props.excludeFocusZone) {
        return -1;
    }
    // The element is not tabbable and wont have a tabIndex, therefore it can't get focus.
    return undefined;
}

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttonElement = react.createRef();
        _this.onClick = function (event) {
            if (!_this.props.disabled) {
                var onClick = _this.props.onClick;
                // @NOTE: Safari doesnt set focus to buttons when they are clicked, we need this
                //  to help manage the focus state for callouts.
                _this.focus();
                if (onClick) {
                    onClick(event);
                }
            }
            else {
                event.preventDefault();
            }
        };
        _this.onFocus = function (event) {
            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
            if (_this.props.id) {
                // @NOTE: Due to test issues using React.16.3.2 we MUST validate the onFocus method.
                _this.context.onFocus && _this.context.onFocus(_this.props.id);
            }
        };
        _this.onKeyDown = function (event) {
            if (!event.defaultPrevented && !_this.props.disabled) {
                if (event.which === KeyCode.enter || event.which === KeyCode.space) {
                    if (_this.props.onClick) {
                        _this.props.onClick(event);
                    }
                    if (!_this.props.href) {
                        event.preventDefault();
                    }
                }
                else if (_this.props.onKeyDown) {
                    _this.props.onKeyDown(event);
                }
            }
        };
        _this.onMouseDown = function (event) {
            if (!event.defaultPrevented) {
                if (_this.props.disabled) {
                    event.preventDefault();
                }
            }
            var onMouseDown = _this.props.onMouseDown;
            if (onMouseDown) {
                onMouseDown(event);
            }
        };
        _this.onMouseLeave = function (event) {
            if (!_this.props.disabled) {
                var onMouseLeave = _this.props.onMouseLeave;
                if (onMouseLeave) {
                    onMouseLeave(event);
                }
            }
        };
        _this.onMouseOver = function (event) {
            if (!_this.props.disabled) {
                var onMouseOver = _this.props.onMouseOver;
                if (onMouseOver) {
                    onMouseOver(event);
                }
            }
        };
        return _this;
    }
    Button.prototype.render = function () {
        var _this = this;
        // Determine if the button is an iconOnly button.
        var iconOnly = this.props.iconProps && !this.props.text && childCount(this.props.children) === 0;
        var tooltipProps = this.props.tooltipProps !== undefined
            ? this.props.tooltipProps
            : iconOnly && this.props.ariaLabel
                ? { text: this.props.ariaLabel }
                : undefined;
        return (react.createElement(FocusZoneContext.Consumer, null, function (zoneContext) {
            var ButtonType = _this.props.href ? "a" : "button";
            // @TODO (line-height): remove the body-m from the text once the line-height is applied globally.
            var role = _this.props.role || (_this.props.href ? "link" : "button");
            var button = (
            // @ts-ignore TypeScript no longer works with dynamic intrinsic component types.
            react.createElement(ButtonType, { autoFocus: !_this.props.href ? _this.props.autoFocus : undefined, "aria-controls": getSafeId(_this.props.ariaControls), "aria-describedby": getSafeId(_this.props.ariaDescribedBy), "aria-disabled": _this.props.disabled, "aria-expanded": _this.props.ariaExpanded, "aria-haspopup": _this.props.ariaHasPopup, "aria-label": _this.props.ariaLabel, "aria-setsize": _this.props.ariaSetSize, "aria-posinset": _this.props.ariaPosInSet, "aria-selected": _this.props.ariaSelected, "aria-checked": _this.props.ariaChecked, "aria-pressed": _this.props.ariaPressed, "aria-roledescription": _this.props.ariaRoleDescription, className: css(_this.props.className, "bolt-button", _this.props.href && "bolt-link-button", _this.props.iconProps && "bolt-icon-button", _this.props.danger && "danger", _this.props.disabled ? "disabled" : "enabled", _this.props.primary && "primary", _this.props.subtle && "subtle", iconOnly && "icon-only", "bolt-focus-treatment"), "data-focuszone": !_this.props.disabled && !_this.props.excludeFocusZone
                    ? css(_this.props.focusZoneId, zoneContext.focuszoneId)
                    : undefined, "data-index": _this.props.dataIndex, "data-is-focusable": !_this.props.excludeFocusZone, href: !_this.props.disabled ? _this.props.href : undefined, id: getSafeId(_this.props.id), onBlur: _this.props.onBlur, onClick: _this.onClick, onMouseLeave: _this.onMouseLeave, onMouseOver: _this.onMouseOver, onKeyDown: _this.onKeyDown, onMouseDown: _this.onMouseDown, onFocus: _this.onFocus, rel: _this.props.rel, role: role, style: _this.props.style, tabIndex: getTabIndex(_this.props, _this.context), target: _this.props.target, type: _this.props.type ? _this.props.type : !_this.props.href ? "button" : undefined, ref: _this.buttonElement },
                _this.props.iconProps &&
                    Icon(__assign(__assign({ size: IconSize.medium }, _this.props.iconProps), { className: css(_this.props.iconProps.className, "left-icon") })),
                _this.props.text && react.createElement("span", { className: "bolt-button-text body-m" }, _this.props.text),
                _this.props.children));
            if (tooltipProps) {
                button = (react.createElement(Tooltip, __assign({ addAriaDescribedBy: true }, tooltipProps), button));
            }
            return button;
        }));
    };
    Button.prototype.focus = function () {
        if (this.buttonElement.current) {
            this.buttonElement.current.focus();
        }
    };
    Button.contextType = FocusGroupContext;
    return Button;
}(react.Component));

var Collapsed = "Collapsed";
var Expanded = "Expanded";

var Expandable = /** @class */ (function (_super) {
    __extends(Expandable, _super);
    function Expandable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { expanded: false };
        _this.collapse = function () {
            if (_this.state.expanded) {
                _this.setState({ expanded: false });
                announce(Collapsed, true);
                if (_this.props.onCollapse) {
                    _this.props.onCollapse();
                }
            }
        };
        _this.expand = function () {
            if (!_this.state.expanded) {
                _this.setState({ expanded: !_this.state.expanded });
                announce(Expanded, true);
                if (_this.props.onExpand) {
                    _this.props.onExpand();
                }
            }
        };
        _this.onClick = function (event) {
            if (!_this.props.disabled) {
                if (!event.defaultPrevented) {
                    if (!_this.state.expanded && !_this.ignoreClick) {
                        _this.expand();
                        event.preventDefault();
                    }
                }
            }
            else {
                event.preventDefault();
            }
        };
        _this.onKeyDown = function (event) {
            if (!event.defaultPrevented) {
                // If the control key is pressed we want to navigate in a focus zone and not open the menu
                if (event.ctrlKey) {
                    return;
                }
                if (!_this.state.expanded && _this.isExpandKey(event)) {
                    _this.ignoreClick = false;
                    _this.expand();
                    event.preventDefault();
                }
            }
        };
        _this.onMouseDown = function () {
            // If the callout is expanded when we click on it, we want to ignore the click
            // and let the blur occur and close the callout.
            _this.ignoreClick = _this.state.expanded;
        };
        return _this;
    }
    Expandable.prototype.render = function () {
        var expanded = this.state.expanded;
        var child = this.props.children;
        return (react.createElement(react.Fragment, null,
            child({ expanded: expanded, onClick: this.onClick, onKeyDown: this.onKeyDown, onMouseDown: this.onMouseDown }),
            expanded && this.props.renderCallout && this.props.renderCallout()));
    };
    Expandable.prototype.isExpandKey = function (event) {
        return (Array.isArray(this.props.expandKey) && this.props.expandKey.indexOf(event.which) !== -1) || event.which === this.props.expandKey;
    };
    Expandable.defaultProps = {
        expandKey: KeyCode.downArrow
    };
    return Expandable;
}(react.Component));
var expandableContainerId = 1;
/**
 * ExpandableContainer is a specialized form of Expandable and generally shouldn't be used.
 * It's main goal is to provider mouse enter/leave behavior for collapsing.
 *
 * @NOTE: This component MAY be deprecated in the future, use <Expandable /> instead.
 */
var ExpandableContainer = /** @class */ (function (_super) {
    __extends(ExpandableContainer, _super);
    function ExpandableContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = react.createRef();
        _this.expandedOnHover = false;
        _this.expandable = react.createRef();
        _this.expandableId = "expandableContainer-" + expandableContainerId++;
        _this.collapse = function () {
            if (_this.expandable.current) {
                _this.expandable.current.collapse();
            }
        };
        _this.expand = function () {
            if (_this.expandable.current) {
                _this.expandable.current.expand();
            }
        };
        _this.onFocus = function (event) {
            // Only call onFocus for the FocusGroup is the expandable itself is getting focus.
            // Otherwise it is going to a child element and it should manage focus appropriately.
            if (_this.props.id && (!_this.element.current || _this.element.current === event.target)) {
                _this.context.onFocus(_this.props.id);
            }
        };
        _this.onMouseEnter = function () {
            if (_this.props.expandOnHover) {
                _this.expandedOnHover = true;
                setFocusVisible(false);
                _this.expand();
            }
        };
        _this.onMouseLeave = function () {
            if (_this.expandedOnHover) {
                _this.collapse();
            }
        };
        _this.renderCallout = function () {
            return _this.props.renderCallout(_this.expandable.current, _this.expandableId, _this.element.current);
        };
        return _this;
    }
    ExpandableContainer.prototype.render = function () {
        var _this = this;
        return (react.createElement(FocusZoneContext.Consumer, null, function (zoneContext) { return (react.createElement(MouseWithin, { enterDelay: _this.props.expandDelay, leaveDelay: _this.props.collapseDelay, onMouseEnter: _this.onMouseEnter, onMouseLeave: _this.onMouseLeave, updateStateOnMouseChange: false }, function (mouseContext) { return (react.createElement(Expandable, __assign({}, _this.props, { renderCallout: undefined, ref: _this.expandable }), function (expandableProps) { return (react.createElement("div", { "aria-controls": expandableProps.expanded ? getSafeId(_this.props.expandableId) : undefined, "aria-expanded": expandableProps.expanded, "aria-haspopup": true, "aria-label": _this.props.ariaLabel, className: css(_this.props.className, "bolt-expandable-container flex-row flex-center", expandableProps.expanded && "expanded"), "data-focuszone": !_this.props.disabled && !_this.props.excludeFocusZone ? zoneContext.focuszoneId : undefined, id: getSafeId(_this.props.id), onClick: expandableProps.onClick, onFocus: _this.onFocus, onKeyDown: expandableProps.onKeyDown, onMouseDown: expandableProps.onMouseDown, onMouseEnter: mouseContext.onMouseEnter, onMouseLeave: mouseContext.onMouseLeave, role: _this.props.role || "button", tabIndex: getTabIndex(_this.props, _this.context), ref: _this.element },
            _this.props.children,
            expandableProps.expanded && _this.renderCallout())); })); })); }));
    };
    ExpandableContainer.contextType = FocusGroupContext;
    ExpandableContainer.defaultProps = {
        collapseDelay: 250,
        expandDelay: 250,
        expandKey: [KeyCode.downArrow, KeyCode.enter]
    };
    return ExpandableContainer;
}(react.Component));

var buttonId = 1;
var ExpandableButton = /** @class */ (function (_super) {
    __extends(ExpandableButton, _super);
    function ExpandableButton(props) {
        var _this = _super.call(this, props) || this;
        _this.buttonElement = react.createRef();
        _this.expandable = react.createRef();
        _this.collapse = function () {
            if (_this.expandable.current) {
                _this.expandable.current.collapse();
            }
        };
        _this.expand = function () {
            if (_this.expandable.current) {
                _this.expandable.current.expand();
            }
        };
        _this.renderCallout = function () {
            return _this.props.renderCallout(_this, _this.dropdownId, _this.props.anchorElement
                ? _this.props.anchorElement
                : !_this.props.anchorPoint
                    ? _this.containerElement.current
                        ? _this.containerElement.current
                        : undefined
                    : undefined, _this.props.anchorOffset || { horizontal: 0, vertical: 0 }, _this.props.anchorOrigin || { horizontal: Location.end, vertical: Location.end }, _this.props.anchorPoint, _this.props.dropdownOrigin || { horizontal: Location.end, vertical: Location.start });
        };
        _this.dropdownId = props.dropdownId || "dropdown-" + buttonId++;
        _this.containerElement = props.containerRef || react.createRef();
        return _this;
    }
    ExpandableButton.prototype.render = function () {
        var _this = this;
        // We disable the tooltip when we are expanded. Make sure we dont remove it
        // from the component tree, this causes the button element to get regenerated
        // and focus wont return.
        return (react.createElement(Expandable, { disabled: this.props.disabled, expandKey: this.props.expandKey, onCollapse: this.props.onCollapse, onExpand: this.props.onExpand, renderCallout: this.renderCallout, ref: this.expandable }, function (expandableProps) {
            return (react.createElement("div", { className: css(_this.props.className, "bolt-expandable-button inline-flex-row"), onMouseDown: expandableProps.onMouseDown, onKeyDown: expandableProps.onKeyDown, ref: _this.containerElement },
                react.createElement(Button, __assign({}, _this.props, { ariaControls: expandableProps.expanded ? _this.dropdownId : undefined, ariaExpanded: expandableProps.expanded, ariaHasPopup: true, className: css(!_this.props.text && !_this.props.children && _this.props.iconProps && "icon-only", expandableProps.expanded && "active"), onClick: function (e) {
                        expandableProps.onClick(e);
                        if (_this.props.onClick) {
                            _this.props.onClick(e);
                        }
                        e.preventDefault();
                    }, ref: _this.buttonElement, tooltipProps: _this.props.tooltipProps ? __assign(__assign({}, _this.props.tooltipProps), { disabled: expandableProps.expanded }) : undefined }),
                    _this.props.children,
                    !_this.props.hideDropdownIcon
                        ? Icon({
                            key: "dropdown-icon",
                            className: "icon-right font-weight-normal",
                            iconName: "ChevronDownMed",
                            size: IconSize.small
                        })
                        : undefined)));
        }));
    };
    ExpandableButton.prototype.focus = function () {
        if (this.buttonElement.current) {
            this.buttonElement.current.focus();
        }
    };
    ExpandableButton.defaultProps = {
        expandKey: [KeyCode.downArrow, KeyCode.enter]
    };
    return ExpandableButton;
}(react.Component));

export { Button };
