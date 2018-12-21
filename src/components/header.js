import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteHeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
        logo: file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fixed (width: 80 height: 80) {
              width
              height
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    `}
    render={(data) => (
      <header>
        <h1>
          <Link to="/">
            <Img fixed={data.logo.childImageSharp.fixed} alt={data.site.siteMetadata.title} />
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </header>
    )}
  />
)

export default Header
