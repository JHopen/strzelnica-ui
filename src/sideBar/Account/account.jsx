import Button from "../Button/button";

const Account = () => {
    const clicked = () => {
        console.log("Kliknięto przycisk konta")
    }

    return <div> <Button title="Account" on_click={clicked}/></div>
}

export default Account;