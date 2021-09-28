import React from "react";
import "./Home.styles.scss";
import ButtonLink from "../components/ui/ButtonLink";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* slide */}
        <div className="home__slide">
          <div className="row my-3">
            <div className="col-lg-12">
              <img src="./images/slide.png" alt="slide" />
              <ButtonLink link="/" className="buttonlk--slide">
                Shop now
              </ButtonLink>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="home__type">
          <div className="row mb-4">
            <div className="col-lg-3">
              <img className="home__img" src="./images/men.png" alt="men" />
              <div className="home__info">
                <h6>Men</h6>
                <hr className="home__hr" />
                <ButtonLink link="/" className="">
                  Shop now
                </ButtonLink>
              </div>
            </div>
            <div className="col-lg-3">
              <img
                className="home__img"
                src="./images/ladies.png"
                alt="ladies"
              />
              <div className="home__info">
                <h6>Ladies</h6>
                <hr className="home__hr" />
                <ButtonLink link="/" className="">
                  Shop now
                </ButtonLink>
              </div>
            </div>
            <div className="col-lg-3">
              <img className="home__img" src="./images/girls.png" alt="girls" />
              <div className="home__info">
                <h6>Girls</h6>
                <hr className="home__hr" />
                <ButtonLink link="/" className="">
                  Shop now
                </ButtonLink>
              </div>
            </div>
            <div className="col-lg-3">
              <img className="home__img" src="./images/boys.png" alt="boys" />
              <div className="home__info">
                <h6>Boys</h6>
                <hr className="home__hr" />
                <ButtonLink link="/" className="">
                  Shop now
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
