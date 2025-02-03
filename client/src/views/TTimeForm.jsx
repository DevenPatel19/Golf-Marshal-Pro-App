import React, { useState } from 'react'
import TeeTimeDisplayComponent from '../components/TeeTimeDisplayComponent';

const TTimeForm = () => {

	// MemberName
	// Tee_time(and date)
	// # Guests
	// Membership Status Status


	const [memberName, setMemberName] = useState("");
	const [tee_Time, setTee_Time] = useState(0);
	const [guests, setGuests] = useState(0);
	const [memberStatus, setMemberStatus] = useState(true)

	const handleSubmit = (e) => {
		e.preventDefault();
		// No database :(
		
		const newTeeTime = { memberName, tee_Time, guests,  memberStatus };
		console.log(newTeeTime)
	}

  return (
	<>
	<fieldset>
		<legend>TTimeForm.jsx</legend>
		<form onSubmit={ handleSubmit }>
			<div>
				<label>Member Name: </label>
				<input 
				type="text" 
				name="memberName" 
				value={memberName} 
				onChange={(e)=>{setMemberName(e.target.value)}} />
			</div>
			<div>
				<label>Tee Time: </label>
				<input 
				type="datetime-local" 
				name="tee_Time"  
				value={tee_Time} 
				onChange={(e)=>{setTee_Time(e.target.value)}} />
			</div>
			<div>
				<label>Number of Guests: </label>
				<input 
				type="number" 
				name="guests" 
				value={guests} 
				onChange={(e)=>{setGuests(e.target.value)}} />
			</div>
			<div>
				<label>Member Status:  </label>
				<input 
				type="text" 
				name="memberStatus" 
				value={memberStatus} 
				onChange={(e)=>{setMemberStatus(e.target.value)}} />
				
			</div>
			<button> Submit Tee Time Request</button>
		</form>
	
	<TeeTimeDisplayComponent memberName={memberName} tee_Time={tee_Time} guests={guests} memberStatus={memberStatus} />

	</fieldset>
	</>
  )
}

export default TTimeForm