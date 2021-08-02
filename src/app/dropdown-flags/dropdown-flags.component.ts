import { Component, OnInit } from '@angular/core';

export interface Flag{
  value: string;
  viewValue: string;
  img: string;
}

@Component({
  selector: 'app-dropdown-flags',
  templateUrl: './dropdown-flags.component.html',
  styleUrls: [
    './dropdown-flags.component.css'
  ]
})
export class DropdownFlagsComponent{

  selectedLanguage: any;
  constructor(){
    var languageToFind = localStorage.getItem('languageSelected');
    this.languages.forEach(element => {
      if(element.value == languageToFind)
        this.selectedLanguage = element;
    });
    if(this.selectedLanguage == null){
      this.selectedLanguage = this.languages[0];
    }
  }
  languages: Flag[] = [
    { value: 'english', viewValue: 'English', img: 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_velikobritanija_new.jpg'},
    { value: 'russian', viewValue: 'Russian', img: 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_rf_enl.jpg'},
    { value: 'ukrainian', viewValue: 'Ukrainian', img: 'https://img5.goodfon.ru/wallpaper/nbig/7/fc/ukraine-flag-flag-of-ukraine-ukrainian-flag-ukrainian.jpg'}
  ];

  changeLanguage(event: any): void{
    console.log(event);
    this.selectedLanguage = event;
    localStorage.setItem('languageSelected',this.selectedLanguage.value);
  }

}
