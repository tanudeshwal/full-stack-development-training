import { useState, usestate } from 'react'

function Counter() {
    //here count is a simple variable which does not provide memory
    //let count(0);

    // count is a state which provide memory and function set count to update count state
    // let [mystate,setmystate]=usestate(default value)


    let [count, setCount] = useState(0);


    return (
        <div>
            <h1>{count}</h1>
            < button onClick={() => setCount(count + 1)}>click me</button>
            < button onClick={() => setCount(count - 1)}>click me</button>

        </div>
    )
}

export { Counter }