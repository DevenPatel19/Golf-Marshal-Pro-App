import React from 'react'

const TeeTimeDisplayComponent = (props) => {
  return (
	
	<fieldset>
		<legend>TeeTimeDisplayComponent.jsx</legend>
		<div>
			<p>Member Name: {props.memberName}</p>
			<p>Tee Time: {props.tee_Time}</p>
			<p>Number of Guests: {props.guests}</p>
			<p>Member Status: {props.memberStatus}</p>
		</div>
	</fieldset>	
	
  )
}

export default TeeTimeDisplayComponent;