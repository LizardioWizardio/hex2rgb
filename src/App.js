import './App.css';
import { useState } from "react";

function App() {
    const [inputText, setInputText] = useState("")
    const [color, setColor] = useState("")
    const [infoMessage, setInfoMessage] = useState("")
    const [validated, setValidated] = useState("")

    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
    }

    const getCurrentInputClass = () => {
        if (validated === 'valid')
        {
            return "bg-green-50 border border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500"
        }
        else if (validated === 'invalid')
        {
            return "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
        }
        else return null;
    }

    const handleInput = (event) => {
        const value = event.target.value
        setInputText(value)

        if (value.length === 7)
        {
            const rgbArray = hexToRgb(value)
            if (rgbArray !== null) {
                setColor(value)
                setInfoMessage(String(rgbArray))
                setValidated('valid')
            }
            else {
                setColor("#ff0000")
                setInfoMessage('Incorrect HEX format!')
                setValidated('invalid')
            }
        }
        /*else {
            setColor("#ff0000")
            setInfoMessage('6 digits are required!')
            setValidated(false)
        }*/
    }
  return (
      <div className="flex flex-col justify-center items-center h-screen" style={{backgroundColor: color}}>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4 flex flex-col justify-center items-center ">
              <div className="flex">
                  <span
                      className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md my-2 mr-1">
                    HEX
                  </span>
                  <input type="text" id="hex-input"
                     className={getCurrentInputClass() + " text-sm rounded-lg block w-full p-2.5 my-2"}
                     name="hexInput"
                     value={inputText}
                     onInput={handleInput}
                     placeholder="#FFFFFF"
                  />
              </div>
              <div className="flex">
                  <span
                      className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md my-2 mr-1">
                    RGB
                  </span>
                  <input type="text" id="rgb input"
                     className={getCurrentInputClass() + " text-sm rounded-lg block w-full p-2.5 my-2"}
                     name="infoInput"
                     value={infoMessage}
                     placeholder="255,255,255"
                     disabled
                  />
              </div>
          </div>
      </div>
  );
}

export default App;