import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { styleButton } from '../models/styleButton.models';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @ Input() buttonColor :styleButton={backgroundColor:"", text:""};
  @ Output() infoButtonClic : EventEmitter<string> = new EventEmitter()

  sendInfoButtonClicToParent():void{
    this.infoButtonClic.emit(`Le ${this.buttonColor.text} a été cliqué`)
  }
  
}
