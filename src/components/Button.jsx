import { useState } from "react";
import Card from "./Card";

export default function Button({ languages }) {

    const [active, setActive] = useState(0)

    function handleClick(id) {
        if (active === id) {
            setActive(0)
        } else {
            setActive(id)
        }
    }

    return (

        <div>

            {languages.map(item => (
                <>
                    <button key={item.id} onClick={() => handleClick(item.id)} >{item.title}</button>
                    {item.id === active && <Card title={item.title} description={item.description} />}
                </>
            ))}
        </div>
    )
}

