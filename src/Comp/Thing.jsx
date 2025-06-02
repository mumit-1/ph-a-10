

const Thing = ({info}) => {
    const {name,image,price,category} = info ;
    return (
        <div className="w-8/12 mt-10">
            <div className="w-full">
                <img className=" rounded-3xl" src={image} alt="" />
            </div>
            <div className="lg:flex md:flex justify-between items-start">
                <p>{name}</p>
                <p className="text-left">${price}</p>
            </div>
        </div>
    );
};

export default Thing;