exports.linkResolver = (doc) => {

    // URL for a category type
    /*if (doc.type === 'category') {
        return `/category/${doc.uid}`
    }

    // URL for a product type
    if (doc.type === 'product') {
        return `/product/${doc.uid}`
    }*/

    const defaultLanguage = 'fi'

    switch (doc.type) {
        case 'homepage': {
            return doc.lang === defaultLanguage ? '/' : `/${doc.lang}`
        }

        case 'page': {
            return doc.lang === defaultLanguage
                ? `/page/${doc.uid}`
                : `/page/${doc.lang}/${doc.uid}`
        }

        default:
            return '/'
    }
}