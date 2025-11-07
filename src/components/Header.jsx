import Card from "./Card";
import Button from "./Button";

export default function Header({ language }) {

    return (
        <>
            <h1>Learn Web development</h1>
            <Button language={language} />
            <Card language={language} />
        </>
    )
}