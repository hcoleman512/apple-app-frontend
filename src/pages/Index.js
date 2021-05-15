import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    countryOfOrigin: "",
    image: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCheese(newForm);
    setNewForm({
      name: "",
      countryOfOrigin: "",
      image: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.cheese.map((cheesy) => (
      <div key={cheesy._id} className="cheesy">
        <Link to={`/cheese/${cheesy._id}`}><h1>{cheesy.name}</h1></Link>
        <img src={cheesy.image} alt={cheesy.name} />
        <h3>{cheesy.name}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="Country of Origin"
          placeholder="Country of Origin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Add Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );
}

export default Index;