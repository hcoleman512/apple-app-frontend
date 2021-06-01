import { useState } from "react"
function Show(props) {
    const id = props.match.params.id
    const apple = props.apple
    const apples = apple.find(p => p._id === id)

    const [editForm, setEditForm] = useState(apples)

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.updateApple(editForm, apples._id)
    props.history.push("/")
  }

  const removeApple = () => {
    props.deleteApple(apples._id)
    props.history.push("/")
  }

    return (
      <div className="apples">
        <h1>{apples.name}</h1>
        <h2>{apples.countryOfOrigin}</h2>
        <img src={apples.image} alt={apples.name} />
        <button id="delete" onClick={removeApple}>
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
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.uses}
          name="uses"
          placeholder="Uses"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.flavor}
          name="flavor"
          placeholder="Flavor"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="edit Apples" />
      </form>
      </div>
    )
  }
  
  export default Show