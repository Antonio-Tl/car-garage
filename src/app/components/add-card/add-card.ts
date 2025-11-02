import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-card.html',
  styleUrl: './add-card.scss',
})
export class AddCard {
  @Output() addCar = new EventEmitter<{ name: string; image: string }>();
  
  isModalOpen = false;
  carBrand = '';
  carModel = '';
  carImage = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
  }

  resetForm() {
    this.carBrand = '';
    this.carModel = '';
    this.carImage = '';
  }

  onSubmit() {
    if (this.carBrand && this.carModel && this.carImage) {
      const carName = `${this.carBrand} ${this.carModel}`;
      this.addCar.emit({ name: carName, image: this.carImage });
      this.closeModal();
    }
  }
}
