import React from "react";
import SEO from "../component/SEO";

const About: React.FC = () => {
  return (
    <div>
        <SEO
title="ABOUT page"
description="’Beginner friendly page for learning React Helmet.'"
name="’Company name.’"
type="article" />
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;
