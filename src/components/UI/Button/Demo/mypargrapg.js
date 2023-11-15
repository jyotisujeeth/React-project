import React from "react";

const MyParagraph = (props) =>{
    console.log('Myparagraph is running');
    return( <p>{props.children}</p>
    );
};

export default MyParagraph;