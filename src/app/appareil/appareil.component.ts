import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;

  constructor(private appareilService: AppareilService) {
    this.appareilName ='';
    this.appareilStatus ='';
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
    return '';//TS asks what do you return if it's neither allumé or éteint
  }
  onSwitchOn() {
  this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff() {
    this.appareilService.switchOfOne(this.indexOfAppareil);
  }
}
