import { useState } from 'react'
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
	
	const [submittedTrue, setSubmittedTrue] = useState(false);
	

	const handleSubmit = (e) => {
		e.preventDefault();
		// No database :(
		
		const newTeeTime = { memberName, tee_Time, guests,  memberStatus };
		console.log(newTeeTime)

		
		
		setSubmittedTrue( !submittedTrue );
	}

const formMsg = () => {
		if ( submittedTrue ) {
			return "Thank you for scheduling, please see the Marshal to check in.";
		} else {
			return " Please schedule a tee time."
		}
	};


	

  return (
	<>
	<fieldset>
		<legend>TTimeForm.jsx</legend>
		<h2>{formMsg()}</h2>
		<form onSubmit={ handleSubmit }>
			<div>
				<label>Member Name: </label>
				<input 
				type="text" 
				name="memberName" 
				value={memberName} 
				onChange={(e)=>{setMemberName(e.target.value)}} />
				{ memberName.length < 2 ?
				<p style ={{color:"red"}}>Member Name must be at leaset 2 letters long</p> :
				<></>
				}
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
			{guests > 3   ?
			<p style={{color: "red"}}> You can only add up to 3 people for a Foursome</p> :
			<></>
			}
			{guests < 0 ?
			<p style={{color: "red"}}> You can't have less than 0 partners, it's weird</p>:
			<></>
			}
			<div>
				<label>Member Status:  </label>
				<input 
				type="text" 
				name="memberStatus" 
				value={memberStatus} 
				onChange={(e)=>{setMemberStatus(e.target.value)}} />
				{memberStatus !== true ?
				<p style={{color: "red"}}> You must be in good standing to play.</p> :
				<></>

				}
				
			</div>
			<button> Submit Tee Time Request</button>
		</form>
	
	<TeeTimeDisplayComponent memberName={memberName} tee_Time={tee_Time} guests={guests} memberStatus={memberStatus} />

	</fieldset>
	</>
  )
}

export default TTimeForm