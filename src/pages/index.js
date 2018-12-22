import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../templates/layout'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>The latest Techno events in Asia</h1>
    <ul>
      {data.allEventsJson.edges.map(({ node, node: { club } }) => (
        <li key={node.id}>
          <h2>
            <Link to={`/events/${node.id}`}>{node.title}</Link>
          </h2>
          <p>{node.descr}</p>
          <p>{node.lineup}</p>

          {node.flyerName ? (
            <Img fixed={node.flyerName.childImageSharp.fixed} />
          ) : null}
        </li>
      ))}
    </ul>
    <Link to="/submit-event/">Submit a new event</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allEventsJson {
      edges {
        node {
          id
          title
          date
          descr
          cost
          lineup
          flyerName {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
          uid
          urlOrigin
          country
          region
        }
      }
    }
  }
`
