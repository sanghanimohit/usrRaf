import React,{useRef} from 'react'

const Raf = () => {
const emailRaf =useRef(null);
const passwordRaf = useRef(null);

const submit =()=>{
    console.log(emailRaf.current.value);
    console.log(passwordRaf.current.value);
};

  return (
   <>
   <form action="">
    
    <label htmlFor="email">Email:-</label>
    <input ref={emailRaf} type="email" placeholder='Email' />
    <br />

    <label htmlFor="password">password:-</label>
    <input  ref={passwordRaf} type="password" placeholder='Passeord' />
    <br />

    <button onClick={submit}>submit</button>
   </form>
    </>
  )
}

export default Raf