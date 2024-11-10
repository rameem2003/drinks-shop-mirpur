import React, { useEffect, useState } from "react";
import Container from "./../common/Container";
import Flex from "../common/Flex";
import { Link } from "react-router-dom";
import List from "../common/List";
import ListItem from "../common/ListItem";

const Navigation = () => {
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${scrolled ? " bg-black/90" : ""} fixed w-full py-5 z-[9999]`}
    >
      <Container>
        <Flex className="items-center justify-between">
          <Link to="/">
            <span className=" font-script text-[35px] text-white font-normal">
              Bean Scene
            </span>
          </Link>

          <List className="items-center justify-center gap-10 lg:gap-[60px] flex fixed bottom-2 left-[50%] translate-x-[-50%] bg-black/90 w-[80%] py-4 px-3 rounded-2xl md:static md:p-0 md:bg-transparent md:w-auto md:translate-x-0">
            <ListItem>
              <Link className=" font-medium text-[14px] text-white" to="/">
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link className=" font-medium text-[14px] text-white" to="/shop">
                Menu
              </Link>
            </ListItem>
            <ListItem>
              <Link className=" font-medium text-[14px] text-white" to="/shop">
                Contact
              </Link>
            </ListItem>
          </List>

          <Flex className="items-center gap-2 lg:gap-10">
            <Link className=" font-medium text-[14px] text-white" to="/shop">
              Sign In
            </Link>
            <Link
              className=" py-2 px-4 lg:py-[14px] lg:px-[27px] bg-primary rounded-full font-medium text-[14px] text-black"
              to="/shop"
            >
              Sign In
            </Link>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
