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

    function getLanguage(id) {
        return languages.find(language => language.id == id)
    }

    return (

        <div>

            {languages.map(item => (
                <>
                    <button key={item.id} onClick={() => handleClick(item.id)} >{item.title}</button>
                </>
            ))}
            {active !== 0 && <Card title={getLanguage(active).title} description={getLanguage(active).description} />}
        </div>
    )
}

