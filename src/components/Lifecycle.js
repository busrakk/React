import {useEffect, useState} from "react";
// ilk parametre callback fonk alır.
//2. parametre boş array olarak 

function Lifecycle(){

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('component render oldu.')
        return () => {
            console.log('component destroyed')
        }
    })

    useEffect(() => {
        console.log('component ilk yüklendiğinde çalışır.')
    }, [])

    useEffect(() => {
        console.log('count değeri değişti = ', count)
    }, [count])

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount( count => count + 1)}>Arttır</button>
            <hr/>
        </div>
    )
}

export default Lifecycle