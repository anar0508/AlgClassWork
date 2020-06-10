import React from 'react';
function Description(props) {

    const { match, list } = props;
    const id = Number(match.params.id);
    const user = list.find(el=>{return el.idUser===id})
    return (
      <ul >
        <li> {user.fullName}</li>
        <li> {user.sex}</li>
        <li> {user.birthday}</li>
        <li> {user.occupation}</li>
      </ul>
    );
  }
  
  export default Description;
  