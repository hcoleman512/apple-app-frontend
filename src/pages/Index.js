import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    countryOfOrigin: "",
    uses: "",
    flavor: "",
    image: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createApple(newForm);
    setNewForm({
      name: "",
      countryOfOrigin: "",
      uses: "",
      flavor: "",
      image: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.apple.map((apples) => (
      <div key={apples._id} className="apples">
        <Link to={`/apple/${apples._id}`}><h1>{apples.name}</h1></Link>
        <img src={apples.image} alt={apples.name} />
        <h3>{apples.countryOfOrigin}   </h3>
        <h4>{apples.flavor}</h4>
        <h5>{apples.uses}</h5>
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
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.uses}
          name="uses"
          placeholder="Uses"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.flavor}
          name="flavor"
          placeholder="Flavor"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Add Apples" />
      </form>
      {props.apple ? loaded() : loading()}
    </section>
  );
}

export default Index;
