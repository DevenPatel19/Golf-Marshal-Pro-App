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
	const [tTimeList, setTTimeList] = useState([]);
	const [submittedTrue, setSubmittedTrue] = useState(false);
	

	const handleSubmit = (e) => {
		e.preventDefault();
		// No database :(
		
		// Creates new Tee Time
		const newTeeTime = { memberName, tee_Time, guests,  memberStatus };
		console.log(newTeeTime)
		// Mutates Tee Time list and adds new Tee time
		setTTimeList( [ ...tTimeList, newTeeTime ] )

		setMemberName("");
		setTee_Time(0);
		setGuests(0);
		setMemberStatus(true);
		setSubmittedTrue( !submittedTrue );
	}

const formMsg = () => {
		if ( submittedTrue ) {
			return "Thank you for scheduling, please see the Marshal to check in.";
		} else {
			return " Please schedule a tee time."
		}
	};

const handleMemberName = (e) => {
	setMemberName(e.target.value)
};

const handletee_Time = (e) => {
	setTee_Time(e.target.value)
};

const handleGuests = (e) => {
	setGuests(e.target.value)
};

const handleMemberStatus = (e) => {
	setMemberStatus(e.target.value)
};
	
const deleteHandler = (deleteIdx) => {
	const filterList = tTimeList.filter(
		(tTime, idx) => idx !== deleteIdx
	)
	setTTimeList(filterList);
}
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
				onChange={handleMemberName} />
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
				onChange={handletee_Time} />
			</div>
			<div>
				<label>Number of Guests: </label>
				<input 
				type="number" 
				name="guests" 
				value={guests} 
				onChange={handleGuests} />
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
				<select name="memberStatus" value={memberStatus} onChange={handleMemberStatus}>
					<option value={"true"}>True</option>
					<option value={"false"}>False</option>
				</select>
				{memberStatus !== true ?
				<p style={{color: "red"}}> You must be in good standing to play.</p> :
				<></>

				}
				
			</div>
			
			<button> Submit Tee Time Request</button>
		</form>
	
	<TeeTimeDisplayComponent memberName={memberName} tee_Time={tee_Time} guests={guests} memberStatus={memberStatus} />

	</fieldset>
		
		<table border="1">
			<thead><tr>
				<th> Member Name </th>
				<th> Tee Time </th>
				<th> Number of Guests </th>
				<th> Member Status </th>
				<th> Actions </th>
			</tr>
			</thead>
			<tbody>
				
					{
						tTimeList.map(
							(eachTTime, idx) => {
								return(
									<tr key={idx}>
										<td>{eachTTime.memberName}</td>
										<td>{eachTTime.tee_Time}</td>
										<td>{eachTTime.guests}</td>
										<td>{eachTTime.memberStatus}</td>
										<td><button onClick={ () => deleteHandler(idx)}>Delete Tee Time</button></td>
									</tr>
								)
							}
						)
					}

			</tbody>
		</table>
	</>
  )
}

export default TTimeForm