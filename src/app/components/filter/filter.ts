import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FilterOptions {
  searchTerm: string;
  sortBy: 'name' | 'percentage';
  sortOrder: 'asc' | 'desc';
}

@Component({
  selector: 'app-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  @Output() filterChange = new EventEmitter<FilterOptions>();
  
  isExpanded: boolean = false;
  searchTerm: string = '';
  sortBy: 'name' | 'percentage' = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';
  
  toggleFilter() {
    this.isExpanded = !this.isExpanded;
  }
  
  onSearchChange() {
    this.emitFilterChange();
  }
  
  onSortByChange(sortBy: 'name' | 'percentage') {
    this.sortBy = sortBy;
    this.emitFilterChange();
  }
  
  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.emitFilterChange();
  }
  
  private emitFilterChange() {
    this.filterChange.emit({
      searchTerm: this.searchTerm,
      sortBy: this.sortBy,
      sortOrder: this.sortOrder
    });
  }
}
