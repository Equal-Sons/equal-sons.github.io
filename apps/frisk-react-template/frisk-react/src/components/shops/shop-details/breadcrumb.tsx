import { NavLink } from "react-router-dom"

const Breadcrumb = () => {
    return (
        <div className="breadcumb-wrapper style2 bg-smoke">
            <div className="container-fluid">
                <div className="breadcumb-content">
                    <ul className="breadcumb-menu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li>Printed T-Shirt</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
