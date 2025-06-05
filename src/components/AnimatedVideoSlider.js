import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderData = [
  {
    title: 'ANIMATED VIDEOS',
    subtitle: 'Animated Videos: Learning Comes to Life',
    buttonText: 'Start now',
    image: 'https://achieverslms.in/static/media/wl_client/257546/offer_images/8699092198fb4b6b9b15bbc8b1de7e5a.jpg', // Place your uploaded image in the public folder with this name
  },
   {
    title: 'ANIMATED VIDEOS',
    subtitle: 'Animated Videos: Learning Comes to Life',
    buttonText: 'Start now',
    image: 'https://achieverslms.in/static/media/wl_client/257546/offer_images/c3b3b03bccf7421cb8dfbd11a232ba2e.jpg'
  },
   {
    title: 'ANIMATED VIDEOS',
    subtitle: 'Animated Videos: Learning Comes to Life',
    buttonText: 'Start now',
    image: 'https://achieverslms.in/static/media/wl_client/257546/offer_images/fc1633fced6c4be5a954dad6105a2fce.jpg'
  },
   {
    title: 'ANIMATED VIDEOS',
    subtitle: 'Animated Videos: Learning Comes to Life',
    buttonText: 'Start now',
    image: 'https://achieverslms.in/static/media/wl_client/257546/offer_images/27cbe70249894260b8d0f0b46bb1bb53.jpg'
  },
   {
    title: 'ANIMATED VIDEOS',
    subtitle: 'Animated Videos: Learning Comes to Life',
    buttonText: 'Start now',
    image: "https://achieverslms.in/static/media/wl_client/257546/offer_images/bc0bd02e175149b9a81ad033de133ccd.jpg"
   },
   {
    title: 'ANIMATED VIDEOS',
    subtitle: 'Animated Videos: Learning Comes to Life',
    buttonText: 'Start now',
    image: 'https://achieverslms.in/static/media/wl_client/257546/offer_images/755bdcbfe7bc4dc6ab7ae6a6777c82a5.jpg'
  },
];

const AnimatedVideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ maxWidth: '100%', overflow: 'hidden',mt:10 }}>
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 2,
              borderRadius: 3,
              color: 'white',
            }}
          >
            {/* <Box sx={{ maxWidth: '60%' }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {item.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: 'white',
                  color: 'red',
                  borderRadius: '20px',
                  px: 4,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#f8f8f8',
                  },
                }}
              >
                {item.buttonText}
              </Button>
            </Box> */}
            <Box
              component="img"
              src={item.image}
              alt="Animated"
              sx={{
                height: 235,
                borderRadius: 5,
                boxShadow: 3,
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AnimatedVideoSlider;
