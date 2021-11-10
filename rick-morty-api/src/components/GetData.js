import {LitElement} from 'lit';

export class GetData extends LitElement {

    static get properties() {
        return {
            url: { type: String},                           //URL DE LA API A CONSUMIR
            metho: { type: String}                          //TIPO DE METODO A CONSUMIR EN API (GET, POST, DELETE, UPDATE)
        }   
    }

    firstUpdated(){                                         //SE UTILIZA EL METODO FIRSTUPDATE YA QUE AL QUERER HACERLO EN UN CONSTRUCTOR, ESTE NO REFLEJABA LA INFO DE LA API, YA QUE VA DE MANERA ASINCRONA, Y SE INICIALIZABA PRIMERO EL CONSTRUCTOR
        this.getData();
    }

        _sendData(data) {
            this.dispatchEvent(new CustomEvent('ApiData', {     //EVENTO PARA PASAR LA INFO ENTRE COMPONENTES
                detail: {data}, bubbles: true, composed: true
            }));
        }

        getData() {                                         //METODO "FETCH" PARA HACER EL CONSUMO DE LA API
            fetch(this.url, {method: this.method})
            .then((response) => {
                if (response.ok) return response.json();    //SE RECIBE LA INFO DE LA API EN UN JSON
                return Promise.reject(response);            //SE ESPERA UNA PROMESA
            })
            .then((data) => {this._sendData(data);})        //SE REALIZA UN EVENTO, YA QUE ES LA FORMA EN MANDAR LA INFO DE UN COMPONENTE HIJO A UN COMPONENTE PADRE
            .catch((error) => {console.warn('Ocurrio un error al pasar la data en el evento', error);})         //SE REALIZA UN CATCH PARA VER SI SE TIENE UN ERORR AL PASAR LA INFO ENTRE COMPONENTES
        }
}

customElements.define('get-data' , GetData);