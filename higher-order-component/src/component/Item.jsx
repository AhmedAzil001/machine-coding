const Item = ({ list }) => {
  return (
    <div className="bg-teal-500 p-8 rounded-md flex gap-10">
      <img
        className="w-1/2 rounded-md "
        src="https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1705644651"
        alt=""
      />
      <div className="flex flex-col gap-5 items-start font-sans">
        <h4 className="text-2xl">{list.title}</h4>
        <h6 className="font-semibold">{list.price}</h6>
        <button className="bg-teal-800 w-full rounded-md p-2 text-white">
          Add To Cart
        </button>
        <button className="bg-teal-800 w-full rounded-md p-2 text-white">
          Buy
        </button>
      </div>
    </div>
  );
};

export const withPromoteLabel = (Item) => {
  return (props) => {
    return (
      <div className="w-full  relative">
        <span className="absolute top-[-10px] left-[-10px] bg-black rounded-md text-white p-1">
          Top Rated
        </span>
        <Item {...props} />
      </div>
    );
  };
};

export default Item;
