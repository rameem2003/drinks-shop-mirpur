import React from "react";
import Container from "../common/Container";
import Flex from "./../common/Flex";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-bgScreen bg-cover bg-no-repeat bg-opacity-0 py-[84px]">
      <Container>
        <Flex className="flex-col gap-5 flex-wrap md:gap-0 sm:flex-row xl:flex-nowrap">
          <div className=" w-full md:w-4/12 xl:w-4/12">
            <h1 className=" font-script font-normal text-[54px] text-white">
              Bean Scene
            </h1>

            <p className=" font-normal text-[14px] leading-[22px] text-white w-auto xl:w-[380px] mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <List className="mt-5 flex items-center justify-start gap-5">
              <ListItem>
                <a href="http://">
                  <FaFacebook className=" text-[24px] text-white" />
                </a>
              </ListItem>
              <ListItem>
                <a href="http://">
                  <AiFillInstagram className=" text-[28px] text-white" />
                </a>
              </ListItem>
              <ListItem>
                <a href="http://">
                  <BsYoutube className=" text-[24px] text-white" />
                </a>
              </ListItem>
              <ListItem>
                <a href="http://">
                  <FaTwitter className=" text-[24px] text-white" />
                </a>
              </ListItem>
            </List>
          </div>
          <div className=" w-full md:w-2/12 xl:w-2/12">
            <div className="">
              <h2 className=" font-bold text-[26px] text-white">About</h2>

              <List className="mt-[55px]">
                <ListItem className="mb-7">
                  <Link to="/">
                    <span className=" font-normal text-[18px] text-white">
                      Home
                    </span>
                  </Link>
                </ListItem>

                <ListItem className="mb-7">
                  <Link>
                    <span className=" font-normal text-[18px] text-white">
                      Menu
                    </span>
                  </Link>
                </ListItem>
              </List>
            </div>
          </div>
          <div className=" w-full md:w-2/12 xl:w-2/12">
            <div className="">
              <h2 className=" font-bold text-[26px] text-white">Company</h2>

              <List className="mt-[55px]">
                <ListItem className="mb-7">
                  <Link to="/">
                    <span className=" font-normal text-[18px] text-white">
                      How we work
                    </span>
                  </Link>
                </ListItem>

                <ListItem className="mb-7">
                  <Link>
                    <span className=" font-normal text-[18px] text-white">
                      FAQ
                    </span>
                  </Link>
                </ListItem>
              </List>
            </div>
          </div>
          <div className=" w-full md:w-4/12 xl:w-4/12">
            <div className="">
              <h2 className=" font-bold text-[26px] text-white">Contact Us</h2>

              <div className=" mt-[55px]">
                <p className=" font-normal text-[18px] text-white">
                  Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                  Bangalore-560016
                </p>
                <p className=" font-normal text-[18px] text-white mt-[22px]">
                  05614144844
                </p>
                <p className=" font-normal text-[18px] text-white mt-[22px]">
                  beanscene@mail.com
                </p>
              </div>
            </div>
          </div>
        </Flex>

        <div className=" text-center mt-5">
          <a className=" font-bold text-sm text-white" href="">
            © Developed by Mahmood Hassan Rameem || ROL Studio || 2024
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
