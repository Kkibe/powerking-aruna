import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function AppHelmet({title, location}) {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{title} | FLASH VIP TIPS - Fixed VIP Football Tips, Insights and News.</title>
        <link rel="canonical" href={`${window.location.hostname}`} />
        <base href={window.location.hostname}></base>
        <meta name="description" content={"Get all the latest ✓Fixed VIP Tips ✓Football Predictions, ✓Latest Football Betting Odds and livescores, results & fixtures for all leagues and competitions, including the Premier League, Championship and across the world."}/>
    </Helmet>
  )
}
