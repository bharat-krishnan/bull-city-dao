import React from 'react';

const TeamMember = ({ name, position, image, linkedinUrl }) => {
    return (
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={styles.container}>
          <img src={image} alt={name} style={styles.image} />
          <h3 style={styles.name}>{name}</h3>
          <p style={styles.position}>{position}</p>
        </div>
      </a>
    );
  };

// Add some basic styling
const styles = {
  container: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    width: '240px',
    margin: '10px',
    textAlign: 'center',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '240px',
    objectFit: 'cover', // This will ensure the image covers the area nicely
  },
  name: {
    margin: '10px 0 0 0',
    fontWeight: 'bold',
  },
  position: {
    margin: '5px 0 15px 0',
    fontSize: '14px',
    color: 'grey',
  },
};

export default TeamMember;
