import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Contact from "../components/Layout/Contact";
import Footer from "../components/Layout/Footer";

function CartScreen() {
  const [quantity, setQuantity] = useState(0);
  const Increment = () => {
    setQuantity(quantity + 1);
  };
  const Decrement = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="w-1/4">
      <div className="">
        <p className="font-bold">Giỏ hàng</p>
      </div>
      <div className="flex justify-between">
        <div>
          <input type="checkbox" className="mx-2" />
          <label className="mx-2" htmlFor="">
            Chọn tất cả
          </label>
        </div>
        <div>
          <p className="font-bold">số lượng : 2</p>
        </div>
      </div>
      <div className="flex w-full justify-around items-center border-solid border-2 border-black">
        <div className="mx-3">
          <input type="checkbox" />
        </div>
        <div className="w-1/2">
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="w-[200px] h-[200px] object-cover p-3"
          />
        </div>
        <div className="w-1/2  ">
          <div>
            <p className="font-bold">Country og sftm</p>
          </div>
          <div>
            <p>
              Price : <span>3.000.000</span>
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Số lượng</label>
            <div className="flex items-center">
              <input className="border w-full" type="text" value={quantity} />
              <div onClick={Increment} className="mx-2 cursor-pointer">
                +
              </div>
              <div onClick={Decrement} className="mx-2 cursor-pointer">
                -
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-xl">
          Tổng tiền : <span>6.000.000 đ</span>
        </p>
      </div>
      <div className="flex justify-around">
        <button className=" bg-white text-black hover:opacity-70 hover:bg-red-500 rounded-lg px-8 py-3 font-semibold mx-auto text-xl w-1/7 mb-4 cursor-pointer">
          Thanh toán
        </button>

        <button className=" bg-white text-black hover:opacity-70 hover:bg-red-500 rounded-lg px-8 py-3 font-semibold mx-auto text-xl w-1/7 mb-4 cursor-pointer">
          Xóa
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
