const htmlSkeleton = require("./htmlSkeleton");

function printTools(tools) {
    let options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
    return tools
     .map(tool => {
         console.log(tools.username, tool.username)
        let deleteButton = '';
        let date = tool.date_added;
        if (tools.username === tool.username) {
            deleteButton = /*html*/`
                <a  class="post__remove-button" 
                    aria-label="button to remove post"
                    href="/delete-post?id=${tool.id}">Delete my post
                </a>`
        }
        return /*html*/`
        <article id="tool_${tool.id}" class="tool-card"> 
                <p class="tool-card__name"><a href="https://www.${tool.tool_link}" target="">${tool.tool_name}</a></h2>
                <p class="tool-card__user">Added by: ${tool.username} on ${date.toLocaleString("en-GB", options)}</p>
                <p class="tool-card__desc">What is it: ${tool.tool_description}</p>
                <p class="tool-card__category">Category: ${tool.category}</p>
                ${deleteButton}
        </article>
        `
    })
    .join('')
}

function home(req,res) {
    req.nav = /*html*/`
        ${req.signLinks}
        <h2 class="home-description">A collection of tools to help you survive social distancing.</h2>
        ${req.addTool}`;
    
    req.page = /*html*/`
        <p class="filter-description">Select a category to filter the results:</p>
        <div id="categoryIcon" class="cat">
            <a class="cat__filter">Work</a>
            <a class="cat__filter">Social</i></a>
            <a class="cat__filter">Entertainment</i></a>
            <a class="cat__filter">Health</i></a>
            <a class="cat__filter">News</i></a>
        </div>
        ${printTools(req.tools)}`
    return htmlSkeleton(req, res);
}

module.exports = home;