import React from 'react'
import {Box, 
        Grid,
        Container,} 
from '@mui/material'

// import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CodeIcon from '@mui/icons-material/Code';
// import TerminalIcon from '@mui/icons-material/Terminal';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// import { styled } from '@mui/system';
// import {useTheme} from '@mui/material/styles'


import Subheading from '../Subheading'
import ThirdBox from './ThirdBox'

const TripleBreak = () => {

    return (
        <Box>
        <Container sx = {{justifyContent: 'center'}}>

            <Subheading 
                        align = 'center'
                        section = 'Our Goals'
                        title = 'How are we accomplishing our purpose?'
                        subtitle = "Our team consists of a range of individuals, including builders, engineers, and creators, who share a strong belief in the enduring value of blockchain technology. We possess considerable experience in the blockchain field, and are committed to enhancing Duke University's blockchain presence, empowering visionary students, and uncovering novel perspectives to advance the industry."
            />

            <Box sx={{ p: 4 }}></Box>

            <Grid container spacing = {4} >

                <Grid item xs = {12} md = {4}>
                    <ThirdBox 
                    icon = {<ArticleOutlinedIcon  fontSize="large"/>} 
                    title = "Research" 
                    description = "The research division spearheads initiatives that cover a broad spectrum of blockchain-related subjects, such as cryptography, distributed systems, consensus mechanisms, security, market design, decentralized finance, tokenomics, central-bank digital currencies, network theory, and more. The objectives of these endeavors are twofold: providing valuable contributions to the industry and fostering the development of future blockchain researchers through experiential learning." />
                </Grid>

                <Grid item  xs = {12} md = {4}>
                <ThirdBox 
                    icon = {<CodeIcon  fontSize="large"/>} 
                    title = "Engineering" 
                    description = "The engineering team plans to develop DAO tools using the investments made by the Devil DAO. The partners of Devil DAO will have the chance to collaborate with our engineering team on a project-by-project basis, which will aid these firms in identifying potential hires and outsourcing their development needs. These projects will concentrate on blockchain development and the utilization of blockchains in various applications." />

                </Grid>

                <Grid item  xs = {12} md = {4}>
                <ThirdBox 
                    icon = {<AttachMoneyIcon  fontSize="large"/>} 
                    title = "Investments" 
                    description = "The aim is to stimulate creativity and exploration by nurturing student-led startups that focus on utilizing blockchain technology. We collaborate with influential industry leaders to offer students the necessary support and resources to realize their ventures. We also connect startup founders with renowned venture capital and private equity firms to facilitate their growth and success." />

                </Grid>

            </Grid>

        </Container>
        </Box>
    )


}

export default TripleBreak