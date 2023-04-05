import React from 'react';
import './App.css';
import { DataProps } from './props';

function App(props: DataProps) {
  return (
    <div className="App">
      {props.name}
      <br/>
      <strong>
        Full Name: {props.profile.firstName} {props.profile.middleName} {props.profile.lastName}
      </strong>
      <br/>
      <strong>
        Technologies: <br/>
        {
          props.skills.map((s,i)=>{
            return <p key={i}>{s}</p>
          })
        }
      </strong>
    </div>
  );
}

export default App;
