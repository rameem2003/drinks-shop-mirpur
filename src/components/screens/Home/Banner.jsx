import React from "react";
import Container from "../../common/Container";

const Banner = () => {
  return (
    <section className=" pt-[183px] pb-[95px] bg-bgScreen bg-cover bg-no-repeat bg-opacity-0">
      <Container>
        <div className=" text-center md:text-left">
          <h4 className=" font-medium text-sm md:text-lg xl:text-[22px] text-white">
            We’ve got your day covered with
          </h4>

          <h1 className=" font-script font-normal text-[120px] md:text-[180px] xl:text-[220px] text-white">
            Drinks
          </h1>

          <p className=" font-normal text-sm md:text-lg xl:text-[20px] text-white leading-[34px] w-auto md:w-[527px]">
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>

          <a
            className="py-[14px] px-[26px] bg-primary rounded-[24px] text-primaryText inline-block mt-5 font-bold text-[16px]"
            href=""
          >
            Order Now
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
