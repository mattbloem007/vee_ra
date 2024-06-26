import { graphql, useStaticQuery } from 'gatsby'
import React from 'react';
import Contactform from "./contactform";
import Cheers from "../../data/images/others/Cheers.jpeg";

const Contact = () => {
    const contactData = useStaticQuery(graphql`
        query contactDataQuery {
            homedefaultJson(jsonId: {eq: "contactus"}) {
                title
                subtitle
            }
            site {
                siteMetadata {
                    getform_url
                }
            }

        }
    `);
    const Title = contactData.homedefaultJson.title;
    const { site: { siteMetadata: { getform_url } } } = contactData;
    return (
        <div className="rn-contact-area rn-section-gapBottom pt--200 bg-color-cream" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className="title">
                                {Title}
                                <span className="bg">Contact</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row row--45">
                    {/* Start Contact Form  */}
                    <div className="col-lg-6 col-12 mt--70 mt_md--30 mt_sm--40 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                        <div className="info">
                            <p>Please fill out the form on this section to get in contact with Vee/Ra.</p>
                        </div>
                        <Contactform url={getform_url} />
                    </div>
                    {/* End Contact Form  */}

                    <div className="col-lg-6 col-12 mt--70 mt_md--30 mt_sm--40 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                        <div className="contact-info-list-wrapper">
                            <img src={Cheers} alt="vee/ra Cheers" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
