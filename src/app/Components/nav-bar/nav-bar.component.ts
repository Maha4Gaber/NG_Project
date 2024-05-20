import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userid:any
  ngOnInit(): void {
    
    this.userid=localStorage.getItem('user')
    if(localStorage.getItem('userId')){
      localStorage.setItem('user','true')
      
    }
    else{
      localStorage.setItem('user','false')
    }
    
  }
  logout(){
    localStorage.setItem('userId','')
      localStorage.setItem('user','false')
  }
}
