import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-uj-lakok',
  templateUrl: './uj-lakok.component.html',
  styleUrls: ['./uj-lakok.component.scss']
})
export class UjLakokComponent implements OnInit {

  alkalmazottak: any[] = [];
  ujAllat = {
    'nev': '',
    'faj': '',
    'erkezes': new Date().toISOString().substring(0,10) ,//!!, it will work 'case of two-way binding [(ngModel)]
    'helye': '', 
    'gondozo': '',

  }

  hibaUzenet: string = '';

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.http.get<any>('https://allatkert-cfc15-default-rtdb.europe-west1.firebasedatabase.app/gondozok.json')
    .pipe(
      catchError(( error => {
        this.hibaUzenet = error.message;
        return throwError(error);
      })),
      tap((alkalmazottak: any[])=> {
        alkalmazottak.sort((a,b)=>(a.nev > b.nev)? 1: -1)
        // console.log(alkalmazottak)
      })
    )
    .subscribe((alkalmazottak: any[])=>{
      this.alkalmazottak = alkalmazottak;
    });
  }

  felvetel(){
    this.http.post('https://allatkert-cfc15-default-rtdb.europe-west1.firebasedatabase.app/allatok.json', this.ujAllat)
    .pipe(
      catchError(( error => {
        this.hibaUzenet = error.message;
        return throwError(error);
      }))
    )
    .subscribe(()=>{
      this.router.navigate(['allataink']);
    });
  
  }

}
