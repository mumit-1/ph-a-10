import { useState, useContext, useEffect } from "react";
import { AuthProvider } from "../Provider/Provider";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const AddProduct = () => {
  const { dark } = useContext(AuthProvider);
  const [validation, setValidation] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setValidation("");

    const form = e.target;
    const product = {
      image: form.image.value,
      name: form.name.value,
      category: form.category.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      rating: parseFloat(form.rating.value),
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stock: parseInt(form.stock.value),
    };

    // OPTIONAL: Validate numeric fields
    if (product.price <= 0 || product.rating < 0 || product.rating > 5 || product.stock < 0) {
      setValidation("Invalid numeric values. Please check price, rating, and stock.");
      return;
    }

    console.log(product); 
fetch("http://localhost:5100/addProduct", {
  method: "post",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(product),
})
  .then(res => res.json())
  .then(data => console.log(data.insertedId));
    toast.success("Product Added Successfully!");
    // form.reset();
  };

  return (
    <div className={`max-w-screen-lg mx-auto lg:h-screen h-full pb-10 pt-32 ${dark ? "text-white" : "text-black"}`}>
      <div className="w-full lg:pt-2 p-5">
        <div className="flex flex-col items-center justify-center">
          <div
            className=" w-full"
            data-aos="zoom-in"
          >
            <div className=" mx-auto ">
              <h2 className="text-2xl font-semibold text-center">Add New Product</h2>
              <p className="text-gray-500 text-center mb-4">Fill the product details</p>
              <form onSubmit={handleAddProduct} className="space-y-4 w-full">
<div className="lg:flex md:flex  justify-center gap-3">
    <div className="lg:w-2/5 md:w-2/5  space-y-3">
    {/* Image URL */}
      <div>
        <label className="block text-sm font-medium pl-2 opacity-80">Image URL</label>
        <input
        //   type="url"
          name="image"
          className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
      </div>
    
      {/* Item Name */}
      <div>
        <label className="block text-sm font-medium pl-2 opacity-80">Item Name</label>
        <input
          type="text"
          name="name"
          className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
      </div>
    
      {/* Category Name */}
      <div>
        <label className="block text-sm font-medium pl-2 opacity-80">Category Name</label>
        <input
          type="text"
          name="category"
          className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
      </div>
    
      {/* Description */}
      <div>
        <label className="block text-sm font-medium pl-2 opacity-80">Description</label>
        <textarea
          name="description"
          rows="4"
          className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-xl p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
          required
        ></textarea>
      </div>
    
    
    </div>
      <div className="lg:w-2/5 md:w-2/5 space-y-3">
      {/* Price */}
      <div>
        <label className="block text-sm font-medium pl-2 opacity-80">Price (USD)</label>
        <input
          type="number"
          name="price"
          step="0.01"
          className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
      </div>
    
     {/* Rating */}
      <div>
        <label className="block text-sm font-medium pl-2 opacity-80">Rating (0–5)</label>
        <input
          type="number"
          name="rating"
          step="0.1"
          max="5"
          min="0"
          className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
      </div>
    
      {/* Customization */}
      <div>
        <label className="block text-sm font-medium pl-2 opacity-80">Customization</label>
        <input
          type="text"
          name="customization"
          placeholder="e.g. Bat with extra grip, Hit paper"
          className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      </div>
    
      {/* Processing Time */}
      <div>
        <label className="block text-sm font-medium pl-2 opacity-80">Processing Time</label>
        <input
          type="text"
          name="processingTime"
          placeholder="e.g. 3–5 days"
          className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
      </div>
    
      {/* Stock Quantity */}
      <div>
        <label className="block text-sm font-medium pl-2 opacity-80">Stock Quantity</label>
        <input
          type="number"
          name="stock"
          min="0"
          className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
        />
      </div>
    
      {/* Validation Error Message */}
      {validation && (
        <p className="text-sm text-red-600 px-2 py-1 opacity-80">{validation}</p>
      )}
      </div>
</div>
 

  {/* Submit Button */}
  <div className="flex justify-center items-center  ">
      <button
        type="submit"
        className={`btn mt-10 rounded-full transition-all duration-200 hover:drop-shadow-2xl ${
          dark
            ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00] border-2 border-[#FFEB00]"
            : "bg-black text-[#FFEB00] border-0 hover:bg-[#FFEB00] hover:text-black"
        }`}
      >
        Add Product
      </button>
  </div> 
</form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
