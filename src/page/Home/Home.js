import React from "react";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import WidgetBot from '@widgetbot/react-embed'
import './Home.css'

const Home = props => {
  return <div className="backG" >
    <Trading/>
    <Discord/>
    <Music/>
  </div>
};

export default Home;


function Discord(){
  return (<p align="center"><WidgetBot
  server="556716918371909633"
  channel="563368539260715028"
  width="400"
  height="400"
/></p>)
}

function Music(){
  return <center><iframe width="0" height="0" src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
}

function Trading(){
  return(
    <TradingViewWidget
    symbol="BINANCE:BTCUSDT"
    theme={Themes.DARK}
    locale="zh-TW"
    width="800"
    height="400"
  />
  )
}

