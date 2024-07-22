// pages/_error.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ErrorPage = ({ statusCode }) => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box>
        <Image src="/error-emoji.png" alt="Error Emoji" width={200} height={200} />
      </Box>
      <Typography variant="h4" component="h1" style={{ color: '#143326' }}>
        {statusCode ? `Error ${statusCode}` : 'Error'}
      </Typography>
      <Typography variant="h5" component="p" style={{ marginTop: '16px', color: '#143326' }}>
        Oops! Something went wrong...
      </Typography>
      <Typography variant="h6" component="p" style={{ marginTop: '16px', color: '#143326' }}>
        We're pretty sure it's not your fault, but we're still blaming you😜.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '32px', backgroundColor: '#143326', color: '#ECC290' }}
        onClick={handleGoHome}
      >
        Take me Home!
      </Button>
    </Container>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
