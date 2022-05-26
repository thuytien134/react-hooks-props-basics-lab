import React from "react";


function Links(props) {
  debugger
    return (
    <>
       <h3>Links</h3>
       <a href={props.links.github}>{props.links.github}</a>
       <a href={props.links.linkedin}>{props.links.linkedin}</a>
    </>
    );
}

// optional chaining: ?. 
// person.name
// jhgjh
// person?.name
export default Links