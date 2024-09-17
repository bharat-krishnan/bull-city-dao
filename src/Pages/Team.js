import React from 'react';
import Fade from 'react-reveal/Fade';
import Subheading from '../Components/Subheading';
import TeamMember from '../Components/TeamMember';
import QuarterBreakS from '../Components/QuarterBreak/QuarterBreakS';
import GroupIcon from '@mui/icons-material/Group';

// Import images - Add or remove imports according to your team members
import CamHarvey from '../Images/CamHarvey.jpeg';
import GiovanniVignone from '../Images/GiovanniVignone.jpeg';
import SujayAlluri from '../Images/SujayAlluri.jpeg';
import JaviCocero from '../Images/JavierC.jpeg';
import FrankBolella from '../Images/FrankBolella.jpeg';
import MaxwellTardif from '../Images/MaxwellTardif.jpeg';
import MaxMurakamiMoses from '../Images/MaxMurakamiMoses.jpeg';
import DevonKnox from '../Images/DevonKnox.jpeg';
import ColeFtizgerald from '../Images/ColeFitzGerald.jpeg';
import YashPatil from '../Images/YashPatil.jpeg';
import ManmitSingh from '../Images/ManmitSingh.jpeg';

// Map each name to its image
const imageMap = {
  'Cam Harvey': CamHarvey,
  'Giovanni Vignone': GiovanniVignone,
  'Sujay Alluri': SujayAlluri,
  'Javi Cocero': JaviCocero,
  'Frank Bolella': FrankBolella,
  'Maxwell Tardif': MaxwellTardif,
  'Max Murakami-Moses': MaxMurakamiMoses,
  'Devon Knox': DevonKnox,
  'Cole Ftizgerald': ColeFtizgerald,
  'Yash Patil': YashPatil,
  'Manmit Singh': ManmitSingh,
};

const teamMembers = [
  { name: 'Cam Harvey', position: 'President' },
  { name: 'Giovanni Vignone', position: 'Vice-President' },
  { name: 'Maxwell Tardif', position: 'Treasurer and Secretary' }, // Updated position
  { name: 'Sujay Alluri', position: 'Alumni Leader' }, // Updated position
  { name: 'Javi Cocero', position: 'Alumni Leader' },
  { name: 'Frank Bolella', position: 'Alumni Leader' },
  { name: 'Max Murakami-Moses', position: 'Co-president' },
  { name: 'Devon Knox', position: 'Student Researcher/Engineer' },
  { name: 'Cole Ftizgerald', position: 'Student Researcher/Engineer' },
  { name: 'Yash Patil', position: 'Alumni Committee Member' },
  { name: 'Manmit Singh', position: 'Alumni Committee Member' },
];


const linkedinURLs = [
    'https://www.linkedin.com/in/camharvey/', // Example URL for Cam Harvey
    'https://www.linkedin.com/in/giovanni-vignone-341838183/', // Replace with actual URL
    'https://www.linkedin.com/in/sujay-alluri/', // Replace with actual URL
    'https://www.linkedin.com/in/javier-c-c/', // Replace with actual URL
    'https://www.linkedin.com/in/frank-bolella/', // Replace with actual URL
    'https://www.linkedin.com/in/maxwell-tardif-0b6665186/', // Replace with actual URL
    'https://www.linkedin.com/in/max-murakami-moses-0167ab1ba/', // Replace with actual URL
    'https://www.linkedin.com/in/devonknox/', // Replace with actual URL
    'https://www.linkedin.com/in/cole-fitzgerald-0a65301bb/', // Replace with actual URL
    'https://www.linkedin.com/in/yash-p-2021/', // Replace with actual URL
    'https://www.linkedin.com/in/manmit-singh99/', // Replace with actual URL
  ];
  

  const boardOfDirectors = teamMembers.filter(
    member =>
      member.position === 'President' ||
      member.position === 'Vice-President' ||
      member.position === 'Treasurer and Secretary'
  );
  
  

  const undergraduateTeam = teamMembers.filter(
    member =>
      member.position === 'Undergraduate Leader' ||
      member.position === 'Student Researcher/Engineer' ||
      member.position === 'Co-president'
  );
  

  const alumniCommittee = teamMembers.filter(member =>
    member.position.includes('Alumni Committee') || member.position === 'Alumni Leader'
  );
  


const Team = () => {
  return (
    <div>
      <Fade>
        <QuarterBreakS
          title="Our Team"
          subtitle="The dedicated group leading BullCityDAO forward."
          icon={<GroupIcon color='secondary' sx={{ fontSize: '200px' }} />}
        />
        <h2 style={{ textAlign: 'center' }}>Board of Directors</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
          {boardOfDirectors.map((member, index) => (
            <Fade key={index} bottom delay={index * 100}>
              <TeamMember 
                name={member.name} 
                position={member.position} 
                image={imageMap[member.name]}
                linkedinUrl={linkedinURLs[teamMembers.findIndex(tm => tm.name === member.name)]} // Fetch the LinkedIn URL using the index
              />
            </Fade>
          ))}
        </div>
        <h2 style={{ textAlign: 'center' }}>Undergraduate Team</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
          {undergraduateTeam.map((member, index) => (
            <Fade key={index} bottom delay={index * 100}>
              <TeamMember 
                name={member.name} 
                position={member.position} 
                image={imageMap[member.name]}
                linkedinUrl={linkedinURLs[teamMembers.findIndex(tm => tm.name === member.name)]} // Fetch the LinkedIn URL using the index
              />
            </Fade>
          ))}
        </div>
        <h2 style={{ textAlign: 'center' }}>Alumni Board</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
          {alumniCommittee.map((member, index) => (
            <Fade key={index} bottom delay={index * 100}>
              <TeamMember 
                name={member.name} 
                position={member.position} 
                image={imageMap[member.name]}
                linkedinUrl={linkedinURLs[teamMembers.findIndex(tm => tm.name === member.name)]} // Fetch the LinkedIn URL using the index
              />
            </Fade>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Team;
