import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/features/LoadAllProductsSlice";
import { FaTimes, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { logoutUser } from "../../redux/features/AuthSlice";
import { removeProduct } from "../../redux/features/CartSlice";
import Container from "./../common/Container";
import Flex from "../common/Flex";
import List from "../common/List";
import ListItem from "../common/ListItem";
import Image from "../common/Image";

const Navigation = () => {
  const products = useSelector((state) => state.allProducts.products); // get all products from the redux
  const cart = useSelector((state) => state.cartArray.cart); // get cart info from the redux
  const customerdata = useSelector((state) => state.user.user); // get customer info from the redux
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigation instance

  // all states and refs for toggle context menu
  const [toggleAccount, setToggleAccount] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  // all refs
  const accountRef = useRef();
  const cartRef = useRef();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);

    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // function for logout customer
  const handleLogout = () => {
    dispatch(logoutUser({ status: false }));

    setTimeout(() => {
      location.reload();
    }, 2000);
  };

  // function for remove item from cart
  const removeItemFromCart = (item) => {
    dispatch(removeProduct(item.id));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    /**
     * function for store all products coming from the API
     * store in redux store
     */

    const fetchProducts = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      dispatch(allProducts(res.data.products));
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      accountRef.current.contains(e.target)
        ? setToggleAccount(true)
        : setToggleAccount(false);
      cartRef.current.contains(e.target)
        ? setToggleCart(true)
        : setToggleCart(false);
    });
  }, []);
  return (
    <nav
      className={`${scrolled ? " bg-black/90" : ""} 
       fixed w-full py-5 z-[9999]`}
    >
      <Container>
        <Flex className="items-center justify-between">
          <Link to="/">
            <span className=" font-script text-[35px] text-white font-normal">
              Bean Scene
            </span>
          </Link>

          <List className="items-center justify-center gap-10 lg:gap-[60px] flex fixed bottom-4 left-[50%] translate-x-[-50%] bg-black/90 w-[80%] py-4 px-3 rounded-2xl md:static md:p-0 md:bg-transparent md:w-auto md:translate-x-0">
            <ListItem>
              <Link className=" font-medium text-[14px] text-white" to="/">
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link className=" font-medium text-[14px] text-white" to="/menu">
                Menu
              </Link>
            </ListItem>
            <ListItem>
              <Link
                className=" font-medium text-[14px] text-white"
                to="/contact"
              >
                Contact
              </Link>
            </ListItem>
          </List>

          {customerdata.status ? (
            <Flex className="items-center gap-5">
              <div className=" relative">
                <button ref={accountRef} className=" text-2xl text-white">
                  <FaUser />
                </button>

                {toggleAccount && (
                  <div className="w-[300px] p-3 bg-primary absolute top-[48px] right-[-45px] sm:right-0 z-[100]">
                    <h3 className=" font-medium text-lg text-black">
                      Welcome,
                    </h3>

                    <h2 className=" font-bold text-xl text-black">
                      {customerdata.user}
                    </h2>

                    <p className="font-normal text-base text-black">
                      Phone: {customerdata.phone}
                    </p>

                    <Flex className="mt-5 gap-2">
                      <Link
                        to="/profile"
                        className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-black font-semibold text-lg text-black"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 w-[50%] p-2 border-[1px] border-black font-semibold text-lg text-black"
                      >
                        Logout
                      </button>
                    </Flex>
                  </div>
                )}
              </div>

              <div className=" relative">
                <button ref={cartRef} className=" text-2xl text-white relative">
                  <FaCartShopping />
                  <span className=" absolute top-[-20px] right-[-10px] text-[25px]  text-white font-bold rounded-full">
                    {cart.length}
                  </span>
                </button>

                {toggleCart && (
                  <div className=" w-[300px] md:w-[360px] p-3 bg-slate-800 absolute top-[48px] right-0 z-[100]">
                    <div className="max-h-[220px] overflow-y-scroll no-scrollbar">
                      {cart.length > 0 ? (
                        cart.map((item, i) => (
                          <Flex className="items-center gap-5 mb-5 w-full group hover:bg-white">
                            <div className="w-3/12">
                              <Image
                                src={item.thumbnail}
                                alt="item"
                                className="w-[80px] h-[80px]"
                              />
                            </div>

                            <div className="w-9/12">
                              <Flex className="items-center justify-between">
                                <h3 className=" font-medium text-lg text-white group-hover:text-black">
                                  {item.title}
                                </h3>

                                <FaTimes
                                  onClick={() => removeItemFromCart(item)}
                                  className="cursor-pointer text-white group-hover:text-black"
                                />
                              </Flex>

                              <p className=" font-semibold text-base text-white group-hover:text-black">
                                Qun: x {item.qun}
                              </p>
                              <p className=" font-semibold text-base text-white group-hover:text-black">
                                Price: ৳ {item.price} BDT
                              </p>
                            </div>
                          </Flex>
                        ))
                      ) : (
                        <h2 className=" font-bold text-lg text-white">
                          Your Cart is empty
                        </h2>
                      )}
                    </div>

                    <button
                      onClick={() => navigate("/cart")}
                      className="mt-10 flex items-center justify-center gap-2 w-full p-2 border-[1px] border-white font-semibold text-lg text-white"
                    >
                      Go to Cart
                    </button>
                  </div>
                )}
              </div>
            </Flex>
          ) : (
            <Flex className="items-center gap-2 lg:gap-10">
              <Link className=" font-medium text-[14px] text-white" to="/login">
                Sign In
              </Link>
              <Link
                className=" py-2 px-4 lg:py-[14px] lg:px-[27px] bg-primary rounded-full font-medium text-[14px] text-black"
                to="/signup"
              >
                Sign Up
              </Link>
            </Flex>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
