import React from "react";
import BeerItem from "./BeerItem";

const BeerList = ({beers, onBeerClickFavourite}) =>{
    
    
    const BeerItems = beers.map((beer) =>{
        return <BeerItem 
        beer={beer} 
        onBeerClickFavourite={onBeerClickFavourite}
        key={beer.id}
        />
    })
   return(
    <ul>
        {BeerItems}
    </ul>
   )
    
}

export default BeerList