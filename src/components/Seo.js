import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import {useLocation} from "@reach/router"
import {useStaticQuery, graphql} from "gatsby"

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        defaultKeywords: keywords
      }
    }
  }
`

const Seo = ({title, description, keywords, image, article}) => {
    const {pathname} = useLocation()
    const {site} = useStaticQuery(query)

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        defaultKeywords,
        twitterUsername,
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    }

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description}/>
            <meta name="image" content={seo.image}/>
            <meta name="keywords" content={seo.keywords}/>
            
            {seo.url && <meta property="og:url" content={seo.url}/>}

            {(article ? true : null) && <meta property="og:type" content="article"/>}

            {seo.title && <meta property="og:title" content={seo.title}/>}

            {seo.description && (
                <meta property="og:description" content={seo.description}/>
            )}

            {seo.image && <meta property="og:image" content={seo.image}/>}

            <meta name="twitter:card" content="summary_large_image"/>

            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername}/>
            )}

            {seo.title && <meta name="twitter:title" content={seo.title}/>}

            {seo.description && (
                <meta name="twitter:description" content={seo.description}/>
            )}

            {seo.image && <meta name="twitter:image" content={seo.image}/>}
        </Helmet>
    )
}

export default Seo

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}

Seo.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}