import React from 'react'
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer'

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
                to = "https://iyusufali.xyz/writings/inclusion-lists" 
                title = "Inclusion Lists"
                author = "Ibrahim Yusufali"
                about = 'Censorship resistance is a key feature of decentralization and has been an issue that has garnered a lot of support from the original crypto advocates. However until now, other points of the blockchain trilemma have been getting more attention, especially scalability, which has resulted in the growth of rollups, and app-chains. This has since changed from the shocking details of the Tornado Cash incident. On 8th August 2022, the Office of Foreign Assets cracked down on the privacy mixer Tornado Cash, and issued 44 Ethereum addresses on their publicly available Specially Designated Nationals List (SDN List). This essentially made it illegal for centralized crypto businesses, subject to US jurisdiction, to interact with these addresses. Mining and staking pools were greatly affected - the largest Ethereum miner based in the US, Ethermine, stopped including Tornado router transactions in its blocks a day after the SDN list was announced.It is this exact form of censorship that we aim to prevent through technology like Inclusion Lists. When there are gas-paying eligible transactions in the mempool, the builder should not be submitting blocks less than maximum size, unless they can fill the block completely with other transactions that may arise from exclusive order flow and are not present in the mempool...'
            />

            <ContentItem
                to = "https://iyusufali.xyz/writings/decentralization-of-zk-rollups" 
                title = "Decentralization of ZK Rollup"
                author = "Ibrahim Yusufali"
                about = 'The scalability problem that has faced Ethereum influenced a phase of innovation that brought us three new products: state channels, plasma channels, and then finally zk-rollups. State channels allow participants to make an arbitrary number of transactions off-chain, with the only on-chain transactions being the opening and closing of the channel. To open a channel, a multisig smart contract is deployed, and then users submit funds for lock-up to be used off-chain. The smart contracts then verify the submitted final state, and disperse the funds at closing. The state that is submitted is usually the last agreed-upon state of the channel that has both parties’ signatures. Beyond this final state, all other transactions can happen off-chain. This makes this method incredibly scalable, but it still has some limitations. Namely, the initial lock-up of capital, and a fixed number of participants that cannot be changed throughout its lifetime.  In response, Plasma channels were invented. They are managed by smart contracts that store merkle trees of the transactions that occur off-chain. At the end of every interval, an operator needs to submit a merkle tree that includes the new block of transactions from the interval. Blocks are not finalized till the end of a determined challenge period, usually 7 days...'
            />


            <Footer/>
            </Fade>
        </div>
    )
}

export default Research