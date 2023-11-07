import React from "react";

const Myparagraph = (props) =>{
    console.log('Myparagraph is running');
    return( <p>{props.children}</p>
    );
};

export default Myparagraph;