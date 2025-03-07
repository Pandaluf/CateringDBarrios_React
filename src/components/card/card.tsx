import { useEffect, useRef } from "react";

interface CustomCardProps {
    img: string;
    title: string;
    description: string;
    price1: string;
    price2: string;
    price3: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ img, title, description, price1, price2, price3 }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const cardTop = cardRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (cardTop < windowHeight * 0.9) {
                    cardRef.current.classList.add("show");
                } else {
                    cardRef.current.classList.remove("show");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Para verificar la posición inicial

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="services__product">
            <div className="services__product__cards box" ref={cardRef}>
                <img src={img} alt={title} />
                <h2>{title}</h2>
                <p className="services__product__cards__description">{description}</p>
                <div className="services__product__cards__price">
                    <p><span>Cien unidades:</span> {price1}</p>
                    <p><span>Cincuenta unidades:</span> {price2}</p>
                    <p><span>25 unidades:</span> {price3}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomCard;
