import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const Games = () => {
  const items = [
    {gameName:"Ateş ve Su", game: "https://html5.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75/?timestamp=-62135596800&amp;countryCode=tr&amp;siteid=88&amp;channelid=1&amp;siteLocale=tr&amp;locale=tr&amp;gd_sdk_referrer_url=https%3A%2F%2Fwww.oyunskor.com%2Foyun%2Fates-ve-su"},
    {gameName:"Kory the Thief", game: "https://yombie.com/especial/kory-the-thief.swf/kory-the-thief"},
    {gameName:"Barmen", game: "https://bartender-the-right-mix.game-files.crazygames.com/ruffle/bartendertherightmix.html?v=1.294"},
    {gameName:"Ultimate Flash Sonic", game: "https://www.gamenora.com/upload/games/swf/SonicFlash/"},
    {gameName:"Regular Show Ultimate Fist Punch", game: "https://emea.iframed.cn.dmti.cloud/content/344/game/fist-punch/uk/fistpunch-170818/index.html?pageName=cn/regular-show-fist-punch&gametitle=Fist%20Punch&server=web|www.cartoonnetwork.co.uk&OnetrustActiveGroups=,req,BG2373,"},
    {gameName:"Home Sheep Home", game: "https://www.gameflare.com/embed/home-sheep-home/"},
    {gameName:"Penguin Diner", game: "https://html5.gamedistribution.com/dd108118c3aa426e88fe2f7baebfd72b/?gd_sdk_referrer_url=https%3A%2F%2Fwww.crazygames.com%2Fgame%2Fpenguin-diner"},
  ];

  return (
    <div className="games">
      <div className="games-list">
        {items.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>{item.gameName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                src={item.game}
                width="900"
                height="510"
                scrolling="none"
                frameBorder="0"
                webkitAllowFullScreen
                mozAllowFullScreen
                allowFullScreen
              ></iframe>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Games;
