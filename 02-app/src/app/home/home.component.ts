import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() dataFromRoot: string = "";
  sendResult: string = "Ok";

  @Output() eventToSendToParent:EventEmitter<string> = new EventEmitter<string>();

  sendData(){
    this.eventToSendToParent.emit(this.sendResult);
    // alert(this.sendResult);
  }
}
