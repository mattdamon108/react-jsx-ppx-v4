// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";

function SpreadProps$A(props) {
  return props.x + props.y;
}

var A = {
  make: SpreadProps$A
};

var _c2 = React.createElement(SpreadProps$A, {
      x: "x",
      y: "y+"
    });

var dp = {
  id: "id",
  name: "ReScript"
};

var _c3 = React.createElement("div", dp);

var newrecord = Caml_obj.obj_dup(dp);

var _c4 = React.createElement("div", (newrecord.x = "x", newrecord.method = "", newrecord));

var p = {
  x: "x+",
  y: "y+"
};

var p0 = {
  x: "x0",
  y: "y0"
};

var p1 = {
  x: "x1",
  y: "y1"
};

export {
  A ,
  p ,
  p0 ,
  p1 ,
  _c2 ,
  dp ,
  _c3 ,
  _c4 ,
}
/* _c2 Not a pure module */
