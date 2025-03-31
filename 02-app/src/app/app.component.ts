import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-app';
  data: string = "sachin";
  alertData(){
    alert(this.data);
  }
}
