 
import React, { useCallback, useState } from 'react'
import SelectComponentMemo from '../reusablecomponents/selectcomponentmemo';


export default function UseCallbackComponent() {
  const [name,setName]=useState('');  
  const [names, setNames] = useState<Array<string>>([]);

  const addName=useCallback(()=>{
    setNames((n)=>[...n,name]);
  },[names]);

//   const getSelecetdData=useCallback((v:string)=>{
//      console.log(`Receibed Values ${v}`);
//   },[name]);
   
  return (
    <div className='container'>
       <input type="text"  
        placeholder='Enter name'
       className='form-control' value={name} onChange={(evt)=>setName(evt.target.value)}/>

        <button className='btn btn-danger'
         onClick={()=>{setName('')}}
       >Clear</button>  
       <hr/>
       <div className='container'>
        <strong>
            Entered/Selected Name : {name}
        </strong>
       </div>
       <hr/>
        <SelectComponentMemo dataSource={names} addName={addName}
        // selectedData={getSelecetdData}
        ></SelectComponentMemo>
    </div>
  )
}
