// import React from 'react';
import {Helmet} from "react-helmet";
export default function SEO({title, description, name, type}:{title:string,description:string,name:string,type:string}) {
return (
<Helmet>
{ /* Standard metadata tags */ }
<title>{title}</title>
<meta name='description' content={description} />
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content="https://mui.com/edge-functions/og-image?product=Material UI&title=Links&description=The Link component allows you to easily customize anchor elements with your theme colors and typography styles." />
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={name} />
<meta name="twitter:card" content={type} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content="https://mui.com/edge-functions/og-image?product=Material UI&title=Links&description=The Link component allows you to easily customize anchor elements with your theme colors and typography styles." />

{ /* End Twitter tags */ }
</Helmet>
)
}