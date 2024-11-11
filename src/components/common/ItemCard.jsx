import React from "react";
import Image from "./Image";
import item from "../../assets/item.png";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { cartReducer } from "../../redux/features/CartSlice";

const ItemCard = ({ className, data }) => {
  const dispatch = useDispatch(); // dispatch instance

  // function for add the product to the cart
  const addToCart = () => {
    dispatch(cartReducer({ ...data, qun: 1 }));
    toast.success("Item is added");
  };
  return (
    <div className={`${className} border-[1px] border-primary/45 relative `}>
      <div className=" xl:h-[222px] w-full">
        <Image src={item} className="w-full" alt="item" />
      </div>

      <div className=" p-[14px]">
        <h3 className=" font-bold text-[22px] text-title text-center">
          {data?.title}
        </h3>

        <h4 className=" font-normal text-base text-primary text-center">
          Coffee 50% | Milk 50%
        </h4>

        <h3 className=" font-bold text-[18px] text-center text-title mb-10">
          $8.50
        </h3>

        <button
          onClick={addToCart}
          className=" absolute bottom-[-27px] left-[50%] translate-x-[-50%] py-[14px] px-[26px] bg-primary rounded-[24px] text-primaryText inline-block mt-5 font-bold text-[16px]"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
