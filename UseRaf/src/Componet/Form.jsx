import React,{useId} from 'react'

const Form = () => {
const usernameid =useId();
const passwordId = useId();


  return (
    <div>
        <form action="">
            <label htmlFor={usernameid}>name:-</label>
            <input type="text" id={usernameid} />
            <label htmlFor={passwordId}>password:-</label>
            <input type="password" id={passwordId} />
            <button>submit</button>
        </form>
    </div>
  )
}

export default Form