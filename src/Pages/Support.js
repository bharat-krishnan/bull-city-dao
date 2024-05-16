import React from 'react';
import { Box, Typography, Link, Card, CardContent } from '@mui/material';
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer';
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Support = () => {
  return (
    <div>
      <Fade>
        <QuarterBreakS
          title="Support Us!"
          subtitle="Your generous donations help us drive innovation and empower the next generation of blockchain leaders."
          icon={<VolunteerActivismIcon color='secondary' sx={{ fontSize: '200px' }} />}
        />
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ width: '60%' }}>
            <CardContent>
              <Typography variant="h8" paragraph>
                Wallet ENS and Address: <Link href="https://etherscan.io/address/0x27d1996A19F91650032132B5bB5EA36CE71fBB68" target="_blank" rel="noopener" sx={{ color: 'blue' }}>bullcitydao.eth (eth:0x27d1996A19F91650032132B5bB5EA36CE71fBB68)</Link>
              </Typography>
              <Typography variant="h8" paragraph>
                All gifts to BullCityDAO (EIN 92-2246298), a 501(c)(3) not-for-profit organization, are tax-deductible to the full extent of the law.
              </Typography>
              <Typography variant="h9" paragraph>
                Additionally, if any Alumni or Organizations would like to hire or work with our students, please reach out!
              </Typography>
              <Typography variant="h9" paragraph>
                Please contact <Link href="mailto:bullcitydao@gmail.com" sx={{ color: 'blue' }}>bullcitydao@gmail.com</Link> for additional information.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Fade>
      <Footer />
    </div>
  );
};

export default Support;
