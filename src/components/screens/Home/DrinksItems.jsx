import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import ItemCard from "../../common/ItemCard";

const DrinksItems = () => {
  return (
    <section className=" my-[82px]">
      <Container>
        <h2 className=" font-bold text-3xl md:text-4xl xl:text-[54px] text-title text-center">
          Enjoy a new blend of drinks style
        </h2>
        <p className=" mt-4 font-normal text-base md:text-lg xl:text-[20px] leading-[34px] text-secondaryText text-center">
          Explore all flavours of drinks with us. There is always a new glass
          worth experiencing
        </p>

        <Flex className=" mt-8 gap-5 flex-col sm:flex-wrap sm:flex-row xl:flex-nowrap">
          <ItemCard className="w-full sm:w-[45%] lg:w-[32%] xl:w-[25%] mx-auto mb-10" />
          <ItemCard className="w-full sm:w-[45%] lg:w-[32%] xl:w-[25%] mx-auto mb-10" />
          <ItemCard className="w-full sm:w-[45%] lg:w-[32%] xl:w-[25%] mx-auto mb-10" />
          <ItemCard className="w-full sm:w-[45%] lg:w-[32%] xl:w-[25%] mx-auto mb-10" />
        </Flex>

        <div className=" text-center mt-10">
          <button className=" py-[14px] px-[26px] bg-primary rounded-[24px] text-primaryText inline-block  font-bold text-[16px]">
            Show More
          </button>
        </div>
      </Container>
    </section>
  );
};

export default DrinksItems;
