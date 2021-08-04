import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../_services/language.service';

interface Language{
  value: string;
  langName: string;
  imgUrl: string;
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
  languagesList: Language[] = [
    {value: 'en',langName: 'English',imgUrl: 'https://www.countryflags.io/us/flat/32.png'},
    {value: 'ru',langName: 'Russian',imgUrl: 'https://www.countryflags.io/RU/flat/32.png'},
    {value: 'ua',langName: 'Ukrainian',imgUrl: 'https://www.countryflags.io/ua/flat/32.png'}
  ]
  constructor(private languageService: LanguageService){
    this.updateCurrentLanguage();
  }
  useLanguage(lang: string){
    this.languageService.changeLang(lang);
    this.updateCurrentLanguage();
  }
  updateCurrentLanguage(){
    this.selectedLanguage = this.languagesList.find(el => el.value == this.languageService.currentLang);
  }
}
