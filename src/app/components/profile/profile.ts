import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  @Input() userName: string = 'Antonio';
  @Input() userAvatar: string = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
}
