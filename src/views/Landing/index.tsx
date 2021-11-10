import './landing.scss';
import { useState } from 'react';
import Header from '../../components/LandingHeader';
import Stat from './components/Stat';
import { Backdrop, Button, Link, Paper } from '@material-ui/core';
import Shell from './shell.png';
import SecondSection from './components/SecondSection';
import Footer from './components/Footer';
import { DiscordLink, TwitterLink } from 'src/constants';
import TwitterIcon from './images/twitter.svg';
import DiscordIcon from './images/icon_discord.svg';
// import GithubIcon from './images/icon_github.svg';
import Otter01 from './images/otter_01.png';
import CloseIcon from './images/icon_24x24_close.svg';
import Countdown from './components/Countdown';
import WhiteList from '../WhiteList';

function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="landing">
      <Header />
      <section className="landing__first-section">
        <div className="landing__first-section__title">
          <h1>The Ultimate Ponzi</h1>
        </div>
        <div className="landing__first-section__subtitle">
          <p>
            (<span style={{ fontSize: '32px' }}>⟁, ⟁</span>) is the new (3,3)
          </p>
        </div>
        <div className="landing__first-section__body">
          <div className="landing__first-section__body__left">
            <div className="landing__first-section__body__title">
              <p>Next generation</p>
              <p>OHM fork on BSC</p>
            </div>
            <div className="landing__first-section__body__subtitle">
              <p>Ponzi is always. Ponzi is forever.</p>
            </div>
            <a className="landing__first-section__body__app-button" href="https://app.theultimateponzi.com">
              <Button
                variant="contained"
                style={{ backgroundColor: 'black', color: 'white' }}
                size="medium"
                disableElevation
              >
                <b>Enter APP</b>
              </Button>
            </a>
            {/* <div className="community-icons">
              <Link href={TwitterLink} className="community-icon-link">
                <img src={TwitterIcon} />
              </Link>
              <Link href={DiscordLink} className="community-icon-link">
                <img src={DiscordIcon} />
              </Link>
              <Link href={GithubLink} className="community-icon-link">
                <img src={GithubIcon} />
              </Link>
            </div> */}
          </div>
          <div className="otter01">
            <img src={Otter01} alt="otter01" />
          </div>
        </div>
        <div className="landing__first-section__footer">
          <img className="landing__first-section__footer__shell" src={Shell} alt="shell" />
          <div className="landing__first-section__footer__wave" />
          <div className="landing__first-section__footer__banner">
            <p>Public Launch</p>
            <span style={{ color: '#3B4BD8' }}>Nov 13, 2021 2PM UTC</span>
            <div className="action-buttons-container">
              <a href="https://ido.theultimateponzi.com">
                <Button
                  variant="outlined"
                  size="medium"
                  disableElevation
                  style={{ color: 'black', border: '2px solid black' }}
                >
                  <b>Join IDO</b>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
