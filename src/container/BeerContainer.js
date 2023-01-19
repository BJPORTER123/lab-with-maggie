import React, {useState, useEffect} from "react";
import BeerList from "../component/BeerList";

const BeerContainer = () =>{
    const [beers, setBeers] = useState([])
    
    const [faveBeerList, setFaveBeerList] = useState([])
    
    const getBeers = () => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(beers => setBeers(beers))
    }

    useEffect(()=>{
        getBeers();
    },[])

    const onBeerClickFavourite = (beerId)=>{
        const newList = [...faveBeerList]
        const newBeer = beers.find((beer) => beer.id == beerId)
        newList.push(newBeer)


        setFaveBeerList(newList)
    }
  
return (
    <div>
        <BeerList onBeerClickFavourite={onBeerClickFavourite} beers ={beers}/>
    </div>
)
}
export default BeerContainer


