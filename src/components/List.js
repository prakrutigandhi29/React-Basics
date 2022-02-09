import React from 'react';
import Person from './Person';
function List() {
    const list=[
        {id:1,
        name:'prakruti',
        age:22},
        
        {id:2,
        name:'jainy',
        age:17
        }
    ];
    const List=list.map(person=><Person key={person.id} person={person}></Person>)
  return <div> {List} </div>;
}

export default List;
