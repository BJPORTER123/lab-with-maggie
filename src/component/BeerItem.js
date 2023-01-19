import React, {useState}from "react";

const BeerItem =({beer, onBeerClickFavourite}) =>{

   const [extraInfo, setExtraInfo] = useState('')

   const updateFavouriteBeer = (evt) => {
    onBeerClickFavourite(evt.target.value)
   }



    const onHandleChange = (evt) => {
        setExtraInfo(evt.target.value)
    }

    return(
    
            <li>
                <h2>{beer.name}</h2>
                <button value={beer.id} onClick={updateFavouriteBeer}>Favourite Beer</button> 
                <h3><i>~{beer.tagline}~</i></h3>
                <select defaultValue="" onChange={onHandleChange}>
                    <option value="">More Info</option>
                    <option value={beer.description}>description</option>
                    <option value={beer.food_pairing}>food pairings</option>
                    <option value={beer.brewers_tips}>brewer tips</option>
                </select>

                <p><i>{extraInfo ? extraInfo : "select from dropdown to see more info"}</i></p>
            </li>
    )
}

export default BeerItem
