import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
    return (
        <div>
            <h3>I like {name}</h3>
            <h4>{rating}/5.0</h4>
        </div>
    );
}

const foodILike = [
    { id: 1, rating: 5.0, name: "kimchi" },
    { id: 2, rating: 4.5, name: "ramen" },
    { id: 3, rating: 4.2, name: "samgiopsal" },
    { id: 4, rating: 2.9, name: "chukumi" },
];

function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} rating={dish.rating} />;
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
};

function App() {
    return (
        <div className="App">
            <h1>hello</h1>
            {foodILike.map(renderFood)}
        </div>
    );
}

export default App;
