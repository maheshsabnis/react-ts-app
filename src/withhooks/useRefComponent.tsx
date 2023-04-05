import React, { useEffect, useRef, useState } from 'react'

export default function UseRefComponent() {
  const [name, setName] = useState('');
  const counter = useRef(0);
  const nameFocus = useRef<HTMLInputElement>(null!);
  useEffect(()=>{
      counter.current = counter.current + 1;
      if(nameFocus.current)
         nameFocus.current?.focus();
  });
  console.log(`ENter Name using the Ref : ${nameFocus.current?.value}`);
  
  return (
    <div className='container'>
        <strong>
            The First TextBox will render the Component
        </strong>

        <input type="text"  value={name}
          placeholder="Enter your name "
          onChange={(evt)=>setName(evt.target.value)}/>
          <hr/>
          <strong>
            The Second TextBox will not render the Component
        </strong>
          <input type="text" 
          placeholder="Enter your name "
          ref={nameFocus} />
          <br/>
          <button onClick={()=>alert(nameFocus.current?.value)}>Get Data</button>
          <hr/>
          <div className='container'>
            <strong>
               Component Rendering Count: {counter.current}
            </strong>  
          </div> 
    </div>
  )
}
