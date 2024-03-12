import React from 'react';
import { useMediaQuery, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const StyledContainer = styled('div')(({ theme, padding }) => ({
  paddingLeft: padding,
  paddingRight: padding,
}));

const StyledHeader = styled('h2')(({ theme }) => ({
  fontSize: '1.5rem', // equivalent to MUI h4
  fontWeight: 'bold',
  marginBottom: theme.spacing(2), // use theme spacing for consistent margins
}));

const StyledParagraph = styled('p')(({ theme }) => ({
  fontSize: '1rem', // equivalent to MUI body1
  marginBottom: theme.spacing(2),
}));

const CohortInfo = ({ header, paragraph }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  // Dynamic padding based on screen size
  const padding = isXs ? '16px' : isSm ? '32px' : isMd ? '250px' : '350px';

  return (
    <StyledContainer theme={theme} padding={padding}>
      {header && (
        <StyledHeader theme={theme}>
          {header}
        </StyledHeader>
      )}
      {paragraph && (
        <StyledParagraph theme={theme}>
          {paragraph}
        </StyledParagraph>
      )}
    </StyledContainer>
  );
}

export default CohortInfo;
