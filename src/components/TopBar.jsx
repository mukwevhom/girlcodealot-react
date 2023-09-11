const TopBar = () => {
    return (
        <div className="top-bar py-2">
            <div className="container flex justify-between mx-auto">
                <div className="bar-contact">
                    <a href="tel:+27123456790"><span className="material-symbols-outlined">call</span>+27123456790</a>
                </div>
                <div className="bar-message">
                    <p>Get 50% off on select items | <a href="#">Shop Now</a></p>
                </div>
                <div className="bar-localisation">
                    <ul>
                        <li>Eng<span className="material-symbols-outlined">expand_more</span></li>
                        <li>Location<span className="material-symbols-outlined">expand_more</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopBar
