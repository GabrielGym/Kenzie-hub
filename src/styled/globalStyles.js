import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --color-rosa-desativo: #59323F;
    --color-rosa: #FF577F;
    --color-rosa-ativo: #FF427F;
}

body{
    background-color: var(--grey-4);
}

h1 {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.7rem;
    
    color: var(--grey-0);
}

h2{
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.5rem;
    
    color: var(--grey-0);
}

p {
    font-weight: 400;
    font-size: 0.85rem;
    color: var(--grey-1);

}

label {
    font-weight: 400;
    font-size: 0.6rem;
    color: var(--grey-0);
}

input{
    background-color: var(--grey-2);
    border: 1px solid var(--grey-0);
    border-radius: 4px;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.3rem;
    padding-left:15px;

    color: var(--grey-0);
    background-color: var(--grey-2); 
}

button{
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 1.3rem;
    color: var(--grey-0);
    cursor: pointer;
}
`;
