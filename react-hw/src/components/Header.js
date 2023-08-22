import '../styles/NavBar.css';
import {useState} from "react"
const Header = () => {
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    
    return (
        <header>
            <div className="burger-and-logo">
                <div className="burger" onClick={()=> setIsBurgerActive(!isBurgerActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                <img alt="seracell-logo" src={require("../images/Seracell-Logo.png")}></img>
                </div>
            </div>

            <nav className="side-menu">
                <div className="menu-items">
                    <a href="/" className="active">
                        <img alt="sectors" src={require("../images/sectors.png")}></img>
                        <span className={isBurgerActive ? "nav-text-shown": "nav-text-hidden"}>Sektörler</span>
                    </a>
                    <a href="/">
                        <img alt="controllers" src={require("../images/controllers.png")}></img>
                        <span className={isBurgerActive ?  "": "nav-text-hidden"}>Kontrolcüler</span>
                    </a>
                    <a href="/">
                        <img alt="controller-limit" src={require("../images/controller-limit.png")}></img>
                        <span className={isBurgerActive ?  "": "nav-text-hidden"}>Kontrolcü Limit</span>
                    </a>
                    <a href="/">
                        <img alt="limit" src={require("../images/limit.png")}></img>
                        <span className={isBurgerActive ?  "": "nav-text-hidden"}>Bildirim Limit</span>
                    </a>
                    <a href="/">
                        <img alt="charts" src={require("../images/charts.png")}></img>
                        <span className={isBurgerActive ?  "": "nav-text-hidden"}>Grafikler</span>
                    </a>
                    <a href="/">
                        <img alt="hydro-sense" src={require("../images/hydro-sense.png")}></img>
                        <span className={isBurgerActive ?  "": "nav-text-hidden"}>HydroSense</span>
                    </a>
                    <a href="/">
                        <img alt="crop-sense" src={require("../images/crop-sense.png")}></img>
                        <span className={isBurgerActive ?  "": "nav-text-hidden"}>CropSense</span>
                    </a>
                    <a href="/">
                        <img alt="nutri-sense" src={require("../images/nutri-sense.png")}></img>
                        <span className={isBurgerActive ?  "": "nav-text-hidden"}>NutriSense</span>
                    </a>
                    <a href="/">
                        <img alt="notifications" src={require("../images/notifications.png")}></img>
                        <span className={isBurgerActive ?  "": "nav-text-hidden"}>Bildirimler</span>
                    </a>
                    <a href="/">
                        <img alt="sensor-settings" src={require("../images/sensor-settings.png")}></img>
                        <span className={isBurgerActive ?  "": "nav-text-hidden"}>Sensör/Sera Ayarları</span>
                    </a>
                </div>
                <hr />
                <a href="/">
                    <img alt="profile-settings" src={require("../images/profile.png")}></img>
                    <span className={isBurgerActive ?  "": "nav-text-hidden"}>Hesabım</span>
                </a>
                <a href="/">
                    <img alt="logout" src={require("../images/logout.png")}></img>
                    <span className={isBurgerActive ?  "": "nav-text-hidden"}>Çıkış Yap</span>
                </a>
            </nav>

        </header>
    )
}

export default Header