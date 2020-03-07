import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tracking-state-and-validity';
  public topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  userModel = new User('Darshana', 'darshana@gmail.com', 1234567890, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService) { }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }

  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(data => console.log('Success!', data), error => this.errorMsg = error.statusText)
  }

}
