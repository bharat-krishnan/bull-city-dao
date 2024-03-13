import React from 'react'
import Fade from 'react-reveal/Fade';

import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS'
import ContentItem from '../Components/Content/ContentItem'
import ArticleIcon from '@mui/icons-material/Article';
const Research = () => {

    return(
        <div>
            <Fade>

            <QuarterBreakS 
                title = "Our Research"
                subtitle = "Revolutionary blockchain based research that will change the world."
                icon = {<ArticleIcon color = 'secondary' sx={{ fontSize: "200px" }}/>}                
            />

            <ContentItem
                to = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3711777" 
                title = "DeFi and the Future of Finance"
                author = "Campbell Harvey"
                about = "Our legacy financial infrastructure has both limited growth opportunities and contributed to the inequality of opportunities. Around the world, 1.7 billion are unbanked. Small businesses, even those with a banking relationship, often must rely on high-cost financing, such as credit cards, because traditional banking excludes them from loan financing. High costs also impact retailers who lose 3% on every credit card sales transaction. These total costs for small businesses are enormous by any metric. The result is less investment and decreased economic growth. Decentralized finance, or DeFi, poses a challenge to the current system and offers a number of potential solutions to the problems inherent in the traditional financial infrastructure. While there are many fintech initiatives, we argue that the ones that embrace the current banking infrastructure are likely to be fleeting. We argue those initiatives that use decentralized methods - in particular blockchain technology - have the best chance to define the future of finance."
            />

            <ContentItem
                to = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4124576" 
                title = "An Investor’s Guide to Crypto"
                author = "Campbell Harvey"
                about = "We provide practical insights for investors seeking exposure to the growing cryptocurrency space. Today, crypto is much more than just bitcoin, which historically dominated the space but accounted for just a 21% share of total crypto trading volume in 2021. We discuss a wide variety of tokens, highlighting both their functionality and their investment properties. We critically compare popular valuation methods. We contrast buy-and-hold investing with more active styles. We only deem return data from 2017 representative, but the use of intraday data boosts statistical power. Underlying crypto performance has been notoriously volatile, but volatility-targeting methods are effective at controlling risk, and trend-following strategies have performed well. Crypto assets display a low correlation with traditional risky assets in normal times, but the correlation also rises in the left tail of these risky assets. Finally, we detail important custody and regulatory considerations for institutional investors."
            />

            <ContentItem
                to = "https://drive.google.com/file/d/1W6eou8GDRm4Lvum1rBAxQJWDS8f4Mc9g/view?usp=sharing" 
                title = "Crypto’s Lehman Moment?"
                author = "Sujay Alluri"
                about = "In this analysis, I recount the cataclysmic fall of FTX, drawing a parallel to the financial turmoil akin to Lehman Brothers, marking a pivotal moment in cryptocurrency history. I scrutinize the underlying factors, such as the misappropriation of client funds and opaque operations that precipitated this downfall, compounded by a precipitous bank run following Binance's withdrawal. Furthermore, I explore the consequent ripples through the crypto sector, emphasizing the urgent call for regulatory clarity and the gravitation towards self-custody and decentralized mechanisms to fortify trust and security. This event, I argue, could herald a new era of stringent oversight, akin to the regulatory aftermath of the 2008 financial debacle, shaping the future trajectory of digital assets."
            />

            <ContentItem
                to = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4188661" 
                title = "An Anatomy of Crypto-Enabled Cybercrimes"
                author = "Campbell Harvey"
                about = "While the advent of cryptocurrencies and digital assets holds promise for improving and disrupting financial systems by offering cheap, quick, and secure transfer of value, it also opens up new payment channels for cybercrimes. A prerequisite to solving a problem is understanding the nature of the problem. Assembling a diverse set of public, proprietary, and hand-collected data, including dark web conversations in Russian, we conduct the first detailed anatomy of crypto-enabled cybercrimes and highlight relevant economic issues. Our analyses reveal that a few organized ransomware gangs dominate the space and have evolved into sophisticated corporate-like operations with physical offices, franchising, and affiliation programs. Leading ransomware gangs operate from Russian-speaking regions and mainly target U.S. and Western Europe enterprises. Their techniques have become more aggressive, entailing multiple extortion and reputation management layers and leading firms to underreport security breaches. Blanket restrictions on cryptocurrency usage may prove ineffective in tackling crypto-enabled cybercrime and hinder innovations. Instead, blockchain transparency and digital footprints enable effective forensics for tracking, monitoring, and shutting down dominant cybercriminal organizations."
            />

            <ContentItem
                to = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4538838" 
                title = "International Business and Decentralized Finance"
                author = "Campbell Harvey"
                about = "Over the last decade, the green shoots of a new economic order have appeared as decentralized technologies emerge to challenge traditional financial systems. Decentralized finance (DeFi) offers transparency, interoperability, security, low costs, and equal accessibility---all lacking in the current financial model. DeFi is a growing force in fintech, but it has risks, including smart-contract vulnerabilities, fragile governance, custodial issues, and regulatory uncertainties. Despite its inherent risks as an emerging and fast-evolving technology, DeFi possesses the potential to establish a new frontier in international business."
            />

            <ContentItem
                to = "https://drive.google.com/file/d/1K27cKjUVQoTI5RYdSM1Hk7FOKf_nns_y/view?usp=sharing" 
                title = "Exploring the Potential of Prediction Markets: A Look into the Future of Decision Making"
                author = "Christopher Johnson"
                about = "I explore the transformative potential of prediction markets, emphasizing their role in enhancing decision-making through the wisdom of crowds. I dissect their operational mechanisms, highlighting the synergy between blockchain technology and these markets for creating transparent, decentralized, and accessible forecasting tools. Through examples, I illustrate how prediction markets surpass traditional forecasting methods in accuracy, fostering a more informed society. Moreover, I discuss the innovative concept of futarchies as a governance model, where speculative markets inform policy decisions, potentially revolutionizing democracy and organizational decision-making. Lastly, I address the challenges of regulation and the need for a nuanced approach to harness the full potential of prediction markets while mitigating risks."
            />

            <ContentItem
                to = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4436697" 
                title = "The Cost of Delay: Evidence from the Ethereum Transaction Fee Market"
                author = "William Zhao"
                about = "Delaying a financial transaction can be costly, but the cost of delay is difficult to estimate in traditional finance. I exploit the unique data offering and market design of the Ethereum blockchain to estimate the cost of delaying financial transactions in decentralized finance (DeFi). I construct a dynamic auction model for the Ethereum transaction fee market that relates users' optimal transaction fee bids to their delay cost functions and network conditions, and I structurally estimate the delay cost functions for different users and transaction types. The average cost of delaying a transaction by one minute is 8.78 US dollars, but the distribution of delay costs is highly skewed to the right. Delay costs are higher for complex transactions and users who trade more frequently. I estimate that welfare loss due to network delay on Ethereum was 14.03 million US dollars per day in July 2021, and I apply the delay cost estimates to evaluate the welfare losses under alternative transaction fee mechanisms."
            />

            <ContentItem
                to = "https://drive.google.com/file/d/17SLWywa7G7dMaG3cEza9SY7eGPosx2KR/view?usp=sharing" 
                title = "Tokenization of Assets "
                author = "Chris and Taylor"
                about = "In our comprehensive exploration of asset tokenization, we delve into how this innovative process is revolutionizing the investment landscape. Through digitizing physical assets into blockchain-based tokens, we unlock new opportunities for liquidity, democratize access to investment opportunities, and introduce a level of transparency and efficiency previously unattainable. Our presentation outlines the mechanisms, benefits, and challenges of tokenization, providing insights into its potential to reshape financial markets. We aim to equip stakeholders with the knowledge to navigate and leverage these emerging technologies for future growth."
            />  

            <ContentItem
                to = "https://drive.google.com/file/d/1tRtHLKmOpLVqEi27_TQ1cLXLkT6hsJOx/view?usp=sharing" 
                title = "Analysis of Ethereum"
                author = "Maxwell Tardif"
                about = "The price-to-earnings or P/E ratio is an important index for valuing traditional financial sectors such as corporations and equities. P/E ratios are utilized by a variety of investors to analyze the value of a company's shares. This metric can also be highly useful for comparison against historical performance, can help to account for volatility over time, and has become commonly studied by value investors. The blockchain economy lacks an organized set of tools that can be used to inspect asset values. This proposal highlights the idea of employing a form of price-torevenue analysis on the Ethereum blockchain in order to generate a value assessment for the token Ether (ETH)."
            />


            </Fade>
        </div>
    )
}

export default Research