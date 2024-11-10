import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
import Image from "../../common/Image";

const Speciality = () => {
  return (
    <section className="my-[82px]">
      <Container>
        <h2 className=" font-bold text-3xl md:text-4xl xl:text-[54px] text-title text-center">
          Why are we different?
        </h2>
        <p className=" mt-4 font-normal text-base md:text-lg xl:text-[20px] leading-[34px] text-secondaryText text-center">
          We don’t just make your order, we make your day!
        </p>

        <Flex className=" flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap mt-8 items-center justify-center gap-5">
          <div className=" w-[75%] sm:w-[48%] lg:w-[30%] xl:w-[25%] py-9 px-10 bg-[#FFF9F1] border-[1px] border-[#F9C06A]/40 flex items-center flex-col">
            <Image src={icon1} alt="icon" />

            <h2 className=" font-bold text-[28px] text-title text-center mt-6">
              Good Beans
            </h2>

            <p className=" font-normal text-[20px] text-secondaryText text-center mt-2">
              Beans that provides great taste
            </p>
          </div>
          <div className=" w-[75%] sm:w-[48%] lg:w-[30%] xl:w-[25%] py-9 px-10 bg-[#FFF9F1] border-[1px] border-[#F9C06A]/40 flex items-center flex-col">
            <Image src={icon2} alt="icon" />

            <h2 className=" font-bold text-[28px] text-title text-center mt-6">
              Quality Food
            </h2>

            <p className=" font-normal text-[20px] text-secondaryText text-center mt-2">
              We provide the highest quality
            </p>
          </div>

          <div className=" w-[75%] sm:w-[48%] lg:w-[30%] xl:w-[25%] py-9 px-10 bg-[#FFF9F1] border-[1px] border-[#F9C06A]/40 flex items-center flex-col">
            <Image src={icon3} alt="icon" />

            <h2 className=" font-bold text-[28px] text-title text-center mt-6">
              Extraordinary
            </h2>

            <p className=" font-normal text-[20px] text-secondaryText text-center mt-2">
              We provide the extra ordinary services
            </p>
          </div>
          <div className=" w-[75%] sm:w-[48%] lg:w-[30%] xl:w-[25%] py-9 px-10 bg-[#FFF9F1] border-[1px] border-[#F9C06A]/40 flex items-center flex-col">
            <Image src={icon4} alt="icon" />

            <h2 className=" font-bold text-[28px] text-title text-center mt-6">
              Easy Price
            </h2>

            <p className=" font-normal text-[20px] text-secondaryText text-center mt-2">
              Our prices are easy to afford
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Speciality;
