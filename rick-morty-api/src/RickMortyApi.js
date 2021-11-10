import { LitElement, html, css } from 'lit';
import './components/GetData';
import style from './styles/style';


export class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: {type : Array}
    };
  }

  static get styles() {
    return [style]
  }

  constructor() {
    super();

    this.wiki=[];

    this.addEventListener('ApiData', (e) => {
      //console.log(e.detail.data);
      this._dataFormat(e.detail.data);
    })
  }

  _dataFormat(data) {
    let characters = [];
                                                        //ITERACION DEL OBJETO CHARACTER, (INFO QUE VIENE DE LA API)
    data["results"].forEach((character) => {
      characters.push({
        img : character.image,
        name : character.name,
        species : character.species,
        status : character.status
      })
    })

    console.log(characters);
    this.wiki = characters;
  }

  render() {
    return html`
    <get-data url="https://rickandmortyapi.com/api/character" method="GET" ></get-data>
    ${this.dateTemplate}
    `;
  }
                                                        //SE ITERAN TODOS LOS DATOS DE CHARACTER=WIKI
  get dateTemplate() {
    return html `
      ${this.wiki.map(character => html `
          <div class="card">
            <div class="card-content">
              <h2>${character.name}</h2>
              <img src="${character.img}" >
              <p>${character.species || character.status }</p>
            </div>
          </div>
      `)}
    `;
  }
}
