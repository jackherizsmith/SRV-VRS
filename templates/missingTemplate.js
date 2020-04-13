const htmlSkeleton = require('./htmlSkeleton');

function missing() {
    return htmlSkeleton(
      // Redirect Parameter
      `<a href='/'><h2 class='error-subtitle'>Go back home!</h2></a>`,
      // Content Parameter
      `<h1 class="error-title">Content Not Found</h1>`)
}

module.exports = missing;