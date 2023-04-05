 
import React, {  ChangeEventHandler, memo, MouseEventHandler, useEffect } from 'react'
type SourceProps = {
    dataSource:string[],
    addName:MouseEventHandler<HTMLButtonElement>
  //  propertyName:any
 //  selectedData: Function
};
function SelectComponentMemo(props:SourceProps) {
   
    
    console.log(`Select Component is rendered `);
   
    console.log('====================================');
    console.log(`The Data ${JSON.stringify(props.dataSource)}`);
    console.log('====================================');
   
   return (
    <div className='container'>
        <select className='form-control' 
        title='Select Value'  
        // onChange={(evt)=>props.selectedData(evt.target.value)}
         >
            {
                props.dataSource.map((v,i)=>(
                    <option key={i} value={v}>{v}</option>
                ))    
            }
        </select>
        <button className='btn btn-warning'
         onClick={props.addName}
        >Add Name</button>
    </div>
  )
}
export default memo(SelectComponentMemo);