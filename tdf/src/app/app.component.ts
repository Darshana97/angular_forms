import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  public topics = ['Angular','React','Vue'];

  userModel = new User('Darshana','darshana@gmail.com',123456789, '','morning',true);
}
