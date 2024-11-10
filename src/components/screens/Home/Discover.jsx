import React from "react";
import Container from "../../common/Container";
import Flex from "./../../common/Flex";
import Image from "./../../common/Image";
import dis from "../../../assets/discover.png";

const Discover = () => {
  return (
    <section className=" mt-[82px]">
      <Container>
        <Flex className="items-center flex-col lg:flex-row">
          <div className="w-full lg:w-7/12">
            <h2 className=" font-bold text-3xl md:text-4xl xl:text-[54px] text-title">
              Discover the best drinks
            </h2>

            <p className=" font-normal text-base md:text-lg xl:text-[20px] leading-[34px] text-secondaryText mt-7">
              Your name is a drinks shop that provides you with quality drinks
              that helps boost your productivity and helps build your mood.
              Having a cup of drinks is good, but having a cup of real drinks is
              greater. There is no doubt that you will enjoy this drinks more
              than others you have ever tasted.
            </p>

            <a
              className="py-[14px] px-[26px] bg-primary rounded-[24px] text-primaryText inline-block mt-5 font-bold text-[16px]"
              href=""
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-5/12">
            <Image src={dis} className="w-[70%] mx-auto" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Discover;
