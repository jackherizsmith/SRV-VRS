const htmlSkeleton = require('./htmlSkeleton');

function signinPageTemplate(req, res) {
    return htmlSkeleton(
      `<a class="new-page-link" href='/'>Go back home</a>`,
      // Content Parameter
      `<form action="/signin" method="POST" class="user-form">
          <label class="user-form__label" for="username">Name<span aria-hidden=true>*</span></label>
          <input class="username__input" id="username" name="username" required>
  
          <label class="user-form__label" for="password">Password<span aria-hidden=true>*</span></label>
          <input type="password" class="user-form__input" id="password" name="password" minlength="8" required>
         
         <button class="user-form__submit-btn" type="submit">Sign in</button>
       </form>`,
    )
  }

  module.exports = signinPageTemplate;