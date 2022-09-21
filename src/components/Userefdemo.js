import { forwardRef, useRef } from "react"

const Input = forwardRef((props, ref) => {
    return <input ref={ref} type="text" {... props} />
})

function Userefdemo(){

    const inputRef = useRef()
    const focusInput = () => {
        inputRef.current.focus()
    }

    return(
        <>
            <div>
            <h1>useRef() - forwardRef()</h1>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>Focusla</button>
            </div>

            <div>
              <h1>useRef() - useForward()</h1>
              <Input ref={inputRef} />
              <button onClick={focusInput}>Focusla</button>
            </div>
        </>
    )
}

export default Userefdemo
