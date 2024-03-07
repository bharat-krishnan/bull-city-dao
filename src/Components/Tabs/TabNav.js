import React from 'react'
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab';
import TabPanel from './TabPanel'

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const TabNav = ({podcasts, videos, media}) => { // Include media as a prop here
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <div>
            <Box sx={{ width: '100%' }}>
                <Tabs 
                    textColor = '#EEE' indicatorColor = 'secondary' centered value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx = 
                    {{ fontSize: '15px',
                        textDecoration: "none",
                        textTransform: "none",}}
                    label="Podcasts" {...a11yProps(0)} />
                    
                    <Tab 
                    sx = 
                    {{ fontSize: '15px',
                        textDecoration: "none",
                        textTransform: "none",}}
                    label="Videos" {...a11yProps(1)} />
                    
                    <Tab 
                    sx = 
                    {{ fontSize: '15px',
                        textDecoration: "none",
                        textTransform: "none",}}
                    label="Media" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    {podcasts}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {videos}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {media}
                </TabPanel>
            </Box>
        </div>
    )
}

export default TabNav
