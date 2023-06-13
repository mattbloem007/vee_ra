import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import ProjectOne from "../../elements/project/projectOne";


const Project = () => {
    const portfolioData = useStaticQuery(graphql`
        query portfolioDataQuery {
<<<<<<< HEAD
            homedefaultJson(id: {eq: "portfolio"}) {
=======
            homedefaultJson(jsonId: {eq: "portfolio"}) {
>>>>>>> 5ec1c145 (trying to upload)
            title
            description
            }
        }
    `);

    const Title = portfolioData.homedefaultJson.title;
    const Description = portfolioData.homedefaultJson.description;

    return (
        <div className="rn-portfolio-area pt--200 pb--150 bg-color-grey portfolio-style-1">
            <div className="container">
                <div className="row mb--10">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h3 className="title">
                                {Title}
                                <span className="bg">Products</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <ProjectOne />
                {/**<div className="row">
                    <div className="col-lg-12">
                        <div className="button-group mt--60 justify-content-center">
                            <a className="rn-button" href="#downloadbutton"><span>View All Works</span></a>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}
export default Project
