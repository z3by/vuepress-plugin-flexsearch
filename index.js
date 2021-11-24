const { path } = require("@vuepress/shared-utils");
const { getPageText } = require("./src/utils");

let defaultSearchOptions = {
  tokenize: "full",
};

const DEFAULT_SEARCH_RESULT_LENGTH = 60;
const REGEX_WHITESPACE = /[\p{Z}\p{S}\p{P}\p{C}]+/u;

module.exports = (options) => ({
  extendPageData($page) {
    $page.content = getPageText($page, options.noExtraSpaceAfterHtmlTag);
  },
  alias: {
    "@SearchBox": path.resolve(__dirname, "src", "SearchBox.vue"),
  },
  define: {
    SEARCH_OPTIONS: options.search_options || defaultSearchOptions,
    SEARCH_MAX_SUGGESTIONS: options.maxSuggestions || 10,
    SEARCH_PATHS: options.searchPaths || null,
    SEARCH_HOTKEYS: options.searchHotkeys || "s",
    SEARCH_RESULT_LENGTH:
      Number(options.searchResultLength) || DEFAULT_SEARCH_RESULT_LENGTH,
    SEARCH_SPLIT_HIGHLIGHTED_WORDS:
      options.splitHighlightedWords || REGEX_WHITESPACE,
  },
});
