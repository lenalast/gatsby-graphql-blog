import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <div className="blog-post-template">
      <h1 className="blog-post-title" >{post.frontmatter.title}</h1>
      <div className="blog-post-content" dangerouslySetInnerHTML={{__html: post.html}} />
      <Link 
      className="back-link"
      to="/">
         Back to all posts
        </Link>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
