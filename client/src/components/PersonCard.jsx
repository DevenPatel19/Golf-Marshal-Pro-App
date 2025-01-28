import React from 'react'



const PersonCard = ({ firstName, age, hairColor, msg}) => {

	// const { firstName, age, hairColor} = props;
	const alertMSG = () => {
		alert(msg)
	}

  return (
	<div>
		<h1 style={{ color:"red" }}>{firstName}</h1>
		<p>Age: {age}</p>
		<p>Hair color: {hairColor}</p>
		<button onClick={alertMSG}>Click for pop up</button>
	</div>
  )
}

export default PersonCard;