import "./button.css"

const Button = ({title, on_click}) => {
    return <button className="sideBarButton" onClick={on_click}>
        {title}
    </button>
}

export default Button;