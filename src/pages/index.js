import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {

  const posts = data.allButterPost.edges
    .map(({ node }) => {
      return <Link key={node.id} to={`/${node.slug}`}>{node.title}</Link>
    })

  return (
  <Layout>
    <SEO title="Home" keywords={[`thomas`, `rushing`, `writing`]} />

    Welcome to Thomas's website. It's not quite done yet :)
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query {
    allButterPost {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }`