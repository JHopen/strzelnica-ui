import Button from "../Button/button";

const Logging = () => {
    const clicked = () => {
        console.log("Kliknięto przycisk Logowania i Rejestracji");
    }

    return <Button title="Logowanie/Rejestracja" on_click={clicked}/>
};

export default Logging;