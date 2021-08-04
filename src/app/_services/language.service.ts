import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang: any = 'en';
  defaultLang: string = 'en';
  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('language');
    if(this.currentLang != null)
      this.changeLang(this.currentLang);
    else this.changeLang(this.defaultLang);
  }
  changeLang(lang: string){
    this.currentLang = lang;
    this.translate.setDefaultLang(lang);
    localStorage.setItem('language',lang);
  }
}
