import React, { useState } from 'react'
import { ProductInfo } from '../props'
import { ProductHttpService } from '../service/producthttpservice'
import { useMutation } from 'react-query';

const UseMutationComponent = () => {
  const serv = new ProductHttpService();
  const [message, setMessage] = useState('');

  // use the useMutation()
  const {isLoading, isError,error,mutate} = useMutation(saveProduct, {
    retry:3
  });
  let product = new ProductInfo(0, 'Prod-1111', 'Adapter', 'Electrical', 'Bajaj', '200KVA', 23000);
  async function  saveProduct(){
    console.log('Post caLL');
    

    const response = await serv.postProduct(product);

    setMessage(JSON.stringify(response));
  } 



  if(isLoading)
    return <>Saving Data</>
  if(isError)
    return <>Error Occurred {error}</> 
    
  return (
    <div className='container'>
        <h2>Use Mutation</h2>
        <button onClick={()=>{mutate()}}> Save</button>
        <hr/>
        {JSON.stringify(message)}
    </div>
  )
}

export default UseMutationComponent
