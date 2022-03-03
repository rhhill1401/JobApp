import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Landing = () => {
  const [hover, setHover] = useState(false);

  function btnHover() {
    setHover(true);
  }

  function btnLeave() {
    setHover(false);
  }
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem sunt adipisci molestias expedita dolores alias at,
            eaque porro provident neque rerum fuga nobis nihil est quibusdam
            soluta reiciendis, ipsam labore!
          </p>
          <Link
            onMouseOver={btnHover}
            onMouseLeave={btnLeave}
            style={{
              backgroundColor: hover
                ? 'var(--textColor)'
                : 'var(--primary-500)',
            }}
            to="/register"
            className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
