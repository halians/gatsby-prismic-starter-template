import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import SliceZone from "../components/SliceZone";

const HomePage = ({ data }) => {

    if (!data) return null

    const pageContent = data.prismicHomepage || {};
    return (
        <>
            <Seo title="Home" />
            <SliceZone
                body={pageContent.data.body}
                page="home"
            />
        </>
    );
};

export const query = graphql`
  query HomePageQuery($lang: String) {
    prismicHomepage(lang: { eq: $lang }) {
        lang
        data {
            body {
              ... on PrismicHomepageDataBodyHero {
                    slice_type
                    primary {
                      hero_content
                      hero_title {
                        richText
                      }
                      background_image {
                          url
                          fluid {
                            src
                          }
                          gatsbyImageData
                       }
                    }
               }
            }
        }
    }
  }
`;

export default HomePage;



