import { useState } from "react";

export default function AddVessel() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    manufacturer: "",
    length: "",
    year: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div>
      <h2>Add New Vessel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type: </label>
          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Manufacturer: </label>
          <input
            name="manufacturer"
            value={form.manufacturer}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Length: </label>
          <input
            name="length"
            value={form.length}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Year: </label>
          <input
            name="year"
            value={form.year}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Vessel</button>
      </form>
    </div>
  );
}
