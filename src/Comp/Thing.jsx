import { useContext, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { AuthProvider } from "../Provider/Provider";

const Thing = ({ info }) => {
  const { name, image, price, category,description,stock,rating } = info;
  const {dark} = useContext(AuthProvider);
    const [ok,setOk] = useState(true);  
  const handleLike = ()=>{
        setOk()
    }
  return (
    <div className="bg-[#0b0b0b] text-white rounded-3xl overflow-hidden w-[300px] shadow-lg border border-gray-800">
      {/* Product Image */}
      <div className="">
        <img src={image.trim()} alt={name} className="w-full p-1 rounded-tr-3xl rounded-tl-3xl object-contain" />
      </div>

      {/* Optional Color thumbnails (placeholder)
      <div className="flex items-center justify-center gap-2 px-4 py-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-md border ${i === 1 ? 'border-orange-500' : 'border-transparent'} bg-gray-700`}
          ></div>
        ))}
      </div> */}

      {/* Product Details */}
      <div className="px-4 pb-5 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">{name || 'Unnamed Product'}</p>
          <p className="text-lg font-bold">${price}</p>
        </div>
        <div className="flex justify-between items-center pt-3">
            <p className="text-[14px] text-gray-200 flex items-center justify-center gap-1 opacity-70 border px-2 rounded-full">{rating}<FaStar className="mb-0.5 text-[12px] text-amber-400"/></p>
            <p className="text-[12px] text-gray-400">Stock : {stock}</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button   className={`btn  px-[13px] rounded-xl transition-all duration-200 hover:drop-shadow-2xl border-0 bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00] mr-2 z-10 `}>
            ADD TO CART
          </button>
          <button className="btn bg-transparent border  border-gray-700 p-3 rounded-xl  transition-all" onClick={()=>setOk(!ok)}>
            {ok?<BsHeart />:<FaHeart className="text-red-600 " />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thing;
