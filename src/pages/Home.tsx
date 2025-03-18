import React from "react";
import SEO from "../component/SEO";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page | My Website</title>
        <meta name="description" content="Welcome to the home page of our website." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Home Page | My Website" />
        <meta property="og:description" content="Welcome to the home page of our website." />
        <meta property="og:image" content="https://mui.com/edge-functions/og-image?product=Material UI&title=Links&description=The Link component allows you to easily customize anchor elements with your theme colors and typography styles." />
        <meta property="og:url" content="https://www.example.com/" />
        <meta property="og:type" content="article" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page | My Website" />
        <meta name="twitter:description" content="Welcome to the home page of our website." />
        <meta name="twitter:image" content="https://mui.com/edge-functions/og-image?product=Material UI&title=Links&description=The Link component allows you to easily customize anchor elements with your theme colors and typography styles." />

        {/* Additional Meta Tags */}
        {/* <meta name="robots" content="index, follow" /> */}
      </Helmet>
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of our React TypeScript app.</p>
    </div>
  );
};

export default Home;
