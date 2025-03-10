import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Hero section */}
      <section>
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
      </section>
    </div>
  );
};

export default HomePage;
