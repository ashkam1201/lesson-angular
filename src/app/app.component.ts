import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  countersubscription: Subscription;

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.countersubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }

  ngOnDestroy() {
    this.countersubscription.unsubscribe();
  }
}
