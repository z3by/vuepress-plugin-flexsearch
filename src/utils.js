const he = require("he");

/**
 * @param  page
 * @returns {string}
 */
module.exports.getPageText = (page, noExtraSpaceAfterHtmlTag) => {
  if (!page._strippedContent) {
    return "";
  }
  // _strippedContent does not contain the YAML frontmatter
  const { html } = page._context.markdown.render(page._strippedContent);

  const text = he.decode(
    // decode HTML entities like &quot;
    html
      .replace(/<[^>]*(>|$)/g, noExtraSpaceAfterHtmlTag ? "" : " ") // remove HTML tags
      .replace(/^\s*#\s/gm, "") // remove header anchors inserted by vuepress
  );
  return text;
};

function normalizeString(string) {
  return string.replace(/<|>/g, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function generateRegExp(string) {
  const stringNormalized = normalizeString(string);
  return `(?<!</?[^>]*|&[^;]*)${stringNormalized}`;
}

/**
 * @param  {string} fullText
 * @param  {string} highlightTarget
 * @returns {string}
 */
module.exports.highlightText = (fullText, highlightTarget, splitBy) => {
  let result = fullText;
  highlightWords = highlightTarget.split(splitBy).filter((word) => word.length > 0);
  if (highlightWords.length > 0) {
    for (const word of highlightWords) {
      result = result.replace(new RegExp(generateRegExp(word), "ig"), "<em>$&</em>");
    }
  } else {
    result = fullText.replace(new RegExp(generateRegExp(highlightTarget), "ig"), "<em>$&</em>");
  }

  return result;
};

