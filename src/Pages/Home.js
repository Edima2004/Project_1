import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home-bottom">
        <h1 className="home-center">
          FIRST EVER TECH PERSONALITY AWARD FOR AFRICANS IN EUROPE
        </h1>
        <aside className="home-box home-center">
          {" "}
          <input
            className="home-input"
            type="search"
            placeholder="Nominee's Name"
          />
          <button className="home-search">Search</button>
        </aside>
        <p className="home-p">
          <span>
            View all Categories{" "}
            <span className="arrow">
              <a href="/votingCategories">
                <img src="../next-arrow.png" alt="arrow" />
              </a>
            </span>
          </span>
        </p>
      </div>
      <div className="home-footer home-space-bot">
        <img
          className="home_target donate-img noShow"
          src="../home_top_all_back.png"
          alt="target"
        />
        <img
          className="home-img_1 home_target donate-img"
          src="../home-desktop.png"
          alt="target"
        />
      </div>
      <div className="home-section">
        <div className="home-section home-flex">
          <div>
            <aside className="home-center">
              <img
                className="home-center"
                src="../home_people.png"
                alt="home_people"
              />
            </aside>
          </div>
          <div>
            <aside className="home-text">
              <h2>The Connected Awards</h2>
              <img src="../home-line.png" alt="rectangle" />
              <br />
              <br />
              <p>
                The connected is.....It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </aside>
            <button className="home-search btn-home">
              <a className="head-new" href="./connectedTechies">
                Learn more
              </a>
            </button>{" "}
            <img
              className="home_right_logo"
              src="../home_right.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="home-flex home-flex2">
          <div>
            <aside className="home-center home-img2 ">
              <img
                className=" home-center "
                src="../home_people2.png"
                alt="home_people"
              />
            </aside>
          </div>
          <div>
            <aside className="home-text">
              <h2>Past Editions</h2>
              <img src="../home-line.png" alt="rectangle" />
              <br />
              <br />
              <p>
                The connected is.....It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </aside>
            <button className="home-search btn-home">
              <a href="./celebratedTechies" className="head-new">
                Read more
              </a>
            </button>
            <img
              className="home-left-logo"
              src="../home_left.png"
              alt="home_logo"
            />{" "}
          </div>
        </div>
      </div>
      <header className="home-center home-talent">
        <section>
          <img src="../home_bottom_one.png" alt="home_bottom" />
          <h2>Promising Talent</h2>
          <p>
            Promising Talent is an individual with less than 5 years experience
            in Nigeria technology ecosystem. Such individual are well recognized
            in their field for impacting with their skills.
          </p>
        </section>
        <section>
          <img src="../home_bottom_two.png" alt="home_bottom" />
          <h2>Intermediate Talent</h2>
          <p>
            Intermediate Talent is an individual with less than 5 years
            experience in Nigeria technology ecosystem. Such individual are well
            recognized in their field for impacting with their skills.
          </p>
        </section>
        <section>
          <img src="../home_bottom_three.png" alt="home_bottom" />
          <h2>Exceptional Talent</h2>
          <p>
            Promising Talent is an individual with more than 5 years experience
            in Nigeria technology ecosystem. Such individual are well recognized
            in their field for impacting with their skills.
          </p>
        </section>
      </header>
      <footer>
        <img
          className="donate-img noShow"
          src="../home_footer.png"
          alt="home-footer"
        />
        <img
          className="home-img_1 home_target donate-img"
          src="../home-footer-desktop.png"
          alt="target"
        />
      </footer>
    </div>
  );
};

export default Home;
