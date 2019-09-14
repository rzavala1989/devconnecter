import React from "react";
import { css } from "@emotion/core";
import { HashLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Spinner() {
  return (
    <div>
      <HashLoader css={override} sizeUnit={"px"} size={150} color={"#F7174C"} />
    </div>
  );
}

//  <img
//         src={spinner}
//         alt="loading..."
//         style={{ width: "200px", margin: "auto", display: "block" }}
//       />
