// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function DomRef$V4C(props) {
  var input = React.useRef(null);
  var onClick = function (param) {
    Belt_Option.forEach(Caml_option.nullable_to_opt(input.current), (function (input) {
            input.focus();
          }));
  };
  return React.createElement("div", undefined, React.createElement("input", {
                  ref: Caml_option.some(input)
                }), React.createElement("button", {
                  onClick: onClick
                }, "Click to focus"));
}

var V4C = {
  make: DomRef$V4C
};

function DomRef(props) {
  return React.createElement(DomRef$V4C, {});
}

var make = DomRef;

export {
  V4C ,
  make ,
}
/* react Not a pure module */
