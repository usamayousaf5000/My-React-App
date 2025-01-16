import React ,{useState}from 'react'
const TextForm = () => {
    const handleUpClick = ()=>{
        console.log("Upper case button click")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On change Handle")
        setText(event.target.value)
    }
    const increment = ()=>{
        let newCount = count + 1
        setCount(newCount)
    }
    const decrement = ()=>{
        let newCount = count -1
        setCount(newCount)
    }
    const [text,setText]= useState('Enter Text Here')
    const [count,setCount] = useState(0)
    return (
        <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat quod vero blanditiis, harum omnis asperiores! Vel repudiandae animi, ratione error ea esse quasi, dicta, minima quae debitis veniam excepturi.</p>
        <div className="textarea">
        <textarea name="text area" value={text} onChange={handleOnChange}  id="myBox" rows="5"> </textarea>
        </div>
        <button onClick={handleUpClick}>To Upper Case</button>
        <h1>Count - {count}</h1>
        <button onClick={()=>{increment()}}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default TextForm