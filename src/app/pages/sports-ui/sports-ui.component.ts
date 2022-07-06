import { Component, OnInit } from '@angular/core';
import { Sport } from './../../models/sport';
import { Sports } from './../../providers/sports';


@Component({
  selector: 'app-sports-ui',
  templateUrl: './sports-ui.component.html',
  styleUrls: ['./sports-ui.component.scss']
})
export class SportsUIComponent implements OnInit {
  loading: boolean = false;
  sportsRecords: Sport[] = [];
  sportsServices: any;

  constructor(
    private sports: Sports) { }
  
    ngOnInit(): void {
      this.getSportRecords();
    }
  
  
    getSportRecords(): void{
      this.loading = true;
      this.sports.retrieveSportRecords('Canada' ).subscribe({
        next: (res: any) => {
          this.loading = false;
          console.log('response', res) 
          this.sportsRecords = res.football;
        },
        error: (error: any) => {
          this.loading = false;
          console.log('error')
        }
      })
  
    }
   
}

  
