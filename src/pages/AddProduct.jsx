import { useState } from "react";

function AddProduct() {

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    stock: "",
    category: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(product)
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Product Added Successfully");

      setProduct({
        title: "",
        description: "",
        price: "",
        image: "",
        stock: "",
        category: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error adding product");
    }
  };


  return (
    <div>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="title"
          placeholder="Product Name"
          value={product.title}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          type="number"
          value={product.price}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <input
          name="stock"
          placeholder="Stock"
          type="number"
          value={product.stock}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;
