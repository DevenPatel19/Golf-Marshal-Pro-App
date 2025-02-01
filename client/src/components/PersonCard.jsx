import { useState } from 'react'



const PersonCard = ({ firstName, age, hairColor, hairLikes }) => {
/**
 * alertMSG takes the "firstname" from the destructured props and displays it and
 * also, it takes the "likes" value from the object(of the hook) based on the key of "likesCount"
 * and displays it
 */
	// const { firstName, age, hairColor} = props;
	const alertMSG = () => {
		alert(firstName + "!\n" + likes.likesCount)
	}
	
/**
 * The below Hook example allows us to take the value of the "hairLikes" prop and copy, then manipulate
 * and finally replace the "hairLikes" with the "likes.likesCount" value
*/
	const [ likes, setLikes ] = useState({
		likesCount: hairLikes
	});

/**
 * The "handleLikes" and "handleDislikes" variable that hold the arrow functions that copy, manipulate,
 * and replace the value via the Hook likes.LikesCount object 
 */
	const handleLikes = () => {
		setLikes({
			
			likesCount: likes.likesCount += 1
		})
	};

	const handleDislikes = () => {
		setLikes({likesCount : likes.likesCount -= 1

		})
	};

  return (
	<fieldset>
		<legend>PersonCard.jsx</legend>
		<h1 style={{ color:"red" }}>{firstName}</h1>
		<p>Age: {age}</p>
		<p>Hair color: {hairColor}</p>
		<button onClick={alertMSG}>Click for pop up</button>
		<p>Likes : {likes.likesCount}</p>
		
		<div>
		<button onClick={handleLikes}> Like 🔼</button>
		<button onClick={handleDislikes}> Dislike 🔽</button>

		</div>

	</fieldset>
  )
}

export default PersonCard;

