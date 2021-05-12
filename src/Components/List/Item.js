import React, { useState } from "react";

export default function Item(props) {
  const Style = {
    name: {
      color: "black",
    },
  };
  return (
    <div>
      <div class="row">
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <a
            className="my-1 mr-2"
            style={{ color: "black" }}
            htmlFor="linkname"
          >
            {props.name}
          </a>
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <button className="my-2 mx-2 btn btn-primary" htmlFor="buttonname">
            Bắt đầu thi
          </button>
        </div>
      </div>
    </div>
  );
}
