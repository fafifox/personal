import  React from "react";
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"
import { headData } from "../mock/data";
import App from "../components/App";


const IndexPage = () => {

  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App />
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/projet_blog.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage