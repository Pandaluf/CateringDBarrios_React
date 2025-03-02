//import { Link } from "react-router-dom";
import whatsapp from "/src/assets/img/whatsapp_icon.png";
//import complaintBook from "/src/assets/img/complaint_book.jpg";
import "./footer.css";
import logo from '/src/assets/img/Logo.png'

function Footer() {
    return (
        <div className="footerCustom">
            <img src={logo} alt="logo" className="footerCustom__logo" />
            <div className="footerCustom__contact">
                <h2>Contacto</h2>
                <p>Whatsapp: <a>982521903</a></p>
                <a href="http://wa.me/+51982521903" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="whatsapp" className="footerCustom__contact__whatsapp" />
                </a>
            </div>
            {/*
            <Link to="/complaint">
                <img src={complaintBook} alt="Comaaplaint Book" className="footerCustom__complaintBook" />
            </Link>
            */}
        </div>
    );
}

export default Footer;
