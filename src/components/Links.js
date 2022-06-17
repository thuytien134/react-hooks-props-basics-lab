import React from "react";


function Links({github,linkedin}) {
  debugger
    return (
    <>
       <h3>Links</h3>
       <a href={github}>{github}</a>
       <a href={linkedin}>{linkedin}</a>
    </>
    );
}

// optional chaining: ?. 
// person.name
// jhgjh
// person?.name
export default Links