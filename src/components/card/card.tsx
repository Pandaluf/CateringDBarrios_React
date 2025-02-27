
function CustomCard({img, title, description, price1, price2, price3}: {img: string; title: string; description: string; price1: string; price2: string; price3: string;}) {
    return (
        <>
            <div className="services__product">
                <div className="services__product__cards">
                    <img src={img} alt="caramelCookie"/>
                    <h2>{title}</h2>
                    <p className="services__product__cards__description">
                        {description}
                    </p>
                    <div className="services__product__cards__price">
                        <p><span>Una docena:</span> {price1}</p>
                        <p><span>Media docena:</span> {price2}</p>
                        <p><span>1/4 docena:</span> {price3}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomCard;