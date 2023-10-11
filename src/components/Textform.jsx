import React, { useState } from 'react'




const Textform = () => {
    const [text, setText] = useState("")

    const handlechange = (e) => {
        setText(e.target.value)
    }

    const handleclick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handlelowercase = () => {
        let newtext = text.toLocaleLowerCase()
        setText(newtext)
    }
    const handlefletter = () => {
        
        let newtext = text.charAt(0).toUpperCase(1) + text.slice(1);
    
        setText(newtext)
   
    }
//     function capitalizeString(str) {
//   let capitalizedStr = "";
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i].toLowerCase();
//     capitalizedStr += word.charAt(0).toUpperCase() + word.slice(1) + " ";
//   }
//   return capitalizedStr.trim();
// }

// // Example usage:
// let sentence = "hello world";
// let capitalizedSentence = capitalizeString(sentence);
// console.log(capitalizedSentence); // Output: Hello World

    const handleclear = () => {
        let newtext = "";
        setText(newtext)
    }
    const handlecopy = () => {
        let text = document.getElementById("mybox")
        text.select();
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
    }
    const handlespaces = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
    }
    return (
        <>
            <div className='container'>
                <div class="col-11 mb-3 ">
                    <h1 className='mt-2'>Text Converter </h1> <hr />
                    <label for="text" class="form-label"></label>
                    <textarea class="form-control  bg-light" name="" id="mybox" value={text} rows="8" onChange={handlechange} placeholder='Enter text here'></textarea>
                </div>
                <button type="button" class="btn btn-primary m-2" onClick={handleclick}>Convert To Uppercase</button>
                <button type="button" class="btn btn-primary m-2" onClick={handlecopy}>Copy Text </button>
                <button type="button" class="btn btn-primary m-2" onClick={handlelowercase}>Convert To Lowercase</button>
                <button type="button" class="btn btn-primary m-2" onClick={handleclear}>Clear Text </button>
                <button type="button" class="btn btn-primary m-2" onClick={handlefletter}>First letter Uppercase </button>
                <button type="button" class="btn btn-primary m-2" onClick={handlespaces}>Remove Extra Spaces</button>

                <div className="container my-3">
                    <h1>Your Text Summary</h1>
                    <p> {text.split(" ").length} words, and  {text.length} characters</p>

                    <h2>Preview Text</h2>
                    <h1 style={{ color: "red" }}>{text}</h1>

                </div>
            </div>
        </>
    )
}









export default Textform
