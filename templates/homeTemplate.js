const htmlSkeleton = require('./htmlSkeleton');

function printTools(tools) {
    return tools
     .map(tool => {
        let deleteButton = '';
        let currentuser = false;
        if (currentuser === tool.username) {
            deleteButton = `<a class="post__remove-button"
            aria-label="button to remove post"
            href="/delete-post?id=${tool.id}">
            delet ME!!!
            </a>`
        }
        return `
        <article id="tool_${tool.id}" class="tool-card"> 
                <p class="tool-card__name"><a href="https://www.${tool.tool_link}" target="">${tool.tool_name}</a></h2>
                <p class="tool-card__user">Added by: ${tool.username}</p>
                <p class="tool-card__desc">What is it: ${tool.tool_description}</p>
                <p class="tool-card__category">Category: ${tool.category}</p>
                ${deleteButton}
        </article>
        `
    })
    .join('')
}

function home(req,res) {
    return htmlSkeleton(
        // Redirect Parameter
        `<h2 class="home-description">A collection of tools to help you survive social distancing.</h2>
        <a class="nav-button" href='/add'>Add a tool</a>`,
        // Content Parameter
        `
        <p class="filter-description">Select a category to filter the results:</p>
        <div id="categoryIcon" class="cat">
        <a class="cat__filter">Work</a>
        <a class="cat__filter">Social</i></a>
        <a class="cat__filter">Entertainment</i></a>
        <a class="cat__filter">Health</i></a>
        <a class="cat__filter">News</i></a>
        </div>
        ${printTools(req.tools)}`,
    )
}

module.exports = home;