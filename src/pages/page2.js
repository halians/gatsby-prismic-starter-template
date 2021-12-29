import React from "react";
import {graphql} from "gatsby";
import Seo from "../components/Seo";
import SliceZone from "components/SliceZone";

const IndexPage = ({data}) => {

    const pageContent = data.prismicHomepage;
    return (
        <>
            <Seo title="Home"/>
            <SliceZone
                body={pageContent.data.body}
                page="home"
            />
        </>
    );
};

export const query = graphql`
  query Page2Query {
    prismicHomepage {
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
                       }
                    }
               }
            }
        }
    }
  }
`;

export default IndexPage;



