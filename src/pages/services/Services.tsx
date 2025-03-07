import './Services.css';
import imagesCard from './imagesCard.ts';
import CustomCard from "../../components/card/card.tsx";
import Player1 from "../../components/Player/Player1.tsx";
import Video from "../../components/video/Video.tsx";

function Services() {
    return (
        <div className="services">
            <div className="services__header">
                <h1 className="services__title">Nuestros Productos</h1>
                <div className="audio-container">
                    <Player1 />
                </div>
            </div>
            <div className="services__grid">
                <CustomCard  img={imagesCard.caramelCookie1}
                             title="Mini Alfajores"
                             description="Dulzura en cada bocado. Nuestros minialfajores
                             son perfectos para disfrutar y compartir en cualquier momento.
                             ¡Pruébalos! ✨"
                             price1="S/.50.00"
                             price2="S/.30.00"
                             price3="S/.15.00"
                />
                <CustomCard  img={imagesCard.littleEars1}
                             title="Mini Orejitas Dulces"
                             description="¡Crujientes, dulces y deliciosas! Nuestras Mini
                             Orejitas Dulces son el snack perfecto para cualquier momento. 🍪"
                             price1="S/.60.00"
                             price2="S/.35.00"
                             price3="S/.20.00"
                />
                <CustomCard  img={imagesCard.cheesePitipan1}
                             title="Petipan de Jamon y Queso"
                             description="¡Suave, dorado y relleno de sabor! Disfruta nuestro
                             Petipan de Jamón y Queso, perfecto para cualquier antojo. 🥪🧀✨"
                             price1="S/.130.00"
                             price2="S/.70.00"
                             price3="S/.40.00"
                />
                <CustomCard  img={imagesCard.cheeseEmpanada1}
                             title="Empanaditas de Queso"
                             description="¡Crujientes por fuera y queso derretido por dentro!
                             Nuestras Empanaditas de Queso son el bocado ideal para compartir y disfrutar. 🧀✨"
                             price1="S/.100.00"
                             price2="S/.60.00"
                             price3="S/.35.00"
                />
                <CustomCard  img={imagesCard.chickenEmpanada1}
                             title="Empanaditas de Pollo"
                             description="¡Crujientes y llenas de sabor casero! Nuestras Empanaditas de Pollo son
                             el bocado perfecto para cualquier ocasión. 🍗✨"
                             price1="S/.100.00"
                             price2="S/.60.00"
                             price3="S/.35.00"
                />
                <CustomCard  img={imagesCard.meatEmpanada1}
                             title="Empanaditas de Carne"
                             description="¡Crujientes y jugosas! Nuestras Empanaditas de Carne están llenas de sabor
                              y perfectas para cualquier momento. 🥩✨"
                             price1="S/.100.00"
                             price2="S/.60.00"
                             price3="S/.35.00"
                />
                <CustomCard  img={imagesCard.chickenPitipan1}
                             title="Pitipan de Pollo"
                             description="¡Suave, sabroso y delicioso! Nuestro Pitipán de Pollo es el bocado ideal para
                             compartir y disfrutar en cualquier momento. 🥪✨"
                             price1="S/.100.00"
                             price2="S/.60.00"
                             price3="S/.35.00"
                />
                <CustomCard  img={imagesCard.hamSausageWithCreoleSauce1}
                             title="Butifarra de Jamon con Salsa Criolla"
                             description="¡Sabor tradicional en cada bocado! Nuestra Butifarra de Jamón con Salsa Criolla
                             combina jamón y el toque irresistible de la salsa criolla. 🥪✨"
                             price1="S/.110.00"
                             price2="S/.60.00"
                             price3="S/.35.00"
                />
                <CustomCard  img={imagesCard.miniHamCheeseCorsillat1}
                             title="Mini Corsilltat  de Jamon y Queso"
                             description="¡Pequeñas, crujientes y deliciosas! Nuestras Mini Corsilltas de Jamón y Queso
                             son el bocado perfecto para cualquier momento. 🧀🥪✨"
                             price1="S/.160.00"
                             price2="S/.70.00"
                             price3="S/.5000"
                />
                <CustomCard  img={imagesCard.miniHotdogRoll1}
                             title="Mini Enrrollado de Hotdog"
                             description="¡Suaves, dorados y deliciosos! Nuestros Mini Enrollados de Hotdog son el snack
                              perfecto para cualquier antojo y momento especial. 🌭✨"
                             price1="S/.100.00"
                             price2="S/.60.00"
                             price3="S/.35.00"
                />
                <CustomCard  img={imagesCard.tripleAvocado1}
                             title="Mini Triple de Palta y Tomate"
                             description="¡Fresco, cremoso y delicioso! Nuestro Mini Triple de Palta y Tomate es el bocado
                             perfecto para cualquier ocasión. 🥑🍅✨"
                             price1="S/.90.00"
                             price2="S/.50.00"
                             price3="S/.30.00"
                />
                <CustomCard  img={imagesCard.tripleChicken1}
                             title="Mini Triple de Pollo"
                             description="¡Suaves, frescos y deliciosos! Nuestro Mini Triple de Pollo es el bocado perfecto
                             para compartir y disfrutar en cualquier ocasión. 🥪✨"
                             price1="S/.100.00"
                             price2="S/.60.00"
                             price3="S/.35.00"
                />
                <CustomCard  img={imagesCard.tripleOlive1}
                             title="Mini Triple de Huevo y Aceituna"
                             description="¡Suaves, cremosos y llenos de sabor! Nuestro Mini Triple de Huevo y Aceituna es el
                             bocado perfecto para disfrutar en cualquier momento. 🥪✨"
                             price1="S/.100.00"
                             price2="S/.60.00"
                             price3="S/.35.00"
                />
            </div>
            <Video />
            <div id="whatsapp">
                <a href="http://wa.me/+51982521903" target="_blank" id="toggle1" className="wtsapp">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </div>
    );
}

export default Services;