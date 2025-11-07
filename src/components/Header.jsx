import Button from "./Button";

export default function Header({ languages }) {

    return (
        <>
            <h1>Learn Web development</h1>
            <Button languages={languages} />
        </>
    )
}