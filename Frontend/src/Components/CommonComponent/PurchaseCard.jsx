import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Card = ({ product }) => {
    const [randomImage, setRandomImage] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        fetchRandomImage();
    }, []);

    const fetchRandomImage = () => {
        fetch('https://source.unsplash.com/random', { mode: 'no-cors' })
            .then(response => {
                setRandomImage('https://source.unsplash.com/random/300x200');
            })
            .catch(error => {
                console.error('Error fetching random image:', error);
            });
    };

    const cardStyle = {
        width: '300px',
        border: '1px solid #ccc',
        overflow: 'hidden',
        position: 'relative',
        height: '350px'
    };

    const containerStyle = {
        position: 'relative'
    };

    const imageStyle = {
        width: '100%',
        height: '250px',
        display: 'block'
    };

    const buttonStyle = {
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '10px 0',
        cursor: 'pointer',
        position: 'absolute',
        bottom: '0',
        left: '0',
        opacity: isHovered ? 1 : 0, // Set opacity based on hover state
        transition: 'opacity 0.5s ease' // Smooth transition
    };

    return (
        <div className="card" style={cardStyle}>
            <div style={containerStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={randomImage} alt={'demo'} style={imageStyle} />
                <button className="add-to-cart-button" style={buttonStyle}>Add to Cart</button>
            </div>
            <div className="product-details" style={{ height: '100px',display:'felx',justifyContent:'space-between' }}>
                <p className="product-title" style={{ margin: '0', fontSize: 24, fontWeight: 'bold' }}>{'360 camera'}</p>
                <div style={{ display: 'flex', margin: 0, flexDirection: 'row',height:'24px' }}>
                    <p className="product-price" style={{ marginTop: '8px', marginBottom: '16px' }}>${200}</p>
                    <del className="product-price" style={{ marginTop: '8px', marginBottom: '16px', marginLeft: '12px' }}>${250}</del>

                </div>
                <div style={{height:'50px',marginTop:15}}>
                <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        
                        <Rating
                            name="simple-controlled"
                            value={1}
                            onChange={(event, newValue) => {
                                //   setValue(newValue);
                            }}
                        />
                        <Typography component="legend">Read only</Typography>
                        <Rating name="read-only" value={5} readOnly />
                        {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled /> */}
                        {/* <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
                    </Box>
                </div>

            </div>
        </div>
    );
};

export default Card;
