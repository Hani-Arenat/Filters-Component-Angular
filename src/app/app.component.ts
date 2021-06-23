import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filters-angular';

  constructor(private store: Store<any>) {

  }
}
