import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../templates/layout'

const EventIndexPage = ({ data }) => (
  <Layout>
    <h1>Index of Techno clubs in Asia</h1>
    <ul>
      {data.allEventsJson.edges.map(doc => (
        <li key={doc.node.id}>
          <h2><Link to={`/events/${doc.node.id}`}>{doc.node.title}</Link></h2>
          <p>{doc.node.descr}</p>
          <p>{doc.node.lineup}</p>
          {/* {doc.node.poster ? <Img fixed={doc.node.poster.childImageSharp.fixed} /> : null} */}
        </li>
      ))}
    </ul>
  </Layout>
)

export default EventIndexPage

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
          flyerName
          uid
          urlOrigin
          country
          region
        }
      }
    }
  }
`