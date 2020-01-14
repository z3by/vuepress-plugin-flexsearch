const removeMarkdown = require('remove-markdown')

module.exports = () => ({
    extendPageData ($page) {
        const {
            _content
        } = $page
        $page.content = removeMarkdown(_content)
    }
})