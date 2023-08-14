import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  ngOnInit(): void {
    console.log('init app');
  }

  constructor(private router : Router){ }

  onSubmit(form : NgForm){
    this.router.navigate(['search',form.value.search]);
  }

  
}
