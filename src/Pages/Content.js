//This is no longer used as a page, and is used as a component in the homepage

import React from 'react';
import Fade from 'react-reveal/Fade';
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS';
import ContentItem from '../Components/Content/ContentItem';
import ContentItemVideo from '../Components/Content/ContentItemVideo';
import TabNav from '../Components/Tabs/TabNav';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Subheading from '../Components/Subheading';

const ContentSection = () => {
  return (
    <>
    < Subheading 
    align = 'center'
    section = 'Our Media'
    title = ''
    subtitle = ''
  />
    <Fade>
      <TabNav
        podcasts={
          <div>
            <QuarterBreakS
              title="Our Podcasts"
              subtitle="Revolutionary blockchain based podcasts that will change the world."
              icon={<HeadphonesIcon color="secondary" sx={{ fontSize: "200px" }} />}
            />
            <ContentItem
              to="https://drive.google.com/file/d/1ZagvTA92aV_aHX_5PvGlxNyRvk_6U4gq/view?usp=sharing"
              title="#1 Duke's Blockchain Wizard"
              author="Karam Bambawale"
              about="A conversation with Duke's own prodigious blockchain engineer Giovanni Vignone, and those who have worked with him in the past."
            />
          </div>
        }
        videos={
          <div>
            <QuarterBreakS
              title="Our Videos"
              subtitle="Tik Toks and Youtube videos from the Bull City DAO. Here are a few, but click on the Video Icon to the left to watch more!"
              icon={<SmartDisplayIcon onClick={() => window.open('https://www.tiktok.com/@webthreefundamentals?_t=8cX9HPBVfwc&_r=1')} color="secondary" sx={{ fontSize: "200px" }} />}
            />
            <ContentItemVideo
              links={[
                "https://www.tiktok.com/embed/7219113537468108075",
                "https://www.tiktok.com/embed/7220952863269244203",
                "https://www.tiktok.com/embed/7221672852645465390",
              ]}
            />
            <ContentItemVideo
              links={[
                "https://www.tiktok.com/embed/7222484725531741482",
                "https://www.tiktok.com/embed/7223547790834634026",
                "https://www.tiktok.com/embed/7225023226156535083",
              ]}
            />
            <ContentItemVideo
              links={[
                "https://www.tiktok.com/embed/7266575164811398446",
                "https://www.tiktok.com/embed/7265078162118282538",
                "https://www.tiktok.com/embed/7264345787147210027",
              ]}
            />
            {/* Add more ContentItemVideo components as needed */}
          </div>
        }
        media={
          <div>
            <QuarterBreakS
              title="Our Media"
              subtitle="See the media coverage our members have gotten."
              icon={<NewspaperIcon color="secondary" sx={{ fontSize: "200px" }} />}
            />
            {/* Use the Grid system within this div to create a two-column layout for larger screens */}
            <ContentItem
              to="https://www.marketwatch.com/story/bitcoins-fair-value-is-35-000-but-whos-counting-0c5d0523?mod=search_headline"
              title="Bitcoin’s fair value is $35,000 — but who’s counting?"
              author="Campbell Harvey, March 9, 2024"
              about="Bitcoin’s BTCUSD, -0.09% surge to an all-time high may not say anything about bitcoin’s reality. In fact, it may be nothing more than random fluctuations above and below the cryptocurrency’s fair value."
            />
            <ContentItem
              to="https://people.duke.edu/~charvey/Media/2024/B_February_22_2024.pdf"
              title="Bloomberg: How Do You Profit From Bitcoin ETFs? Investors Face Dilemma"
              author="Campbell Harvey, February 22, 2024"
              about="Investors in Bitcoin ETFs face a collective action dilemma, where holding onto the assets theoretically benefits everyone but prevents individuals from realizing profits, exacerbating issues of blockchain development beyond speculation and creating a volatile market environment. Despite Bitcoin's tripled value since last year and over $5 billion in net inflows into ten U.S. ETFs, skepticism remains regarding the intrinsic value and long-term benefits of Bitcoin ETFs amidst concerns over market liquidity and supply shortages."
            />
            <ContentItem
              to="https://www.bloomberg.com/news/articles/2024-01-15/coinbase-coin-at-center-of-bitcoin-btc-etf-machine-raises-concerns?sref=H1RVk7ry"
              title="Coinbase at the Center of Bitcoin ETF Draws Envy and Risks."
              author="Campbell Harvey, January 15, 2024"
              about="The debut of US spot-Bitcoin ETFs thrusts Coinbase Global Inc. into the center of crypto’s biggest mainstream moment to date. Yet what may seem like an enviable position also creates a welter of risks for the company and its partners."
            />
            <ContentItem
              to="https://people.duke.edu/~charvey/Media/2024/S_January_11_2024.pdf"
              title="US regulator SEC authorises spot bitcoin ETFs in cryptocurrency breakthrough"
              author="Campbell Harvey, January 12, 2024"
              about="The US Securities and Exchange Commission (SEC) has for the first time approved the trading of spot Bitcoin ETFs, marking a significant development for the digital-asset sector by broadening Wall Street and beyond access to the largest cryptocurrency. This decision represents a departure from over a decade of resistance from the SEC, ignited by a rally in cryptocurrency following BlackRock's unexpected ETF application and a court ruling that criticized the SEC's previous denial as arbitrary."
            />
            <ContentItem
              to="https://www.bloomberg.com/news/articles/2024-01-10/spot-bitcoin-etfs-approved-to-launch-in-us-by-gensler-s-sec?srnd=premium&sref=H1RVk7ry"
              title="SEC Authorizes Bitcoin-Spot ETFs in Crypto's Breakthrough"
              author="Campbell Harvey, January 10, 2024"
              about="US regulators for the first time approved exchange-traded funds that invest directly in Bitcoin, a move heralded as a landmark event for the roughly $1.7 trillion digital-asset sector that will broaden access to the largest cryptocurrency on Wall Street and beyond."
            />
            <ContentItem
              to="https://people.duke.edu/~charvey/Media/2023/C_December_27_2023.pdf"
              title="CCN: Binance’s CZ Sees Wealth Growth Outpaced Coinbase and Gemini Founders’ in 2023 Despite Legal Issues"
              author="Campbell Harvey, December 30, 2023"
              about="In 2023, despite facing legal challenges and a potential prison sentence, Changpeng Zhao (CZ), the former CEO of Binance Holdings Ltd., saw his wealth grow by nearly $25 billion, outpacing the wealth growth of Coinbase and Gemini founders. This increase, significantly influenced by Bitcoin's value surge of over 160% after a market downturn, marks a remarkable financial year for CZ, despite Binance's $4.3 billion in fines to US authorities and CZ's ongoing legal issues."
            />
          </div>
        }
      />
    </Fade>
    </>
  );
};

export default ContentSection;
