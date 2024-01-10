import { useEffect, useState } from 'react'


function App() {
  const [cards, setCards] = useState([]);

  async function getCards() {
    const res = await fetch("http://localhost:3000/users");
    const json = await res.json();
    setCards(json.users);
  }

  useEffect(() => {
    getCards();
  }, [])

  return (
    <>
      <InputForm resetUsers={getCards} />
      {cards.map((user) => <BusinessCard key={user._id} name={user.name} description={user.description}
        interests={user.interests} linkedin={user.linkedin} twitter={user.twitter} />)}
    </>
  )
}

function InputForm({ resetUsers }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    interests: [],
    linkedin: '',
    twitter: ''
  });

  function handleValueChange(e) {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value
    }))
  }

  function handleInterestChange(e) {
    const { value } = e.target;
    const interestsVal = value.split(',').map(val => val.trim());
    setFormData((prevValue) => ({
      ...prevValue,
      interests: interestsVal
    }))
  }



  async function onFormSubmit() {

    1 // sending data to be written 
    const res = await fetch("http://localhost:3000/user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const json = await res.json()
    console.log(json.msg);

    // fetching users again
    resetUsers();

    //clearing state
    setFormData({
      name: '',
      description: '',
      interests: [],
      linkedin: '',
      twitter: ''
    });
  }


  return (
    <div style={{ borderRadius: 10, margin: 10, padding: 10, border: "1px solid #eee" }}>
      <h2>Business Card Form</h2>

      <div style={{ margin: 5, padding: 5 }}>Name: <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleValueChange} /></div>
      <div style={{ margin: 5, padding: 5 }}>Description : <input type='text' name='description' placeholder='Description' value={formData.description} onChange={handleValueChange} /></div>
      <div style={{ margin: 5, padding: 5 }}>Interests (comma separated) <input type='text' name='interests' value={formData.interests.join(',')} onChange={handleInterestChange} /> </div>
      <div style={{ margin: 5, pa1dding: 5 }}>LinkedIn: <input type='url' name='linkedin' value={formData.linkedin} onChange={handleValueChange} /></div>
      <div style={{ margin: 5, padding: 5 }}>Twitter: <input type='url' name='twitter' value={formData.twitter} onChange={handleValueChange} /></div>
      <button style={{ background: "#36a3f5", color: 'white', padding: 10, margin: 10, borderRadius: 8 }} onClick={onFormSubmit}>Submit</button>
    </div>
  )
}


function BusinessCard(props) {

  return (
    <div style={{ padding: 10, margin: 20, border: "1px solid #ddd", borderRadius: 10, boxShadow: "2px 1px 2px #eee", width: 300 }}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>Interests</h3>
      <ul>
        {props.interests.map(interest => <li>{interest}</li>)}
      </ul>
      <div>
        <button style={{ background: "#36a3f5", color: 'white', padding: 10, margin: 10 }} href={props.linkedin}>LinkedIn</button>
        <button style={{ background: "#36a3f5", color: 'white', padding: 10, margin: 10 }} href={props.twitter}>Twitter</button>
      </div>
    </div>
  )
}

export default App
