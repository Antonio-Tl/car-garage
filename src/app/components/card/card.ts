import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MaintenanceItem {
  id: string;
  category: string;
  task: string;
  completed: boolean;
  date?: string;
  notes?: string;
}

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() carName: string = 'Mercedes-Benz AMG GT';
  @Input() carImage: string = 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80';
  
  isOverlayOpen = false;
  activeTab: 'wartung' | 'historie' | 'daten' = 'wartung';
  selectedCategory: 'regular' | 'yearly' = 'regular';
  
  maintenanceItems: MaintenanceItem[] = [
    // Regelmäßige Wartung
    { id: '1', category: 'Regelmäßig', task: 'Motorölwechsel + Filterwechsel', completed: false },
    { id: '2', category: 'Regelmäßig', task: 'Ölfilter prüfen/ersetzen', completed: false },
    { id: '3', category: 'Regelmäßig', task: 'Luftfilter kontrollieren/ersetzen', completed: false },
    { id: '4', category: 'Regelmäßig', task: 'Kraftstofffilter prüfen', completed: false },
    { id: '5', category: 'Regelmäßig', task: 'Kühlmittelstand prüfen', completed: false },
    { id: '6', category: 'Regelmäßig', task: 'Bremsflüssigkeit prüfen', completed: false },
    { id: '7', category: 'Regelmäßig', task: 'Scheibenwaschanlage prüfen', completed: false },
    { id: '8', category: 'Regelmäßig', task: 'Reifen prüfen (Profiltiefe, Luftdruck)', completed: false },
    { id: '9', category: 'Regelmäßig', task: 'Bremsen kontrollieren (Beläge & Scheiben)', completed: false },
    { id: '10', category: 'Regelmäßig', task: 'Batterie prüfen', completed: false },
    { id: '11', category: 'Regelmäßig', task: 'Beleuchtung prüfen', completed: false },
    { id: '12', category: 'Regelmäßig', task: 'Scheibenwischer prüfen', completed: false },
    { id: '13', category: 'Regelmäßig', task: 'Karosserie/Unterboden Sichtprüfung', completed: false },
    
    // Jährliche Wartung
    { id: '14', category: 'Jährlich', task: 'Getriebeöl und Filter', completed: false },
    { id: '15', category: 'Jährlich', task: 'Zahnriemen prüfen/wechseln', completed: false },
    { id: '16', category: 'Jährlich', task: 'Wasserpumpe prüfen', completed: false },
    { id: '17', category: 'Jährlich', task: 'Stoßdämpfer/Federung kontrollieren', completed: false },
    { id: '18', category: 'Jährlich', task: 'Auspuffanlage prüfen', completed: false },
    { id: '19', category: 'Jährlich', task: 'Klimaanlage warten', completed: false },
    { id: '20', category: 'Jährlich', task: 'Achsvermessung prüfen', completed: false },
    { id: '21', category: 'Jährlich', task: 'Fehlerspeicher auslesen (OBD II)', completed: false },
    { id: '22', category: 'Jährlich', task: 'HU/AU vorbereiten', completed: false },
  ];

  openOverlay(event: Event) {
    event.stopPropagation();
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.isOverlayOpen = false;
  }

  switchTab(tab: 'wartung' | 'historie' | 'daten') {
    this.activeTab = tab;
  }

  toggleTask(item: MaintenanceItem) {
    item.completed = !item.completed;
    if (item.completed) {
      item.date = new Date().toLocaleDateString('de-DE');
    }
  }

  get regularMaintenance() {
    return this.maintenanceItems.filter(item => item.category === 'Regelmäßig');
  }

  get yearlyMaintenance() {
    return this.maintenanceItems.filter(item => item.category === 'Jährlich');
  }

  get completedPercentage() {
    const completed = this.maintenanceItems.filter(item => item.completed).length;
    return Math.round((completed / this.maintenanceItems.length) * 100);
  }
}
