export default function Card({ language }) {

    return (
        <>
            {language.map(item => (
                <div className="card" key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </>
    )
}