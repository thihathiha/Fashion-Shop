import { Link } from "react-router";

function Home() {
  return (
    <>
      <section className="flex grow items-center bg-gray-100">
        <div className="text-center p-8 lg:text-left lg:p-16">
          <h1 className="text-3xl font-bold lg:text-5xl">Welcome to Our Fashion Shop</h1>
          <p className="my-6 text-lg lg:text-xl">
            This is a simple landing page built with React, Typescript, and
            Tailwind CSS.
          </p>
          <Link
            to="/shop"
            className="rounded-md bg-blue-400 px-6 py-3 text-white hover:bg-blue-500"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
