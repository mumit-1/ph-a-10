import { FaStar, FaRegStar, FaUser } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider } from "../Provider/Provider";

const Detail = () => {
    const product = useLoaderData();
  const {
    image,
    name,
    category,
    description,
    price,
    rating,
    customization,
    processingTime,
    stock,
    userName,
    userEmail
  } = product;

  const {dark} = useContext(AuthProvider);

  return (
        <div className={`max-w-screen-lg   mx-auto h-screen pt-28`}>
      <div className={`rounded-2xl shadow-xl p-4 ${dark? "bg-black":"bg-white"} flex gap-4`}>
          <div>
              <img
                src={image}
                alt={name}
                className="w-full h-[500px] object-cover rounded-xl "
              />
          </div>
          <div>
              <div className="space-y-1 ">
                <h2 className="text-2xl lg:pt-8 md:pt-8 font-bold">{name}</h2>
                <div className="flex justify- items-center space-x-3">
                    <p className="text-lg font-bold">${price}</p><span className="opacity-30">|</span>
                    <p className={`text-sm font-medium ${stock > 0 ? "" : ""}`}>
                      {stock > 0 ? `Only ${stock} left` : "Out of stock"}
                    </p> <span className="opacity-30">|</span>
                    <p className="flex justify-center items-center gap-1"><FaStar className="mb-0.5"/>({rating})</p>
                </div>
                {/* <p className="text-sm text-gray-500">{category}</p> */}
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Customization:</span> {customization}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Processing Time:</span> {processingTime} days
                </p>
              <button
                disabled={stock === 0}
                className={`mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full transition
                    ${stock > 0 ? "bg-black text-white hover:bg-primary-focus" : " cursor-not-allowed"}
                    `}
              >
                <BsCartPlus className="text-lg" />
                {stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
                <div className="mt-3 text-sm text-gray-500">
                    <p className="text-sm mt-1 text-gray-600 lg:py-5 md:py-5">description<br></br>{description}</p>
    <div className="flex justify-center items-center gap-2 rounded-full border py-2 px-3.5 pr-4 bg-gray-200">
        <div>
            <FaUser className="text-xl " />
        </div>
          <div>
              <p className="flex items-center gap-2">
                      Added by: <span className="font-medium text-gray-700">{userName}</span>
              </p>
              <p className=" text-xs">Contact : {userEmail}</p>
          </div>
    </div>
</div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Detail;
