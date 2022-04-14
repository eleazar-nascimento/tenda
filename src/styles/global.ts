import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #ffffff;

  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-700: #323238;
  --gray-800: #203030;
  --gray-900: #121214;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--gray-900);
  color: var(--white);
}

body,
input,
textarea,
select,
button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

`;