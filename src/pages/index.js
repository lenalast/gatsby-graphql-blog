import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div className="index-page-wrapper" >
    <h1>Well hello you!</h1>
    <p>This is my first try to build a blog with Gatsby</p>
    <p>Feel free to look around!</p>
    
    <h2>Blog posts</h2>
    <ul>
    {data.allMarkdownRemark.edges.map(post => (
      <li key={post.node.id}>
      <Link 
      to={post.node.frontmatter.path}>{post.node.frontmatter.title}
      </Link>
      </li>
    ))}
    </ul>
  </div>
)

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(
    filter: { frontmatter: { published: { eq: true } } }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          path
          published
          date
        }
      }
    }
  }
}
`

export default IndexPage
