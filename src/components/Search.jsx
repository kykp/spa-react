import { useState } from "react";

function Search ({cb = Function.prototype}) {
    const [value, setValue] = useState("");

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);
    }

    return <div>
            <input  className="search-input" type="search" id="search-field" placeholder="Search" onKeyDown={handleKey} onChange={(e) => setValue(e.target.value)} value={value}/>
            <button className="btn"  onClick={handleSubmit}> Search </button>
        </div>
}

export {Search}