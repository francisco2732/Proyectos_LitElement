import {css} from 'lit';

export default css `

    :host {
        display: flex;
        position: absolute;
        right: 38%;
        top: 10%;
    }

    .container {
        border: solid 3px #11ce76;
        border-radius: 10px;
        width: 350px;
        height: 400px;
        text-align: center;
    }

    input {
        width: 90%;
        height: 30px;
        margin-top: 8vh;
        border: solid 1px #414141;
        border-top: 0px;
        border-radius: 5px;
    }

    button{
        width: 60%;
        height: 40px;
        background:  #11ce76;
        color: #414141;
        border: none;
        border-radius: 6px;
        margin-top: 8vh;
    }

    button:hover {
        background: #0da35d;
        cursor: pointer;
    }

`;