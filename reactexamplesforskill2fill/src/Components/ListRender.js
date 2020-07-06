import React, { Component } from 'react';
import DisplaySubject from './DisplaySubject';

class ListRender extends Component {

    render() {
        //Using Map with single array

        // const subjects = ['Maths', 'Physics', 'Chemistry']
        // const subjectList = subjects.map(subject => <h1>{subject}</h1>)
        // return (<div>{subjectList}</div>)

        //Multiple objects as a array

        const subjects = [
            {
                'id': 1,
                'subjectName': 'Maths'
            },
            {
                'id': 2,
                'subjectName': 'Physics'
            },
            {
                'id': 3,
                'subjectName': 'Chemistry'
            }
        ]

        // const subjectList = subjects.map(subject => <h1>Subject Id : {subject.id} and Subject Name is : {subject.subjectName}</h1>)
        const subjectList = subjects.map(subject => <DisplaySubject key={subject.id} subject={subject} />)

        return (<div>{subjectList}</div>)

        

    }
}

export default ListRender;