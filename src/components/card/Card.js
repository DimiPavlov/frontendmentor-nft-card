import "./card.css";
import EquilibriumImage from "../../public/images/image-equilibrium.jpg";
import EthereumIcon from "../../public/images/icon-ethereum.svg";
import ClockIcon from "../../public/images/icon-clock.svg";
import AvatarImage from "../../public/images/image-avatar.png";
import ViewIcon from "../../public/images/icon-view.svg";

import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <header>
        <div className="image-container">
          <img src={EquilibriumImage} alt="nft" className="header-image" />
          <div className="overlay">
            <img src={ViewIcon} alt="view" className="icon" />
          </div>
        </div>
      </header>
      <main>
        <div>
          <h3 className="equilibrium-text">Equilibrium #3429</h3>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className="icons-container">
          <div className="icon-ethereum-container">
            <img src={EthereumIcon} alt="icon" />
            <span>0.041ETH</span>
          </div>
          <div className="icon-clock-container">
            <img src={ClockIcon} alt="icon" />
            <span>3 days left</span>
          </div>
        </div>
      </main>
      <hr />
      <footer>
        <div className="footer-container">
          <div>
            <img src={AvatarImage} alt="avatar" className="footer-avatar" />
          </div>
          <p className="footer-text">
            Creation of <span className="footer-name"> Jules Wyvern</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Card;
