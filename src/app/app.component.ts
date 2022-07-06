import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'newangular';
  description: string = 'Angular class taking place @pmt';
  isClassEnded: boolean = false;
  numberOfStudents: number = 7;
  name: string = 'Joan';
  color: string = 'Green';
  age: number = 48;
  username: string = '';

  showMenu: boolean = false;

  dishes: string[] = ['Beans and plantain',
        'Abacha',
        'Nsala soup',
        'Bread and coconut',
        'Agbugbu na Ji',
        'Noodles and Egg',
        'Fried potatoe and plantain',
        'Okpa and Coke',
        'Jollof rice and plantain'
]

  toggleMenu(): void{
    this.showMenu = !this.showMenu;
  }
}

