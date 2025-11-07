export default function Button({ language }) {

    return (

        <div>
            {language.map(item => (
                <button key={item.id}>{item.title}</button>
            ))}
        </div>
    )
}