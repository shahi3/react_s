import React, { Component } from 'react';
import Newsitem from './Newsitem';

const articles = [
  {
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Pia Singh',
    title:
      'Stock futures inch down, but major averages are on pace for weekly gains: Live updates - CNBC',
    description:
      'On Thursday, the Dow Jones Industrial Average ticked higher to end its fifth straight winning day.',
    url: 'https://www.cnbc.com/2024/12/26/stock-market-today-live-update.html',
    urltoimage:
      'https://image.cnbcfm.com/api/v1/image/108075246-17340261672024-12-12t131616z_1096316916_rc2nnba804gr_rtrmadp_0_usa-trump.jpeg?v=1734026219&w=1920&h=1080',
    publishedAt: '2024-12-27T08:35:00Z',
    content:
      'Stock futures ticked lower early Friday as investors look to end the holiday-shortened week on a strong note.\r\nFutures tied to the Dow Jones Industrial Average shed 50 points, or 0.1%. S&amp;P 500 fu… [+1637 chars]',
  },{
    source: {
     id: "axios",
      name: "Axios"
    },
    author: "Rebecca Falconer",
    title: "What to know about the Azerbaijan Airlines plane crash and Russia's possible role in it - Axios",
    description: "Experts say it was likely shot down by a Russian military air-defense system.",
    url: "https://www.axios.com/2024/12/26/azerbaijan-airlines-plane-crash-russia-what-to-know",
    urltoimage: "https://images.axios.com/DEIDjZzj1xZnOvSvhYwJPUvgvs4=/0x536:5144x3429/1366x768/2024/12/26/1735241239830.jpg",
    publishedAt: "2024-12-27T05:36:44Z",
    content: "Authorities in Kazakhstan are investigating the cause of an Azerbaijan Airlines plane crash in the country, which killed 38 people and injured 29 others on Christmas Day.\r\nThe big picture: Flight J2-… [+3070 chars]"
  },
  {
    "source": {
     id: "cnn",
      name: "CNN"
    },
    author: "Dawn Sawyer",
    title: "Looking for a late Christmas gift? Friday’s Mega Millions jackpot proposes a $1.15 billion ticket - CNN",
    description: "What better way to start the new year than with a 10-figure winning lottery ticket?",
    url: "https://www.cnn.com/2024/12/27/business/friday-mega-millions-jackpot-reaches-1-15-billion/index.html",
    urltoimage: "https://media.cnn.com/api/v1/images/stellar/prod/ap24361770463793.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-12-27T05:01:00Z",
    content: "What better way to start the new year than with a 10-figure winning lottery ticket?\r\nFridays Mega Millions jackpot is $1.15 billion, or $516.1 million in cash. The prize surged since its last drawing… [+2496 chars]"
  },
  {
    "source": {
      id: null,
      name: "ABC15 Arizona"
    },
    author: "abc15.com staff",
    title: "Sky Harbor operations resume after shooting at pre-security restaurant - ABC15 Arizona in Phoenix",
    description: "Operations at Sky Harbor Terminal 4 were temporarily paused amid a police investigation Wednesday night.",
    url: "https://www.abc15.com/news/local-news/operations-at-sky-harbor-terminal-4-temporarily-paused-amid-police-investigation",
    urltoimage: "https://ewscripps.brightspotcdn.com/dims4/default/7824588/2147483647/strip/true/crop/1040x546+24+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F24%2F79%2F101f593a4c0fb0ee2339fcb768ec%2Fsky-harbor.png",
    publishedAt: "2024-12-27T04:32:00Z",
    content: "PHOENIX Operations at Phoenix Sky Harbor International Airport's Terminal 4 were temporarily paused due to a shooting investigation Wednesday night.\r\nPhoenix police officials were called to a pre-sec… [+2515 chars]"
  },
  {
    "source": {
      id: null,
      name: "profootballrumors.com"
    },
    author: null,
    title: "QB Teddy Bridgewater Rejoins Lions - profootballrumors.com",
    description: "Teddy Bridgewater is unretiring and rejoining the Lions. More on the QB's plan at Pro Football Rumors",
    url: "https://www.profootballrumors.com/2024/12/teddy-bridgewater-to-unretire-sign-with-lions",
    urltoimage: "https://cdn.profootballrumors.com/files/2024/12/USATSI_22127067-1024x683.jpg",
    publishedAt: "2024-12-27T04:25:00Z",
    content: "10:25pm: This is an active-roster deal, Rapoport adds. Rather than take the practice squad route like so many veterans have upon signing in-season, Bridgewater will be on the Lions’ 53 immediately.\r\n… [+4344 chars]"
  },
  {
    "source": {
      id: null,
      name: "The Seattle Times"
    },
    author: "Bob Condotta",
    title: "Punchless Seahawks hold on vs. Bears, wait to see if playoff hopes are alive - The Seattle Times",
    description: "The Seahawks got just two Jason Myers field goals in a 6-3 win against the Bears. Now they wait until Saturday night to see if their playoff hopes are still alive.",
    url: "https://www.seattletimes.com/sports/seahawks/punchless-seahawks-hold-on-vs-bears-wait-to-see-if-playoff-hopes-are-alive/",
    urltoimage: "https://images.seattletimes.com/wp-content/uploads/2024/12/12262024_TZR_GAMER-Seahawks_Bears-12262024_tzr_1951.jpg?d=1200x630",
    publishedAt: "2024-12-27T04:11:44Z",
    content: "CHICAGO After taking care of a little bit of necessary business Thursday night that they made unnecessarily hard with a 6-3 win over the Chicago Bears, the Seahawks sit and wait and hope.\r\nThe win wa… [+6139 chars]"
  },
  {
    "source": {
      id: null,
      name: "Hollywood Reporter"
    },
    author: "Carly Thomas",
    title: "Judge Denies Jay-Z’s Efforts to Dismiss Rape Accuser’s Lawsuit - Hollywood Reporter",
    description: "Judge Analisa Torres also ruled Thursday that the Alabama woman accusing the rapper of raping her in 2000 could proceed anonymously at this early stage of the litigation.",
    url: "http://www.hollywoodreporter.com/news/general-news/judge-denies-jay-z-efforts-dismiss-rape-accuser-lawsuit-1236094320/",
    urltoimage: "https://www.hollywoodreporter.com/wp-content/uploads/2023/02/Jay-Z-Harder-They-Fall-Carpet-GettyImages-1346461777-H-2023.jpg?w=1296&h=730&crop=1",
    publishedAt: "2024-12-27T03:27:51Z",
    content: "A judge has denied Jay-Z’s efforts to dismiss a lawsuit accusing the rapper and Sean “Diddy” Combs of raping a 13-year-old girl more than two decades ago.\r\nIn the lawsuit, originally filed in October… [+2069 chars]"
  },
  {
    "source": {
      id: null,
      name: "Athlon Sports"
    },
    author: "Athlon Sports",
    title: "Fan Mistaken for Taylor Swift At Chiefs-Steelers Game Has Been Identified - Athlon Sports",
    description: null,
    url: "https://athlonsports.com/entertainment/fan-mistaken-for-taylor-swift-at-chiefs-steelers-game-has-been-identified",
    urltoimage: null,
    publishedAt: "2024-12-27T02:54:36Z",
    content: null
  },
  {
    "source": {
      id: null,
      name: "The Mercury News"
    },
    author: "Lisa M. Krieger, Ryan Macasero",
    title: "Why Santa Cruz Harbor was so devastated by storm surge - The Mercury News",
    description: "Experts work to prevent additional wreckage by hauling out submerged boats, broken pilings, shattered piers and other debris.",
    url: "https://www.mercurynews.com/2024/12/26/why-santa-cruz-harbor-was-so-devastated-by-storm-surge/",
    urltoimage: "https://www.mercurynews.com/wp-content/uploads/2024/12/SJM-L-SCHARBOR-1227-35.jpg?w=1024&h=683",
    publishedAt: "2024-12-27T02:48:38Z",
    content: "Boats are built to withstand fierce seas. But tethered inside the shallow and narrow Santa Cruz Harbor, few of the cruisers, catamarans and yachts were prepared for the fury of this week’s storm surg… [+7891 chars]"
  },
  {
    "source": {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: "Steven Zeitchik",
    title: "Richard Parsons, a steady leader at Time Warner and Citi, dies at 76 - The Washington Post",
    description: "He was one of the preeminent Black executives of his generation, steering media and financial institutions through moments of boardroom and market turbulence.",
    url: "https://www.washingtonpost.com/obituaries/2024/12/26/richard-parsons-dead/",
    urltoimage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PQYYOR75YBB7NOVLO6Z54JPASI.JPG&w=1440",
    publishedAt: "2024-12-27T02:41:46Z",
    content: "Richard D. Parsons, one of the leading corporate executives and crisis managers of his generation, who as chairman of Time Warner and Citigroup became a steadying pilot for media and financial instit… [+10690 chars]"
  },
  {
    "source": {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: "Emily Wax-Thibodeaux",
    title: "Manmohan Singh, Indian PM who presided over dynamic change, dies at 92 - The Washington Post",
    description: "His financial reforms helped transform India into an emerging power.  But his legacy was tainted by allegations of government corruption during his second term.",
    url: "https://www.washingtonpost.com/obituaries/2024/12/26/manmohan-singh-dead/",
    urltoimage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/J5MKE4U7CNYXBSRDCATNJZGBIQ_size-normalized.jpg&w=1440",
    publishedAt: "2024-12-27T01:53:29Z",
    content: "Former Indian prime minister Manmohan Singh, the soft-spoken Oxford-educated economist whose financial reforms helped transform his struggling, poverty-stricken nation into an emerging power but whos… [+266 chars]"
  },
  {
    "source": {
      id: null,
      name: "[Removed]"
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urltoimage: null,
    publishedAt: "2024-12-27T00:17:00Z",
    content: "[Removed]"
  },
  {
    "source": {
      id: null,
      name: "Variety"
    },
    author: "Jennifer Maas",
    title: "‘Squid Game’ Creator Breaks Down ‘Heavy’ Season 2 Finale Death, Mid-Credits Scene Clues and When Season 3 Is Coming - Variety",
    description: "Game over -- for now. \"Squid Game\" Season 2 concluded its seventh and final episode with the brutal murder of a key character ahead of Season 3.",
    url: "https://variety.com/2024/tv/news/squid-game-2-ending-jung-bae-death-explained-mid-credits-scene-season-3-1236255614/",
    urltoimage: "https://variety.com/wp-content/uploads/2024/12/Squid-Game-5.jpg?w=1000&h=563&crop=1",
    publishedAt: "2024-12-27T00:00:00Z",
    content: "SPOILER ALERT: This article contains major spoilers from “Squid Game” Season 2 finale, now streaming on Netflix.\r\nGame over — for now. “Squid Game” Season 2 concluded its seventh and final episode wi… [+4319 chars]"
  },
  {
    "source": {
      id: null,
      name: "POLITICO.eu"
    },
    author: "Tom Nicholson",
    title: "Slovak PM Fico offered to host Moscow-Kyiv peace talks, Putin claims - POLITICO Europe",
    description: "“Why not?” Russian president asked reporters. “For us it’s an acceptable alternative.”",
    url: "https://www.politico.eu/article/robert-fico-offered-host-vladimir-putin/",
    urltoimage: "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/12/27/GettyImages-2182685764-scaled.jpg",
    publishedAt: "2024-12-26T23:50:00Z",
    content: "The unannounced pre-Christmas meeting between Fico and Putin was reported at the time as an attempt by the Slovak leader to find a way around Kyivs refusal to extend Russian gas deliveries to Bratisl… [+975 chars]"
  },
  {
    "source": {
      id: "abc-news",
      name: "ABC News"
    },
    author: "CARLA K. JOHNSON AP medical writer",
    title: "Cats can get sick with bird flu. Here's how to protect them - ABC News",
    description: "The death of an Oregon house cat from bird flu and a pet food recall are raising questions about how people can protect their pets",
    url: "https://abcnews.go.com/Lifestyle/wireStory/cats-sick-bird-flu-protect-117127670",
    urltoimage: "https://i.abcnewsfe.com/a/8d371ab8-8d11-49f4-a019-de8ed46d7016/wirestory_7a57b3047164676a7d237bcd05a5b9db_16x9.jpg?w=1600",
    publishedAt: "2024-12-26T23:49:34Z",
    content: "The death of an Oregon house cat and a pet food recall are raising questions about the ongoing outbreak of bird flu and how people can protect their pets.\r\nBird flu has been spreading for years in wi… [+3192 chars]"
  }
];

export class Newsc extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h4>This is the top headline</h4>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 py-3" key={element.url}>
               <Newsitem
                  title={element.title ? element.title.slice(0, 45) + (element.title.length > 45 ? '...' : '') : 'No Title'}
                  description={element.description ? element.description.slice(0, 90) + (element.description.length > 90 ? '...' : '') : 'No Description'}
                  imgurl={element.urltoimage}
                  newsurl={element.url}
/>

              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Newsc;
