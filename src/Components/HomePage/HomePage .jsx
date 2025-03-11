import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <section>
      <div>
        <title>Home</title>
      </div>
      {/* Hero section */}
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/5WXPwyz/camylla-battani-ABVE1cy-T7hk-unsplash.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Uniting Faith & Passion
              </h1>
              <p className="mb-5">
                Our platform connects people of diverse faiths and interests
                through events, discussions, and community support. We foster
                meaningful connections, encouraging unity, understanding, and
                shared experiences. Join us to explore, engage, and build a
                harmonious community where beliefs and passions come together.
              </p>
              <NavLink
                to={"/event-list"}
                className="btn bg-indigo-950 text-white hover:bg-indigo-900 border-none text-2xl shadow-none py-6"
              >
                Explore Events
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* About section */}
      <div id="about" className="mt-10 px-10">
        <h1 className="text-4xl font-bold text-center">
          Welcome to our Communion
        </h1>
        <p className="text-lg text-center mt-4  mb-5">
          Communion App is designed to bring people together, fostering unity
          and connection across different faiths and communities. Whether you're
          looking to participate in spiritual gatherings, cultural celebrations,
          or community-driven initiatives, our platform helps you discover
          meaningful events and engage with like-minded individuals. We believe
          in inclusivity, understanding, and shared experiences that strengthen
          relationships. Explore opportunities to grow, learn, and support one
          another through a network that values diversity and togetherness. Stay
          informed about upcoming events, connect with local groups, and make a
          difference by participating in discussions and activities that align
          with your interests and beliefs.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
