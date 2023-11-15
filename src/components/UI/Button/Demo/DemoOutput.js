import React from "react";
import MyParagraph from "./MyParagraph";
const DemoOutput = (prpos) => {
    console.log("DemoOutput");
    return(<MyParagraph>{prpos.show ? "this is new!" : "  "}</MyParagraph>

);
};

export default React.memo(DemoOutput);





















