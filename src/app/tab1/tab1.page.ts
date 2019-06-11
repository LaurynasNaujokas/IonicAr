import { Component } from '@angular/core';
import { Kokker } from './kokker.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  kokkers: Kokker[] = [
    {
      id : '1',
      firstName: 'Louisa',
      lastName: 'Lorang',
      boxType: 'KvikKassen',
      avatar: 'http://2.gravatar.com/avatar/21a756b8e69bb1a92ef4bd5d99581354?s=44&d=mm&r=g',
      imageUrl: 'http://www.fodevarefokus.dk/wp-content/uploads/sites/4/aarstiderne-1.jpg',
      ugeNr: '23',
      recepieList: [
        'Banh mi med krydret gris, sprod kal og koriander',
        'Tortillas med spicy kalkun, avocado, majs og yoghurt',
        'Pizza med krydret oksekod, aubergine, salat og mozzarella',
        'Falafler med couscoussalat, marineret rodlog og youghurt',
        'Banh mi med krydret gris, sprod kal og koriander'
      ]
    },
    {
      id : '2',
      firstName: 'John',
      lastName: 'Smith',
      boxType: 'SlankeKassen',
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://www.aarstiderne.nu/media/1326/groentsagstapet-web.jpg?anchor=center&mode=crop&width=800&height=528&rnd=131496019810000000',
      ugeNr: '22',
      avatar: 'https://www.famousbirthdays.com/faces/smith-actor-john-image.jpg',
      recepieList: [
        'Banh mi med krydret gris, sprod kal og koriander',
        'Tortillas med spicy kalkun, avocado, majs og yoghurt',
        'Pizza med krydret oksekod, aubergine, salat og mozzarella',
        'Falafler med couscoussalat, marineret rodlog og youghurt',
        'Banh mi med krydret gris, sprod kal og koriander'
      ]
    },
    {
      id : '3',
      firstName: 'Nicole',
      lastName: 'Cage',
      boxType: 'VerdensKassen',
// tslint:disable-next-line: max-line-length
      imageUrl: 'https://f.nordiskemedier.dk/2heqv11q2vbjg78b_536_359.PNG',
      ugeNr: '23',
      avatar: 'https://junkee.com/wp-content/uploads/2019/02/Nicolas-Cage.jpg',
      recepieList: [
        'Banh mi med krydret gris, sprod kal og koriander',
        'Tortillas med spicy kalkun, avocado, majs og yoghurt',
        'Pizza med krydret oksekod, aubergine, salat og mozzarella',
        'Falafler med couscoussalat, marineret rodlog og youghurt',
        'Banh mi med krydret gris, sprod kal og koriander'
      ]
    },
    {
      id : '4',
      firstName: 'John',
      lastName: 'Snow',
      boxType: 'VegetarKassen',
      imageUrl: 'https://landbrugsavisen.dk/files/styles/article_full_nd18/public/article_images//14nytaarstiderne.jpg?itok=2qNc_LZw',
      ugeNr: '23',
    
      avatar: 'https://i.ytimg.com/vi/emqLqPF6UFM/maxresdefault.jpg',
      recepieList: [
        'Banh mi med krydret gris, sprod kal og koriander',
        'Tortillas med spicy kalkun, avocado, majs og yoghurt',
        'Pizza med krydret oksekod, aubergine,salat og mozzarella',
        'Falafler med couscoussalat, marineret rodlog og youghurt',
        'Banh mi med krydret gris, sprod kal og koriander'
      ]
    },
  ];
  constructor() {}

}
