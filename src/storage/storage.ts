import { observable, action, toJS, values } from 'mobx';
import * as papaparse from 'papaparse';
import * as mathjs from 'mathjs'
import { number } from 'prop-types';

export type guest = { name: string};
export type guestArray = { guest : guest }[];

class Storage {
    @observable profileImages: any = [];
    @observable database: any = [];
    @observable labels: any = [];
    @observable guestList: any = [];
    @observable guestListKNN: any = [];
    @observable guestListAlgorithm1: any = [];
    @observable guestListAlgorithm2: any = [];

    @observable currentKNNGuestId : number = -1;

    @observable currentGuestInDetail : any;

    constructor() {
        this.profileImages = ["../resources/images/profile/1.png", "../resources/images/profile/2.png", "../resources/images/profile/3.png", "../resources/images/profile/4.png", "../resources/images/profile/5.png", "../resources/images/profile/6.png", "../resources/images/profile/7.png", "../resources/images/profile/8.png", "../resources/images/profile/9.png", "../resources/images/profile/10.png", "../resources/images/profile/11.png", "../resources/images/profile/12.png", "../resources/images/profile/13.png", "../resources/images/profile/14.png", "../resources/images/profile/15.png", "../resources/images/profile/16.png"]
        this.database = [];
        this.guestList = [];
        this.guestListKNN = [];
        this.guestListAlgorithm1 = [];
        this.guestListAlgorithm2 = [];

        this.currentKNNGuestId = 3;

        this.getData = this.getData.bind(this);
        this.setGuests = this.setGuests.bind(this);
        this.setCurrentKNNGuestId = this.setCurrentKNNGuestId.bind(this);
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
            return;
        }
        if(this.database) {
            this.labels = this.database[0];
            //console.log(toJS(this.database[0]));
            //console.log(toJS(this.database[0][0]));
            this.database.forEach((element: any, index : any) => {
                //alert("yei");
                //console.log(toJS(element) );
                //console.log(element[0]);
                    let random = Math.floor(Math.random() * (this.profileImages.length)  + 1);
                    var userData = {
                        id: index,
                        name: toJS(element[0]),
                        age: toJS(element[1]),
                        imageId: '' + random,
                        selected: false,
                    }
                    //console.log(userData.id);
                    if(index != 0)
                    this.guestList.push(userData);  

                    if(index > 10 && index < 15)
                    this.guestListKNN.push(userData);

                    if(index > 21 && index < 29)
                    this.guestListAlgorithm1.push(userData);

                    if(index > 49 && index < 57 )
                    this.guestListAlgorithm2.push(userData);

                 /*for(let i = 0; i < this.guestList.length; i++) {
                   console.log(this.guestList[i]);
                 }*/ 
            });
        }
    }

    @action setCurrentGuestInDetail() {
        let id : any = this.currentKNNGuestId;
        //this.currentGuestInDetail = this.getGuests[id];
    }

    @action setCurrentKNNGuestId(id : number) {
        this.currentKNNGuestId = id;        
        alert(this.currentKNNGuestId);
    }
}

const storage = new Storage();
export default storage;