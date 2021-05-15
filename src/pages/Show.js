import { useState } from "react"
function Show(props) {
    const id = props.match.params.id
    const cheese = props.cheese
    const cheesy = cheese.find(p => p._id === id)

    const [editForm, setEditForm] = useState(cheesy)

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.updateCheese(editForm, cheesy._id)
    props.history.push("/")
  }

  const removeCheese = () => {
    props.deleteCheese(cheesy._id)
    props.history.push("/")
  }

    return (
      <div className="cheesy">
        <h1>{cheesy.name}</h1>
        <h2>{cheesy.countryOfOrigin}</h2>
        <img src={cheesy.image} alt={cheesy.name} />
        <button id="delete" onClick={removeCheese}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.countryOfOrigin}
          name="Country of Origin"
          placeholder="Country of Origin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Add Cheese" />
      </form>
      </div>
    )
  }
  
  export default Show