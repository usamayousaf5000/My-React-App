import React ,{useState}from 'react'
const TextForm = (props) => {
    console.log('ccsadas',props)
    const [text,setText]= useState('Enter Text Here')
    // const [count,setCount] = useState(0)
    const {count,increment,decrement,reset}=props
    const handleUppperCaseClick = ()=>{
        console.log("Upper case button click")
        setText(text.toUpperCase());
    }
    const handleOnChange = (event)=>{
        console.log("On change Handle")
        setText(event.target.value)
    }
    // const increment = ()=>{
    //     setCount(count + 1)
    // }
    // const decrement = ()=>{
    //     setCount(count - 1)
    // }
    // const reset = ()=>{
    //     setCount(count === 0)
    // }
    return (
        <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat quod vero blanditiis, harum omnis asperiores! Vel repudiandae animi, ratione error ea esse quasi, dicta, minima quae debitis veniam excepturi.</p>
        <div className="textarea">
        <textarea name="text area" value={text} onChange={handleOnChange}  id="myBox" rows="5"> </textarea>
        </div>
        <button onClick={handleUppperCaseClick}>To Upper Case</button>
        <h1>Count - {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        
        </>
    )
}
export default TextForm