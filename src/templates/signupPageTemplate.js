const htmlSkeleton = require('./htmlSkeleton');

function signupPageTemplate(req, res) {
  req.nav = /*html*/`<a class="new-page-link" href='/'>Go back home</a>`;
  req.page = /*html*/`    
    <form action="/signup" method="POST" class="form">
      <label class="form__label" for="username">Username<span aria-hidden=true>*</span></label>
      <input id="username" class="form__input" type="text" aria-describedby="nameError"  placeholder="e.g. johnsmith86" name="username" required />
      <div id="nameError" class="form__error"></div>
      
      <label class="form__label" for="email">Email<span aria-hidden="true">*</span></label>
      <input id="email" class="form__input" type="email" aria-describedby="emailError" placeholder="e.g. hello@johnsmith.com" name="email" required />
      <div id="emailError" class="form__error"></div>

      <label class="form__label" for="password">Password<span aria-hidden="true">*</span></label>
      <div id="passwordRequirements" class="form__pass-reqs">
        Unpredictable passwords are stronger: <br>
        <strong>blackberries1</strong> is better than <strong>ex4mpl3pa55w0rd</strong>.  
      </div>
      <input
        id="password"
        class="form__input"
        type="password"
        name="password"
        aria-describedby="passwordRequirements passwordError"
        required
        pattern="(?=.*[A-z])(?=.*\d)[A-z\d]+"
        minlength="8"
        placeholder="Make it memorable"
      />
      <div id="passwordError" class="form__error"></div>
      <div id="passwordScore" class="form__password-score-box"><div class="form__password-score"></div></div>
      <div id="passwordTime" class="form__password-time">Your password should contain at least 8 characters, including a letter and number.</div>
      
      <label class="form__label" for="passwordCheck">Repeat password<span aria-hidden="true">*</span></label>
      <input id="passwordCheck" class="form__input" type="password" aria-describedby="passRepeatError" placeholder="Repeat your password" name="" required />
      <div id="passRepeatError" class="form__error"></div>

      <button class="btn form__submit" type="submit">Sign up!</button>
      <p class="form__password-info"><a href="https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation" class="form__password-info-link" target="_blank">Read more</a> about how we measure password strength in a new tab.</p>
    </form>
    <script src="signup.js"></script>
    <script src="zxcvbn.js"></script>
    `;
    
  return htmlSkeleton(req, res)
}

module.exports = signupPageTemplate;