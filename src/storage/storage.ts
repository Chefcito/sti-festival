import { observable, action, toJS, values } from 'mobx';
import * as papaparse from 'papaparse';
import * as mathjs from 'mathjs'

export type guest = { name: string};
export type guestArray = { guest : guest }[];

class Storage {
    @observable profileImages: any = [];
    @observable database: any = [];
    @observable labels: any = [];
    @observable guestList: any = [];

    constructor() {
        this.profileImages = ["../resources/images/profile/1.png", "../resources/images/profile/2.png"]
        this.database = [];
        this.guestList = [];

        this.getData = this.getData.bind(this);
        this.setGuests = this.setGuests.bind(this);
    }

    @action fetchCsv() {
        return fetch(require('../resources/database/guestsv2.csv') ).then(function (response: any) {
            let csvReader = response.body.getReader();
            let csvDecoder = new TextDecoder('utf-8');

            return csvReader.read().then(function (result: any) {
                //console.log(csvDecoder.decode(result.value));
                return csvDecoder.decode(result.value);     
            });
        }).catch((error) => {
            console.error(error);
        });
    }

    @action getData(result : any) {
        if (result.data && result.data !== null && result.data !== undefined) {
            result.data.forEach((element: any) => {
                if (element !== undefined) {
                    if(!this.database) {
                        this.database = [];
                    }

                    this.database.push(element);
                }
            });
            /*this.labels = this.database[0];
            for(let i = 1; i < this.labels.length; i++) {
                //let random = Math.floor(Math.random() * (this.profileImages.length));

                let guest = {
                    name: this.database[i][0],
                    age: this.database[i][1],
                    //profilePic: random,
                }
                
                this.guestList.push(guest);
            }*/
            /*if(this.database)
            for(let i = 0; i < this.database.length; i++) {
                console.log(this.database[i]);
            }*/
            //console.log(result.data);
        }
    }

    @action async getGuests() {
        let csvData : any = await this.fetchCsv();

        papaparse.parse(csvData, {
            complete: this.getData
        });
    }

    @action setGuests() {
        if(this.database.length === 0) {
            alert("fuck");
            return;
        }
        if(this.database) {
            this.labels = this.database[0];
            console.log(toJS(this.database[0]));
            console.log(toJS(this.database[0][0]));
            this.database.forEach((element: any, index : any) => {
                //alert("yei");
                //console.log(toJS(element) );
                //console.log(element[0]);
                    var userData = {
                        name: toJS(element[0]),
                        age: toJS(element[1]),
                        id: index,
                    }
                    //console.log(userData.id);
                    if(index != 0)
                    this.guestList.push(userData);  
    
                
                 for(let i = 0; i < this.guestList.length; i++) {
                   //console.log(this.guestList[i]);
                } 
            });
        }
    }
}

const storage = new Storage();
export default storage;