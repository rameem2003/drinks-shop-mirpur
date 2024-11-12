import React from "react";
import Container from "../components/common/Container";

const ErrorPage = () => {
  return (
    <main className="">
      <section className="  pt-[250px] pb-[250px] bg-bgScreenOne bg-cover bg-no-repeat bg-opacity-0">
        <Container>
          <h1 className=" font-bold text-9xl text-white font-script">404</h1>
          <h2 className=" font-semibold text-4xl text-white">Not Found</h2>
        </Container>
      </section>
    </main>
  );
};

export default ErrorPage;
