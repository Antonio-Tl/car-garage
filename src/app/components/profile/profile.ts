import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  @Input() userName: string = 'Antonio';
  @Input() userAvatar: string = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
  
  isModalOpen = false;
  isEditingAccount = false;
  
  // Temporäre Werte für Bearbeitung
  tempDisplayName: string = '';
  tempAvatarUrl: string = '';
  tempUsername: string = '@antonio_garage';
  tempEmail: string = 'antonio@example.com';
  tempPassword: string = '••••••••';
  
  openModal() {
    this.tempDisplayName = this.userName;
    this.tempAvatarUrl = this.userAvatar;
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
    this.isEditingAccount = false;
  }
  
  toggleEditAccount() {
    this.isEditingAccount = !this.isEditingAccount;
  }
  
  saveProfile() {
    this.userName = this.tempDisplayName;
    this.userAvatar = this.tempAvatarUrl;
    this.closeModal();
  }
  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        if (e.target?.result) {
          this.tempAvatarUrl = e.target.result as string;
        }
      };
      
      reader.readAsDataURL(file);
    }
  }
}
