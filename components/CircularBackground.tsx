import React from 'react';

export const CircleBackground: React.FC = () => {
    const imageUrl = "/ProfilePic2.png"

    return (
        <div 
        style={{
            ...styles.circleDiv, 
            backgroundImage: `url(${imageUrl})`
        }} 
        />
    );
    };

    const styles = {
    circleDiv: {
        width: '150px',
        height: '150px',

        borderRadius: '50%',                  // Makes the div a circle
        border: '4px solid #e74c3c',          // Border around the circle
        borderWidth: 2,
        borderColor: `var(--color-primary)`,
        borderStyle: 'double',
        
        backgroundColor: '#f1c40f',           // Background color (shows if image fails/loads transparent parts)
        backgroundSize: 'cover',              // Scales image to fill the area
        backgroundPosition: 'center',         // Centers the image
        backgroundRepeat: 'no-repeat',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        },
};
