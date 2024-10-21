import PropTypes from "prop-types";

function Bottle({ bottle }) {
  console.log(bottle);
  return (
    <div className="border rounded">
      <div className="w-full h-[250px] bg-card">
        <img
          className="w-full h-full object-contain hover:transform transition-transform duration-300 hover:scale-75"
          src={bottle.img}
          alt=""
        />
      </div>

      <div className="p-5 text-center flex flex-col justify-between min-h-[150px]">
        <div>
          <h2 className="font-semibold">{bottle.name}</h2>
          <p className="text-lg font-semibold mt-1">${bottle.price}</p>
        </div>
        <button className="btn bg-primary btn-primary border-none btn-sm rounded text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
};

export default Bottle;
