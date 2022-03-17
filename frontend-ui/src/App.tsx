import React from 'react';
import './styles/root.scss';
import 'antd/dist/antd.css';

import { Progress } from 'antd';
import { Rate } from 'antd';
import Text from './components/Text/Text';
import GameCard from './components/GameCard/GameCard';


function App() {
  return (
    <>
    <div id="container">
        <div id="content">
          <img id="logo" src="https://10bestcasinos.co.uk/assets/1592576083431.svg" />
          <div id="player-offer">
            <Text size={20} height={24} color='#000000'>
              Get 200% Bonus up to <br/>
              $200 + 32 Super Spins 
            </Text>
            <Text size={12} height={14} color='#0F84EB'>
              New player offer - T&#038;Cs apply
            </Text>

            <div id="warning">
              <Text size={12} height={14} color='#C90A0A' display="inline">
                18+
              </Text>
              <Text size={12} height={14} color='#929292' display="inline">
                , Begambleaware.org
              </Text>
            </div>
          </div>

          <div id="games">
            <GameCard src="https://d14egw19m1ttef.cloudfront.net/s3:thetop10casinoscom/assets/Starburst.jpg/fit-in/96x0">
            Buffalo Slot<br/>Machine
            </GameCard>
            <GameCard src="https://d14egw19m1ttef.cloudfront.net/s3:thetop10casinoscom/assets/Money%20Train%202.jpg/fit-in/96x0">
              Starburst™<br/>Slot 
            </GameCard>
            <GameCard src="https://d14egw19m1ttef.cloudfront.net/s3:thetop10casinoscom/assets/9%20Pots%20of%20Gold.jpg/fit-in/96x0">
              Book of Dead<br/>Slot Machine 
            </GameCard>
          </div>

          <div id="rating">
            <Rate style={{ fontSize: 16 }}/>
            <Text size={12} height={14} color='#A5A5AB'>
              Votes (39,338)
            </Text>
            
            <Text size={12} height={14} color='#0F84EB' textDecoration='underline'>
              Read Review
            </Text>
          </div>

          <div id='progress'>
            <Progress width={58} type="circle" percent={70} strokeColor="#F5A623" format={() => 9.8} />
          </div>

          <div id="get-bonus-block">
            <button id="bonus-button">
              Get Bonus
            </button>
            <Text size={12} height={14} color='#A5A5AB'>
              Min. Deposit - £10
            </Text>
          </div>
        </div>

        <footer>
          <Text size={12} height={14} color='#CED0D4'>
            New Customers Only. Opt In Required. 7 Day Free Spin Expiry. New Customers Only. Opt In Required. 7 Day Free Spin Expiry.
            All Free Spins Will Auto Play On First Eligible <br/>Game Loaded. £10 Staking Requirement Must Be Met Within 30 Days Of Opt In. Eligibility 
            Restrictions Apply. 18+ Further T&#038;Cs Apply. Begambleaware.Org
          </Text>
        </footer>
    </div>
    </>
  );
}

export default App;
