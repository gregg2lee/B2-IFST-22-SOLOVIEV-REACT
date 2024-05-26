import videogames from "../common-components/data";
import { useParams } from 'react-router-dom';
import './GoodsCardPage.css'
import ProductInfo from "../common-components/product-info/ProductInfo.jsx"
import Button from "../common-components/button/Button";
import StarRating from "./star-rating/StarRating.jsx";
import { addToCart } from "../common-components/localStorageManagement.js";
import Header from "../common-components/header/Header.jsx";

export default function GoodsCard() {

    const { id } = useParams();
    const selectedVideogame = videogames.find(videogame => videogame.id === parseInt(id));

    const handleStarClick = (clickedIndex) => {
        selectedVideogame.rating = clickedIndex;
    };

    function addToCartHandler(videogameId) {
        addToCart(videogameId, 1);
    }

    return (
        <>
            <Header></Header>
            <div>
                <div className="goods-card">

                    <div className="general-info">
                        <img
                            src={"../../" + selectedVideogame.img}
                            width="30%"
                            alt="* Videogame image *"
                            style={{ borderRadius: '20px' }}
                        />
                        <div className="name-price">
                            <ProductInfo fontSize="40px" fontWeight="bold">{selectedVideogame.name}</ProductInfo>
                            <ProductInfo fontSize="30px" fontWeight="bold">{selectedVideogame.price + " руб."}</ProductInfo>
                            <Button onClickFunctionHandler={() => addToCartHandler(selectedVideogame.id)}>В корзину</Button>
                            <StarRating rating={selectedVideogame.rating} onStarClick={handleStarClick} /> 
                        </div>
                    </div>

                    <div className="features">
                        <div className="feature">
                            <ProductInfo fontSize="25px">{selectedVideogame.description}</ProductInfo>
                        </div>
                        {selectedVideogame.features.map((feature, index) => (
                            <div key={index} className="feature">
                                <ProductInfo fontSize="20px" fontWeight="bold">{feature[0] + ": "}</ProductInfo>
                                <ProductInfo fontSize="20px">{feature[1]}</ProductInfo>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}