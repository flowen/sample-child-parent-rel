/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// gatsby-node.js
const {graphql} = require('gatsby/graphql')
const rimraf = require('rimraf')
const path = require(`path`)

const PUBLIC_FOLDER = `${__dirname}/public`
exports.onPreBuild = () => rimraf.sync(PUBLIC_FOLDER + '/*') // empty /public folder


//- source party
const parties = require('./data/json/events.json') //let's talk about parties instead of events because.. js events :)
const createNodeHelpers = require('gatsby-node-helpers').default

const { createNodeFactory, generateNodeId, generateTypeName } = createNodeHelpers({
  typePrefix: `party`,
})

const PartyNode = createNodeFactory('Party')

exports.sourceNodes = ({ actions }) => {
  const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for event nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
  
        return result
      })
    )
  })

  const { createNode } = actions
  // @Jason: when you said I could source the images (flyers) with gatsby-source-filesystem I tried using a graphql query
  makeRequest(graphql, `
    {
      allFile(filter: { sourceInstanceName: {eq: "flyers"}}) {
        edges {
          node {
            name
          }
        }
      }
    }
  `).then(result => {
    // @Jason so I wanted to get the nodes with graphql
    result.data.allFile.edges.forEach(({ node }) => {
      console.log(node)
    })
    // return result.data
  })

  //@jason: and somehow link them here.
  parties.forEach(partyData => {
    const party = PartyNode(partyData) // sort of like a createNode wrapper
    // console.log(party)

  })
}


// @Jason Here I was experimenting with graphql queries and thought I could use the childParentLink with the results
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage, createParentChildLink } = actions

//   const getEvents = makeRequest(graphql, `
//     {
//       allEventsJson {
//         edges {
//           node {
//             id
//             title
//             date
//             descr
//             cost
//             lineup
//             flyerName
//             uid
//             urlOrigin
//             country
//             region
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allEventsJson.edges.forEach(({ node }) => {
//       createPage({
//         path: `/events/${node.id}`,
//         component: path.resolve(`src/templates/event-details.js`),
//         context: {
//           id: node.id,
//         },
//       })
//     })
//     return result.data
//   })

//   const getImages = makeRequest(graphql, `
//     {
//       allImageSharp {
//         edges {
//           node {
//             id
//             original {
//               width
//               height
//               src
//             }
//           }
//         }
//       } 
//     }
//   `).then(result => result.data)

//   Promise.all([
//     getEvents,
//     getImages
//   ]).then( (results) => {
//     // console.log(results)
//     let flyerName
//     let imageName
//     results[0].allEventsJson.edges.forEach(({node}) => {
//       flyerName = node.flyerName.split('.')[0]
//     })

//     results[1].allImagesSharp.edges.forEach(({node}) => {
//       // imageName
//     })
//   })

  // return Promise.all([
  //   getEvents,
  //   getImages
  // ])
}