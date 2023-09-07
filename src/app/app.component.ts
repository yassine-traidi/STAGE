import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'qcm';

  constructor(private router:Router) { }
  ngOnInit(){
    this.redirect();
  }

  isAdmin:boolean=false;

  redirect(){
    if(!this.isAdmin){
      this.router.navigate(['/home-page-of-candidate']);
    }
  }
}
