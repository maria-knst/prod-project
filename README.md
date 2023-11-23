<h1 align="center">Production Project</h1>

<h2>Project Architecture</h2>
<p> 
  This project based on <a href="https://feature-sliced.design/" target="_blank">Feature-Sliced Design</a> architecture.<br/>
  Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. 
  Simply put, it's a compilation of rules and conventions on organizing code.
  The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.
</p>
<img src="https://feature-sliced.design/assets/ideal-img/visual_schema.b6c18f6.1030.jpg" alt="feature-sliced.design"/>
<ul>
   <li>Shared is reusable code that is not related to the specifics of the application/business.</li>
   <li>Entities — business entities (for example, User, Product or Order).</li>
   <li>Features — user interactions, actions that bring business value to the user.</li>
   <li>Widgets — a composition layer for connecting entities and features into independent blocks.</li>
   <li>Pages — a composition layer for assembling full-fledged pages from entities, features and widgets.</li>
   <li>App — settings, styles and providers for the entire application.</li>
</ul>

<h2>Linting</h2>
<p>
  This project uses <a href="https://eslint.org/" target="_blank">ESlint</a> to check TS code and <a href="https://stylelint.io/" target="_blank">Stylelint</a> to check style files.
</p>

<h2>Translation</h2>
<p>
  This project used <a href="https://react.i18next.com/" target="_blank">i18next</a> library to work with translations. Translation files are stored in public/locales.
</p>

<h2>Testing</h2>
<p>Several types of testing are used in the project:</p>
<ul>
  <li>Unit testing (<a href="https://jestjs.io/" target="_blank">Jest</a>, <a href="https://github.com/testing-library/react-testing-library" target="_blank">React Testing Library</a>);</li>
  <li><a href="https://loki.js.org/" target="_blank">Loki</a> screenshot testing.</li>
</ul>
