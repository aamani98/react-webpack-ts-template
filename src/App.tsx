import React, { useState } from 'react';
import Header from './components/Header';

function App() {
    const [text, setText] = useState("")

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }
    return <div>
        <Header />
        <input value={text} onChange={handleOnChange} />
        {text}
    </div>
}

export default App;