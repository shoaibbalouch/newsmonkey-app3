import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

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
    }
  ]




  constructor() {
    super();
    console.log("i am constructor");
    this.state = {

      articles: this.articles,
      loading: false,
      


    }

  }
 async componentDidMount(){
    let url= " https://newsapi.org/v2/top-headlines?country=in&apiKey=61924b647daa493abcd25e9f5df57755&page=1&pagesize=20";
    let data= await fetch(url);
    let parsedData= await data.jason();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }
  handlepreclick=async ()=>{
    let url= ` https://newsapi.org/v2/top-headlines?country=in&apiKey=61924b647daa493abcd25e9f5df57755&page=${this.state.page-1}&pagesize=20`;
    let data= await fetch(url);
    let parsedData= await data.jason();
    console.log(parsedData);
    

this.state({
  page:this.state.page-1,
  articles:parsedData.articles
})

  }
  handlenextclick=async()=>{

    let url= ` https://newsapi.org/v2/top-headlines?country=in&apiKey=61924b647daa493abcd25e9f5df57755&page=${this.state.page+1}&pagesize=20`;
    let data= await fetch(url);
    let parsedData= await data.jason();
    console.log(parsedData);
    

this.state({
  page:this.state.page+1,
  articles:parsedData.articles
})


  }

  render() {
    return (
      <div className='container my-3'>

        <h2> newsmonkey - Top Headlines</h2>
        < div className=' row'>
          {this.state.articles.map((element) => {

          return  <div className='col-md-3' key={element.url}>
              <NewsItem tittle={element.tittle?element.title.slice(0,45):""} descryption={element.description?element.description.slice(0,88):""}urlToImage={element.urlToImage} newsUrl={element.url} />
            </div>


          })}
         <div className=' container d-flex justify-content-around'>
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlepreclick}>&larr; previous</button>
<button type="button" class="btn btn-dark"onClick={this.handlenextclick}>next &larr;</button>

</div>

        </div>
        </div>
        
    
    )
  }
}