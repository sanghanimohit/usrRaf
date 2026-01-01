import React,{useState,useRef,useEffect} from 'react'

const Raf_2 = () => {
  const [count , setCount] = useState(0);
  const prevCont = useRef();

  useEffect(()=>{
    prevCont.current = count;
  } , [count]);
  return (
    <>
    <h1>current{count}</h1>
    <h2>previous{prevCont.current}</h2>
    <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}

export default Raf_2