import React from 'react';

function DisplaySubject(props) {
    const {subject} = props;
    return (
        <div> <h1>Subject Id : {subject.id} and Subject Name is : {subject.subjectName}</h1></div>
    )
}

export default DisplaySubject;