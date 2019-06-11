import { Injectable } from '@angular/core';
import { Box } from './boxes.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private boxes: Box[] = [
    {
      boxId : '1',
      title: 'KvikKassen',
      imageUrl: 'https://www.aarstiderne.com/media/1369/dscf7777.jpg?width=500&height=334',
      description: 'Med KvikKassen far du alt, hvad du skal bruge for at tilberede velsmagende',
      ingredients: ['test', 'test2', 'test3']
    },
    {
      boxId : '2',
      title: 'Livretter',
      imageUrl: 'https://danskemaaltidskasser.dk/wp-content/uploads/2018/08/aarstiderne-aftensmad-200x200.png',
      description: 'Med Livretter far du alt, hvad du skal bruge for at tilberede velsmagende',
      ingredients: ['test', 'test2', 'test3']
    },
    {
      boxId : '3',
      title: 'SlankeKassen',
      imageUrl: 'https://danskemaaltidskasser.dk/wp-content/uploads/2018/08/aarstiderne-aftensmad-200x200.png',
      description: 'Med KvikKassen far du alt, hvad du skal bruge for at tilberede velsmagende',
      ingredients: ['test', 'test2', 'test3']
    },
    {
      boxId : '4',
      title: 'VerdensKassen',
      imageUrl: 'https://danskemaaltidskasser.dk/wp-content/uploads/2018/08/aarstiderne-aftensmad-200x200.png',
      description: 'Med KvikKassen far du alt, hvad du skal bruge for at tilberede velsmagende',
      ingredients: ['test', 'test2', 'test3']
    },
    {
      boxId : '5',
      title: 'SvenskKassen',
      imageUrl: 'https://danskemaaltidskasser.dk/wp-content/uploads/2018/08/aarstiderne-aftensmad-200x200.png',
      description: 'Med KvikKassen far du alt, hvad du skal bruge for at tilberede velsmagende',
      ingredients: ['test', 'test2', 'test3']
    },
    {
      boxId : '6',
      title: 'KvikKassen',
      imageUrl: 'https://danskemaaltidskasser.dk/wp-content/uploads/2018/08/aarstiderne-aftensmad-200x200.png',
      description: 'Med KvikKassen far du alt, hvad du skal bruge for at tilberede velsmagende',
      ingredients: ['test', 'test2', 'test3']
    },
  ];

  constructor() { }

  // Getting the list of all boxes
  getAllBoxes() {
    return [...this.boxes];
  }

  // finding a box with specifc if to get data in boxDetails page
  getBox(boxId: string){
    return {
      ...this.boxes.find(box => {
      return box.boxId === boxId;
    })};
  }
}
