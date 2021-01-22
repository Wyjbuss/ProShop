import React from 'react'
// In JSX, JavaScript expressions are written inside 
// curly braces, and since JavaScript objects also 
// use curly braces, the styling is written inside 
// two sets of curly braces {{}}.
function Rating({value,text,color}) {
    return (
        <> 
        {/* For one star */}
        <span><i style={{color}}
        className={
        value >= 1
        ? 'fas fa-star'
        :value >=.5
        ?'fas fa-star-half-alt'
        :'far fa-star'}>
        </i></span>

        {/* Two star */}
        <span><i style={{color}}
        className={
        value >= 2
        ? 'fas fa-star'
        :value >=1.5
        ?'fas fa-star-half-alt'
        :'far fa-star'}>
        </i></span>

        {/* Three star */}
        <span><i style={{color}}
        className={
        value >= 3
        ? 'fas fa-star'
        :value >=2.5
        ?'fas fa-star-half-alt'
        :'far fa-star'}>
        </i></span>

        {/* Four star */}
        <span><i style={{color}}
        className={
        value >= 4
        ? 'fas fa-star'
        :value >=3.5
        ?'fas fa-star-half-alt'
        :'far fa-star'}>
        </i></span>

        {/* Five star */}
        <span><i style={{color}}
        className={
        value >= 5
        ? 'fas fa-star'
        :value >=4.5
        ?'fas fa-star-half-alt'
        :'far fa-star'}>
        </i></span>
             





               <p>from {text && text} reviews</p>
        </>
    )
}
// This is how to set properties as default
Rating.defaultProps = {
color:'#f8e825'
}

export default Rating
