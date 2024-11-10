import React from "react";
import Container from "./../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import cup from "../../../assets/cup.png";

const CoffeeAdd = () => {
  return (
    <section className=" my-[82px] bg-bgScreenOne py-[54px]">
      <Container>
        <Flex className="items-center flex-col gap-10 md:flex-row">
          <div className="w-full xl:w-6/12 text-center md:text-left">
            <h2 className=" font-bold text-3xl md:text-4xl xl:text-[54px] text-white leading-10">
              Get a chance to have an Amazing morning
            </h2>

            <p className="font-normal text-base md:text-lg xl:text-[20px] leading-[34px] text-white mt-[22px]">
              We are giving you are one time opportunity to experience a better
              life with coffee.
            </p>

            <a
              className="py-[14px] px-[26px] bg-primary rounded-[24px] text-primaryText inline-block mt-[22px] font-bold text-[16px]"
              href=""
            >
              Learn More
            </a>
          </div>

          <div className="w-full xl:w-6/12">
            <Image src={cup} className="w-[70%] mx-auto" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default CoffeeAdd;
