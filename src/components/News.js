import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'



export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category:'science',
  }
  static  propTypes = {
    country:PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
  }


  articles = [
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Justine Calma",
      "title": "Can banks push Bitcoin to clean up its act?",
      "description": "Banks and asset managers have a big stake in Bitcoin, so Greenpeace wants them to crack down on the cryptocurrency’s pollution.",
      "url": "https://www.theverge.com/2023/7/11/23778688/bitcoin-energy-emissions-climate-change-banks-asset-managers-greenpeace",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/ODx_QBV2qCE_dfhHtwtaZ8W6J8I=/0x0:7144x4743/1200x628/filters:focal(3572x2372:3573x2373)/cdn.vox-cdn.com/uploads/chorus_asset/file/24763884/1235926940.jpg",
      "publishedAt": "2023-07-11T14:00:00Z",
      "content": "Can banks push Bitcoin to clean up its act?\r\nCan banks push Bitcoin to clean up its act?\r\n / Banks and asset managers have a big stake in Bitcoin, so Greenpeace wants them to crack down on the crypto… [+4372 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Igor Bonifacic",
      "title": "Twitter hacker and crypto scammer sentenced to five years in prison",
      "description": "On Friday, a federal court sentenced Joseph James O’Conner\r\n to five years in prison for his involvement in the 2020 Twitter hack\r\n. Last month, the 24-year-old, known as PlugwalkJoe online, plead guilty\r\n to a host of cyber crimes, including carrying out a S…",
      "url": "https://www.engadget.com/twitter-hacker-and-crypto-scammer-sentenced-to-five-years-in-prison-205649771.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/AyF3IKBq4cDibrXjEisFbg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/8bb3bc70-ef14-11ed-beda-55f5a49aaab2.cf.jpg",
      "publishedAt": "2023-06-24T20:56:49Z",
      "content": "On Friday, a federal court sentenced Joseph James OConner\r\n to five years in prison for his involvement in the 2020 Twitter hack\r\n. Last month, the 24-year-old, known as PlugwalkJoe online, plead gui… [+1117 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Bitcoin rises 5.1% at $28211 - Reuters.com",
      "description": "Bitcoin rises 5.1% at $28211  Reuters.com",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiRWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1yaXNlcy01MS0yODIxMS0yMDIzLTA2LTIwL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-06-20T21:00:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "SEC says spot bitcoin ETF filings are inadequate - WSJ - Reuters.com",
      "description": "SEC says spot bitcoin ETF filings are inadequate - WSJ  Reuters.com",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvc2VjLXNheXMtc3BvdC1iaXRjb2luLWV0Zi1maWxpbmdzLWFyZS1pbmFkZXF1YXRlLXdzai0yMDIzLTA2LTMwL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-06-30T13:47:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Analysis: Fever over BlackRock's bitcoin fund faces chill of rate hikes ... - Reuters.com",
      "description": "Analysis: Fever over BlackRock's bitcoin fund faces chill of rate hikes ...  Reuters.com",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvZmV2ZXItb3Zlci1ibGFja3JvY2tzLWJpdGNvaW4tZnVuZC1mYWNlcy1jaGlsbC1yYXRlLWhpa2VzLXJlZ3VsYXRpb25zLTIwMjMtMDYtMjYv0gEA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-06-26T12:39:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Bitcoin eyes third straight day of gains after touching two-month high - Reuters",
      "description": "Bitcoin eyes third straight day of gains after touching two-month high  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1leWVzLXRoaXJkLXN0cmFpZ2h0LWRheS1nYWlucy1hZnRlci10b3VjaGluZy10d28tbW9udGgtaGlnaC0yMDIzLTA2LTIxL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-06-21T22:44:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Cryptoverse: Busy bitcoin gives birth to a new breed of crypto ... - CryptoSaurus",
      "description": "Cryptoverse: Busy bitcoin gives birth to a new breed of crypto ...  CryptoSaurus",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vY3J5cHRvc2F1cnVzLnRlY2gvY3J5cHRvdmVyc2UtYnVzeS1iaXRjb2luLWdpdmVzLWJpcnRoLXRvLWEtbmV3LWJyZWVkLW9mLWNyeXB0by1yZXV0ZXJzLWNvbS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-06-19T04:46:03Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Analysis: Partnering with Coinbase could hinder bid for bitcoin ETF approval - Reuters",
      "description": "Analysis: Partnering with Coinbase could hinder bid for bitcoin ETF approval  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvcGFydG5lcmluZy13aXRoLWNvaW5iYXNlLWNvdWxkLWhpbmRlci1iaWQtYml0Y29pbi1ldGYtYXBwcm92YWwtMjAyMy0wNy0xMy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-07-13T20:05:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Fidelity preparing to submit spot bitcoin ETF filing - The Block - Reuters.com",
      "description": "Fidelity preparing to submit spot bitcoin ETF filing - The Block  Reuters.com",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvZmlkZWxpdHktcHJlcGFyaW5nLXN1Ym1pdC1zcG90LWJpdGNvaW4tZXRmLWZpbGluZy1ibG9jay0yMDIzLTA2LTI3L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-06-27T14:30:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Coinbase surges after Cboe names crypto exchange in bitcoin ETF ... - Reuters",
      "description": "Coinbase surges after Cboe names crypto exchange in bitcoin ETF ...  Reuters",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY29pbmJhc2Utc3VyZ2VzLWFmdGVyLWNib2UtbmFtZXMtY3J5cHRvLWV4Y2hhbmdlLWJpdGNvaW4tZXRmLWFwcGxpY2F0aW9uLTIwMjMtMDctMDMv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-07-03T17:35:00Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Matthew Fox",
      "title": "Bitcoin dips after the SEC reportedly says recent ETF applications from BlackRock and Fidelity are inadequate",
      "description": "The SEC welcomed revisions and updates from the asset managers and an eventual refiling of the application, taking into account the agency's feedback.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-sec-says-spot-etf-applications-blackrock-fidelity-inadequate-2023-6",
      "urlToImage": "https://i.insider.com/649f038dfd8a3e0019122191?width=1200&format=jpeg",
      "publishedAt": "2023-06-30T17:17:18Z",
      "content": "SEC Chair Gary GenslerEvelyn Hockstein/Associated Press\r\n<ul><li>Bitcoin fell 2% on Friday after the SEC reportedly said recent ETF applications are inadequate.</li><li>BlackRock and Fidelity recentl… [+2543 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "Bitcoin could surge 300% to $120,000 next year as miners reduce token sales, Standard Chartered says",
      "description": "\"On that basis, selling just 27% of BTC mined in Q1-2024 would generate the same absolute level of excess cash as selling 100% in Q2-2023.\"",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-120000-crypto-mining-profit-btc-sales-2023-7",
      "urlToImage": "https://i.insider.com/64abfc4b6d7e02001af89f93?width=1200&format=jpeg",
      "publishedAt": "2023-07-10T15:20:20Z",
      "content": "Bitcoin illustrationGetty Images\r\n<ul>\n<li>Bitcoin's price could reach $50,000 this year and $120,000 by the end of 2024, Standard Chartered said.</li>\n<li>The bank said bitcoin has additional upside… [+2551 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "Michael Saylor touts a new massive bitcoin haul as MicroStrategy now 'hodls' $4.6 billion worth of tokens",
      "description": "The purchase of 12,333 bitcoins brings MicroStrategy's total stockpile to 152,333 tokens.",
      "url": "https://markets.businessinsider.com/news/currencies/michael-saylor-microstrategy-bitcoin-hodl-cryptocurrency-token-currency-bull-markets-2023-6",
      "urlToImage": "https://i.insider.com/649c2701ec2dd400195fbc13?width=1200&format=jpeg",
      "publishedAt": "2023-06-28T13:10:02Z",
      "content": "MicroStrategy CEO Michael SaylorJoe Raedle/Getty Images\r\n<ul>\n<li>Michael Saylor's MicroStrategy bought an additional 12,333 bitcoin, for about $347 million.</li>\n<li>That brings the company's total … [+2124 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ReadWrite"
      },
      "author": "Deanna Ritchie",
      "title": "Breaking News: HSBC Hong Kong Embraces Crypto with Bitcoin and Ether ETF Trading",
      "description": "The HSBC Hong Kong branch is the first in the Hong Kong SAR to provide Bitcoin and Ether Exchange Traded […]\nThe post Breaking News: HSBC Hong Kong Embraces Crypto with Bitcoin and Ether ETF Trading appeared first on ReadWrite.",
      "url": "https://readwrite.com/breaking-news-hsbc-hong-kong-embraces-crypto-with-bitcoin-and-ether-etf-trading/",
      "urlToImage": "https://images.readwrite.com/wp-content/uploads/2023/06/thought-catalog-I0TDRP0fj6Y-unsplash.jpg",
      "publishedAt": "2023-06-27T16:45:25Z",
      "content": "The HSBC Hong Kong branch is the first in the Hong Kong SAR to provide Bitcoin and Ether Exchange Traded Funds (ETFs). This development is the result of pressure from the region’s banking authority o… [+2667 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "'Battle-tested' bitcoin could reach $200,000 as top Wall Street names jump in, Fundstrat's Tom Lee says",
      "description": "Fundstrat head of research Tom Lee expects bitcoin to keep climbing as the regulatory crackdown shifts the crypto market in the token's favor.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-forecast-crypto-currency-sec-blackrock-gains-tom-lee-fundstrat-2023-6",
      "urlToImage": "https://i.insider.com/5f4521b589aff80028ab7b9d?width=1200&format=jpeg",
      "publishedAt": "2023-06-26T14:51:47Z",
      "content": "Cindy Ord/Getty Images\r\n<ul>\n<li>Bitcoin could eventually rise to $200,000, Fundstrat's Tom Lee told CNBC.</li>\n<li>The token will get a boost from the regulatory crackdown on digital assets and from… [+2403 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Theron Mohamed",
      "title": "US home prices are poised to tumble - while bitcoin may surge to $50,000 by December, crypto investor says",
      "description": "Steeper interest rates will hammer residential and commercial real estate, while mainstream support will boost bitcoin, ProChain's David Tamil said.",
      "url": "https://markets.businessinsider.com/news/currencies/house-prices-commercial-real-estate-interest-rates-bitcoin-crypto-prochain-2023-7",
      "urlToImage": "https://i.insider.com/5ba14a6a0ce5f519008b6400?width=1200&format=jpeg",
      "publishedAt": "2023-07-10T11:22:16Z",
      "content": "Elevated interest rates will pull down home prices, one investor says.David McNew/Getty Images\r\n<ul>\n<li>US real estate will crumble under the weight of higher interest rates, ProChain's David Tamil … [+2318 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "George Glover",
      "title": "Bitcoin stages a comeback, rallying 25% since BlackRock filed for its crypto fund",
      "description": "Bitcoin has soared since June 15, the date that the world's largest asset manager filed for its spot ETF.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-investing-outlook-blackrock-spot-etf-larry-fink-2023-7",
      "urlToImage": "https://i.insider.com/64a675e04cc8540019cb87d3?width=1200&format=jpeg",
      "publishedAt": "2023-07-06T09:06:35Z",
      "content": "BlackRock CEO Larry Fink.Thos Robinson/Getty Images for The New York Times\r\n<ul>\n<li>Bitcoin has staged a comeback this year, rebounding by almost 90% after a dismal 2022.</li>\n<li>The cryptocurrency… [+1850 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "Bitcoin Briefly Pushes Above $31K After Fidelity Spot ETF Filing",
      "description": "Asset management giant Fidelity is preparing to submit its own filing for a spot bitcoin exchange-traded fund. The news helped push bitcoin above the $31,000 mark earlier today. The Block reports: The launch of a spot bitcoin ETF has been described as a gamec…",
      "url": "https://slashdot.org/story/23/06/27/2218252/bitcoin-briefly-pushes-above-31k-after-fidelity-spot-etf-filing",
      "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      "publishedAt": "2023-06-28T01:10:00Z",
      "content": "The launch of a spot bitcoin ETF has been described as a gamechanger among market pundits since it can provide a way for investors to get exposure to the market without having to deal with the underl… [+839 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "Bitcoin held by illiquid entities is at an all-time high as demand for the token climbs",
      "description": "The total held by illiquid entities, or those with little-to-no spending history, is now at a record high 15,207,843 tokens.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-cryptocurrency-illiquid-price-tokens-markets-record-demand-rally-btc-2023-6",
      "urlToImage": "https://i.insider.com/6493236b1465b60019987dc1?width=1200&format=jpeg",
      "publishedAt": "2023-06-21T16:54:36Z",
      "content": "NurPhoto / Contributor\r\n<ul>\n<li>The total held by illiquid entities, or those with little-to-no spending history, hit a record high 15,207,843 tokens.</li>\n<li>Bitcoin climbed 9% Wednesday, and the … [+1658 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "George Glover",
      "title": "BlackRock wants to launch a bitcoin ETF. Why now?",
      "description": "BlackRock's CEO talked up bitcoin last week, with the asset management giant in the process of launching a fund that tracks the cryptocurrency.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-crypto-blackrock-larry-fink-wall-street-love-hate-relationship-2023-7",
      "urlToImage": "https://i.insider.com/64abe0fe6d7e02001af89dfe?width=1200&format=jpeg",
      "publishedAt": "2023-07-10T14:02:18Z",
      "content": "BlackRock CEO Larry Fink.AP\r\n<ul>\n<li>BlackRock's CEO talked up bitcoin last week, with the asset manager trying to launch a fund that tracks it.</li>\n<li>Cryptocurrencies could \"revolutionize\" finan… [+2268 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "George Glover",
      "title": "BlackRock wants to launch a bitcoin ETF. Why now?",
      "description": "BlackRock's CEO talked up bitcoin last week, with the asset management giant in the process of launching a fund that tracks the cryptocurrency.",
      "url": "https://www.businessinsider.com/bitcoin-crypto-blackrock-larry-fink-wall-street-love-hate-relationship-2023-7",
      "urlToImage": "https://i.insider.com/64abe0fe6d7e02001af89dfe?width=1200&format=jpeg",
      "publishedAt": "2023-07-10T12:00:26Z",
      "content": "BlackRock CEO Larry Fink.AP\r\n<ul>\n<li>BlackRock's CEO talked up bitcoin last week, with the asset manager trying to launch a fund that tracks it.</li>\n<li>Cryptocurrencies could \"revolutionize\" finan… [+2268 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Aaron McDade",
      "title": "Bomb threats demanding ransom payments are a new headache for retailers including Walmart, Kroger and Whole Foods, report says",
      "description": "A series of bomb threats made in recent months to retailers across the US could be connected as all appear to demand money, bitcoin, or gift cards.",
      "url": "https://www.businessinsider.com/bomb-threats-ransom-demands-hitting-retailers-including-kroger-report-2023-6",
      "urlToImage": "https://i.insider.com/63936fa0a3bebb0018b3dab6?width=1200&format=jpeg",
      "publishedAt": "2023-06-25T15:41:44Z",
      "content": "Whole Foods and Walmart are among the retailers targeted by bomb threats, the Wall Street Journal reported.Insider\r\n<ul>\n<li>A spate of retailers have been hit by bomb threats in recent months, The W… [+2637 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Rebecca Ungarino",
      "title": "BlackRock applied to launch a bitcoin fund. Then came the conspiracy theories.",
      "description": "Crypto represents another front in conspiracy theories that surround BlackRock, the money management giant that finds itself in an unusual position.",
      "url": "https://www.businessinsider.com/blackrock-spot-bitcoin-etf-crypto-reactions-2023-6",
      "urlToImage": "https://i.insider.com/6493291d1465b60019987edc?width=1200&format=jpeg",
      "publishedAt": "2023-06-21T18:54:48Z",
      "content": "BlackRock CEO Larry Fink. Crypto influencers have seized on the firm's efforts to launch a spot bitcoin ETF.AP\r\n<ul>\n<li>Crypto influencers seized on BlackRock's application to launch a bitcoin excha… [+4708 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "BlackRock Has 'Responsibility To Democratize Investing', Including in Crypto, Larry Fink Says",
      "description": "BlackRock's move into crypto fits into the asset management giant's broader mission of creating products that are easy to use and cheap for investors, CEO Larry Fink said Friday. From a report: \"We believe we have a responsibility to democratize investing. We…",
      "url": "https://news.slashdot.org/story/23/07/14/1911231/blackrock-has-responsibility-to-democratize-investing-including-in-crypto-larry-fink-says",
      "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      "publishedAt": "2023-07-14T19:20:00Z",
      "content": "\"We believe we have a responsibility to democratize investing. We've done a great job, and the role of ETFs in the world is transforming investing. And we're only at the beginning of that,\" Fink said… [+786 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Jennifer Sor",
      "title": "Dogecoin and other meme cryptos surge as bitcoin breaks out above $30,000",
      "description": "The total market value of the top meme cryptos rose 8% to $15.7 billion in the last 24 hours alone, according to data from CoinGecko.",
      "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-today-dogecoin-pepe-shib-meme-crypto-regulation-2023-6",
      "urlToImage": "https://i.insider.com/635bf6753e1cce00181b78e2?width=1200&format=jpeg",
      "publishedAt": "2023-06-22T13:42:16Z",
      "content": "Yuriko Nakao/Getty Images\r\n<ul>\n<li>Bitcoin pushed past $30,000 this week, causing meme crypto tokens to surge.</li>\n<li>The value of the top meme tokens rose 8% to $15.7 billion in the last 24 hours… [+1907 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Arwa Mahdawi",
      "title": "The key to wedded bliss is a joint bank account? I don’t buy it | Arwa Mahdawi",
      "description": "My wife and I trust one another with our finances, but we have never opened a shared account. When it comes to a happy marriage, there is an easier way ...A few years ago I had a terrible shock: a bank statement arrived at my house with an extremely large num…",
      "url": "https://www.theguardian.com/money/2023/jun/28/the-key-to-wedded-bliss-is-a-joint-bank-account-i-dont-buy-it",
      "urlToImage": "https://i.guim.co.uk/img/media/5274ebebbfebc91c22ae8a80d50bb9a474f3576a/0_456_8194_4917/master/8194.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=3a5e3ff2f901c4d01fe90de1f2733a52",
      "publishedAt": "2023-06-28T10:00:03Z",
      "content": "A few years ago I had a terrible shock: a bank statement arrived at my house with an extremely large number on it. According to this letter, I was filthy rich! I stared at the statement for a long ti… [+1504 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Gregory Barber",
      "title": "Can Twitter Alternatives Escape the Enshittification Trap?",
      "description": "People have flocked to Bluesky and Threads. But the new platforms risk repeating a pattern that has caused social media giants to turn against their own users.",
      "url": "https://www.wired.com/story/plaintext-twitter-alternatives-enshittification-trap/",
      "urlToImage": "https://media.wired.com/photos/64a755f6d96882f74caa3fd1/191:100/w_1280,c_limit/Threads-Bluesky-Enshittification-Trap-Business-182410760.jpg",
      "publishedAt": "2023-07-07T13:00:00Z",
      "content": "Is it possible for a social media platform to plan for its own death? Ive been thinking about that while enjoying Blueskys fizzy, fuck-around energy, as my WIRED colleague Kate Knibbs described the (… [+3825 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Crypto Miner Hive Drops 'Blockchain' From Name in Pivot To AI",
      "description": "The crypto-mining company formerly known as Hive Blockchain Technologies is pivoting to artificial intelligence and web3, and has changed its name accordingly. From a report: The Vancouver-based miner has dropped the \"blockchain\" marker and said that its new …",
      "url": "https://slashdot.org/story/23/07/12/1923257/crypto-miner-hive-drops-blockchain-from-name-in-pivot-to-ai",
      "urlToImage": "https://a.fsdn.com/sd/topics/ai_64.png",
      "publishedAt": "2023-07-12T19:23:00Z",
      "content": "The Vancouver-based miner has dropped the \"blockchain\" marker and said that its new branding as Hive Digital Technologies is intended to reflect \"its mission to drive advancements\" in AI applications… [+688 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Jennifer Sor",
      "title": "US stocks fall as private payroll data suggests more Fed rate hikes are coming",
      "description": "A massive beat on ADP payroll data caused odds of a 25 basis-point rate hike this month to jump to 95%, according to the CME FedWatch Tool.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-us-economy-fed-interest-rate-hike-inflation-2023-7",
      "urlToImage": "https://i.insider.com/64a6bf9e6075be0019c2cf0a?width=1200&format=jpeg",
      "publishedAt": "2023-07-06T13:54:17Z",
      "content": "NEW YORK, NY - AUGUST 07: A 'now hiring' sign is viewed in the window of a fast food restaurant on August 7, 2012 in New York City.Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks slipped on Thursday a… [+2267 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "US stocks jump to close strong 2nd quarter as Nasdaq has best first half in decades",
      "description": "The Nasdaq 100 nearly broke a previous first half record with a 32% gain, as AI-linked mega-cap stocks continued to rally.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-nasdaq-first-half-tech-rally-2023-6",
      "urlToImage": "https://i.insider.com/649f306a6e35e9001af929a8?width=1200&format=jpeg",
      "publishedAt": "2023-06-30T20:20:47Z",
      "content": "Traders work on the floor of the New York Stock Exchange (NYSE) on March 28, 2023 in New York City.Spencer Platt/Getty Images\r\n<ul>\n<li>Mega-cap stocks helped end the second quarter with a bang.</li>… [+2135 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Zahra Tayeb",
      "title": "More than $120 million of a crypto firm's assets were moved to an unknown address - weeks after its CEO disappeared, report says",
      "description": "Multichain, a cross-chain router, said assets were moved to an unknown address \"abnormally\" and recommended users stop using its platform.",
      "url": "https://markets.businessinsider.com/news/currencies/crypto-multichain-120-million-assets-moved-unknown-address-ceo-disappearane-2023-7",
      "urlToImage": "https://i.insider.com/6409ad7a75a7270019db0bb7?width=1200&format=jpeg",
      "publishedAt": "2023-07-07T15:33:44Z",
      "content": "Multichain, a crypto firm, is missing money and its CEO.NurPhoto / Contributor\r\n<ul>\n<li>More than $120 million of a crypto firm's assets were \"abnormally\" moved to an unknown address, Bloomberg repo… [+2227 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
      "title": "'Rich Dad Poor Dad' author Robert Kiyosaki warns the dollar 'will die' as BRICS nations eye gold-backed alternative",
      "description": "Recently, the Russian embassy in Kenya said the BRICS group of countries are working on a common currency backed by gold in a bid to dedollarize.",
      "url": "https://markets.businessinsider.com/news/stocks/dedollarization-greenback-will-die-brics-nations-gold-backed-crypto-kioysaki-2023-7",
      "urlToImage": "https://i.insider.com/645b44a8c726bc00196aad14?width=1200&format=jpeg",
      "publishedAt": "2023-07-12T12:15:44Z",
      "content": "\"Rich Dad Poor Dad\" author Robert Kiyosaki issued a dire warning for the US dollar as BRICS nations push for an alternative to the greenback in trade and investment. \r\n\"BRICS nations announce gold ba… [+1508 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Github.com"
      },
      "author": "bitcoin",
      "title": "Microsoft uses Bitcoin as part of MSVC validation test suite",
      "description": "Giving the C++ Standard Committee control of the public interface of your type means they will break it. C++23 adds a new allocate_at_least member to std::allocator. Very bad things happen when, sa...",
      "url": "https://github.com/bitcoin/bitcoin/pull/27930",
      "urlToImage": "https://opengraph.githubassets.com/13a583c23bb89d4c3b5d165504273d69b558977d05917c6f95d6ac2e62571bfa/bitcoin/bitcoin/pull/27930",
      "publishedAt": "2023-06-22T17:55:39Z",
      "content": "Thanks for the PR and raising the issue!\r\nI suspect that it'll be a long time before binaries using C++23 would be shipped but this brings up a wider issue: like you say \"giving the C++ Standard Comm… [+490 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Frances Yue",
      "title": ": Why some crypto stocks surged up to 400% this year, outperforming bitcoin",
      "description": "Analysts attributed the outperformance of crypto-related stocks this year to volatility, oversold conditions and increased institutional adoption of digital assets.",
      "url": "https://www.marketwatch.com/story/why-some-crypto-stocks-surged-up-to-400-this-year-outperforming-bitcoin-7838c938",
      "urlToImage": "https://images.mktw.net/im-796455/social",
      "publishedAt": "2023-07-18T21:23:00Z",
      "content": "Several crypto-related stocks and funds have staged a spectacular rally this year, outperforming major cryptocurrencies, despite U.S. regulators ongoing scrutiny of the industry.  Crypto exchange Coi… [+3890 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Frances Yue",
      "title": "Crypto: Bitcoin to reach $50,000 by year-end, but top $100,000 by end of 2024, says Standard Chartered strategist",
      "description": "Bitcoin’s price is likely to reach $50,000 by the end of this year and has upside above $100,000 by the end of 2024, according to Geoff Kendrick, head of crypto research at Standard Chartered Bank.",
      "url": "https://www.marketwatch.com/story/bitcoin-to-reach-50-000-by-year-end-but-top-100-000-by-end-of-2024-says-standard-chartered-strategist-78ce59d9",
      "urlToImage": "https://images.mktw.net/im-776988/social",
      "publishedAt": "2023-07-10T19:56:00Z",
      "content": "Bitcoins price is likely to reach $50,000 by the end of this year and has upside above $100,000 by the end of 2024, according to Geoff Kendrick, head of crypto research at Standard Chartered Bank. \r\n… [+1515 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Fireworks and lunar glow: Supermoon to make appearance for Fourth of July - Yahoo Movies Canada",
      "description": "<ol><li>Fireworks and lunar glow: Supermoon to make appearance for Fourth of July  Yahoo Movies Canada\r\n</li><li>Full moon: 'Buck' supermoon to rise Monday  CTV News\r\n</li><li>A 'supermoon' is on its way - here's how to take great photos of it  indy100\r\n</li>…",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiVGh0dHBzOi8vY2EubW92aWVzLnlhaG9vLmNvbS9maXJld29ya3MtbHVuYXItZ2xvdy1zdXBlcm1vb24tYXBwZWFyYW5jZS0yMjE2NDI5NjkuaHRtbNIBXGh0dHBzOi8vY2EubW92aWVzLnlhaG9vLmNvbS9hbXBodG1sL2ZpcmV3b3Jrcy1sdW5hci1nbG93LXN1cGVybW9vbi1hcHBlYXJhbmNlLTIyMTY0Mjk2OS5odG1s?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-07-03T22:16:42Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Emily Bary, , Frances Yue",
      "title": ": Coinbase stock explodes higher as enthusiasm builds for spot bitcoin ETFs",
      "description": "Pushes by asset managers to launch spot bitcoin ETFs appeared to hit a setback late last week, but one exchange has refiled applications in hopes of addressing concerns",
      "url": "https://www.marketwatch.com/story/coinbase-stock-explodes-higher-as-enthusiasm-builds-for-spot-bitcoin-etfs-d0a68c47",
      "urlToImage": "https://images.mktw.net/im-795764/horizontal",
      "publishedAt": "2023-07-03T17:54:00Z",
      "content": "Coinbase Global Inc. shares roared higher in Mondays session as asset managers continued their pushes for spot bitcoin exchange-traded funds and highlighted Coinbases potential to play a role in them… [+2494 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "US stocks rise as investors digest upbeat economic data and latest developments in Russia",
      "description": "Durable goods orders for May came in stronger than expected, easing concerns about a recession.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-durable-goods-orders-russia-dow-sp500-2023-6",
      "urlToImage": "https://i.insider.com/649ae094867d960019d92bab?width=1200&format=jpeg",
      "publishedAt": "2023-06-27T13:46:31Z",
      "content": "Russian President Vladimir Putin chairs a meeting with members of the Russian government via teleconference in Moscow on March 10, 2022.MIKHAIL KLIMENTYEV/SPUTNIK/AFP via Getty Images\r\n<ul>\n<li>US st… [+1734 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "Fake ‘Trezor Wallet’ Bitcoin app reaches the top of iOS App Store search results [U]",
      "description": "One of Apple’s key arguments in favor of making the App Store the only way to download apps on iOS is the app review process, which ensures that users are not exposed to scams. Even so, some of these apps bypass the App Store guidelines without being noticed.…",
      "url": "https://9to5mac.com/2023/06/22/fake-trezor-wallet-bitcoin-app-store/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/App-Store-fake-Trezor-app.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-06-22T20:10:00Z",
      "content": "One of Apples key arguments in favor of making the App Store the only way to download apps on iOS is the app review process, which ensures that users are not exposed to scams. Even so, some of these … [+2854 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Frances Yue",
      "title": "In One Chart: Bitcoin finally decoupled from U.S. stocks. Here’s why it matters",
      "description": "The correlation between bitcoin and the S&P 500 has fallen to close to zero, according to a Tuesday note by Dan Morehead, founder and managing partner at Pantera Capital.",
      "url": "https://www.marketwatch.com/story/bitcoin-finally-decoupled-from-u-s-stocks-heres-why-it-matters-1888645a",
      "urlToImage": "https://images.mktw.net/im-677689/social",
      "publishedAt": "2023-07-11T15:46:00Z",
      "content": "For more than two years, bitcoin and stocks often traded in tandem with each other but maybe no longer.  The correlation between bitcoin \r\n BTCUSD,\r\n -0.74%\r\nand the S&amp;P 500 index \r\n SPX,\r\n +0.36… [+1308 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Anushree Dave",
      "title": "Crypto: Spot bitcoin ETFs won’t be derailed as SEC reportedly details concerns, crypto insiders say",
      "description": "Industry insiders say exchanges and asset managers can overcome another apparent hurdle to a spot bitcoin ETF.",
      "url": "https://www.marketwatch.com/story/spot-bitcoin-etfs-wont-be-derailed-as-sec-reportedly-details-concerns-crypto-insiders-say-b211cd6",
      "urlToImage": "https://images.mktw.net/im-681594/social",
      "publishedAt": "2023-06-30T19:53:00Z",
      "content": "The U.S. Securities and Exchange Commission isnt satisfied with a wave of applications filed this month for spot bitcoin \r\n BTCUSD,\r\n -0.03%\r\nexchange-traded funds, The Wall Street Journal reported F… [+3440 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Anushree Dave",
      "title": "Crypto Update: Bitcoin tops $30,000 for first time since April. Here’s why it’s shaking off a regulatory crackdown.",
      "description": "Bitcoin was undaunted by a U.S. regulatory crackdown on the crypto industry, briefly rising Thursday above the $30,000 threshold for the first time since April.",
      "url": "https://www.marketwatch.com/story/bitcoin-tops-30-000-for-first-time-since-april-heres-why-its-shaking-off-a-regulatory-crackdown-3642c6f7",
      "urlToImage": "https://images.mktw.net/im-733326/social",
      "publishedAt": "2023-06-22T15:57:00Z",
      "content": "Bitcoin \r\n BTCUSD,\r\n -0.08%\r\nsurged above the $30,000 threshold on Thursday morning for the first time since April, when it hit a yearly high of $31,000, according to CoinDesk data. The crypto was ba… [+1296 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ReadWrite"
      },
      "author": "Deanna Ritchie",
      "title": "The Top 10 NFT Pioneers",
      "description": "Every new realm needs brave explorers. It needs bold individuals willing to ignore naysayers, gird up their loins, and journey to undiscovered regions where there may be monsters. (Or, the bureaucrats of the U.S. Securities and Exchange Commission.) The odyss…",
      "url": "https://readwrite.com/nft-pioneers/",
      "urlToImage": "https://images.readwrite.com/wp-content/uploads/2023/06/Top-NFT-Pioneers.jpg",
      "publishedAt": "2023-06-26T15:00:57Z",
      "content": "Every new realm needs brave explorers. It needs bold individuals willing to ignore naysayers, gird up their loins, and journey to undiscovered regions where there may be monsters. (Or, the bureaucrat… [+6675 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Krisztian  Sandor",
      "title": "Ron DeSantis Promises to Ban CBDCs if Elected President",
      "description": "DeSantis in March signed a bill as Florida’s governor to prohibit the use of CBDC’s within his state.",
      "url": "https://finance.yahoo.com/news/ron-desantis-promises-ban-cbdcs-165534149.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Fjp2DFXjjZIYb1BTpdwKsQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/coindesk_75/36e905026ec5b7cc6028312bd6313d24",
      "publishedAt": "2023-07-17T16:55:34Z",
      "content": "Current Florida Governor and GOP presidential hopeful Ron DeSantis continued his campaign against central bank digital currencies (CBDCs), vowing a ban if he were elected president.\r\nDone, dead, not … [+921 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Jennifer Sor",
      "title": "US stocks rise after fresh batch of positive economic data and bank stress tests",
      "description": "The Dow surged more than 200 points as US GDP was revised upward and big banks passed the Fed's latest stress test.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-gdp-economy-recession-bank-stress-test-2023-6",
      "urlToImage": "https://i.insider.com/5f84b40f91aa9e001880b1a5?width=1200&format=jpeg",
      "publishedAt": "2023-06-29T20:02:12Z",
      "content": "Goldman Sach's gives its list of high Sharpe ratio stocks.Andrew Kelly/Reuters\r\n<ul>\n<li>Stocks rose on Thursday after second quarter GDP was revised upward. </li>\n<li>Big banks on Wall Street passed… [+2414 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Max Adams",
      "title": "US stocks slip as investors await Fed minutes and parse China growth data",
      "description": "Traders returned from the July 4 holiday to data showing the services sector in China expanded slower than expected. Fed minutes are due at 2 p.m.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-china-economy-data-growth-2023-7",
      "urlToImage": "https://i.insider.com/64a572264cc8540019cb6911?width=1200&format=jpeg",
      "publishedAt": "2023-07-05T13:44:23Z",
      "content": "A woman shops at a supermarket in Beijing, China, October 15, 2015.REUTERS/Kim Kyung-Hoon\r\n<ul>\n<li>US stocks edged lower on Wednesday following the break for the July 4 holiday. </li>\n<li>Traders ar… [+1973 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Matthew Fox",
      "title": "US stocks trade mixed ahead of Independence Day as investors hope to extend gains into 2nd half of 2023",
      "description": "The stock market closes at 1 p.m. on Monday, and is closed all day on Tuesday in observance of Independence Day.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-second-half-gains-shortened-trading-day-2023-7",
      "urlToImage": "https://i.insider.com/64a2ca8a9fab2b00184aebf3?width=1200&format=jpeg",
      "publishedAt": "2023-07-03T13:48:12Z",
      "content": "Traders work on the floor of the NYSE in New YorkBrendan McDermid/Reuters\r\n<ul><li>US stocks were mixed in a shortened day of trading on Monday ahead of Independence Day.</li><li>The S&P 500 surged 1… [+2301 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "US stocks climb as more signs of cooling inflation lift hopes that Fed rate hikes are near an end",
      "description": "The producer price index for June climbed 0.1%, less than Wall Street forecasts, further underlining a cooling inflation rate.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-cooling-inflation-ppi-fed-hikes-cpi-2023-7",
      "urlToImage": "https://i.insider.com/63f6566788f76900192cd8f4?width=1200&format=jpeg",
      "publishedAt": "2023-07-13T13:36:11Z",
      "content": "Federal Reserve Board Chairman Jerome Powell speaks during a news conference after a Federal Open Market Committee meeting on February 01, 2023 in Washington, DC.Kevin Dietsch/Getty Images\r\n<ul>\n<li>… [+2112 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Jennifer Sor",
      "title": "US stocks jump as investors cheer lowest inflation reading in over 2 years",
      "description": "Inflation dropped to 3% in June, marking the lowest inflation reading the economy has seen since 2021.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-inflation-june-cpi-report-fed-interest-rates-2023-7",
      "urlToImage": "https://i.insider.com/5a87472ed03072fc098b47fc?width=1200&format=jpeg",
      "publishedAt": "2023-07-12T13:42:51Z",
      "content": "JOHANNES EISELE/Getty Images\r\n<ul>\n<li>Headline inflation eased to just 3% in June, marking the lowest inflation reading in 2 years.</li>\n<li>Core inflation, meanwhile, posted a year-per-year increas… [+2345 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "US stocks dip as retail sales miss forecasts while earnings season ramps up",
      "description": "US retail sales rose by 0.2% in June from May, a weaker-than-expected gain and slower than the prior month's increase.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-retail-sales-earnings-2023-7",
      "urlToImage": "https://i.insider.com/64b6936676558a00189d16b1?width=1200&format=jpeg",
      "publishedAt": "2023-07-18T13:43:05Z",
      "content": "A store with on-sale items.John Keeble/Getty Images\r\n<ul>\n<li>US stocks dipped Tuesday amid weak consumer data and a rush of earnings reports.</li>\n<li>Retail sales rose by 0.2% in June from May, bel… [+1916 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Max Adams",
      "title": "US stocks trade mixed as China's GDP growth disappoints and investors brace for big week of earnings",
      "description": "China's economy grew at a slower rate than expected in the second quarter, sounding more alarms as the country's post-COVID recovery stumbles.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-2q-earnings-tech-banks-tesla-china-2023-7",
      "urlToImage": "https://i.insider.com/64b54153dcdf1100194c26bf?width=1200&format=jpeg",
      "publishedAt": "2023-07-17T13:35:39Z",
      "content": "Beijing, China.Martin Puddy/Getty Images\r\n<ul>\n<li>US stocks opened mixed to start the week, coming off a week of gains spurred by lower US inflation. </li>\n<li>China's GDP figures for the second qua… [+2472 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "Dow extends winning streak to 7 days as US stocks jump on strong bank earnings",
      "description": "The Dow Jones Industrial Average gained 366 points as earnings reports from Bank of America and Morgan Stanley beat expectations.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-industrial-retail-strong-bank-earnings-2023-7",
      "urlToImage": "https://i.insider.com/60400c3db46d720018b04bc2?width=1200&format=jpeg",
      "publishedAt": "2023-07-18T20:33:12Z",
      "content": "REUTERS/Shannon Stapleton\r\n<ul>\n<li>US stocks gained on a strong earnings season for among lenders.</li>\n<li>Earnings reports from Bank of America and Morgan Stanley beat expectations.</li>\n<li>But r… [+2258 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "US stocks rally as inflation cools further, heading for strong 2nd-quarter gains",
      "description": "The Federal Reserve's preferred inflation gauge climbed 4.6% in May from a year ago, down from the prior month's annual rate of 4.7%.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-equity-rally-inflation-interest-rate-apple-2023-6",
      "urlToImage": "https://i.insider.com/649ed527fd8a3e0019121435?width=1200&format=jpeg",
      "publishedAt": "2023-06-30T13:39:31Z",
      "content": "In this March 20, 2019, file photo, Federal Reserve Chair Jerome Powell speaks during a news conference in Washington.AP Photo/Susan Walsh\r\n<ul>\n<li>US stocks rallied as inflation cooled further, hea… [+1789 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Jason Ma",
      "title": "US stocks rally as recession fears ease and investors look to upcoming Big Tech earnings",
      "description": "The odds of a recession hitting the US economy in the next 12 months have fallen to 20% from 25%, Goldman Sachs said.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-recession-outlook-big-tech-earnings-tesla-2023-7",
      "urlToImage": "https://i.insider.com/623b1e5ec9edc20019f5ed35?width=1200&format=jpeg",
      "publishedAt": "2023-07-17T20:11:43Z",
      "content": "Fabrice Cabaud/Getty Images\r\n<ul>\n<li>US stocks finished higher on Monday as fears of a US recession eased on Wall Street.</li>\n<li>The odds of a recession in the next 12 months have fallen to 20% fr… [+1831 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "US stocks trade mixed as Wall Street weighs mutiny attempt in Russia",
      "description": "The Wagner Group's rebellion over the weekend tested Vladimir Putin's regime, though US stocks were little changed early Monday.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-traders-russia-mutiny-oil-finance-2023-6",
      "urlToImage": "https://i.insider.com/6481a71d9ea8610019495c43?width=1200&format=jpeg",
      "publishedAt": "2023-06-26T13:33:27Z",
      "content": "Russian President Vladimir Putin chairs a meeting with members of the Russian government via teleconference in Moscow on March 10, 2022.MIKHAIL KLIMENTYEV/SPUTNIK/AFP via Getty Images\r\n<ul>\n<li>US st… [+2024 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Jennifer Sor",
      "title": "Dow falls more than 300 points as investors brace for more Fed tightening after huge ADP report",
      "description": "Investors are eyeing the release of Friday's job report, and economists expect payroll gains of 225,000.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-rate-hike-inflation-adp-jobs-2023-7",
      "urlToImage": "https://i.insider.com/60a63414e25d05001880c9d3?width=1200&format=jpeg",
      "publishedAt": "2023-07-06T20:05:55Z",
      "content": "JOHANNES EISELE/AFP/Getty Images\r\n<ul>\n<li>Stocks fell on Thursday as investors braced for tighter monetary policy from the Fed.</li>\n<li>Traders anticipate more rate hikes after ADP jobs data came i… [+2144 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Jennifer Sor",
      "title": "US stocks climb as traders hope cooler June inflation means end to Fed tightening",
      "description": "Bets that the Federal Reserve will pause rate hikes in September rose to 82% on Wednesday from 72% on Tuesday.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-cpi-economy-outlook-fed-tightening-2023-7",
      "urlToImage": "https://i.insider.com/5eb59db41441927acb5792f6?width=1200&format=jpeg",
      "publishedAt": "2023-07-12T20:05:33Z",
      "content": "Getty Images / Bryan R. Smith\r\n<ul>\n<li>US stocks climbed higher on Wednesday as traders took in good June inflation data.</li>\n<li>Consumer prices rose just 3% year over year, the lowest rate in two… [+2265 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Matthew Fox",
      "title": "US stocks rise after banks set positive tone for 2nd-quarter earnings",
      "description": "Earnings reuslts from JPMorgan and Wells Fargo both beat analyst estimates and showed no signs of a slowing economy.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-banks-positive-tone-2nd-quarter-earnings-2023-7",
      "urlToImage": "https://i.insider.com/64b14e4c29e5fd00190ef8cf?width=1200&format=jpeg",
      "publishedAt": "2023-07-14T13:34:59Z",
      "content": "Drew Angerer / Getty\r\n<ul><li>US stocks jumped on Friday after US banks reported second-quarter earnings results.</li><li>JPMorgan and Wells Fargo both beat estimates and showed no signs of a slowing… [+2404 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "Fake ‘Trezor Wallet’ Bitcoin app reaches the top of iOS App Store search results",
      "description": "One of Apple’s key arguments in favor of making the App Store the only way to download apps on iOS is the app review process, which ensures that users are not exposed to scams. Even so, some of these apps bypass the App Store guidelines without being noticed.…",
      "url": "https://9to5mac.com/2023/06/20/fake-trezor-wallet-bitcoin-app-store/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/App-Store-fake-Trezor-app.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-06-20T22:04:04Z",
      "content": "One of Apple’s key arguments in favor of making the App Store the only way to download apps on iOS is the app review process, which ensures that users are not exposed to scams. Even so, some of these… [+2430 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Wesley Hilliard)",
      "title": "Decentralized Twitter rival Damus will be removed from the App Store over Bitcoin tipping",
      "description": "Damus has failed to comply with Apple's guidelines for in-app purchases and will be removed from the App Store, though the app's developers will contest this decision.Damus allows users to tip with BitcoinDamus is an app built on the Jack Dorsey-backed Nostr …",
      "url": "https://appleinsider.com/articles/23/06/26/decentralized-twitter-rival-damus-will-be-removed-from-the-app-store-over-bitcoin-tipping",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55121-111875-Damus-xl.jpg",
      "publishedAt": "2023-06-26T23:39:46Z",
      "content": "Damus allows users to tip with Bitcoin\r\nDamus has failed to comply with Apple's guidelines for in-app purchases and will be removed from the App Store, though the app's developers will contest this d… [+2133 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Frances Yue",
      "title": "Crypto: New crypto exchange EDX backed by Citadel Securities, Fidelity, Schwab starts operation",
      "description": "A new crypto exchange backed by several Wall Street heavyweights such as Charles Schwab , Citadel Securities, Fidelity Digital Assets, Paradigm, Sequoia Capital, and Virtu Financial, has started operation.",
      "url": "https://www.marketwatch.com/story/new-crypto-exchange-edx-backed-by-citadel-securities-fidelity-schwab-starts-operation-47ce868f",
      "urlToImage": "https://images.mktw.net/im-701580/social",
      "publishedAt": "2023-06-20T14:56:00Z",
      "content": "A new crypto exchange backed by several Wall Street heavyweights such as Charles Schwab\r\n SCHW,\r\n -0.90%\r\n,\r\n Citadel Securities, Fidelity Digital Assets, Paradigm, Sequoia Capital, and Virtu Financi… [+1629 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Frances Yue",
      "title": "The Tell: Crypto can become regular part of investors’ portfolios once regulations are clear, says Franklin Templeton",
      "description": "Cryptocurrencies can become “regulator parts of people’s portfolios” once regulations become clear in the U.S., according to Franklin Templeton, which manages over $1.4 trillion in assets.",
      "url": "https://www.marketwatch.com/story/crypto-can-become-regular-part-of-investors-portfolios-once-regulations-are-clear-says-franklin-templeton-21b1a2a5",
      "urlToImage": "https://images.mktw.net/im-676559/social",
      "publishedAt": "2023-06-27T15:47:00Z",
      "content": "Cryptocurrencies can become regulator parts of peoples portfolios once regulations become clear in the U.S., according to Franklin Templeton, which manages over $1.4 trillion in assets. While investo… [+3151 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Sean Ingle",
      "title": "Chelsea fans voice opposition to sponsorship deal with online casino",
      "description": "<ul><li>Survey by supporters’ trust finds 77% oppose proposed deal</li><li>Sponsorship by streaming service blocked by Premier League</li></ul>Chelsea supporters have expressed overwhelming opposition to a proposed shirt sponsorship with an online casino that…",
      "url": "https://www.theguardian.com/football/2023/jun/19/chelsea-fans-oppose-sponsorship-deal-online-casino",
      "urlToImage": "https://i.guim.co.uk/img/media/ca6b166d7284ec404d9ef995847c53cf9030e8a5/986_956_4482_2689/master/4482.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=64508dc3a3e954c8ec311cc030769d59",
      "publishedAt": "2023-06-19T11:45:18Z",
      "content": "Chelsea supporters have expressed overwhelming opposition to a proposed shirt sponsorship with an online casino that hails itself as a worldwide leader in crypto gambling.\r\nThe club had hoped to sign… [+7102 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Chris Matthews",
      "title": ": SEC Chair Gensler dismisses industry calls for recusal on crypto decisions",
      "description": "SEC Chair Gary Gensler has no plans to recuse himself from decisions related to cryptocurrencies, despite accusations of bias from the industry.",
      "url": "https://www.marketwatch.com/story/sec-chair-gensler-dismisses-industry-calls-for-recusal-on-crypto-decisions-646908d8",
      "urlToImage": "https://images.mktw.net/im-635756/social",
      "publishedAt": "2023-07-12T18:41:00Z",
      "content": "Securities and Exchange Commission Chair Gary Gensler has no plans to recuse himself from decisions related to cryptocurrencies, despite accusations of bias from the industry. I am well aware of my e… [+2080 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MakeUseOf"
      },
      "author": "Katie Rees",
      "title": "5 Ways to Track Down Lost Bitcoin and Other Cryptos",
      "description": "Losing your crypto is an awful feeling, but there may be a way to find it.",
      "url": "https://www.makeuseof.com/ways-track-down-lost-bitcoin-and-other-cryptos/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/btc-wood-beach.jpg",
      "publishedAt": "2023-07-10T12:15:18Z",
      "content": "Losing a crypto wallet can be incredibly frustrating, especially if the wallet in question holds a large amount of crypto. But don't worry; losing or forgetting about a crypto wallet isn't where thin… [+6084 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Dani Anguiano",
      "title": "UK man who pleaded guilty to celebrity Twitter hack gets five years in prison",
      "description": "Joseph James O’Connor, 24, pleaded guilty to cybercrime charges last month for hijacking famous accounts in a bitcoin scamA British man who took part in schemes to hack the Twitter accounts of celebrities, including Joe Biden and Elon Musk, was sentenced to f…",
      "url": "https://www.theguardian.com/us-news/2023/jun/23/british-man-celebrity-twitter-hacking-bitcoin-elon-musk-joe-biden",
      "urlToImage": "https://i.guim.co.uk/img/media/925fb7ec7c7d19c812f2885f5b25904f65c6c1be/0_299_4652_2792/master/4652.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=95b24028aeea81d260d3601e49b60579",
      "publishedAt": "2023-06-24T00:53:43Z",
      "content": "A British man who took part in schemes to hack the Twitter accounts of celebrities, including Joe Biden and Elon Musk, was sentenced to five years in prison, the US attorneys office announced on Frid… [+7162 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Jyoti Mann",
      "title": "Jack Dorsey says 'running Twitter is hard' but tells Elon Musk it's 'critical to preserve the open internet' after data scraping crackdown",
      "description": "The Twitter co-founder said it's \"easy to critique the decisions from afar\" after Elon Musk faced a backlash for imposing rate limits on tweets.",
      "url": "https://www.businessinsider.com/jack-dorsey-says-running-twitter-is-hard-data-scraping-crackdown-2023-7",
      "urlToImage": "https://i.insider.com/64a146e9946c7c001982ea1e?width=1200&format=jpeg",
      "publishedAt": "2023-07-02T10:47:37Z",
      "content": "Jack Dorsey and Elon Musk.Joe Raedle, Michael Gonzalez/Getty Images\r\n<ul>\n<li>Jack Dorsey said \"running Twitter is hard\" as users hit out at Elon Musk for imposing \"rate limits.\"</li>\n<li>Dorsey said… [+2487 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Matthew Fox",
      "title": "'Black Swan' author Nassim Taleb warned about the stock market's brewing AI bubble in a new interview. Here are the 8 best quotes.",
      "description": "\"The whole structure needs to tumble... because systems don't correct themselves without some kind of a little bit of pain,\" Taleb warned.",
      "url": "https://markets.businessinsider.com/news/stocks/black-swan-author-nassim-taleb-warns-ai-bubble-stock-market-2023-6",
      "urlToImage": "https://i.insider.com/6495c2651465b6001998c31f?width=1200&format=jpeg",
      "publishedAt": "2023-06-23T17:13:30Z",
      "content": "Nassim Taleb.Mohd Zakir/Hindustan Times via Getty Images\r\n\n<ul>\n<li>\"Black Swan\" author Nassim Taleb is once again warning investors about potential risks in the stock market.</li>\n<li>Taleb warned a… [+3474 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Matthew Fox",
      "title": "US stocks close mixed as Fed Chair Powell says more rate hikes could be coming",
      "description": "\"Although policy is restrictive, it may not be restrictive enough and it has not been restricted for long enough,\" Fed Chair Jerome Powell said.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-powell-warns-interest-rate-hikes-2023-6",
      "urlToImage": "https://i.insider.com/63e29cd527e5db0018ee966b?width=1200&format=jpeg",
      "publishedAt": "2023-06-28T20:08:00Z",
      "content": "Federal Reserve Board Chairman Jerome Powell speaks during a news conference after a Federal Open Market Committee meeting on February 01, 2023 in Washington, DC.Kevin Dietsch/Getty Images\r\n<ul><li>U… [+2967 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Hannah Getahun",
      "title": "People claiming to have been duped by 'Home Improvement' star's crypto scam say it was a 'gut punch'",
      "description": "Zachery Ty Bryan is best known for his role as Brad Taylor on \"Home Improvement\" and a string of legal troubles including domestic violence charges.",
      "url": "https://www.businessinsider.com/former-home-improvement-star-zachery-ty-bryan-accused-of-scam-2023-6",
      "urlToImage": "https://i.insider.com/6497d2b165b9ce0018a4b01d?width=1200&format=jpeg",
      "publishedAt": "2023-06-25T07:05:31Z",
      "content": "Actor Zachery Ty Bryan attends P.S. ARTS and OneWest Bank's Express Yourself 2016 at Barker Hangar on November 13, 2016 in Santa Monica, California.Joshua Blanchard/Getty Images for P.S. ARTS\r\n<ul>\n<… [+3316 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "US stocks rise as traders digest upbeat economic data",
      "description": "First quarter GDP growth was revised to 2% on Thursday, a big jump from the previous revision of 1.3%.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-bond-fed-stress-test-economy-2023-6",
      "urlToImage": "https://i.insider.com/649d844b695968001925d81e?width=1200&format=jpeg",
      "publishedAt": "2023-06-29T13:48:09Z",
      "content": "(Photo by Michael M. Santiago/Getty Images)\r\n<ul>\n<li>US stocks inched higher Thursday, following the Fed's bank stress tests and new economic data. </li>\n<li>Bank stocks moved higher after the bigge… [+2569 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Matthew Fox",
      "title": "US stocks gain to start the 2nd half of the year as traders wrap up early for Independence Day",
      "description": "The stock market closed at 1 p.m. on Monday, and is closed all day on Tuesday in observance of Independence Day.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-second-half-starts-with-more-gains-2023-7",
      "urlToImage": "https://i.insider.com/64a2fb156075be0019c28716?width=1200&format=jpeg",
      "publishedAt": "2023-07-03T17:28:48Z",
      "content": "Xinhua/Wang Ying/ Getty Images\r\n<ul><li>US stocks gained in a shortened day of trading on Monday ahead of Independence Day.</li><li>The S&P 500 surged 16% in the first half of the year, and investors… [+2393 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Matthew Fox",
      "title": "US stocks trade mixed but notch a weekly gain as earnings impress and inflation cools",
      "description": "Earnings results from JPMorgan, Wells Fargo, and BlackRock beat analyst estimates and showed no signs of a slowing economy.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-cool-inflation-earnings-drive-weekly-gain-2023-7",
      "urlToImage": "https://i.insider.com/5fecc995a644880018193e20?width=1200&format=jpeg",
      "publishedAt": "2023-07-14T20:05:24Z",
      "content": "Lucas Jackson/Reuters\r\n<ul><li>US stocks were mixed on Friday but closed higher for the week as investors cheered a cooler June inflation report.</li><li>Second-quarter earnings kicked off on Friday … [+2694 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Phil Rosen",
      "title": "US stocks slide as Fed minutes show more rate hikes may be on the way",
      "description": "Last week, the Nasdaq capped off its best first-half of the year in four decades, and the S&P 500 saw its best first half since 2019.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-minutes-rate-hikes-index-investors-2023-7",
      "urlToImage": "https://i.insider.com/64a5af824cc8540019cb76f3?width=1200&format=jpeg",
      "publishedAt": "2023-07-05T20:04:53Z",
      "content": "An American flag hangs behind traders working on the floor of the New York Stock Exchange (NYSE) on October 11, 2019 in New York City.Drew Angerer/Getty Images\r\n<ul>\n<li>US stocks fell Wednesday as i… [+3063 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "Taking dollarization to the next level - here's a look at countries using the greenback as local currency",
      "description": "Argentina's presidential election may determine if the country adopts the dollar as its own legal tender, joining these other countries.",
      "url": "https://markets.businessinsider.com/news/currencies/de-dollarization-dollar-dominance-pegged-currencies-argentina-countries-greenback-inflation-2023-6",
      "urlToImage": "https://i.insider.com/648ca82020f78100189fd11e?width=1200&format=jpeg",
      "publishedAt": "2023-06-19T12:30:05Z",
      "content": "Andrew Jackson portrait on $20 bill.Elizabeth Fernandez/Getty Images\r\n<ul>\n<li>Argentina's presidential election may determine if the country adopts the dollar as its own currency.</li>\n<li>But a top… [+3435 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Theron Mohamed",
      "title": "Warren Buffett's TikTok fans devour his advice about stocks, crypto, and simple living. Here are 7 Buffett quotes that are popular on the platform.",
      "description": "TikTok videos featuring Warren Buffett discussing all kinds of subjects have attracted hundreds of thousands of likes on the platform.",
      "url": "https://markets.businessinsider.com/news/stocks/warren-buffett-tiktok-fas-advice-stocks-crypto-lifestyle-personal-finance-2023-6",
      "urlToImage": "https://i.insider.com/6495a4a81465b6001998bbbd?width=1200&format=jpeg",
      "publishedAt": "2023-06-24T10:46:05Z",
      "content": "Warren Buffett's sagely advice has attracted a sizeable TikTok audience.AP Images\r\n<ul>\n<li>Warren Buffett isn't a TikTok user, but his past comments are popular on the platform.</li>\n<li>The Berkshi… [+2987 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Filip De Mott",
      "title": "US stocks dip as jobs report shows hiring is cooling while wage growth remains hot",
      "description": "The newest Bureau of Labor Statistics data showed an unexpected rise in wage growth last month while hiring slowed.",
      "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-stocks-dip-jobs-report-wage-growth-2023-7",
      "urlToImage": "https://i.insider.com/64a80dfd8ed31300199e0d24?width=1200&format=jpeg",
      "publishedAt": "2023-07-07T13:43:14Z",
      "content": "Traders work on the floor of the New York Stock Exchange.Michael M. Santiago/Getty Images\r\n<ul>\n<li>Stocks dipped on the newest employment report from the Bureau of Labor Statistics.</li>\n<li>Hiring … [+2495 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Theron Mohamed",
      "title": "'Rich Dad Poor Dad' author warns of a massive crash in stocks - and fears the US economy will crater",
      "description": "Robert Kiyosaki, the author of \"Rich Dad Poor Dad,\" says the stock market is flashing red and the US economy faces a long and painful downturn.",
      "url": "https://markets.businessinsider.com/news/stocks/kiyosaki-rich-poor-dad-stock-market-outlook-crash-economy-depression-2023-7",
      "urlToImage": "https://i.insider.com/64b50a55dcdf1100194c22eb?width=1200&format=jpeg",
      "publishedAt": "2023-07-17T10:27:49Z",
      "content": "\"Rich Dad Poor Dad\" author Robert Kiyosaki.The Rich Dad Channel/YouTube\r\n<ul>\n<li>Robert Kiyosaki expects the stock market to crash and the US economy to suffer a historic downturn.</li>\n<li>The \"Ric… [+2666 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Crypto.news"
      },
      "author": "Brenda Mary",
      "title": "Mastercard submits fresh trademark application for crypto tech",
      "description": "Mastercard has filed a trademark application for a blockchain and cryptocurrency-related technology suite.",
      "url": "https://crypto.news/mastercard-submits-fresh-trademark-application-for-crypto-tech/",
      "urlToImage": "https://crypto.news/app/uploads/2023/05/AI-project-TradeGDT03.jpg",
      "publishedAt": "2023-06-20T11:54:42Z",
      "content": "Mastercard has filed a trademark application for a blockchain and cryptocurrency-related technology suite. \r\nPatent attorney Mike Kondoudis discovered the application, which suggests that Mastercard … [+1674 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techmeme.com"
      },
      "author": null,
      "title": "BlackRock has refiled its spot bitcoin ETF application with SEC through Nasdaq and listed Coinbase as market surveillance provider to address SEC's objections (Bloomberg)",
      "description": "Bloomberg:\nBlackRock has refiled its spot bitcoin ETF application with SEC through Nasdaq and listed Coinbase as market surveillance provider to address SEC's objections  —  BlackRock Inc. has refiled paperwork with US regulators through Nasdaq to add new det…",
      "url": "https://www.techmeme.com/230703/p22",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i0F9XUhlt9t8/v0/1200x800.jpg",
      "publishedAt": "2023-07-03T22:15:01Z",
      "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 6:15 PM ET, July 3, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo view … [+66 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techmeme.com"
      },
      "author": null,
      "title": "Filing: Fidelity refiles for a spot bitcoin ETF with the US SEC, following similar applications from BlackRock, Invesco, WisdomTree, Valkyrie, and others (Bloomberg)",
      "description": "Bloomberg:\nFiling: Fidelity refiles for a spot bitcoin ETF with the US SEC, following similar applications from BlackRock, Invesco, WisdomTree, Valkyrie, and others  —  Fidelity Investments is the latest financial services heavyweight to throw its name into t…",
      "url": "https://www.techmeme.com/230629/p34",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i9aJImYeXN58/v0/1200x671.jpg",
      "publishedAt": "2023-06-29T18:05:01Z",
      "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 2:05 PM ET, June 29, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo view… [+67 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (Bram Berkowitz)",
      "title": "Why Bitcoin, Bitcoin Cash, and Bit Digital Are Rising Today",
      "description": "Cryptocurrencies and crypto stocks continued to move higher today as investors continued to be excited about institutional interest in the sector.",
      "url": "https://www.fool.com/investing/2023/06/23/why-bitcoin-bitcoin-cash-and-bit-digital-are-risin/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/737386/generic-upward-15.jpg",
      "publishedAt": "2023-06-23T18:34:00Z",
      "content": "What happened\r\nCryptocurrencies and crypto stocks continued their ascent higher today as institutional interest in the space has sparked a major rally.\r\nSince late afternoon yesterday, the price of t… [+3414 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Ben Quinn and Rowena Mason",
      "title": "Tory peer faces questions over links to cryptocurrency lobbying firm",
      "description": "Exclusive: James Wharton is helping to forge Westminster connections for the cryptocurrency sectorA former campaign manager to Boris Johnson who was appointed to lead an education quango is facing fresh questions over his role in a cryptocurrency lobbying fir…",
      "url": "https://www.theguardian.com/politics/2023/jun/18/tory-peer-james-wharton-working-for-crypto-lobbying-firm-northpoint-strategy",
      "urlToImage": "https://i.guim.co.uk/img/media/706a18ad13b2c600e96d067aeffc6db177e6822d/0_393_6720_4032/master/6720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=230f736f085222a3786d7545c2b14a9d",
      "publishedAt": "2023-06-18T14:00:45Z",
      "content": "A former campaign manager to Boris Johnson who was appointed to lead an education quango is facing fresh questions over his role in a cryptocurrency lobbying firm.\r\nJames Wharton, a peer and former M… [+4866 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Uncrate.com"
      },
      "author": "Uncrate",
      "title": "2001 Mercedes-Benz G500 Cabriolet Europa",
      "description": "This is it - the pinnacle of what the three-pointed star meant across the world. A level of clear-eyed, no-frills quality that was above all meant to work and work for years to come, the late '90s and early 'aughts...",
      "url": "https://uncrate.com/2001-mercedes-benz-g500-cabriolet-europa/",
      "urlToImage": "https://uncrate.com/p/2023/06/mercedes-g500-cabrio-1.jpg",
      "publishedAt": "2023-06-20T00:00:00Z",
      "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Uncrate.com"
      },
      "author": "Uncrate",
      "title": "Heaven's Door Decades Series Whiskey",
      "description": "Introducing the 2023 Heaven's Door Decade Series Release, a Straight Rye Whiskey aged for 10 years. The Decade Series from Heaven's Door is a collection of limited release whiskeys all aged for a decade or more. The series debuted last...",
      "url": "https://uncrate.com/heavens-door-decades-series-whiskey/",
      "urlToImage": "https://uncrate.com/p/2023/05/heavens-door-whiskey.jpg",
      "publishedAt": "2023-06-19T17:00:00Z",
      "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Uncrate.com"
      },
      "author": "Uncrate",
      "title": "Garb: Island",
      "description": "The Real McCoy's Camouflage Parka / $665. New Balance 574 Fog Sneakers / $110. Rhude Palm Tree Quilted Satin Cap / $205. Edwin Rainbow Selvedge Denim / $298. Entourage of 7 Acetate Sunglasses / $319. Field Notes 3 Pack /...",
      "url": "https://uncrate.com/garb-island/",
      "urlToImage": "https://uncrate.com/p/2023/06/garb-island.jpg",
      "publishedAt": "2023-06-30T18:53:23Z",
      "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Uncrate.com"
      },
      "author": "Uncrate",
      "title": "The Crobar's Vintage Bourbon Collection",
      "description": "Founded in 2001 by Richard Thomas, The Crobar quickly became a needed respite for rock and whiskey lovers in London's Soho. Unfortunately, the bar was forced to shut down due to the pandemic, and Thomas took its impressive bourbon collection...",
      "url": "https://uncrate.com/the-crobars-vintage-bourbon-collection/",
      "urlToImage": "https://uncrate.com/p/2023/07/crobar-bourbon-collection-1.jpg",
      "publishedAt": "2023-07-06T20:54:43Z",
      "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Uncrate.com"
      },
      "author": "Uncrate",
      "title": "Garb: Sandlot",
      "description": "Kapital Baseball Shirt / $884. Reigning Champ Mesh Gym Shorts / $130. Ebbets Field Flannels Des Moines Demons Cotton Twill Cap / $45. Barton Perreira 007 Goldfinger Sunglasses / $550. Baseball December 1931 Magazine / $153. 1980's Converse Chuck Taylor...",
      "url": "https://uncrate.com/garb-sandlot/",
      "urlToImage": "https://uncrate.com/p/2023/06/garb-sandlot.jpg",
      "publishedAt": "2023-06-19T20:00:00Z",
      "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Holly Johnson",
      "title": "Crypto still isn't a 'hedge against inflation,' no matter what experts said. Here are 2 red flags to look for in money advice.",
      "description": "Some experts claimed crypto would be a \"hedge against inflation,\" but that hasn't come to pass. Experts have tips to identify the next dubious advice.",
      "url": "https://www.businessinsider.com/personal-finance/expert-tips-identify-dubious-financial-advice-2023-6",
      "urlToImage": "https://i.insider.com/62697123eaaa070018ad2fb5?width=1200&format=jpeg",
      "publishedAt": "2023-06-19T11:30:00Z",
      "content": "Our experts answer readers' investing questions and write unbiased product reviews (here's how we assess investing products). Paid non-client promotion: In some cases, we receive a commission from ou… [+3997 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Dan DeFrancesco",
      "title": "Hollywood's love affair with private credit could be a recipe for disaster",
      "description": "Entertainment, media, and sports are key industries private-credit lenders have pushed into in recent years. But will it end well?",
      "url": "https://www.businessinsider.com/private-credit-lending-hollywood-entertainment-2023-6",
      "urlToImage": "https://i.insider.com/649b3dca6eb0a800194d63df?width=1200&format=jpeg",
      "publishedAt": "2023-06-28T11:46:05Z",
      "content": "Halfway there! Dan DeFrancesco in NYC, and I'm all for the long-awaited return of the fanny pack.Reminder: This is the last week of 10 Things on Wall Street. You can still get me in your inbox each d… [+4982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (Anders Bylund)",
      "title": "Can Bitcoin Reach $5 Million?",
      "description": "Can Bitcoin hit the $5 million mark? Let's explore the problems and possibilities.",
      "url": "https://www.fool.com/investing/2023/06/20/can-bitcoin-reach-5-million/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/736868/cryptocurrency-confusion.jpg",
      "publishedAt": "2023-06-20T15:15:45Z",
      "content": "It may sound strange or even silly to ask this now, in the midst of a long and painful crypto winter, but it's still a fair question.\r\nCan Bitcoin ever reach the incredible price of $5 million per co… [+6074 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Osxdaily.com"
      },
      "author": "Jamie Cuevas",
      "title": "The Bitcoin Whitepaper is Hidden in MacOS",
      "description": "Someone at Apple appears to be a Bitcoin enthusiast, or at least intrigued by the technology, as the complete Bitcoin whitepaper appears hidden in MacOS. Specifically, the full Bitcoin whitepaper by Satoshi Nakamoto is stored as a PDF file within the resource…",
      "url": "https://osxdaily.com/2023/07/04/the-bitcoin-whitepaper-is-hidden-in-macos/",
      "urlToImage": "https://cdn.osxdaily.com/wp-content/uploads/2023/04/bitcoin-whitepaper-macos-scaled.jpg",
      "publishedAt": "2023-07-04T16:48:06Z",
      "content": "Someone at Apple appears to be a Bitcoin enthusiast, or at least intrigued by the technology, as the complete Bitcoin whitepaper appears hidden in MacOS.\r\nSpecifically, the full Bitcoin whitepaper by… [+2576 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MakeUseOf"
      },
      "author": "Katie Rees",
      "title": "Why the Police Won't Investigate Your Lost or Stolen Crypto",
      "description": "Yes, you should report your stolen crypto, but it might not make a difference.",
      "url": "https://www.makeuseof.com/why-police-wont-investigate-lost-stolen-crypto/",
      "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/crypto-thief-graphic.jpg",
      "publishedAt": "2023-07-14T22:00:18Z",
      "content": "If someone hacks your bank account, steals your wallet, or uses your payment card without your permission, notifying the police is usually standard procedure. But if someone steals your cryptocurrenc… [+6039 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Detroit Free Press, Susan Tompor, Detroit Free Press",
      "title": "That job or apartment listing may not be legitimate: How to watch for job and rental scams",
      "description": "Consumers who are looking for a place to live or a job are besieged by fake ads, phony texts and bad emails. Red flag: No one can meet you.",
      "url": "https://www.usatoday.com/story/money/2023/06/18/fake-job-apartment-rental-scam-2023/70334043007/",
      "urlToImage": "https://www.gannett-cdn.com/-mm-/1f5a3b9fd6fc765c70308b588832ec4f9f06956a/c=0-150-3008-1849/local/-/media/2017/03/09/DetroitFreePress/DetroitFreePress/636246707590489697-GettyImages-492610688.jpg?auto=webp&format=pjpg&width=1200",
      "publishedAt": "2023-06-18T15:21:08Z",
      "content": "Young consumers including new college grads hunting for a job or a new apartment could end up losing big chunks of cash or vital ID information, like their Social Security numbers, to some pretty sop… [+8496 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cracked.com"
      },
      "author": "Keegan Kelly",
      "title": "Brad from ‘Home Improvement’ Built a Bitcoin Empire and Then Burned It All Down",
      "description": "‘The Hollywood Reporter’ has exposed Zachery Ty Bryan’s jaw-dropping web of lies",
      "url": "https://www.cracked.com/article_38463_brad-from-home-improvement-built-a-bitcoin-empire-and-then-burned-it-all-down.html",
      "urlToImage": "https://s3.crackedcdn.com/phpimages/article/7/3/5/900735.jpg",
      "publishedAt": "2023-06-23T13:30:00Z",
      "content": "Its an unfortunately common story for former child stars a young actor gains fame and fortune before they can develop common sense, and then they implode in their adult years through substance abuse … [+6000 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (RJ Fulton)",
      "title": "Bitcoin Cash's Remarkable 195% Rise: Can the Growth Continue?",
      "description": "Bitcoin Cash is on a tear, but there's more for investors to know.",
      "url": "https://www.fool.com/investing/2023/07/14/bitcoin-cashs-remarkable-165-rise-can-the-growth-c/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/739405/stock-market-down-white-arrows-on-red-background.jpg",
      "publishedAt": "2023-07-14T10:45:00Z",
      "content": "In the last month, few other cryptocurrencies have surged as much as Bitcoin Cash(BCH -4.59%). After a lackluster start to 2023, things changed in June and so far this year it's up more than 195%.\r\nH… [+3935 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (RJ Fulton)",
      "title": "1 Cryptocurrency Ready for a Bull Run",
      "description": "This Bitcoin-compatible blockchain is building serious momentum.",
      "url": "https://www.fool.com/investing/2023/06/27/1-cryptocurrency-ready-for-a-bull-run/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/737374/bull-silhouette.jpg",
      "publishedAt": "2023-06-27T10:59:00Z",
      "content": "It has long been known that Bitcoin lacks functionality more commonly available in newer blockchains. Some of the primary limitations are a lack of smart contract capabilities and the inability to ha… [+4546 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (RJ Fulton)",
      "title": "Unprecedented Scarcity Is Fueling My Bitcoin Buying Spree",
      "description": "Bitcoin might be even more scarce than previously thought.",
      "url": "https://www.fool.com/investing/2023/07/07/unrivaled-scarcity-fuels-my-bitcoin-buying-spree/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/738530/bitcoins-cryptocurrency-2.jpg",
      "publishedAt": "2023-07-07T09:37:00Z",
      "content": "As an investment proposition, one of Bitcoin's (BTC -3.06%) primary appeals lies in its ability to preserve wealth over the long term. While this perception of Bitcoin is evolving, there is no denyin… [+4569 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Suvashree Ghosh and Akshay Chinchalkar",
      "title": "Bitcoin Hits a Six-Week High as Financial Titans Step Up Crypto Initiatives",
      "description": "(Bloomberg) -- Bitcoin climbed to the highest level since early May, buoyed by crypto initiatives involving major players from the traditional financial...",
      "url": "https://finance.yahoo.com/news/bitcoin-hits-six-week-high-031406134.html",
      "urlToImage": "https://media.zenfs.com/en/bloomberg_technology_68/faf1d2635ddf87f23dbcfc8e2238c4aa",
      "publishedAt": "2023-06-21T03:14:06Z",
      "content": "(Bloomberg) -- Bitcoin climbed to the highest level since early May, buoyed by crypto initiatives involving major players from the traditional financial sector.\r\nMost Read from Bloomberg\r\nThe largest… [+3054 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Renee Dudley",
      "title": "Who are the ransomware gangs wreaking havoc on the world’s biggest companies? | Renee Dudley",
      "description": "It’s the defining cyber crime of the 2020s, and hackers are only just beginning to exploit its potential to make money and sow mayhemIn the past year, some of the UK’s most recognised institutions, from the Guardian to Royal Mail, have been hit with the defin…",
      "url": "https://www.theguardian.com/commentisfree/2023/jul/17/ransomware-gangs-companies-cyber-crime-hackers",
      "urlToImage": "https://i.guim.co.uk/img/media/c74e1c31849165059d4db511593c093535fc9a7a/103_0_2092_1255/master/2092.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=8a92d285382c961c1b6c5add504ab656",
      "publishedAt": "2023-07-17T09:00:25Z",
      "content": "In the past year, some of the UKs most recognised institutions, from the Guardian to Royal Mail, have been hit with the defining cyber crime of our time: ransomware. Hackers locking up computer netwo… [+6349 chars]"

    },


    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Sarah Fielding",
      "title": "WhatsApp makes it easier to send messages to unsaved numbers",
      "description": "Every app has one flaw that is baffling in how unnecessarily complicated it is. For WhatsApp, that has always been the fact that you can only message people after first saving their contact. But the frustrating extra step is finally gone: A WhatsApp update is…",
      "url": "https://www.engadget.com/whatsapp-makes-it-easier-to-send-messages-to-unsaved-numbers-093511724.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/JFrcoFjrBRllvF8Z7y6ETg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/reuters.com/03c084f4fcef33110f6d89320da04a26.cf.jpg",
      "publishedAt": "2023-07-20T09:35:11Z",
      "content": "Every app has one flaw that is baffling in how unnecessarily complicated it is. For WhatsApp, that has always been the fact that you can only message people after first saving their contact. But the … [+1151 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Apple's MacBook Air M1 is back on sale for $750",
      "description": "This is a great moment to get a Mac laptop on a budget, particularly if you're heading back to school. Amazon has the MacBook Air M1 with 256GB of storage on sale for a record low of $750, or $249 off. That's the same price we saw on Prime Day, and applies re…",
      "url": "https://www.engadget.com/apples-macbook-air-m1-is-back-on-sale-for-750-160059819.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/DJS5IjlRzoxgDMBdp__.pQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/ad93dca0-2711-11ee-bffb-5c2ddddbf361.cf.jpg",
      "publishedAt": "2023-07-20T16:00:59Z",
      "content": "This is a great moment to get a Mac laptop on a budget, particularly if you're heading back to school. Amazon has the MacBook Air M1 with 256GB of storage on sale for a record low of $750, or $249 of… [+1072 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "YouTube Premium quietly goes up in price to $14 per month",
      "description": "Google has quietly increased the price of YouTube Premium by a significant $2 from $12 to $14, according to the updated signup page spotted by 9to5Google. The annual price jumped to $20, from $120 to $140 per month, a savings of about $28 over paying month-by…",
      "url": "https://www.engadget.com/youtube-premium-quietly-goes-up-in-price-to-14-per-month-100531473.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/e3v5dPnYvuaFg2xCeWChCA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-08/6650f7f0-14b2-11ed-ba7b-70623770e37e.cf.jpg",
      "publishedAt": "2023-07-20T10:05:31Z",
      "content": "Google has quietly increased the price of YouTube Premium by a significant $2 from $12 to $14, according to the updated signup page spotted by 9to5Google. The annual price jumped to $20, from $120 to… [+1358 chars]"
    },
    {
      "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
      },
      "author": "Chuong Nguyen",
      "title": "Dealmaster: Apple gear, Lenovo laptops, and more",
      "description": "We found discounts on laptops, board games, and back-to-school equipment.",
      "url": "https://arstechnica.com/shopping/2023/07/dealmaster-apple-gear-lenovo-laptops-steam-deck-and-more/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/06/IMG_1204-760x380.jpeg",
      "publishedAt": "2023-07-20T18:35:33Z",
      "content": "Enlarge/ Lenovo's ThinkPad X1 Carbon Gen 11, which not-confusingly-at-all feature 13th-generation Intel Core processors.\r\n10 with \r\nAs always, the web is loaded today with good deals on gadgets, vide… [+17281 chars]"
    },
    {
      "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
      },
      "author": "Samuel Axon",
      "title": "Report: Apple has already built its own ChatGPT-like chatbot",
      "description": "The tool is being used internally by employees—with some major restrictions.",
      "url": "https://arstechnica.com/gadgets/2023/07/report-apple-has-already-built-its-own-chatgpt-like-chatbot/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/07/iOS-14-header-800x481-1-760x380.jpg",
      "publishedAt": "2023-07-20T20:56:06Z",
      "content": "Enlarge/ Apple's current AI assistant, Siri, is far less capablebut also less error-pronethan tools like Bard or ChatGPT.\r\n2 with \r\nApple has built its own large language model (LLM) AI framework and… [+2996 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "christinep2424@gmail.com (Christine Persaud)",
      "title": "iPad Pro (2022) vs. Samsung Galaxy Tab S8",
      "description": "If you're trying to decide between the iPad Pro (2022) and Samsung Galaxy Tab S8, both premium tablets, we break things down to help.",
      "url": "https://www.androidcentral.com/tablets/ipad-pro-2022-vs-samsung-galaxy-tab-s8",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/CshxFMfaVEjCt548f4t7mK-1200-80.jpeg",
      "publishedAt": "2023-07-20T17:25:47Z",
      "content": "So, you’re trying to decide between the iPad Pro (2022) vs. Samsung Galaxy Tab S8. The decision seems easy: if you have an Apple iPhone, you’d get more out of an iPad Pro (2022), whereas if you use a… [+12034 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
      "title": "I Expect You To Die 3 hands-on: Not all missions are impossible",
      "description": "I Expect You To Die 3 is one of VR's most anticipated games ever, but how has the series aged over the years? We went hands on with the first three missions.",
      "url": "https://www.androidcentral.com/gaming/virtual-reality/i-expect-you-to-die-3-hands-on",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/UbCT6NYivbuWwMhigozNDU-1200-80.jpg",
      "publishedAt": "2023-07-20T13:00:00Z",
      "content": "From the get-go, you know I Expect You To Die 3 is a special game. That's not because it does anything revolutionary or particularly different from its two predecessors — much of the series' formula … [+5908 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Dan Milmo Global technology editor",
      "title": "UK surveillance law changes could force Apple to ‘withdraw security features’",
      "description": "Giving government oversight could endanger encrypted products like FaceTime and iMessage, Apple saysApple has warned that planned changes to UK surveillance laws could affect iPhone users’ privacy by forcing it to withdraw security features, which could ultim…",
      "url": "https://www.theguardian.com/technology/2023/jul/20/uk-surveillance-law-changes-could-force-apple-to-withdraw-security-features",
      "urlToImage": "https://i.guim.co.uk/img/media/65b3f8e6725bb1b722eef1a14678d35d159e29df/0_86_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=deebd6d04caee618a0ead2937d88fa38",
      "publishedAt": "2023-07-20T14:50:29Z",
      "content": "Apple has warned that planned changes to UK surveillance laws could affect iPhone users privacy by forcing it to withdraw security features, which could ultimately lead to the closure of services lik… [+9674 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Hibaq Farah UK technology reporter",
      "title": "Google testing AI tool that writes news articles",
      "description": "Tool is said to have been pitched to several US news outlets as an aid for journalists rather than a replacementGoogle is testing an artificial intelligence tool that can write news articles, in the latest evidence that the technology has the potential to tra…",
      "url": "https://www.theguardian.com/technology/2023/jul/20/google-testing-ai-tool-that-writes-news-articles",
      "urlToImage": "https://i.guim.co.uk/img/media/c582662a4cab5dc3b3958769e77be7f3f15c008f/0_0_5289_3173/master/5289.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bbd1ca6b7073acd29ec83cd13c79285f",
      "publishedAt": "2023-07-20T12:04:29Z",
      "content": "Google is testing an artificial intelligence tool that can write news articles, in the latest evidence that the technology has the potential to transform white-collar professions.\r\nThe product, known… [+8575 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Peter Bradshaw",
      "title": "The Beanie Bubble review – plushie-craze toy story goes down the cute route",
      "description": "The true story behind the once popular children’s playthings is taken on here by a decent cast who can’t stop proceedings unravellingSome deeply muddled non-storytelling and tonal blandness pretty much sink this movie from the outset, despite its decent cast …",
      "url": "https://www.theguardian.com/film/2023/jul/20/the-beanie-bubble-review-plushie-craze-toy-story-goes-down-the-cute-route",
      "urlToImage": "https://i.guim.co.uk/img/media/588e029a90798502d0cee103c969af53dbf868c5/0_11_2607_1564/master/2607.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTIucG5n&enable=upscale&s=9b27a5048e962e06cd7bdadfdafead89",
      "publishedAt": "2023-07-20T16:00:18Z",
      "content": "Some deeply muddled non-storytelling and tonal blandness pretty much sink this movie from the outset, despite its decent cast and origins in a potentially fascinating true story. It might have been s… [+2445 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Moya Lothian-McLean",
      "title": "People are fascinated by the sober and sober-ish. But the real question is – why aren’t there more of us? | Moya Lothian-McLean",
      "description": "Yes, alcohol consumption is declining. But Britain’s drinking culture still traps so many – and they can’t find a way outRecently, a friend in Scotland has been griping that licensing laws are standing in the way of his summer nights out. But not in the way y…",
      "url": "https://www.theguardian.com/commentisfree/2023/jul/20/sober-alcohol-consumption-britain-drinking-culture",
      "urlToImage": "https://i.guim.co.uk/img/media/2184638c37ac16c9292707e20d2d746d7ef13351/0_16_4246_2547/master/4246.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=bbd6b3bf8b09c2f76d06d985a1d63e6a",
      "publishedAt": "2023-07-20T09:29:02Z",
      "content": "Recently, a friend in Scotland has been griping that licensing laws are standing in the way of his summer nights out. But not in the way you might think: his grievance centres on the impossibility of… [+5465 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Alexi Duggins, Hollie Richardson, Hannah Verdier and Ella Braidwood",
      "title": "How a ‘hunk of plastic’ named Barbie conquered the world",
      "description": "With the release of the much-hyped movie, hear how a doll became an icon in LA Made: The Barbie Tapes. Plus: five of the best Women’s World Cup podcasts<ul><li>Don’t get Hear Here delivered to your inbox? Sign up here</li></ul>Are you a cat person or a dog pe…",
      "url": "https://www.theguardian.com/tv-and-radio/2023/jul/20/hear-here-barbie-podcast-la-made",
      "urlToImage": "https://i.guim.co.uk/img/media/890c71e803d93a7f11f34ba00414d4ffe3c2e4bf/0_129_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=35d9faf578c221f89258a05028106ec4",
      "publishedAt": "2023-07-20T08:45:24Z",
      "content": "Picks of the week\r\nLA Made: The Barbie TapesWidely available, episodes weeklyEven as a child I found her disturbing yet fascinating, says Antonia Cereijido of the Los Angeles news and culture site LA… [+11557 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Juli Clover",
      "title": "Apple Supplier TSMC Delays Production of 4nm Chips at Arizona Factory Due to Skilled Worker Shortage",
      "description": "Apple supplier TSMC has been working on building a chip manufacturing plant in Arizona where it plans to manufacture chips for Apple, but mass production is set to be delayed because of a worker shortage.\n\n\n\n\n\nAccording to The Wall Street Journal, TSMC is fin…",
      "url": "https://www.macrumors.com/2023/07/20/tsmc-4nm-chip-production-delay/",
      "urlToImage": "https://images.macrumors.com/t/KHLC637knfQaiuZQLoqk16XEjSw=/1810x/article-new/2021/03/m1-4nm-feature2.jpg",
      "publishedAt": "2023-07-20T21:33:10Z",
      "content": "Apple supplier TSMC has been working on building a chip manufacturing plant in Arizona where it plans to manufacture chips for Apple, but mass production is set to be delayed because of a worker shor… [+1114 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "iPhone 15 Pro Expected to Feature Wi-Fi 6E: Here's What That Means",
      "description": "Apple plans to add Wi-Fi 6E support to some of its latest iPhones, according to a research note today from Barclays analysts Blayne Curtis and Tom O'Malley. Wi-Fi 6E is rumored to be limited to the iPhone 15 Pro and iPhone 15 Pro Max, as the standard iPhone 1…",
      "url": "https://www.macrumors.com/2023/07/20/iphone-15-pro-wifi-6e/",
      "urlToImage": "https://images.macrumors.com/t/VXoW3Y-__lbD9u2WsGEhbu_Q-lQ=/2500x/article-new/2023/07/iPhone-15-Pro-Two-Volume-Buttons-and-Titanium-Feature-Blue-Green.jpg",
      "publishedAt": "2023-07-20T13:25:00Z",
      "content": "Apple plans to add Wi-Fi 6E support to some of its latest iPhones, according to a research note today from Barclays analysts Blayne Curtis and Tom O'Malley. Wi-Fi 6E is rumored to be limited to the i… [+1186 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Stephen Shankland",
      "title": "1Password Tests Passkey Login to Unlock Your Password Vault - CNET",
      "description": "Passkeys are easier to use and more secure than passwords, tech's biggest companies say. They're trying to nudge us into the \"passwordless\" login era.",
      "url": "https://www.cnet.com/tech/services-and-software/1password-tests-passkey-login-to-unlock-your-password-vault/",
      "urlToImage": "https://www.cnet.com/a/img/resize/3cadc1c9096057db1b3ca72ed78fd338937ea07f/hub/2023/07/19/1fa331bb-58c5-4d63-9226-c714417bf057/passkey-1password-unlock.jpg?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2023-07-20T13:40:00Z",
      "content": "1Password has begun testing a way to access the app without its namesake password, adding an option to use newer passkey technology instead. The change, which uses a quick biometric check to unlock a… [+5824 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Meara Isenberg",
      "title": "YouTube Premium Now Costs More for New and Existing Subscribers - CNET",
      "description": "You'll also have to pay more for YouTube Music Premium.",
      "url": "https://www.cnet.com/tech/services-and-software/youtube-premium-now-costs-more-for-new-and-existing-subscribers/",
      "urlToImage": "https://www.cnet.com/a/img/resize/a6876063af02ceced90828d246e3b6c4cff747a2/hub/2022/03/01/5d701c3b-80a3-43e9-907f-5b25e4899205/youtube-logo-6590.jpg?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2023-07-20T17:43:00Z",
      "content": "Everywhere you look, streaming services are increasingprices. The latest ones to get a price hike: YouTube Premium and YouTube Music Premium. \r\nYouTube on Thursday said it is updating the price for t… [+1041 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Juli Clover",
      "title": "iPhone 15 Pro and Pro Max Supplies Could Be Constrained at Launch Due to Display Manufacturing Issues",
      "description": "Apple is running into difficulties with iPhone 15 Pro and ‌iPhone 15 Pro‌ Max display manufacturing, which could lead to a limited number of devices being available at launch in September.\n\n\n\n\n\nRumors have suggested that the ‌iPhone 15 Pro‌ and ‌iPhone 15 Pro…",
      "url": "https://www.macrumors.com/2023/07/20/iphone-15-pro-display-manufacturing-issues/",
      "urlToImage": "https://images.macrumors.com/t/VXoW3Y-__lbD9u2WsGEhbu_Q-lQ=/2500x/article-new/2023/07/iPhone-15-Pro-Two-Volume-Buttons-and-Titanium-Feature-Blue-Green.jpg",
      "publishedAt": "2023-07-20T16:42:23Z",
      "content": "Apple is running into difficulties with iPhone 15 Pro and ‌iPhone 15 Pro‌ Max display manufacturing, which could lead to a limited number of devices being available at launch in September.\r\nRumors ha… [+2108 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Hartley Charlton",
      "title": "Apple Threatens to Pull FaceTime and iMessage in the UK Over Proposed Security Legislation",
      "description": "Apple today said that it will remove services including FaceTime and iMessage from the UK if plans to enact new legislation that would weaken security come into force (via BBC News).\n\n\n\n\n\nThe UK government is planning to update the Investigatory Powers Act (I…",
      "url": "https://www.macrumors.com/2023/07/20/apple-threatens-to-pull-facetime-and-imessage-uk/",
      "urlToImage": "https://images.macrumors.com/t/n72gXAq-55QcsXTWEyHi3Zy3FoE=/1600x/article-new/2022/09/apple-regent-street-hires.jpeg",
      "publishedAt": "2023-07-20T12:10:02Z",
      "content": "Apple says it will pull services including FaceTime and iMessage in the UK if plans to amend surveillance legislation that would require tech companies to make major security and privacy changes go a… [+2504 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "iPhone SE Remains Safe Buy as New Model No Longer Expected to Launch Next Year",
      "description": "After speaking with supply chain companies in Asia, Barclays analysts Blayne Curtis and Tom O'Malley believe that Apple is no longer planning to launch a fourth-generation iPhone SE in 2024. In a research note today, the analysts said the device was expected …",
      "url": "https://www.macrumors.com/2023/07/20/iphone-se-4-no-longer-expected-in-2024/",
      "urlToImage": "https://images.macrumors.com/t/OoSa3F8nZB6xu08a8tGb-PkN124=/2500x/article-new/2023/02/iphone-se-4-modified-flag-edges.jpg",
      "publishedAt": "2023-07-20T14:03:28Z",
      "content": "After speaking with supply chain companies in Asia, Barclays analysts Blayne Curtis and Tom O'Malley believe that Apple is no longer planning to launch a fourth-generation iPhone SE in 2024. In a res… [+1250 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Mitchel Broussard",
      "title": "Deals: Apple's M1 MacBook Air Returns to Best-Ever Price of $749.99 on Amazon",
      "description": "Last week during Prime Day, Amazon introduced a new all-time low price on the 2020 13.3-inch M1 MacBook Air. This deal has been unavailable since the event ended, but today Amazon brought back the record low price of $749.99 for the 256GB M1 MacBook Air, down…",
      "url": "https://www.macrumors.com/2023/07/20/deals-m1-macbook-air-returns/",
      "urlToImage": "https://images.macrumors.com/t/23_QgBRjo2LOrtG5I1OQJl_48jA=/2125x/article-new/2022/06/M1-MacBook-Air-Deals-Feature-Cool.jpg",
      "publishedAt": "2023-07-20T13:41:23Z",
      "content": "Last week during Prime Day, Amazon introduced a new all-time low price on the 2020 13.3-inch M1 MacBook Air. This deal has been unavailable since the event ended, but today Amazon brought back the re… [+982 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Apple Slams UK Surveillance-bill Proposals, Threatens To Remove FaceTime and iMessage",
      "description": "Apple says it will remove services such as FaceTime and iMessage from the UK rather than weaken security if new proposals are made law and acted upon. From a report: The government is seeking to update the Investigatory Powers Act (IPA) 2016. It wants messagi…",
      "url": "https://apple.slashdot.org/story/23/07/20/137251/apple-slams-uk-surveillance-bill-proposals-threatens-to-remove-facetime-and-imessage",
      "urlToImage": "https://a.fsdn.com/sd/topics/encryption_64.png",
      "publishedAt": "2023-07-20T16:00:00Z",
      "content": "The government is seeking to update the Investigatory Powers Act (IPA) 2016. It wants messaging services to clear security features with the Home Office before releasing them to customers. The act le… [+572 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Sirena Bergman",
      "title": "If you're getting mocked for loving Apple Maps, here's your reminder that people once thought the iPhone was stupid too",
      "description": "People have just discovered that Apple Maps is now actually quite good, but they can't let go of what a disaster they were back in 2012.",
      "url": "https://www.businessinsider.com/apple-maps-vs-google-maps-viral-debate-2023-7",
      "urlToImage": "https://i.insider.com/64b918568a4e660019e3f79b?width=1200&format=jpeg",
      "publishedAt": "2023-07-20T11:44:19Z",
      "content": "A lot of the takes about the original iPhone have aged very, very badly.David Paul Morris/Getty Images\r\n<ul>\n<li>People have just discovered that Apple Maps has a loyal fanbase, and is actually quite… [+2386 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "George Glover",
      "title": "Tesla is the next Apple and its valuation could soar by another $190 billion, Wedbush says",
      "description": "Shares in Elon Musk's EV maker could hit $350, analyst Dan Ives wrote in a new research note following its second-quarter results.",
      "url": "https://www.businessinsider.com/tesla-stock-elon-musk-apple-ai-full-self-driving-wedbush-2023-7",
      "urlToImage": "https://i.insider.com/64b917daa46ce30019a274a5?width=1200&format=jpeg",
      "publishedAt": "2023-07-20T12:46:05Z",
      "content": "Tesla CEO Elon Musk at an event in Shanghai.Aly Song/Reuters\r\n<ul>\n<li>Tesla's stock could jump another 20%, Wedbush said in a note on Thursday.</li>\n<li>Analyst Dan Ives compared it to Apple in the … [+2177 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "George Glover",
      "title": "Tesla is the next Apple and its valuation could soar by another $190 billion, Wedbush says",
      "description": "Shares in Elon Musk's EV maker could hit $350, analyst Dan Ives wrote in a new research note following its second-quarter results.",
      "url": "https://markets.businessinsider.com/news/stocks/tesla-stock-elon-musk-apple-ai-full-self-driving-wedbush-2023-7",
      "urlToImage": "https://i.insider.com/64b917daa46ce30019a274a5?width=1200&format=jpeg",
      "publishedAt": "2023-07-20T13:22:43Z",
      "content": "Tesla CEO Elon Musk at an event in Shanghai.Aly Song/Reuters\r\n<ul>\n<li>Tesla's stock could jump another 20%, Wedbush said in a note on Thursday.</li>\n<li>Analyst Dan Ives compared it to Apple in the … [+2177 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Kelsey Vlamis",
      "title": "When an airline made his bag disappear, a magician bought another plane ticket to get back in the airport and track it down with an Apple AirTag",
      "description": "Magician Danny Orleans took matters into his own hands when the airline said his bag never made it to Newark, but he could see it on the AirTag app.",
      "url": "https://www.businessinsider.com/newark-lost-bag-magician-bought-new-ticket-found-apple-airtag-2023-7",
      "urlToImage": "https://i.insider.com/64b89c188a4e660019e3c55a?width=1200&format=jpeg",
      "publishedAt": "2023-07-20T19:52:43Z",
      "content": "Danny Orleans used his Apple AirTag to track down his bag on the tarmac.Danny Orleans\r\n<ul>\n<li>Magician Danny Orleans's bag was missing when he landed in Newark the day before a performance.</li>\n<l… [+4432 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "George Glover",
      "title": "Netflix is trumpeting its password crackdown – but tougher times lie ahead for the streaming pioneer",
      "description": "Netflix added 6 million subscribers in the second quarter, but its revenue still fell short of analysts' projections.",
      "url": "https://www.businessinsider.com/netflix-stock-password-sharing-crackdown-earnings-subscribers-hollywood-strike-markets-2023-7",
      "urlToImage": "https://i.insider.com/64b8fb878a4e660019e3dd67?width=1200&format=jpeg",
      "publishedAt": "2023-07-20T11:10:10Z",
      "content": "Writers picket outside Netflix on Sunset Boulevard in Hollywood.Frederic Brown/Getty Images\r\n<ul>\n<li>Netflix's password-sharing crackdown helped it add 6 million subscribers in the second quarter.</… [+1944 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Joseph Wilkins",
      "title": "This 'gamechanger' technology is harder than rocket science and will drive the next AI wave, Goldman Sachs says",
      "description": "Technological advancements in chipmaking will fuel the next wave of AI and bring the value of the semiconductor industry to over $1 trillion, per Goldman Sachs Research.",
      "url": "https://markets.businessinsider.com/news/stocks/chatgpt-ai-artificial-intelligence-next-wave-euv-semiconductors-goldman-sachs-2023-7",
      "urlToImage": "https://i.insider.com/64b90a5c8a4e660019e3ebdf?width=1200&format=jpeg",
      "publishedAt": "2023-07-20T12:40:32Z",
      "content": "A semiconductor being manufacturedGetty\r\n<ul>\n<li>An advanced chipmaking technology known as EUV \"will enable the next wave of AI\", according to Goldman Sachs.</li>\n<li>Goldman analyst Alexander Duva… [+2857 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ReadWrite"
      },
      "author": "Brad Anderson",
      "title": "Apple’s ChatGPT Rival Is Coming Soon",
      "description": "In a recent report from Bloomberg’s Mark Gurman, it has been revealed that Apple is making significant strides in the […]\nThe post Apple’s ChatGPT Rival Is Coming Soon appeared first on ReadWrite.",
      "url": "https://readwrite.com/apples-chatgpt-rival-is-coming-soon/",
      "urlToImage": "https://images.readwrite.com/wp-content/uploads/2023/07/keming-tan-5VWF_nL7JzQ-unsplash-scaled.jpg",
      "publishedAt": "2023-07-20T00:16:31Z",
      "content": "In a recent report from Bloomberg’s Mark Gurman, it has been revealed that Apple is making significant strides in the development of artificial intelligence (AI) tools to compete with industry leader… [+8184 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Boing Boing"
      },
      "author": "Boing Boing's Shop",
      "title": "Looking for an Apple iPad at a price that you can afford? We've got you!",
      "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nTL;DR: Enjoy the portability and user-friendly ease of the Apple iPad Pro 9.7\" A1673 32GB WiFi Silver Bundle (Refurbi…",
      "url": "https://boingboing.net/2023/07/20/looking-for-an-apple-ipad-at-a-price-that-you-can-afford-weve-got-you.html",
      "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/07/image_processing20230320-72-8zepr4.jpg?fit=1200%2C800&ssl=1",
      "publishedAt": "2023-07-20T15:00:00Z",
      "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nTL;DR: Enjoy the portability and user-friendly ease of the … [+1623 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Boing Boing"
      },
      "author": "Boing Boing's Shop",
      "title": "Get access to more than 240 Mac apps to boost your creativity and productivity for only $85",
      "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.TL;DR: Spend less time filtering through hundreds of apps and let them come to you with a 1-Year Subscription to Setapp P…",
      "url": "https://boingboing.net/2023/07/20/get-access-to-more-than-240-mac-apps-to-boost-your-creativity-and-productivity-for-only-85.html",
      "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/07/sale_322607_article_image.jpg?fit=1200%2C800&ssl=1",
      "publishedAt": "2023-07-20T21:00:00Z",
      "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.TL;DR: Spend less time filtering through hundreds of apps and… [+2000 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hackaday"
      },
      "author": "Arya Voronova",
      "title": "PCIe For Hackers: An M.2 Card Journey",
      "description": "I’ve designed a few M.2 adapters for my own and my friends’ use, and having found those designs online, people have asked me for custom-made adapters. One of these requests is quite spe…",
      "url": "https://hackaday.com/2023/07/20/pcie-for-hackers-an-m-2-card-journey/",
      "urlToImage": "https://hackaday.com/wp-content/uploads/2023/03/PCIe.jpg",
      "publishedAt": "2023-07-20T14:00:32Z",
      "content": "I’ve designed a few M.2 adapters for my own and my friends’ use, and having found those designs online, people have asked me for custom-made adapters. One of these requests is quite specific – an ada… [+14067 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hackaday"
      },
      "author": "Al Williams",
      "title": "TV Typewriter Remembered",
      "description": "With the recent passing of Don Lancaster, I took a minute to reflect on how far things have come in a pretty short period of time. If you somehow acquired a computer in the early 1970s, it was prob…",
      "url": "https://hackaday.com/2023/07/20/tv-typewriter-remembered/",
      "urlToImage": "https://hackaday.com/wp-content/uploads/2023/07/tv_typewriter.jpg",
      "publishedAt": "2023-07-20T17:00:18Z",
      "content": "With the recent passing of Don Lancaster, I took a minute to reflect on how far things have come in a pretty short period of time. If you somehow acquired a computer in the early 1970s, it was probab… [+5876 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Boing Boing"
      },
      "author": "Mark Frauenfelder",
      "title": "Apple says it will pull Messages and FaceTime if UK forces back-door access to its encryption",
      "description": "The UK government is eager to pass the Online Safety Bill, which would require messaging services to provide backdoors into end-to-end encrypted messages, reports 9to5Mac. It's the same tired excuse: a government claiming the necessity of detecting illegal co…",
      "url": "https://boingboing.net/2023/07/20/apple-says-it-will-pull-messages-and-facetime-if-uk-forces-back-door-access-to-its-encryption.html",
      "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2022/05/applehq.jpeg?fit=1200%2C900&ssl=1",
      "publishedAt": "2023-07-20T18:51:31Z",
      "content": "The UK government is eager to pass the Online Safety Bill, which would require messaging services to provide backdoors into end-to-end encrypted messages, reports 9to5Mac. It's the same tired excuse:… [+2118 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Rubén Andrés",
      "title": "En 1990 Steve Jobs soñaba con el teletrabajo. Tim Cook y la Apple de 2023 no opinan lo mismo",
      "description": "Steve Jobs ha sido una figura relevante en la industria de la informática, pero también fue un visionario en la gestión empresarial. Hace 43 años, Steve Jobs ya soñaba con entornos de trabajo remoto, un modelo que la Apple de Tim Cook ha vetado a sus trabajad…",
      "url": "https://www.xataka.com/empresas-y-economia/1990-steve-jobs-sonaba-teletrabajo-tim-cook-apple-2023-no-opinan",
      "urlToImage": "https://i.blogs.es/ea3e83/jobs-y-cook/840_560.jpeg",
      "publishedAt": "2023-07-20T13:01:49Z",
      "content": "Steve Jobs ha sido una figura relevante en la industria de la informática, pero también fue un visionario en la gestión empresarial. Hace 43 años, Steve Jobs ya soñaba con entornos de trabajo remoto,… [+3020 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Javier Marquez",
      "title": "HP ya sabe cómo empezar a reducir su dependencia de China: llevando parte de su producción a México y Tailandia",
      "description": "El mundo ha cambiado sustancialmente en los últimos años, al menos para las compañías tecnológicas que, además de ofrecer productos digitales, comercializan dispositivos electrónicos. Los numerosos problemas de suministro causados por la pandemia junto a la g…",
      "url": "https://www.xataka.com/empresas-y-economia/hp-sabe-como-empezar-a-reducir-su-dependencia-china-llevando-parte-su-produccion-a-mexico-tailandia",
      "urlToImage": "https://i.blogs.es/22ea48/hp-portatil/840_560.jpeg",
      "publishedAt": "2023-07-20T20:00:00Z",
      "content": "El mundo ha cambiado sustancialmente en los últimos años, al menos para las compañías tecnológicas que, además de ofrecer productos digitales, comercializan dispositivos electrónicos. Los numerosos p… [+3020 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "John Tones",
      "title": "Una de las secuelas más merecidas, inesperadas y brutales de los últimos años está arrasando en Netflix",
      "description": "A mediados de la década pasada, 'No respires' se convirtió en uno de los éxitos sorpresa del género de terror, y colocó a su director Fede Álvarez, después de su estupendo remake de 'Evil Dead', en uno de los nombres propios más relevantes del género de terro…",
      "url": "https://www.xataka.com/streaming/secuelas-merecidas-inesperadas-brutales-ultimos-anos-esta-arrasando-netflix",
      "urlToImage": "https://i.blogs.es/600a99/1366_2000-11-/840_560.jpeg",
      "publishedAt": "2023-07-20T18:01:51Z",
      "content": "A mediados de la década pasada, 'No respires' se convirtió en uno de los éxitos sorpresa del género de terror, y colocó a su director Fede Álvarez, después de su estupendo remake de 'Evil Dead', en u… [+1714 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Albert Sanchis",
      "title": "Las plataformas de streaming más populares en cada país del mundo, en un detallado mapa",
      "description": "En los últimos años, el streaming se ha convertido en una columna esencial del mundo del entretenimiento. Podríamos decir que las plataformas de vídeo se han convertido en la nueva \"tele\". De hecho, que Sálvame vaya a emitirse en Netflix en España es una clar…",
      "url": "https://www.xataka.com/streaming/plataformas-streaming-populares-cada-pais-mundo-detallado-mapa",
      "urlToImage": "https://i.blogs.es/103858/asfdaf/840_560.png",
      "publishedAt": "2023-07-20T08:25:49Z",
      "content": "En los últimos años, el streaming se ha convertido en una columna esencial del mundo del entretenimiento. Podríamos decir que las plataformas de vídeo se han convertido en la nueva \"tele\". De hecho, … [+4432 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Economist"
      },
      "author": "The Economist",
      "title": "Big tech’s dominance is straining the logic of passive investing",
      "description": "Both index providers and fund managers must adjust to the dominance of a few firms",
      "url": "https://www.economist.com/finance-and-economics/2023/07/20/big-techs-dominance-is-straining-the-logic-of-passive-investing",
      "urlToImage": "https://www.economist.com/img/b/1280/720/90/media-assets/image/20230722_FNP504.jpg",
      "publishedAt": "2023-07-20T09:32:39Z",
      "content": "Dont look for the needle in the haystack. Just buy the haystack! So wrote Jack Bogle, who founded Vanguard Asset Management in 1975 and brought index investment to a mass market. Subsequent decades p… [+4297 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Alex Blake",
      "title": "Apple’s next Vision Pro may send you on a mood-altering trip",
      "description": "A freshly granted patent shows Apple is working on letting its Vision Pro headset alter your mood at the touch of a button. Could we see it in the near future?",
      "url": "http://www.digitaltrends.com/computing/apple-vision-pro-mood-altering-patent/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/06/apple-vision-pro-wwdc-2023-20.png?resize=1200%2C630&p=1",
      "publishedAt": "2023-07-20T11:15:32Z",
      "content": "It sounds like something out of a sci-fi novel, but Apple could be working on a way to let you alter your mood just by telling its Vision Pro headset how you want to feel. That’s according to a recen… [+2696 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Mark Coppock",
      "title": "I’m a laptop reviewer, and this is the one to send your kid to college with",
      "description": "The Asus ZenBook 14 OLED offers tremendous value, as well as the performance, battery life, and display quality that college students will love.",
      "url": "http://www.digitaltrends.com/computing/laptop-reviewer-best-laptop-for-college/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/06/asus-zenbook-14-oled-featured-e1686694508979.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2023-07-20T14:00:24Z",
      "content": "I’ve reviewed many of the major laptops released over the past few years, and one of the most common questions I get is about which laptop to buy for a kid going off to college.\r\nYou need something p… [+4356 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Phil Nickinson",
      "title": "YouTube Premium and Google Music are now more expensive, too",
      "description": "Get ready to pay a little more for an individual subscription to YouTube Premium or YouTube Music.",
      "url": "http://www.digitaltrends.com/home-theater/youtube-premium-price-increase/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/10/youtube-premium-oct-22-1.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2023-07-20T12:58:25Z",
      "content": "Phil Nickinson/Digital Trends\r\nGet ready to pay a little more for a couple of Google’s streaming options. As spotted by 9to5 Google, YouTube Premium — the add-on that (among other things) gets rid of… [+1547 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Christine Romero-Chan",
      "title": "I made myself try a 14.5-inch tablet — and it didn’t go very well",
      "description": "I spent the past few weeks using one of the largest tablets ever, and I've come to the conclusion that no one really needs tablets this big.",
      "url": "http://www.digitaltrends.com/mobile/i-made-myself-use-a-big-android-tablet-didnt-go-well-why/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/07/lenovo-tab-extreme-chrome.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2023-07-20T13:00:57Z",
      "content": "Andrew Martonik/Digital Trends\r\nEveryone has a tablet these days — whether it’s an Apple iPad or an Android tablet from Samsung, Lenovo, or even OnePlus. Tablets are great devices, as they let you be… [+5147 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Atlantic"
      },
      "author": "Hanna Rosin",
      "title": "Why Can’t We Quit Weddings?",
      "description": "Marriages aren’t what they used to be. So why are weddings ever more wedding-like and deluxe?",
      "url": "https://www.theatlantic.com/podcasts/archive/2023/07/why-cant-we-quit-weddings/674772/?utm_source=feed",
      "urlToImage": null,
      "publishedAt": "2023-07-20T12:30:00Z",
      "content": "<!-----\n\nYay, no errors, warnings, or alerts!\n\nConversion time: 1.421 seconds.\n\n\nUsing this HTML file:\n\n1. Paste this output into your source file.\n2. See the notes and action items below regarding t… [+30564 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Github.com"
      },
      "author": "avaneev",
      "title": "LZAV – Fast In-Memory Data Compression Algorithm (In C)",
      "description": "Fast In-Memory Data Compression Algorithm (in C). Contribute to avaneev/lzav development by creating an account on GitHub.",
      "url": "https://github.com/avaneev/lzav",
      "urlToImage": "https://opengraph.githubassets.com/93601260b252939acc195d5d554b83678255c32ff21de23616bf04bd5212a3dc/avaneev/lzav",
      "publishedAt": "2023-07-20T00:39:31Z",
      "content": "Introduction\r\nLZAV is a fast general-purpose in-memory data compression algorithm based on\r\nnow-classic LZ77 data compression\r\napproach. LZAV holds a good position on the Pareto landscape of factors,… [+3796 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cloudinary.com"
      },
      "author": "melindapham",
      "title": "JPEG XL: How It Started, How It’s Going",
      "description": "Significance of Apple's support for JPEG XL and what this means for the widespread adoption of this next-generation image compression format.",
      "url": "https://cloudinary.com/blog/jpeg-xl-how-it-started-how-its-going",
      "urlToImage": "https://res.cloudinary.com/cloudinary-marketing/images/v1688666201/Blog-jpegXL/Blog-jpegXL-jpg?_i=AA",
      "publishedAt": "2023-07-20T14:57:21Z",
      "content": "Last month at the annual Worldwide Developers Conference, Apple announced its support of JPEG XL. As someone who helped create JPEG XL, I dont think anyone was more pleased than me to hear this news.… [+7765 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Taylor.town"
      },
      "author": "Taylor Troesh",
      "title": "Spoil Your Secret Sauce",
      "description": "Go on an adventure. Find a New Thing™. Bring it back. Share it, and demonstrate why the New Thing™ is worth sharing.",
      "url": "https://taylor.town/secret-sauce",
      "urlToImage": null,
      "publishedAt": "2023-07-20T11:52:46Z",
      "content": "Ive always maintained, he said, you cannot tell anyone what Dr Pepper\r\ntastes like because its so different. Its not an apple; its not an orange;\r\nits not a strawberry; its not a root beer; its not e… [+7356 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "Apple GPT statt ChatGPT: KI-Experimente in Cupertino",
      "description": "Ein internes Projekt soll erforschen, ob auch Apple große Sprachmodelle für seine Systeme  nutzen könnte. Erste Ansätze finden sich in iOS 17.",
      "url": "https://www.heise.de/news/Apple-GPT-statt-ChatGPT-KI-Experimente-in-Cupertino-9221427.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/7/3/9/2/4/Apple-WWDC23-MacBook-Air-15-in-lifestyle-230605_big.jpg.large_2x-ff46ee82b3ba1d4e.jpg",
      "publishedAt": "2023-07-20T07:41:00Z",
      "content": "Bislang scheint Apples KI-Strategie angesichts der großen Schritte von OpenAI (ChatGPT), Microsoft (Bing Chat) oder Google (Bard) eher ungewiss. Der iPhone-Konzern neigt eher zum Mahnen statt zur pra… [+2667 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "Neue Standby-Funktion in iOS 17: Sieht so Apples HomePod mit Bildschirm aus?",
      "description": "Der neue Betriebsmodus fürs iPhone ist nicht nur für den Nachttisch geeignet. StandBy in iOS 17 könnte zum Vorbild neuartiger Apple-Entertainment-Geräte werden.",
      "url": "https://www.heise.de/news/Neue-Standby-Funktion-in-iOS-17-Sieht-so-Apples-HomePod-mit-Bildschirm-aus-9218991.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/7/2/6/3/1/standby-c965094bcf4f6870.png",
      "publishedAt": "2023-07-20T09:52:00Z",
      "content": "Seit Jahren wird spekuliert, dass Apple erstmals ein Smarthome-Gerät mit Bildschirm plant. Es könnte eine Mischung aus dem Lautsprecher HomePod und der Multimediabox Apple TV sein oder ein abgespeckt… [+2359 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Zac Hall",
      "title": "A boring Apple Watch Series 9 and Ultra 2 might make style a big feature",
      "description": "Apple Watch Series 9 and Apple Watch Ultra 2 are expected to be unveiled in less than two months, but not much is known about what will be new.\n more…\nThe post A boring Apple Watch Series 9 and Ultra 2 might make style a big feature appeared first on 9to5Mac.",
      "url": "https://9to5mac.com/2023/07/20/apple-watch-series-9-ultra-2-whats-new/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/Apple-Watch-Pride-face-2023.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T19:40:56Z",
      "content": "Apple Watch Series 9 and Apple Watch Ultra 2 are expected to be unveiled in less than two months, but not much is known about what will be new.\r\nWe expect Apple Watch Series 9 and Apple Watch Ultra 2… [+2859 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "Apple Pay Later off to a hot start despite staggered rollout",
      "description": "Apple Pay Later has been rolling out since March, but it’s still not available to everyone. Despite the limited availability, a new survey today suggests that Apple is already taking business from other buy-now-pay-later services like Paypal, Afterpay, and mo…",
      "url": "https://9to5mac.com/2023/07/20/apple-pay-later-usage-data-afterpay/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/apple-pay-later.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T16:16:32Z",
      "content": "Apple Pay Later has been rolling out since March, but it’s still not available to everyone. Despite the limited availability, a new survey today suggests that Apple is already taking business from ot… [+2152 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "tvOS 16.6 officially adds Siri support in Hebrew for Apple TV and HomePod",
      "description": "Earlier this year, it was reported that Apple had been internally testing Siri support in Hebrew for the HomePod with iOS 16.4 – and there was even a video of the new language in action on a HomePod mini running an internal beta build. Now with iOS 16.6 and t…",
      "url": "https://9to5mac.com/2023/07/20/tvos-16-6-siri-hebrew-apple-tv-homepod/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/Siri-HomePod.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T23:33:44Z",
      "content": "Earlier this year, it was reported that Apple had been internally testing Siri support in Hebrew for the HomePod with iOS 16.4 and there was even a video of the new language in action on a HomePod mi… [+2135 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "Apple employee reportedly didn’t tell Google about zero-day exploit found in Chrome",
      "description": "As we often report here, it’s common for tech companies to help each other improve their security systems by sharing zero-day exploits found by security researchers. Google, for example, does this a lot. But recently, an Apple employee reportedly found a zero…",
      "url": "https://9to5mac.com/2023/07/20/apple-google-chrome-exploit/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/chrome-apple-revenue.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T19:46:53Z",
      "content": "As we often report here, its common for tech companies to help each other improve their security systems by sharing zero-day exploits found by security researchers. Google, for example, does this a l… [+2031 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Benjamin Mayo",
      "title": "Apple says it would remove iMessage and FaceTime in the UK rather than break end-to-end encryption",
      "description": "Facing possible legislation that would require messaging services to offer backdoors in end-to-end encryption, Apple is saying it would rather remove apps like iMessage and FaceTime entirely from the UK market (via BBC News).\nThe new Online Safety Bill is cur…",
      "url": "https://9to5mac.com/2023/07/20/apple-imessage-facetime-remove-security-law/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/iMessage-edit-victim.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T12:41:22Z",
      "content": "Facing possible legislation that would require messaging services to offer backdoors in end-to-end encryption, Apple is saying it would rather remove apps like iMessage and FaceTime entirely from the… [+1376 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Ben Lovejoy",
      "title": "Apple GPT won’t be a customer feature anytime soon [Opinion]",
      "description": "News that Apple has developed its own generative AI model – dubbed Apple GPT – caused a little flurry of excitement yesterday, with John Gruber noting that it caused AAPL’s stock price to briefly spike by 2.7%\nEven investors seemed to quickly realise that the…",
      "url": "https://9to5mac.com/2023/07/20/apple-gpt-future/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/Apple-GPT-wont-be-a-customer-tool-anytime-soon.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T13:50:10Z",
      "content": "News that Apple has developed its own generative AI model dubbed Apple GPT caused a little flurry of excitement yesterday, with John Gruber noting that it caused AAPL’s stock price to briefly spike b… [+4809 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "iPhone 15 Pro could face ‘severe shortages’ at launch due to display production issues",
      "description": "Apple is reportedly facing production issues for the iPhone 15 Pro and iPhone 15 Pro Max. A new report today says that these devices could face severe supply constraints in September due to Apple’s plans to significantly reduce the size of the bezel around th…",
      "url": "https://9to5mac.com/2023/07/20/iphone-15-pro-delays-shortages-display/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/iphone-15-pro-hero-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T16:37:54Z",
      "content": "Apple is reportedly facing production issues for the iPhone 15 Pro and iPhone 15 Pro Max. A new report today says that these devices could face severe supply constraints in September due to Apple’s p… [+2671 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Seth Kurkowski",
      "title": "9to5Mac Daily: July 20, 2023 – iPhone 15 delays, Apple threatens to leave the UK",
      "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\nEnjoy the podcast? Shop \n\r\n\n …",
      "url": "https://9to5mac.com/2023/07/20/daily-july-20-2023/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T22:23:29Z",
      "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+842 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "Beats Studio Pro teases USB-C and Lossless coming to next-generation AirPods Max",
      "description": "Apple on Wednesday unveiled the new Beats Studio Pro, which is the first major overhaul of the Beats Studio since 2017. And while Beats’ products have been co-existing with AirPods, Beats Studio Pro competes directly with AirPods Max – Apple’s super expensive…",
      "url": "https://9to5mac.com/2023/07/19/beats-studio-pro-usb-c-lossless-airpods-max/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/Beats-Studio-Pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T01:14:31Z",
      "content": "Apple on Wednesday unveiled the new Beats Studio Pro, which is the first major overhaul of the Beats Studio since 2017. And while Beats’ products have been co-existing with AirPods, Beats Studio Pro … [+2950 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "Review: Beats Studio Pro are here, and they make AirPods Max impossible to recommend (for now)",
      "description": "Update July 20, 2023: are also now available on Amazon with next-day shipping. \nThe oft-rumored headphones are now official. While Apple’s Beats brand has released a wide and very impressive range of earbuds over the last several years, the new Beats Studio P…",
      "url": "https://9to5mac.com/2023/07/20/beats-studio-pro-headphones-review/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/beats-studio-pro8.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T15:05:41Z",
      "content": "Update July 20, 2023: Beats Studio Pro are also now available on Amazon with next-day shipping. \r\nThe oft-rumored Beats Studio Pro headphones are now official. While Apples Beats brand has released a… [+15640 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Michael Potuck",
      "title": "PSA: mophie working on firmware fix for 3-in-1 travel charger with MagSafe issue",
      "description": "At the start of 2022, mophie launched a compact portable charger for Apple Watch, AirPods, and iPhone with official MagSafe. But this summer, a charging issue has surfaced that’s made the device unusable for some. While there is a firmware fix coming soon, yo…",
      "url": "https://9to5mac.com/2023/07/20/mophie-firmware-fix-for-3-in-1-travel-charger/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/02/iphone-airpods-travel-charger-mophie-3-in-1-review.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T20:54:22Z",
      "content": "At the start of 2022, mophie launched a compact portable charger for Apple Watch, AirPods, and iPhone with official MagSafe. But this summer, a charging issue has surfaced that’s made the device unus… [+2165 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Ben Lovejoy",
      "title": "TSMC Arizona chip production delayed from 2024 to 2025",
      "description": "The start of TSMC Arizona chip production – which will include chips for older Apple devices – has now been officially delayed by the company. Production was scheduled to begin in late 2024, and this has now been pushed back to early 2025.\nApple’s chipmaker h…",
      "url": "https://9to5mac.com/2023/07/20/tsmc-arizona-chip-production-delayed/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/TSMC-Arizona-chip-production-delayed.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T12:01:21Z",
      "content": "The start of TSMC Arizona chip production which will include chips for older Apple devices has now been officially delayed by the company. Production was scheduled to begin in late 2024, and this has… [+2476 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "Car owners are frustrated with infotainment confusion, so GM is taking away the most popular solutions",
      "description": "In case you missed it, GM is planning to ditch CarPlay in all of its future EVs starting next year. A new survey from JD Power today only further highlights the stupidity of GM’s decision, revealing that fewer people than ever enjoy in-car infotainment system…",
      "url": "https://9to5mac.com/2023/07/20/survey-carplay-gm-android-auto/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/01/carplay-music-app.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T17:19:58Z",
      "content": "In case you missed it, GM is planning to ditch CarPlay in all of its future EVs starting next year. A new survey from JD Power today only further highlights the stupidity of GMs decision, revealing t… [+4335 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "Magician relies on AirTag and a second plane ticket after United makes his bag disappear",
      "description": "Apple’s AirTag item tracker has once again stepped in to save the day for a United Airlines traveler. This time, magician Danny Orleans was traveling from Chicago to Newark to perform at a trade show when he realized United’s own magic trick had made his bag …",
      "url": "https://9to5mac.com/2023/07/20/magician-airtag-united-airlines-bag/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/airtag-tarmac.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T20:48:23Z",
      "content": "Apple’s AirTag item tracker has once again stepped in to save the day for a United Airlines traveler. This time, magician Danny Orleans was traveling from Chicago to Newark to perform at a trade show… [+3724 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Rikka Altland",
      "title": "Deals: 12.9-inch M2 iPad Pro $150 off, 16-inch M1 Pro/Max MacBook Pro from $1,900 lows, more",
      "description": "We’re back with Thursday’s batch of fresh discounts courtesy of 9to5Toys, with some 12.9-inch M2 iPad Pro discounts leading the way. With Prime Day having come and gone without a chance to save, you can now take $150 off various models. Those who don’t mind g…",
      "url": "https://9to5mac.com/2023/07/20/deals-12-9-inch-m2-ipad-pro-16-inch-m1-promacbook-pro/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/final-cut-pro-for-ipad-hero.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T15:50:48Z",
      "content": "We’re back with Thursday’s batch of fresh discounts courtesy of 9to5Toys, with some 12.9-inch M2 iPad Pro discounts leading the way. With Prime Day having come and gone without a chance to save, you … [+5080 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "‘Pokémon Sleep’ game and sleep tracker now available on the App Store for iPhone",
      "description": "The Pokémon Company announced earlier this year its new app called Pokémon Sleep, which combines a sleep monitor with a game that lets users keep an eye on their sleep cycle and turn the collected data into a fun game. Today, the app has officially launched o…",
      "url": "https://9to5mac.com/2023/07/19/pokemon-sleep-tracker-game/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/Pokemon-Sleep.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T01:06:17Z",
      "content": "The Pokémon Company announced earlier this year its new app called Pokémon Sleep, which combines a sleep monitor with a game that lets users keep an eye on their sleep cycle and turn the collected da… [+1943 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Michael Potuck",
      "title": "Nomad launches reimagined ChargeKey with Lightning and USB-C versions [Hands-on]",
      "description": "Back in 2013 in Nomad’s early days, the company launched an innovative charging solution for iPhone called ChargeKey. Now the “world’s most portable charging cable” has been redesigned with a modern and metal build and it comes in both Lightning and USB-C ver…",
      "url": "https://9to5mac.com/2023/07/20/nomad-launches-reimagined-chargekey-lightning-and-usb-c/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/nomad-chargekey-lightning-usb-c.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T16:00:20Z",
      "content": "Back in 2013 in Nomad’s early days, the company launched an innovative charging solution for iPhone called ChargeKey. Now the “world’s most portable charging cable” has been redesigned with a modern … [+2148 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Ben Lovejoy",
      "title": "iPhone 15 delay predicted by analyst who was right about iPhone 12",
      "description": "A Bank of America (BoA) analyst, who correctly predicted that the iPhone 12 would not go on sale in September 2020, is now suggesting that we might see a similar iPhone 15 delay.\nBofA Global Research analyst Wamsi Mohan said in an investment note that this ye…",
      "url": "https://9to5mac.com/2023/07/20/iphone-15-delay/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/iphone-15-48mp-camera.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T11:13:42Z",
      "content": "A Bank of America (BoA) analyst, who correctly predicted that the iPhone 12 would not go on sale in September 2020, is now suggesting that we might see a similar iPhone 15 delay.\r\nBofA Global Researc… [+2329 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Michael Potuck",
      "title": "Best USB-C and Thunderbolt displays for Mac [New: Samsung ViewFinity 5K]",
      "description": "USB-C/Thunderbolt display options have really expanded over the last couple of years. While Apple’s Pro Display XDR isn’t the best fit for most Mac users at $5,000+, it also offers the more affordable Studio Display. But there are also lots of solid choices f…",
      "url": "https://9to5mac.com/2023/07/20/best-4k-usb-c-displays-for-macbook-and-macbook-pro/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/best-usb-c-thunderbolt-displays-mac-samsung.jpg.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-07-20T21:25:00Z",
      "content": "USB-C/Thunderbolt display options have really expanded over the last couple of years. While Apples Pro Display XDR isnt the best fit for most Mac users at $5,000+, it also offers the more affordable … [+14742 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Police"
      },
      "author": "Chandraveer Mathur",
      "title": "Google throws its weight behind yet another messaging standard",
      "description": "'E2EE everywhere' could be another RCS-like pie in the sky",
      "url": "https://www.androidpolice.com/google-backs-mls-standard-e2ee-everywhere/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/google-chat-2023-ap-hero.jpg",
      "publishedAt": "2023-07-20T21:54:56Z",
      "content": "Security is critical wherever sensitive data is involved, like cloud storage, password management, and communication. The best encrypted messaging apps today don’t shy away from their responsibility … [+2821 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Graham Ruthven",
      "title": "Lionel Messi’s biggest impact in MLS won’t be on the pitch",
      "description": "The Argentinian’s debut for Inter Miami is approaching. But it is the terms of his contract that could change the game in North America in the long termThe symbolism of David Beckham welcoming Lionel Messi on to Inter Miami’s pitch as a Major League Soccer pl…",
      "url": "https://www.theguardian.com/football/2023/jul/20/lionel-messis-biggest-impact-in-mls-wont-be-on-the-pitch",
      "urlToImage": "https://i.guim.co.uk/img/media/4937cd1e16e1ce04844026f9e0bd10d89f48b5c7/0_95_2850_1710/master/2850.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=45b8931e3ada505787f15cdaf199db35",
      "publishedAt": "2023-07-20T08:00:24Z",
      "content": "The symbolism of David Beckham welcoming Lionel Messi on to Inter Miamis pitch as a Major League Soccer player for the first time was unavoidable. Beckham was, after all, the catalyst for the growth … [+5119 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Genbeta.com"
      },
      "author": "Bárbara Bécares",
      "title": "La tasa Google desaparecerá de España sin casi haberse aplicado. Prometía ganar 1.000 millones al año",
      "description": "Tras varias idas y venidas en el Congreso y disputas con Estados Unidos, en 2021 entró en vigor la conocida como \"tasa Google\": el cobro un impuesto del 3% a las grandes tecnológicas. Hace apenas unos meses que empresas como Apple empezaron a aplicarla.\n<!-- …",
      "url": "https://www.genbeta.com/actualidad/tasa-google-desaparecera-espana-casi-haberse-aplicado-prometia-ganar-1-000-millones-al-ano",
      "urlToImage": "https://i.blogs.es/69febc/the-new-york-public-library-kajlrqwt5yy-unsplash/840_560.jpeg",
      "publishedAt": "2023-07-20T08:06:05Z",
      "content": "Tras varias idas y venidas en el Congreso y disputas con Estados Unidos, en 2021 entró en vigor la conocida como \"tasa Google\": el cobro un impuesto del 3% a las grandes tecnológicas. Hace apenas uno… [+1705 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Genbeta.com"
      },
      "author": "Marcos Merino",
      "title": "Nearby Share de Google ya está disponible para todos los usuarios de Windows: así podrás compartir archivos entre smartphone y PC",
      "description": "En el mundo actual, compartir archivos entre dispositivos—y lo más fácilmente posible— se ha convertido en una función imprescindible. Ante esta demanda, Google ha dado un paso significativo al lanzar oficialmente 'Nearby Share', una herramienta que permite a…",
      "url": "https://www.genbeta.com/windows/nearby-share-google-esta-disponible-para-todos-usuarios-windows-asi-podras-compartir-archivos-smartphone-pc",
      "urlToImage": "https://i.blogs.es/229fb9/nearby0/840_560.jpeg",
      "publishedAt": "2023-07-20T18:24:08Z",
      "content": "En el mundo actual, compartir archivos entre dispositivosy lo más fácilmente posible se ha convertido en una función imprescindible. Ante esta demanda, Google ha dado un paso significativo al lanzar … [+2815 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Jess Pingrey)",
      "title": "Daily deals: $749 MacBook Air, $99 Apple TV, Apple Pencil $89, $50 off Apple Magic Keyboard",
      "description": "Today's hottest deals include $200 off a Breville Barista Express espresso machine, $800 off a MacBook Pro & AppleCare kit, 36% off a 50\" Fire 4K UHD Smart TV, 54% off Google Pixel 4, and more.Get an Asus ProArt Monitor for $224The AppleInsider team scours th…",
      "url": "https://appleinsider.com/articles/23/07/20/daily-deals-749-macbook-air-99-apple-tv-apple-pencil-89-50-off-apple-magic-keyboard",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55484-112676-daily-deals-July-20-xl.jpg",
      "publishedAt": "2023-07-20T14:05:36Z",
      "content": "Get an Asus ProArt Monitor for $224\r\nToday's hottest deals include $200 off a Breville Barista Express espresso machine, $800 off a MacBook Pro &amp; AppleCare kit, 36% off a 50\" Fire 4K UHD Smart TV… [+4008 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Evan Selleck)",
      "title": "Apple Store Tice's Corner set to reopen on July 22, 2023",
      "description": "Apple is currently in the process of opening or remodeling around 50 stores across the globe, and Tice's Corner is one of the first to reopen on July 22.Apple Tice's CornerThe company really kicked things off in 2023 with the grand reopening of its first Appl…",
      "url": "https://appleinsider.com/articles/23/07/20/apple-store-tices-corner-set-to-reopen-on-july-22-2023",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55500-112694-Tice-xl.jpg",
      "publishedAt": "2023-07-20T19:59:42Z",
      "content": "Apple Tice's Corner\r\nApple is currently in the process of opening or remodeling around 50 stores across the globe, and Tice's Corner is one of the first to reopen on July 22.\r\nThe company really kick… [+1313 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Mike Wuerthele)",
      "title": "Apple hitting problems with iPhone 15 Pro display assembly",
      "description": "A report from the supply chain claims that Apple is having problems with LG displays and a new manufacturing process for the iPhone 15 Pro models — but it's not clear if it will have any significant impact on launch schedule.Thursday's report on iPhone 15 Pro…",
      "url": "https://appleinsider.com/articles/23/07/20/apple-hitting-problems-with-iphone-15-pro-display-assembly",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55101-111841-53158-106512-iPhone-15-Ultra-selfie-xl-xl.jpg",
      "publishedAt": "2023-07-20T16:38:38Z",
      "content": "A report from the supply chain claims that Apple is having problems with LG displays and a new manufacturing process for the iPhone 15 Pro models — but it's not clear if it will have any significant … [+1598 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Evan Selleck)",
      "title": "Apple adds a new security section to its enterprise site",
      "description": "Apple has added a brand new section to its enterprise website to promote its built-in security efforts like encryption, FileVault, and much more.Apple PasskeyApple's enterprise website, part of the \"Apple at Work\" initiative, has been around for a stretch alr…",
      "url": "https://appleinsider.com/articles/23/07/20/apple-adds-a-new-security-section-to-its-enterprise-site",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55501-112695-Apple-Passkey-xl.jpg",
      "publishedAt": "2023-07-20T20:24:33Z",
      "content": "Apple Passkey\r\nApple has added a brand new section to its enterprise website to promote its built-in security efforts like encryption, FileVault, and much more.\r\nApple's enterprise website, part of t… [+1417 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Andrew Orr)",
      "title": "Zagg's latest keyboards combine ergonomics & efficiency for Apple devices",
      "description": "Zagg has launched a collection of three desktop keyboards in different sizes, incorporating ergonomic designs to minimize typing fatigue while delivering a fast and efficient typing experience.Zagg has new desktop keyboardsThe company's latest offerings cater…",
      "url": "https://appleinsider.com/articles/23/07/20/zaggs-latest-keyboards-combine-ergonomics-efficiency-for-apple-devices",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55495-112687-zagg-pro-15-xl.jpg",
      "publishedAt": "2023-07-20T17:05:25Z",
      "content": "Zagg has new desktop keyboards\r\nZagg has launched a collection of three desktop keyboards in different sizes, incorporating ergonomic designs to minimize typing fatigue while delivering a fast and ef… [+3076 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Andrew Orr)",
      "title": "Competitors are on edge as Apple Pay Later surges in popularity",
      "description": "Since its launch in March, Apple Pay Later, despite still being tested with a small user base, has already surpassed competing brands in terms of usage.Apple Pay Later is quickly gaining tractionApple Pay Later was announced in 2022 but faced several delays. …",
      "url": "https://appleinsider.com/articles/23/07/20/competitors-are-on-edge-as-apple-pay-later-surges-in-popularity",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55497-112691-apple-pay-later-xl.jpg",
      "publishedAt": "2023-07-20T18:30:58Z",
      "content": "Apple Pay Later is quickly gaining traction\r\nSince its launch in March, Apple Pay Later, despite still being tested with a small user base, has already surpassed competing brands in terms of usage.\r\n… [+2449 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (William Gallagher)",
      "title": "Future MacBook Pro could get force sensitive 3D Touch screen",
      "description": "Touch screens on the MacBook Pro haven't arrived yet, but Apple is working on inventing a force-sensitive display for the line — and maybe a revamped Touch Bar, too.The Touch Bar could come back as force-sensitive — and the main display could add that, tooThe…",
      "url": "https://appleinsider.com/articles/23/07/20/future-macbook-pro-could-get-force-sensitive-3d-touch-screen",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55489-112673-000-lead-Display-and-Touch-Bar-xl.jpg",
      "publishedAt": "2023-07-20T12:02:01Z",
      "content": "The Touch Bar could come back as force-sensitive -- and the main display could add that, too\r\nTouch screens on the MacBook Pro haven't arrived yet, but Apple is working on inventing a force-sensitive… [+3386 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Mike Wuerthele)",
      "title": "Apple threatens to kill iMessage & FaceTime in UK if controversial law passes",
      "description": "Apple is refusing to compromise iPhone and Mac security, and will cut off FaceTime and iMessage in the UK should the new Online Safety Bill challenging end-to-end encryption is passed as it stands.UK Houses of ParliamentApple made its position clear on the On…",
      "url": "https://appleinsider.com/articles/23/07/20/apple-threatens-to-kill-imessage-facetime-in-uk-if-controversial-law-passes",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55128-111904-54139-109079-48836-95405-000-lead-UK-xl-xl-xl.jpg",
      "publishedAt": "2023-07-20T12:30:00Z",
      "content": "UK Houses of Parliament\r\nApple is refusing to compromise iPhone and Mac security, and will cut off FaceTime and iMessage in the UK should the new Online Safety Bill challenging end-to-end encryption … [+2521 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Christine McKee)",
      "title": "Save $50 on Apple's new Beats Studio Pro wireless headphones",
      "description": "Save $50 off retail when you order Beats Studio Pro Wireless Headphones at B&H. But don't delay, as this could be a pricing mistake and the offer may end at any time.The AppleInsider Deals Team is tracking the best Beats Studio Pro prices, and B&H's $50 disco…",
      "url": "https://appleinsider.com/articles/23/07/20/save-50-on-apples-new-beats-studio-pro-wireless-headphones",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55487-112671-beats-studio-pro-deal-xl.jpg",
      "publishedAt": "2023-07-20T06:18:38Z",
      "content": "Save $50 off retail when you order Beats Studio Pro Wireless Headphones at B&amp;H. But don't delay, as this could be a pricing mistake and the offer may end at any time.\r\nThe AppleInsider Deals Team… [+1189 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (William Gallagher)",
      "title": "iPhone 15 launch may be delayed \"weeks,\" says analyst",
      "description": "Bank of America analyst Wamsi Mohan claims that supply chain checks show the launch of the iPhone 15 range could be pushed back into October.iPhone 15 Pro render. Source: AppleInsiderMohan appears to be the only analyst predicting a delay, and he has made a s…",
      "url": "https://appleinsider.com/articles/23/07/20/iphone-15-launch-may-be-delayed-weeks-says-analyst",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55488-112672-000-lead-iPhone-15-Pro-render-xl.jpg",
      "publishedAt": "2023-07-20T10:33:46Z",
      "content": "iPhone 15 Pro render. Source: AppleInsider\r\nBank of America analyst Wamsi Mohan claims that supply chain checks show the launch of the iPhone 15 range could be pushed back into October.\r\nMohan appear… [+1080 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Christine McKee)",
      "title": "Today only: 16-inch MacBook Pro with M1 Max, 64GB RAM, 4TB SSD on sale for $2,999",
      "description": "Save up to $1,970 on a top-of-the-line 16-inch MacBook Pro during B&H's 24-hour Deal Zone, delivering the lowest price available.Save up to $1,970 instantly.24-hour MacBook Pro sale Read more...",
      "url": "https://appleinsider.com/articles/23/07/20/today-only-16-inch-macbook-pro-with-m1-max-64gb-ram-4tb-ssd-on-sale-for-2999",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55485-112667-macbook-pro-deal-zone-bh-july-2023-xl.jpg",
      "publishedAt": "2023-07-20T04:30:58Z",
      "content": "Save up to $1,970 instantly.\r\nSave up to $1,970 on a top-of-the-line 16-inch MacBook Pro during B&amp;H's 24-hour Deal Zone, delivering the lowest price available.\r\nThe MacBook Pro deals are valid to… [+1197 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Wesley Hilliard)",
      "title": "'Pokemon Sleep' launches in the US, but it's more game than sleep tracker",
      "description": "\"Pokemon Sleep\" is a cute sleep tracker that gamifies sleeping schedules to motivate users to get to bed on time, though it's lacking core features for iPhone users.'Pokemon Sleep'The Pokemon Company announced Pokemon Sleep in 2019 with a 2020 launch window, …",
      "url": "https://appleinsider.com/articles/23/07/20/pokemon-sleep-launches-in-the-us-but-its-more-game-than-sleep-tracker",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55486-112669-sleep-xl.jpg",
      "publishedAt": "2023-07-20T02:26:38Z",
      "content": "'Pokemon Sleep'\r\n\"Pokemon Sleep\" is a cute sleep tracker that gamifies sleeping schedules to motivate users to get to bed on time, though it's lacking core features for iPhone users.\r\nThe Pokemon Com… [+1875 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Andrew Orr)",
      "title": "New iPhone 15 Pro rumor backs Wi-Fi 6E making first appearance",
      "description": "A new rumor aligns with previous claims that the upcoming iPhone 15 Pro models will be equipped with the latest Wi-Fi 6E technology, enabling high-speed wireless connectivity.iPhone 15 Pro models may get Wi-Fi 6EIn January, a credible leaker known as \"Unknown…",
      "url": "https://appleinsider.com/articles/23/07/20/new-rumor-backs-wi-fi-6e-making-appearance-in-iphone-15-pro",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55492-112679-iPhone-15-pro-max-render-xl.jpg",
      "publishedAt": "2023-07-20T14:27:16Z",
      "content": "iPhone 15 Pro models may get Wi-Fi 6E\r\nA new rumor aligns with previous claims that the upcoming iPhone 15 Pro models will be equipped with the latest Wi-Fi 6E technology, enabling high-speed wireles… [+1310 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (William Gallagher)",
      "title": "iPhone SE 4 won't launch until 2025, say analysts",
      "description": "Backing up previous rumors, analysts from Barclays claim that supply chain sources say the iPhone SE 4 has been pushed back a year to 2025.Previous iPhone SE modelsThe expected iPhone SE 4 has been on, off, and on again, in a range of forms even including an …",
      "url": "https://appleinsider.com/articles/23/07/20/iphone-se-4-wont-launch-until-2025-say-analysts",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55231-112184-000-lead-iPhone-SE-xl.jpg",
      "publishedAt": "2023-07-20T14:22:52Z",
      "content": "Previous iPhone SE models\r\nBacking up previous rumors, analysts from Barclays claim that supply chain sources say the iPhone SE 4 has been pushed back a year to 2025.\r\nThe expected iPhone SE 4 has be… [+1112 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Christine McKee)",
      "title": "Prime Day pricing returns with $749 MacBook Air deal at Amazon",
      "description": "Amazon's M1 MacBook Air deal is back, marking the return of Prime Day 2023 pricing on the popular ultraportable laptop.Prime Day MacBook Air pricing returns.The $749.99 price is valid on the standard M1 MacBook Air 13-inch featuring a 7-core GPU, 8GB of memor…",
      "url": "https://appleinsider.com/articles/23/07/20/prime-day-pricing-returns-with-749-macbook-air-deal-at-amazon",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55494-112684-macbook-air-m1-749-xl.jpg",
      "publishedAt": "2023-07-20T15:20:43Z",
      "content": "Prime Day MacBook Air pricing returns.\r\nAmazon's M1 MacBook Air deal is back, marking the return of Prime Day 2023 pricing on the popular ultraportable laptop.\r\nThe $749.99 price is valid on the stan… [+888 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (William Gallagher)",
      "title": "How to use the new Reminders features in macOS Sonoma",
      "description": "Apple has only added a couple of quite minor updates to Reminders for macOS Sonoma, but they're thoughtful ones that will make a difference. Here's what's new and how to use it all.Reminders is a peculiar app in that it's not powerful enough to threaten the m…",
      "url": "https://appleinsider.com/inside/macos-sonoma/tips/how-to-use-the-new-reminders-features-in-macos-sonoma",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55478-112682-000-lead-Reminders-xl.jpg",
      "publishedAt": "2023-07-20T15:02:14Z",
      "content": "Apple has only added a couple of quite minor updates to Reminders for macOS Sonoma, but they're thoughtful ones that will make a difference. Here's what's new and how to use it all.\r\nReminders is a p… [+5191 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Amanda Laskin)",
      "title": "Learn languages with Rosetta Stone's lifetime subscription, now $159.97",
      "description": "Dreaming of learning a new language? Get a Rosetta Stone lifetime subscription for under $160 with coupon, giving you the opportunity to expand your linguistic horizons.Embark on a journey to upgrade your communication skills with Rosetta Stone. With a lifeti…",
      "url": "https://appleinsider.com/articles/23/07/20/learn-languages-with-rosetta-stones-lifetime-subscription-now-15997",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55480-112668-rosetta-stone-bundle-deal-xl.jpg",
      "publishedAt": "2023-07-20T01:52:51Z",
      "content": "Dreaming of learning a new language? Get a Rosetta Stone lifetime subscription for under $160 with coupon, giving you the opportunity to expand your linguistic horizons.\r\nEmbark on a journey to upgra… [+2160 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Amanda Laskin)",
      "title": "Take 81% off a standalone Microsoft Office 2021 license for Windows or Mac",
      "description": "If you've been searching for an affordable way to access Microsoft Office's powerful suite of applications, this limited-time offer discounts a standalone Office 2021 license for Windows or Mac to just $39.99.Microsoft Office for Mac or PC at an unbeatable pr…",
      "url": "https://appleinsider.com/articles/23/07/20/take-81-off-a-standalone-microsoft-office-2021-license-for-windows-or-mac",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55459-112659-6-xl.jpg",
      "publishedAt": "2023-07-20T18:06:29Z",
      "content": "If you've been searching for an affordable way to access Microsoft Office's powerful suite of applications, this limited-time offer discounts a standalone Office 2021 license for Windows or Mac to ju… [+3849 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Evan Selleck)",
      "title": "Apple's AirTag helps a magician find his lost bag at Newark airport",
      "description": "Apple's AirTag item tracker has come in handy for a lot of people since the accessory launched, and now it's even helped a magician find his missing bag at an airport.Apple AirTagSome AirTag owners who have had their belongings stolen have used the item track…",
      "url": "https://appleinsider.com/articles/23/07/20/apples-airtag-helps-a-magician-find-his-lost-bag-at-newark-airport",
      "urlToImage": "https://photos5.appleinsider.com/gallery/55502-112702-Apple-AirTag-xl.jpg",
      "publishedAt": "2023-07-20T21:46:44Z",
      "content": "Apple AirTag\r\nApple's AirTag item tracker has come in handy for a lot of people since the accessory launched, and now it's even helped a magician find his missing bag at an airport.\r\nSome AirTag owne… [+2712 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Abduzeedo.com"
      },
      "author": "abduzeedo",
      "title": "Apple Watch Face Gallery Animal Illustrations",
      "description": "Apple Watch Face Gallery Animal Illustrations\n \n\n abduzeedo0719—23\n Diana D'Achille has poured her passion and creativity into designing a free Apple Watch face gallery app, featuring her very own animal illustrations. \r\n\n\nIf you own an Apple Watch and are pa…",
      "url": "https://abduzeedo.com/node/87959",
      "urlToImage": null,
      "publishedAt": "2023-07-20T05:23:27Z",
      "content": "Diana D'Achille has poured her passion and creativity into designing a free Apple Watch face gallery app, featuring her very own animal illustrations. \r\nIf you own an Apple Watch and are passionate a… [+1767 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Elespanol.com"
      },
      "author": "Manuel Ramírez",
      "title": "Google sube el precio de YouTube Premium y Music: así quedan ambas suscripciones mensuales",
      "description": "El aumento en el precio de la suscripción a la plataforma de Google es considerable y supone un extra importante para el bolsillo del usuario.",
      "url": "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230720/google-sube-precio-youtube-premium-music-quedan-ambas-suscripciones-mensuales/780421965_0.html",
      "urlToImage": "https://s1.eestatic.com/2023/07/20/elandroidelibre/noticias-y-novedades/780431992_234827313_1200x630.jpg",
      "publishedAt": "2023-07-20T06:43:00Z",
      "content": "Se puede hacer complicado pagar por todos los servicios actuales relacionados con la música, ver series o simplemente que el envío salga gratuito para un pedido hecho online, por lo que al final el u… [+2400 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "そうこ",
      "title": "Apple開発の生成AI「Apple GPT」はすでに社内テスト中か",
      "description": "Image:ShutterstockAppleが生成AIを開発しているという話が（やっと）聞こえてきました。通称「AppleGPT」。BloombergのMarkGurman氏は、Appleが開発し、すでに社内でテスト中だとする生成AIについて語っています。AppleGPTを含め、Appleのさまざまなマシンラーニングプロジェクトの基盤となっているのは、同社が2022年に開発を始めた「Ajax」と",
      "url": "https://www.gizmodo.jp/2023/07/apple-generative-ai-apple-gpt.html",
      "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/07/20/shutterstock_1856303683.jpg?w=1280&h=630&f=jpg",
      "publishedAt": "2023-07-20T05:00:00Z",
      "content": "AppleAIApple GPT\r\nBloombergMark GurmanAppleAI\r\nAppleGPTApple2022Ajax\r\nAppleSiriAIAjaxChatGPT\r\nApple GPT\r\nAppleAI\r\nApple GPT\r\nApple GPTGurmanApple GPT\r\nAppleOpenAIChatGPTGitHub CopilotAING\r\nAIApple\r\nA… [+56 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Windows Central"
      },
      "author": "sendicott47@outlook.com (Sean Endicott)",
      "title": "Microsoft CEO Satya Nadella has now made $1 billion",
      "description": "Microsoft CEO Satya Nadella has reportedly brought in $1 billion since entering his current role in the company.",
      "url": "https://www.windowscentral.com/microsoft/microsoft-ceo-satya-nadella-has-now-made-dollar1-billion",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/XEFfyKGmMzzxDZpZrnh7VM-1200-80.jpg",
      "publishedAt": "2023-07-20T19:14:24Z",
      "content": "What you need to know\r\n<ul><li>Microsoft CEO Satya Nadella has reportedly brought in $1 billion since he entered his current role at Microsoft.</li><li>That figure includes Nadella's equity grants, s… [+2437 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Uncrate.com"
      },
      "author": "Uncrate",
      "title": "Regimen: Get Ready",
      "description": "Marvis Travel Toothbrush / $6. Angle Razor / $125. Homme Post Shave Lotion / $25. Oxford Hill Natural Clay Pomade / $27. Wayne Enterprises X Uncrate X Patricks WE1 Deodorant / $60....",
      "url": "https://uncrate.com/regimen-get-ready/",
      "urlToImage": "https://uncrate.com/p/2023/07/regimen-get-ready.jpg",
      "publishedAt": "2023-07-20T19:56:32Z",
      "content": "MobyFox's straps elevate your smartwatches with references to your favorite movies and teams, but the transformation doesn't stop there. With every band purchase, customers get a QR code and gain acc… [+394 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Journal du geek"
      },
      "author": "Thomas Estimbre",
      "title": "Samsung Galaxy Ring : la bague connectée se précise, à quoi faut-il s’attendre ?",
      "description": "En plus des montres connectées, Samsung prépare une bague connectée. Appelée Galaxy Ring, serait encore plus précise que les Galaxy Watch.\nSamsung Galaxy Ring : la bague connectée se précise, à quoi faut-il s’attendre ?",
      "url": "https://www.journaldugeek.com/2023/07/20/samsung-galaxy-ring-la-bague-connectee-se-precise-a-quoi-faut-il-sattendre/",
      "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/07/bague-oura-3.jpg",
      "publishedAt": "2023-07-20T06:00:27Z",
      "content": "En plus des montres connectées, Samsung prépare une bague connectée. Appelée Galaxy Ring, serait encore plus précise que les Galaxy Watch.Les wearables occupent une place importante chez Samsung, et … [+3354 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Fran Bouzas",
      "title": "Mundial de fútbol femenino 2023: dónde ver gratis los partidos de la Selección Española desde tu Apple TV",
      "description": "El mundial de fútbol femenino está a la vuelta de la esquina. De hecho, comienza hoy. Durará hasta el 20 de agosto y se juega en Australia y Nueva Zelanda, las antípodas de España. Hace cuatro años nuestra selección llegó a dieciseisavos de final, donde perdi…",
      "url": "https://www.applesfera.com/tutoriales/mundial-futbol-femenino-2023-donde-ver-gratis-partidos-seleccion-espanola-tu-apple-tv",
      "urlToImage": "https://i.blogs.es/a4ae43/espana-fem_1if6l5r7h8o4a1uts6t4mzaokh/840_560.jpeg",
      "publishedAt": "2023-07-20T13:11:38Z",
      "content": "El mundial de fútbol femenino está a la vuelta de la esquina. De hecho, comienza hoy. Durará hasta el 20 de agosto y se juega en Australia y Nueva Zelanda, las antípodas de España. Hace cuatro años n… [+2070 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Fran Bouzas",
      "title": "Apple TV+ publica material extra de 'Ted Lasso', alimentando la esperanza de spin-off o temporada cuatro de su serie más querida",
      "description": "No hay duda de que Ted Lasso es de las series más exitosas que ha producido hasta ahora Apple. Una comedia sobre un entrenador sin mucha experiencia que llega a lo más alto del fútbol inglés a entrenar a un equipo de fútbol profesional. Las risas están garant…",
      "url": "https://www.applesfera.com/servicios-apple/apple-tv-publica-material-extra-ted-lasso-alimentando-esperanza-spin-off-temporada-cuatro-su-serie-querida",
      "urlToImage": "https://i.blogs.es/c202cf/apple-emmy-winner-sept-2022-ted-lasso.jpg.landing-big_2x/840_560.jpeg",
      "publishedAt": "2023-07-20T16:37:47Z",
      "content": "No hay duda de que Ted Lasso es de las series más exitosas que ha producido hasta ahora Apple. Una comedia sobre un entrenador sin mucha experiencia que llega a lo más alto del fútbol inglés a entren… [+1921 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Jesús Quesada",
      "title": "El teléfono reacondicionado más vendido de Amazon es este iPhone compatible con iOS 17, Face ID y 5G",
      "description": "Los dispositivos reacondicionados son una buena manera de renovar el teléfono ahorrando un buen dinero. Si quieres cambiar de teléfono, el iPhone 12 de 128 GB es el smartphone reacondicionado más vendido de Amazon y se puede adquirir por 489 euros. Está respa…",
      "url": "https://www.applesfera.com/seleccion/telefono-reacondicionado-vendido-amazon-este-iphone-compatible-ios-17-face-id-5g",
      "urlToImage": "https://i.blogs.es/9a3b38/apple-iphone-12-final/840_560.jpeg",
      "publishedAt": "2023-07-20T15:33:08Z",
      "content": "Los dispositivos reacondicionados son una buena manera de renovar el teléfono ahorrando un buen dinero. Si quieres cambiar de teléfono, el iPhone 12 de 128 GB es el smartphone reacondicionado más ven… [+4073 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Miguel López",
      "title": "Google presenta Nearby Share en Windows, su propio AirDrop del que todavía tiene mucho que aprender de Apple",
      "description": "La integración entre los dispositivos es, de calle, mi argumento favorito a la hora de defender a Apple en un debate. No sólo porque configurarlos es cuestión de pocos minutos, si no porque tienes muchas funciones que funcionan prácticamente solas entre el Ap…",
      "url": "https://www.applesfera.com/servicios-apple/google-presenta-nearby-share-windows-su-propio-airdrop-que-todavia-tiene-mucho-que-aprender-apple",
      "urlToImage": "https://i.blogs.es/1a77de/nearby-share-airdrop/840_560.jpeg",
      "publishedAt": "2023-07-20T15:41:09Z",
      "content": "La integración entre los dispositivos es, de calle, mi argumento favorito a la hora de defender a Apple en un debate. No sólo porque configurarlos es cuestión de pocos minutos, si no porque tienes mu… [+2626 chars]"
    },


    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Tage Kene-Okafor",
      "title": "Kasha raises $21M Series B led by Knife Capital to expand health access platform across Africa | TechCrunch",
      "description": "While the pandemic made investors pay attention to Africa’s private healthcare space, women's health is subtly neglected.",
      "url": "https://techcrunch.com/2023/07/20/kasha-raises-21m-series-b-led-by-knife-capital-to-expand-health-access-platform-across-africa/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/DC770C12-88FC-4E08-A72D-17B34FC4D295.jpeg?w=1169",
      "publishedAt": "2023-07-21T00:18:40Z",
      "content": "As Africas youthful population continues to grow exponentially, its of the utmost importance that entrepreneurs create various healthcare solutions that will cater to the medical needs of the contine… [+7403 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Rebecca Bellan",
      "title": "Autonomous vehicle company Aurora sells $820M worth of stock | TechCrunch",
      "description": "Aurora Innovation has sold $820 million worth of stock, funds that will be used to see the autonomous trucking company to commercialization.",
      "url": "https://techcrunch.com/2023/07/20/av-company-aurora-innovation-sells-820m-worth-of-stock/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/04/aurora-chris-urmson.jpeg?resize=1200,800",
      "publishedAt": "2023-07-20T23:06:32Z",
      "content": "Aurora Innovation, the self-driving technology company that aims to launch an autonomous trucking business in 2024, has completed a capital raise of $820 million from a public and concurrent private … [+2978 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Aria Alamalhodaei",
      "title": "SpaceX’s Swarm Technologies is halting new device sales | TechCrunch",
      "description": "Swarm, the Internet-of-Things connectivity provider that was acquired by SpaceX, will no longer be selling new devices.",
      "url": "https://techcrunch.com/2023/07/20/spacexs-swarm-technologies-is-halting-new-device-sales/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/12/swarm_spacebee.png?w=800",
      "publishedAt": "2023-07-20T22:07:24Z",
      "content": "Swarm, the Internet-of-Things connectivity provider that was acquired by SpaceX, will no longer be selling new devices, according to an email sent to customers earlier this month.\r\nThe news appears t… [+1642 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Rebecca Bellan",
      "title": "Cruise starts initial robotaxi testing in Miami | TechCrunch",
      "description": "General Motors' Cruise has begun testing its autonomous vehicles and collecting data on the streets of Miami, Florida.",
      "url": "https://techcrunch.com/2023/07/20/cruise-starts-initial-robotaxi-testing-in-miami/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-15-at-7.26.26-AM.png?resize=1200,674",
      "publishedAt": "2023-07-20T21:48:39Z",
      "content": "Cruise, the self-driving arm of General Motors, has begun initial testing and data collection in Miami, the company said in a tweet Wednesday.\r\n“Phase 1 is to familiarize our fleet with additional, d… [+2279 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Haje Jan Kamps",
      "title": "VR is dead | TechCrunch",
      "description": "That’s because VR — like Meta Quest 2 — and even AR, to some extent, like Apple Vision Pro, are missing one crucial thing.",
      "url": "https://techcrunch.com/2023/07/20/vr-is-dead/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-1359208021.jpg?resize=1200,800",
      "publishedAt": "2023-07-20T21:30:39Z",
      "content": "Its hard to believe that it was only 11 years ago that VR captured the zeitgeist. In April 2012, Oculus hit Kickstarter with the Oculus Rift developer kit, and the tech world whipped itself into a th… [+1028 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Lauren Simonds",
      "title": "Expo+ Pass: The affordable TechCrunch Disrupt 2023 experience | TechCrunch",
      "description": "Access opportunities on the expo floor — and so much more — with an Expo+ pass to TechCrunch Disrupt 2023. The price goes up in August.",
      "url": "https://techcrunch.com/2023/07/20/expo-pass-the-affordable-techcrunch-disrupt-2023-experience/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/expo_hall.png?resize=1200,675",
      "publishedAt": "2023-07-20T20:14:36Z",
      "content": "Whether youre short on time or short on cash, you can still find plenty of exciting opportunities at TechCrunch Disrupt 2023, taking place September 1921 in San Francisco. The Expo+ pass is the perfe… [+1621 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Rhys Spence",
      "title": "It’s been a bumpy 6 months for edtech — are smoother roads ahead? | TechCrunch",
      "description": "Edtech continued to stutter, not just due to unexpectedly negative results, but also by merely acknowledging the risks of generative AI.",
      "url": "https://techcrunch.com/2023/07/20/h1-2023-edtech-venture-capital-trends/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1304822844.jpg?resize=1200,800",
      "publishedAt": "2023-07-20T20:14:06Z",
      "content": "More posts by this contributor\r\nIt has been a bumpy six months for the global startup ecosystem. It has been equal parts exciting and alarming to see the advancement of generative AI conversations wi… [+3818 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Aisha Malik",
      "title": "Twitter is prepping a job listings feature for verified organizations | TechCrunch",
      "description": "Twitter appears to be prepping a feature that allows verified organizations on the platform to post job listings to their profiles.",
      "url": "https://techcrunch.com/2023/07/20/twitter-prepping-job-listings-feature-verified-organizations/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1244881807.jpg?resize=1200,675",
      "publishedAt": "2023-07-20T20:05:29Z",
      "content": "Twitter appears to be prepping a feature that allows verified organizations on the platform to post job listings on their profiles. The social media giant has also created an official @TwitterHiring … [+2395 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Jacquelyn Melinek",
      "title": "Here’s an EthCC recap for those who couldn’t make it to Paris this year | TechCrunch",
      "description": "The Paris-based Ethereum Community Conference, EthCC, happened this week and brought in over 350 speakers. Here's a recap.",
      "url": "https://techcrunch.com/2023/07/20/ethcc-ethereum-conference-recap-paris-2023/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/09/vitalik-buterin-147a2587.jpg?resize=1200,800",
      "publishedAt": "2023-07-20T17:14:58Z",
      "content": "To get a roundup of TechCrunchs biggest and most important crypto stories delivered to your inbox every Thursday at 12 p.m. PT, subscribe here.\r\nWelcome back to Chain Reaction.\r\nThe Paris-based Ether… [+7264 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Zack Whittaker",
      "title": "Fake passports, real bank accounts: How TheTruthSpy stalkerware made its millions | TechCrunch",
      "description": "A network of fake sellers, created with forged documents, allowed a global phone surveillance ring to operate under the radar for years.",
      "url": "https://techcrunch.com/2023/07/20/thetruthspy-stalkerware-forged-passports-millions/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/thetruthspy-1-hero-image.jpg?resize=1200,675",
      "publishedAt": "2023-07-20T15:02:12Z",
      "content": "Benjamin, 44, has a place by the park in an up-and-coming area of downtown Dallas, Texas. He seems to keep to himself and eschews social media. Dulce, 42, lives nearby in a gated community lined with… [+20444 chars]"
    }
  ]






  constructor() {
    super();

    this.state = {

      articles: [],

      loading: false,
      page: 1





    };

  }

  async componentDidMount() {
    let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61924b647daa493abcd25e9f5df57755&page=1pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  handlepreclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61924b647daa493abcd25e9f5df57755&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    


    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }
  handlenextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {


    } else {



      let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61924b647daa493abcd25e9f5df57755&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

      let data = await fetch(url);
      let parsedData = await data.json();
      


      this.setState({
        page: this.state.pageSize + 1,
        articles: parsedData.articles,
      })
    }


  }

  render() {
    return (
      <div className='container my-3'>

        <h2 className='text-center'style={{margin:'40px  0px'}}> newsmonkey - Top Headlines</h2>


        < div className=' row'>
          {this.state.articles.map((element) => {

            return <div className='col-md-3' key={element.url}>
              <NewsItem tittle={element.tittle ? element.title.slice(0, 45) : ""} descryption={element.description ? element.description.slice(0, 88) : ""} urlToImage={element.urlToImage} newsUrl={element.url} />
            </div>


          })}

          <div className=' container d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreclick}> &larr; previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}> next &rarr; </button>

          </div>
        </div>
      </div>


    )
  }
}
