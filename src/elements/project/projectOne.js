import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Projectcard from "./projectcard";

const ProjectOne = () => {
    const ProjectData = useStaticQuery(graphql`
      query ProjectDataQuery {
        allContentfulProjects {
          edges {
            node {
              id
              name
              title
              category
              projectId
<<<<<<< HEAD
              featured_image {
=======
              featuredImage {
>>>>>>> 5ec1c145 (trying to upload)
                fixed: gatsbyImageData(layout: FIXED, width: 374, height: 374)
                  file {
                    url
                  }
              }
            }
          }
        }
      }
    `);

    const projectsData = ProjectData.allContentfulProjects.edges;
<<<<<<< HEAD
=======
    console.log("Projects Data", projectsData)
>>>>>>> 5ec1c145 (trying to upload)
    return (
        <div className="row row--45 mt_dec--30">
            {projectsData.map( data => (
                <Projectcard key={data.node.id}
                    column="col-lg-4 col-md-6 col-12"
                    portfolioStyle="portfolio-style-1"
                    key={data.node.id}
                    id={data.node.id}
<<<<<<< HEAD
                    image={data.node.featured_image}
=======
                    name={data.node.name}
                    image={data.node.featuredImage}
>>>>>>> 5ec1c145 (trying to upload)
                    title={data.node.title}
                    category={data.node.category}
                />
            ))}
        </div>
    )
}

export default ProjectOne;
