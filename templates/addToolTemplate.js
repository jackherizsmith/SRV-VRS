const htmlSkeleton = require('./htmlSkeleton');

function addTool(req,res) {
  req.nav = /*html*/`<h2 class="addTool-description">Share what you love with people who need it.</h2><a class="nav-button" href="/">Go back home</a>`;
  req.page = /*html*/`
    <form action="add" method="POST">
      <fieldset>
        <legend>Category:</legend>
        <label class="radio-label" for="work">Work</label>
        <input type="radio" id="work" name="category" value="Work" required>
        
        <label class="radio-label" for="social">Social</label>
        <input type="radio" id="social" name="category" value="Social" required>
        
        <label class="radio-label" for="entertainment">Entertainment</label>
        <input type="radio" id="entertainment" name="category" value="Entertainment" required>
        
        <label class="radio-label" for="health">Health</label>
        <input type="radio" id="health" name="category" value="Health" required>
        
        <label class="radio-label" for="news">News</label>
        <input type="radio" id="news" name="category" value="News" required>
      </fieldset>

      <label class='user-info-label' for="tool_name">Name</label>
      <input class="user-info" id="tool_name" name="tool_name" required>

      <label class='user-info-label' for="tool_description">Description</label>
      <input class="user-info" id="tool_description" name="tool_description" required>
    
      <label class='user-info-label' for="tool_link">Link https://www.</label>
      <input class="user-info" id="tool_link" name="tool_link" placeholder="google.com" required>
      
      <button class="post-tool-button" type="submit">Add tool</button>
    </form>`;
  
  return htmlSkeleton(req, res)
}

module.exports = addTool;