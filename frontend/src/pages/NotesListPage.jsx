import React, {useState, useEffect} from 'react'

const NotesListPage = () => {
	let [notes, setNotes] = useState([]);

	useEffect(() => {
		getNotes()
	}, [])
	
	const getNotes = async () => {
		const response = await fetch('http://127.0.0.1:8000/api/workouts/');
		const data = await response.json();
		console.log(data);
		setNotes(data);
	}

  return (
    <div>NotesListPage</div>
  )
}

export default NotesListPage
