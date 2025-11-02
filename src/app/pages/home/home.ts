import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from "../../components/card/card";
import { AddCard } from "../../components/add-card/add-card";
import { Profile } from "../../components/profile/profile";
import { Filter, FilterOptions } from "../../components/filter/filter";

interface CarData {
  name: string;
  image: string;
  percentage?: number; // Wartungsfortschritt in Prozent
}

@Component({
  selector: 'app-home',
  imports: [Card, AddCard, Profile, Filter, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  userName: string = 'Antonio';
  userAvatar: string = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
  
  cars: CarData[] = [
    {
      name: 'Porsche 911 GT3',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      percentage: 75
    },
    {
      name: 'Ferrari F8 Tributo',
      image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
      percentage: 45
    },
    {
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
      percentage: 92
    },
    {
      name: 'Mercedes-AMG GT',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      percentage: 60
    }
  ];

  filteredCars: CarData[] = [...this.cars];
  
  onAddCar(carData: { name: string; image: string }) {
    const newCar: CarData = {
      ...carData,
      percentage: 0
    };
    this.cars.push(newCar);
    this.applyCurrentFilter();
  }
  
  private currentFilter: FilterOptions = {
    searchTerm: '',
    sortBy: 'name',
    sortOrder: 'asc'
  };
  
  onFilterChange(filterOptions: FilterOptions) {
    this.currentFilter = filterOptions;
    this.applyCurrentFilter();
  }
  
  private applyCurrentFilter() {
    let result = [...this.cars];
    
    // Suche nach Namen
    if (this.currentFilter.searchTerm) {
      const searchLower = this.currentFilter.searchTerm.toLowerCase();
      result = result.filter(car => 
        car.name.toLowerCase().includes(searchLower)
      );
    }
    
    // Sortierung
    result.sort((a, b) => {
      let comparison = 0;
      
      if (this.currentFilter.sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (this.currentFilter.sortBy === 'percentage') {
        const percentA = a.percentage ?? 0;
        const percentB = b.percentage ?? 0;
        comparison = percentA - percentB;
      }
      
      return this.currentFilter.sortOrder === 'asc' ? comparison : -comparison;
    });
    
    this.filteredCars = result;
  }
}
