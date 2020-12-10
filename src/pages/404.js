import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className="flex min-h-screen h-full">
        <div className="block m-auto">
          <h1 className="highlight text-6xl text-white font-extrabold tracking-tight px-2">
            404 - Page not found
          </h1>
        </div>
      </div>
    </>
  );
};