import React, { useState } from 'react';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import YouTube from 'react-youtube';
import Footer from 'Components/Footer';
import { NavLink } from 'react-router-dom';
import pagent from 'Assets/pagent.jpg';
import road from 'Assets/road.jpg';
import courses from 'Assets/courses_.jpg';
import excursion from 'Assets/excursion.jpg';
import chemistry from 'Assets/chemistry_class.jpg';
import t2 from 'Assets/t2.jpg';
import school from 'Assets/school_gal.jpg';
import p1 from 'Assets/experiments/p1.jpg';
import p2 from 'Assets/experiments/p2.jpg';
import p3 from 'Assets/experiments/p3.jpg';
import p4 from 'Assets/experiments/p4.jpg';

const Chemistry = () => {
  const isSmallScreen = useMediaQuery('(max-width:1030px)');
  const isLowScreen = useMediaQuery('(max-width:830px)');
  const [showVideo, setShowVideo] = useState(false);

  // YouTube video ID
  const videoId = '0alZJK3NBuM'; // Replace with the actual YouTube video ID

  // YouTube video options
  const videoOptions = {
    height: '390',
    margin: '0',
    width: isSmallScreen ? 'auto' : '810',
    playerVars: {
      autoplay: 1,
    },
  };

  const tutors = [
    { image: t2, link: '/tutor1' },
    { image: pagent, link: '/tutor2' },
    { image: road, link: '/tutor3' },
    { image: courses, link: '/tutor4' },
    { image: excursion, link: '/tutor5' },
    { image: chemistry, link: '/tutor6' },
  ];

  return (
    <div style={{ display: 'block', width: '100%' }}>
      {showVideo && (
        <Box
          sx={{
            position: 'relative',
            display: isSmallScreen ? 'block' : 'flex',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              mb: 4,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'dark',
                textAlign: 'center',
                padding: '10px',
                fontFamily: 'Inconsolata monospace',
                fontOpticalSizing: 'auto',
                fontWeight: 'weight',
                fontStyle: 'normal',
                fontVariationSettings: 'width 50',
              }}
            >
              Exciting and Educative Practical Sessions
            </Typography>
            <YouTube videoId={videoId} opts={videoOptions} />
          </Box>
        </Box>
      )}

      <Box sx={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : '3fr 1fr',
        
      }}>
        <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: 'auto'
        }}>
            <Box
                sx={{
                display: 'flex',
                flexDirection: isLowScreen ? 'column' : 'row',
                boxShadow: 3,
                p: 2,
                }}
            >
                {/* Image Container */}
                <Box
                sx={{
                    width: { xs: '100%', sm: '100%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",
                    p: 1,
                }}
                >
                <img
                    src={p1}
                    alt="Alternate text"
                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                </Box>

                {/* Text and Link Container */}
                <Box
                sx={{
                    width: { xs: '100%', sm: '100%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 1,
                }}
                >
                <Box>
                    <Link
                    href="#"
                    underline="hover"
                    color="#000"
                    fontWeight='bold'
                    onClick={() => setShowVideo(true)}
                    >
                    View Video Clip
                    </Link>
                </Box>
                <Box>
                    <Typography variant="h3">Titration</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </Typography>
                </Box>
                </Box>
            </Box>

              <Box
                sx={{
                display: 'flex',
                flexDirection: isLowScreen ? 'column' : 'row',
                boxShadow: 3,
                p: 2,
                }}
            >
                {/* Image Container */}
                <Box
                sx={{
                    width: { xs: '100%', sm: '100%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",
                    p: 1,
                }}
                >
                <img
                    src={p2}
                    alt="Alternate text"
                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                </Box>

                {/* Text and Link Container */}
                <Box
                sx={{
                    width: { xs: '100%', sm: '100%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 1,
                }}
                >
                <Box>
                    <Link
                    href="#"
                    underline="hover"
                    color="#000"
                    fontWeight='bold'
                    onClick={() => setShowVideo(true)}
                    >
                    View Video Clip
                    </Link>
                </Box>
                <Box>
                    <Typography variant="h3">Titration</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </Typography>
                </Box>
                </Box>
            </Box>

              <Box
                sx={{
                display: 'flex',
                flexDirection: isLowScreen ? 'column' : 'row',
                boxShadow: 3,
                p: 2,
                }}
            >
                {/* Image Container */}
                <Box
                sx={{
                    width: { xs: '100%', sm: '100%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",
                    p: 1,
                }}
                >
                <img
                    src={p3}
                    alt="Alternate text"
                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                </Box>

                {/* Text and Link Container */}
                <Box
                sx={{
                    width: { xs: '100%', sm: '100%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 1,
                }}
                >
                <Box>
                    <Link
                    href="#"
                    underline="hover"
                    color="#000"
                    fontWeight='bold'
                    onClick={() => setShowVideo(true)}
                    >
                    View Video Clip
                    </Link>
                </Box>
                <Box>
                    <Typography variant="h3">Titration</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </Typography>
                </Box>
                </Box>
            </Box>
            
              <Box
                sx={{
                display: 'flex',
                flexDirection: isLowScreen ? 'column' : 'row',
                boxShadow: 3,
                p: 2,
                }}
            >
                {/* Image Container */}
                <Box
                sx={{
                    width: { xs: '100%', sm: '100%' },
                    display: 'flex',
                    justifyContent: 'center',
                    boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",
                    alignItems: 'center',
                    p: 1,
                }}
                >
                <img
                    src={p4}
                    alt="Alternate text"
                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                </Box>

                {/* Text and Link Container */}
                <Box
                sx={{
                    width: { xs: '100%', sm: '100%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: 1,
                }}
                >
                <Box>
                    <Link
                    href="#"
                    underline="hover"
                    color="#000"
                    fontWeight='bold'
                    onClick={() => setShowVideo(true)}
                    >
                    View Video Clip
                    </Link>
                </Box>
                <Box>
                    <Typography variant="h3">Titration</Typography>
                </Box>
                <Box>
                    <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </Typography>
                </Box>
                </Box>
            </Box>
        </div>

            <div style={{ display: 'block', mt: 4, padding: '12px', width: 'auto' }}>
                <div>
                {/* pagent */}
                <Box sx={{ pb: '10px' }}>
                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Box
                        component="img"
                        alt="backgroundImg"
                        src={pagent}
                        width="100%"
                        height="100%"
                        sx={{ objectFit: 'cover' }}
                        boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                    />
                    <NavLink
                        to="/our_faces"
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '150px',
                            height: '100px',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                            padding: '10px',
                            borderRadius: '5px',
                            textAlign: 'center',
                        }}
                        >
                        <Typography variant="h2">Faces</Typography>
                        <Typography
                            variant="body1"
                            sx={{
                            fontSize: '12px',
                            }}
                        >
                            visit page
                        </Typography>
                        </Box>
                    </NavLink>
                    </Box>
                </Box>

                {/* faces */}
                <Box sx={{ pb: '10px' }}>
                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img
                        src={tutors[0].image}
                        alt={tutors[0].altImage}
                        style={{
                        width: '100%',
                        height: '100%',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                    <NavLink
                        to="/tutors"
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '150px',
                            height: '100px',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                            padding: '10px',
                            borderRadius: '5px',
                            textAlign: 'center',
                        }}
                        >
                        <Typography variant="h2">Tutors</Typography>
                        <Typography
                            variant="body1"
                            sx={{
                            fontSize: '12px',
                            }}
                        >
                            visit page
                        </Typography>
                        </Box>
                    </NavLink>
                    </Box>
                </Box>

                {/* road */}
                <Box sx={{ pb: '10px' }}>
                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Box
                        component="img"
                        alt="backgroundImg"
                        src={road}
                        width="100%"
                        height="100%"
                        sx={{
                        objectFit: 'cover',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                    <NavLink
                        to="/events"
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '150px',
                            height: '100px',
                            transform: 'translate(-50%, -50%)',
                            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            padding: '10px',
                            borderRadius: '5px',
                            textAlign: 'center',
                        }}
                        >
                        <Typography variant="h2">Road Trips</Typography>
                        <Typography
                            variant="body1"
                            sx={{
                            fontSize: '12px',
                            }}
                        >
                            visit page
                        </Typography>
                        </Box>
                    </NavLink>
                    </Box>
                </Box>

                {/* excursion */}
                <Box sx={{ pb: '10px' }}>
                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Box
                        component="img"
                        alt="backgroundImg"
                        src={excursion}
                        width="100%"
                        height="100%"
                        sx={{ objectFit: 'cover' }}
                        boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                    />
                    <NavLink
                        to="/projects"
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '150px',
                            height: '100px',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                            padding: '10px',
                            borderRadius: '5px',
                            textAlign: 'center',
                        }}
                        >
                        <Typography variant="h2">Projects</Typography>
                        <Typography
                            variant="body1"
                            sx={{
                            fontSize: '12px',
                            }}
                        >
                            visit page
                        </Typography>
                        </Box>
                    </NavLink>
                    </Box>
                </Box>

                {/* chemistry */}
                <Box sx={{ pb: '10px' }}>
                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Box
                        component="img"
                        alt="backgroundImg"
                        src={chemistry}
                        width="100%"
                        height="100%"
                        sx={{ objectFit: 'cover' }}
                        boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                    />
                    <NavLink
                        to="/alumni"
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '150px',
                            height: '100px',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                            padding: '10px',
                            borderRadius: '5px',
                            textAlign: 'center',
                        }}
                        >
                        <Typography variant="h2">Alumni</Typography>
                        <Typography
                            variant="body1"
                            sx={{
                            fontSize: '12px',
                            }}
                        >
                            visit page
                        </Typography>
                        </Box>
                    </NavLink>
                    </Box>
                </Box>
                </div>
            </div>
      </Box>

      <Footer />
    </div>
  );
};

export default Chemistry;
