import Card from "../card/Card.jsx";
import Image from "../image/Image.jsx";
import ProductInfo from "../product-info/ProductInfo.jsx";
import Button from "../button/Button.jsx";
import videogames from "../../common-components/data.js"; 
import { addToCart } from "../../common-components/localStorageManagement.js"; 
import './Cards.css';

export default function Cards() {

    const allCards = []; 


    function addToCartHandler(videogameId) {
        addToCart(videogameId, 1);
    }

    function renderGoods() {
        videogames.forEach(videogame => {
            allCards.push(
                <Card id={videogame.id} key={videogame.id}>
                    <Image imageRef={videogame.img} path="/goods-card" param={videogame.id}></Image>
                    <ProductInfo fontSize="15px" fontWeight="bold">{videogame.name}</ProductInfo>
                    <ProductInfo fontSize="15px">{videogame.price + " руб."}</ProductInfo>
                    <Button onClickFunctionHandler={() => addToCartHandler(videogame.id)}>В корзину</Button>
                </Card>
            );
        });
    }

    renderGoods();

    return (
        <div className="grid-container">
            {allCards}
        </div>
    );

}