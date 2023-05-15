import React from 'react';

function Exam(props) {

    const odd = [1,3,5];
    const questcequecafait = [2,4,6, ...odd];
    console.log(questcequecafait);

    return (
        <div>{props.id}</div>
    );
}

export default Exam;