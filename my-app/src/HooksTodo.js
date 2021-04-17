import React, { useState } from "react";

function HooksApp() {
    const [count, setCount] = useState(null);

    return (
        <div>
            <header>Todo list</header>
            <br></br>
            <li className='item'>{count}</li>
            <input type='checkbox' />
            <form>
                <input type='text' value={count} />
                <input type='submit' value='Отправить' onClick={() =>
                    setCount(count)}></input>
            </form>
        </div>

    )
}


export default HooksApp;