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
      {cards.map((user) => <BusinessCard key={user._id} name={user.name} description={user.description}
        interests={user.interests} linkedin={user.linkedin} twitter={user.twitter} />)}
    </>
  )
}

function BusinessCard(props) {

  console.log(`Props received are ${JSON.stringify(props)}`);
  return (
    <div style={{ padding: 10, margin: 20, border: "1px solid grey", boxShadow: "5px 5px 10px grey", width: 300 }}>
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
