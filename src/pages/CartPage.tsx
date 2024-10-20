import { useContext, useState } from "react";
import { ProductContext } from "../Components/ProductProvider";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const CartPage = () => {
  const [count, setcount] = useState<number>(1);
  const cartItems = useContext(ProductContext);
  const products = cartItems?.cartItems;
  const dispatch = cartItems?.dispatch;

  const increaseCount = () => {
    setcount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setcount((prevCount) => (count == 1 ? 1 : prevCount - 1));
  };

  return (
    <div className="px-6 py-10 space-y-6 lg:grid md:justify-center">
      <h1 className="font-MerriWeather font-normal text-3xl">Cart</h1>
      <div>
        {!products?.length ? (
          <p className="font-MerriWeather font-normal text-sm text-gray-500">
            Cart is empty. Add some items to continue shopping.
          </p>
        ) : (
          <div className="space-y-10">
            {products.map((products) => (
              <div key={products.id}>
                <div
                  key={products.id}
                  className="flex justify-around place-items-center space-x-6"
                >
                  <div className="border-[#D4AF37] rounded-lg border py-7 px-6 w-[126px] h-[206px]">
                    <img
                      src={products.image}
                      alt={products.image}
                      className=" "
                    />
                  </div>

                  <div className="space-y-5">
                    <h2 className="font-Raleway font-semibold text-2xl ">
                      {products.name}
                    </h2>
                    <div className="flex space-x-6 items-center">
                      <h2 className="font-MerriWeather text-2xl font-semibold">
                        ${products.price.toFixed(2)}
                      </h2>
                      <div className="flex space-x-4">
                        <button onClick={decreaseCount} className="">
                          <CiCircleMinus size={24} />
                        </button>
                        <p className="font-Raleway font-normal text-2xl">
                          {count}
                        </p>
                        <button onClick={increaseCount} className="">
                          <CiCirclePlus size={24} />
                        </button>
                      </div>
                    </div>
                    <div className="font-Raleway text-base bg-[#00C62B] bg-opacity-20 border text-center max-w-max text-nowrap px-2.5 py-0.5 border-[#00C62B]">
                      In stock
                    </div>

                    <button
                      onClick={() =>
                        dispatch!({
                          type: "REMOVE_FROM_CART",
                          payload: products.id,
                        })
                      }
                      className="flex space-x-2 items-center"
                    >
                      <RiDeleteBin5Line size={24} />
                      <p className="font-Raleway font-normal text-2xl text-gray-500">
                        Remove
                      </p>
                    </button>
                  </div>
                </div>
                <hr className="my-10 h-[1px] bg-[#BABABA]" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
