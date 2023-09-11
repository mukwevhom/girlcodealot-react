import logo from "../assets/logo-black.png"
import { Link } from "react-router-dom"
import SearchForm from "./SearchForm"

const NavBar = () => {
    return (
        <div className="nav-bar py-3">
            <div className="container mx-auto flex items-center justify-between">
                <Link className="nav-logo w-44 block" to="/">
                    <img src={logo} alt="GirlcodeALot Logo" />
                </Link>
                <ul className="nav-menu flex gap-6">
                    <li className="nav-menu-item">
                        <a className="font-bold" href="#">Categories</a>
                    </li>
                    <li className="nav-menu-item">
                        <a className="font-bold" href="#">Deals</a>
                    </li>
                    <li className="nav-menu-item">
                        <a className="font-bold" href="#">What&apos;s New</a>
                    </li>
                    <li className="nav-menu-item">
                        <a className="font-bold" href="#">Delivery</a>
                    </li>
                </ul>
                <ul className="nav-actions flex gap-6 items-center">
                    <li className="action-item">
                        <SearchForm />
                    </li>
                    <li className="action-item">
                        <a href="#" className="font-bold"><span className="material-symbols-outlined align-middle mr-2.5">person</span> Account</a>
                    </li>
                    <li className="action-item">
                        <a href="#" className="font-bold"><span className="material-symbols-outlined align-middle mr-2.5">shopping_cart</span>Cart</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
