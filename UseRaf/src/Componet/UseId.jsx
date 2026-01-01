import React from 'react'
import { useId } from 'react';

const UseId = () => {
    const id =useId();

  return (
    <form>
        <label htmlFor={`${id}-username`}>username</label>
        <input id={`${id}-username`} type="text" />

       <label htmlFor={`${id}-password`}>password</label> 
       <input id={`${id}-password`} type="password" />

       <button>submit</button>

    </form>
  )
}

export default UseId