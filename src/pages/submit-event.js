import React from 'react'
import {Link} from 'gatsby'
import Layout from '../templates/layout' 

const submitNewEvent = () => (
  <Layout>
    <h1>Add new event</h1>
    <p>Add a form to submit new data</p>

    <Link to='/'>Return</Link>
  </Layout>
)

export default submitNewEvent