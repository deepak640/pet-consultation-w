import { createGlobalStyle } from "styled-components";
 
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
}

h1 {
    color: ${({theme}) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 800;
}

h2{
    color: ${({theme}) => theme.colors.heading};
    font-size: 20px;
    font-weight: 700;
    white-space: normal;
    text-align: center; 
}

h3 {
    color: ${({theme}) => theme.colors.heading};
    font-size: 1.8rem;
    font-weight: 500;
}

p {
    color: ${({theme}) => theme.colors.text};
    opacity: .7;
    font-size: 1.80rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight: 500;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

.container {
    max-width: 150rem;
    margin: 0 auto:
}

.grid {
    display: grid;
    gap: 10rem;
}

.grid-two-column {
    grid-template-columns: repeat(2, 1fr);
}

.grid-three-column{
    grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

input, textarea, select{
    max-width: 50rem;
    color: ${({theme}) =>theme.colors.black};
    padding: 10px 10px;
    border: 2px solid ${({theme}) =>theme.colors.border};
    //text-transform: uppercase;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({theme}) =>theme.colors.btn};
    color: ${({theme}) =>theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    // display: flex;
    // justify-content: center;
    // align-items: center;
}




`;