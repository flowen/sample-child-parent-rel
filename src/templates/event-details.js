import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../templates/layout'

const EventDetailTemplate = ({ data }) => (
  <Layout>
    <h1>{data.eventsJson.title}</h1>
    <p>
      {data.eventsJson.genre}
      {data.eventsJson.lineup}
      {data.eventsJson.urlOrigin}
    </p>
    <p>{data.eventsJson.descr}</p>
  </Layout>
)

export default EventDetailTemplate

export const query = graphql`
  query EventDetailTemplate($id: String!) {
    eventsJson(id: {eq: $id}) {
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
`