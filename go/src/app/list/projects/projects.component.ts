import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


constructor(private router:Router){}

  onCardClick(alpha:any) {

    if( alpha==1){
      this.router.navigate(['/','doggies']);
    }

    if( alpha==2){
      this.router.navigate(['/','quotes']);
    }




  }

}
