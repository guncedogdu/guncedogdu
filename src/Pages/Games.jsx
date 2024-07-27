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
    {gameName:"Penguin Diner", game: "https://html5.gamedistribution.com/d1cfb50813124603a043aef0b9f573ac/"},
    {gameName:"Penguin Diner", game: "https://games.cdn.famobi.com/html5games/c/cannon-balls-3d/v220/?fg_domain=play.famobi.com&fg_aid=A-X95FH&fg_uid=3ffa11c2-61da-4974-892b-473582253371&fg_pid=38369555-834c-45c4-a961-581d698733fc&fg_beat=806&original_ref=https%3A%2F%2Fwww.rekoroyun.com%2F"},
    {gameName:"Kaktüs Adam", game: "https://www.archive.play-games.com/games/waflash/?swf=cactusmccoy.swf&name=Cactus%20McCoy"},
    {gameName:"Penguin Diner", game: "https://g.vseigru.net/dasha1/igry-na-lovkost/doodle-jump/"},
    {gameName:"Penguin Diner", game: "https://w8.snokido.com/games/html5/fpa-world-3/index.html"},
    {gameName:"Penguin Diner", game: "https://g2.igroutka.ru/games/4/raft_wars_2/4399swf/upload_swf/ftp35/liuxinyu/20210301/jj9/index.html"},
    {gameName:"Penguin Diner", game: "https://html5.gamedistribution.com/50f47e5966b1442da8f24dfe020c5b31/"},
    {gameName:"Penguin Diner", game: "//html5.gamedistribution.com/rvvASMiM/ddcba9beafaf409ab581385023761cde/index.html?timestamp=-62135596800&countryCode=tr&siteid=88&channelid=1&siteLocale=tr&locale=tr&gd_sdk_referrer_url=https%3A%2F%2Fwww.oyunskor.com%2Foyun%2Fhill-racing-challenge&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5veXVuc2tvci5jb20vb3l1bi9oaWxsLXJhY2luZy1jaGFsbGVuZ2UiLCJwYXJlbnREb21haW4iOiJveXVuc2tvci5jb20iLCJ0b3BEb21haW4iOiJveXVuc2tvci5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNyJ9"},
    {gameName:"Penguin Diner", game: "https://html5.gamedistribution.com/9467420d5c84482e9087276338a3a7b1/?gdpr-targeting=0&gdpr-tracking=0&gdpr-third-party=0&euConsent=undefined&gd_sdk_referrer_url=https%3A%2F%2Foyungemisi.com%2Fyuzyilin-savasi-oyunu%2F"},
    {gameName:"Penguin Diner", game: "//html5.gamedistribution.com/rvvASMiM/4bb5fdb6c79b4110bb686948244a1525/index.html?gdpr-targeting=1&gdpr-tracking=1&gdpr-third-party=1&euConsent=undefined&gd_sdk_referrer_url=https%3A%2F%2Foyungemisi.com%2Fdeep-worm-oyun%2F&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL295dW5nZW1pc2kuY29tL2RlZXAtd29ybS1veXVuLyIsInBhcmVudERvbWFpbiI6Im95dW5nZW1pc2kuY29tIiwidG9wRG9tYWluIjoib3l1bmdlbWlzaS5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNyJ9"},
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
