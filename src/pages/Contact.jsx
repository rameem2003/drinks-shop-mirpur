import React from "react";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";

const Contact = () => {
  return (
    <main>
      <section className="pt-[150px] pb-[100px] bg-bgScreen bg-cover bg-no-repeat bg-opacity-0">
        <Container>
          <h2 className=" font-bold text-4xl text-white text-center">
            Contact us
          </h2>
        </Container>
      </section>

      <Container>
        <Flex className="my-10 flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-6/12">
            <div className="">
              <h2 className=" font-bold text-[26px] text-black">Contact Us</h2>

              <div className=" mt-[55px]">
                <p className=" font-bold text-[18px] text-black">
                  Address: Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                  Bangalore-560016
                </p>
                <p className=" font-bold text-[18px] text-black mt-[22px]">
                  Phone: 05614144844
                </p>
                <p className=" font-bold text-[18px] text-black mt-[22px]">
                  Email: beanscene@mail.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d322.6494621069852!2d90.38523084818712!3d23.805724527175634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1731229340606!5m2!1sbn!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default Contact;
