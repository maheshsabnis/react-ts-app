import React, { ChangeEventHandler, HtmlHTMLAttributes, useEffect } from 'react'
type SourceProps = {
    dataSource:string[],
    selectedData:Function,
    propertyName:any
};
export default function SelectComponent(props:SourceProps) {
   
   useEffect(()=>{
    console.log(`Select Component is rendered `);
   }); 
    
   const onOptionChange=(evt:any)=>{
     props.selectedData(evt.target.value);
   }
   return (
    <div className='container'>
        <select className='form-control' 
        title='Select Value' value={props.propertyName}
         onChange={onOptionChange}>
            {
                props.dataSource.map((v,i)=>(
                    <option key={i} value={v}>{v}</option>
                ))    
            }
        </select>
    </div>
  )
}
