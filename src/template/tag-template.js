import React from 'react'
import { graphql } from "gatsby";
import Post from "../components/post";
import Layout from "../components/layout";

const TagTemplate = ({data , pageContext}) => {
    const tagsblogs = data.allMarkdownRemark.edges;
    const {totalCount} = data.allMarkdownRemark;
    const {tag} = pageContext;
    const pageHeader = `${totalCount} post ${(totalCount === 1) ? '':'s'} Tag By <span class="theme-color">${tag}</span>`;
    return (
        <>
            <div className="rn-tag-post-area rn-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-top">
                                <h1 className="title_holder" dangerouslySetInnerHTML={{ __html: pageHeader }}></h1>
                                <div className="breadcrumbs-area">
                                    <ul className="breadcrumbs">
                                        <li><a href="/">Home</a></li>
                                        <li className="separator"><span></span></li>
                                        <li className="active">{tag}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {tagsblogs.map((blog) => (
                        <Post column="col-lg-4 col-md-6 col-12" key={blog.node.fields.slug}
                                content={{
                                    ...blog.node.fields,
                                    ...blog.node.frontmatter,
                                    excerpt: blog.node.excerpt
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export const allTagQueryData = graphql`
query allTagQuery($tag: String!) {
allMarkdownRemark(
sort: {frontmatter: {date: DESC}}
filter: {frontmatter: {tags: {in: [$tag]}}}
) {
totalCount
edges {
  node {
    id
    fields {
      slug
      authorId
    }
    excerpt
    frontmatter {
      author {
        name
      }
      title
      tags
      format
      date(formatString: "MMM Do, YYYY")
      category
      image {
        childImageSharp {
          fluid(maxHeight: 300, maxWidth: 500, quality: 100,
srcSetBreakpoints: 6) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
}
}
}

`
export default TagTemplate;
