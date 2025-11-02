import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from "../../components/card/card";
import { AddCard } from "../../components/add-card/add-card";
import { Profile } from "../../components/profile/profile";

interface CarData {
  name: string;
  image: string;
}

@Component({
  selector: 'app-home',
  imports: [Card, AddCard, Profile, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  userName: string = 'Antonio';
  userAvatar: string = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
  
  cars: CarData[] = [
    {
      name: 'Porsche 911 GT3',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
    },
    {
      name: 'Ferrari F8 Tributo',
      image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80'
    },
    {
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80'
    },
    {
      name: 'Mercedes-AMG GT',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80'
    }
  ];

  onAddCar(carData: { name: string; image: string }) {
    this.cars.push(carData);
  }
}
