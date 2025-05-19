import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-tables',
  templateUrl: './admin-tables.component.html',
    styleUrls: ['./admin-tables.component.css']  // ✅ ligne correcte

})
export class AdminTablesComponent {
  tables: { id: number; number: number; description: string }[] = [];

  table = { id: 0, number: 0, description: '' };
  isEditing = false;

  onSubmit() {
    if (this.isEditing) {
      const index = this.tables.findIndex(t => t.id === this.table.id);
      if (index !== -1) {
        this.tables[index] = { ...this.table };
      }
      this.isEditing = false;
    } else {
      this.table.id = Date.now(); // ID unique
      this.tables.push({ ...this.table });
    }
    this.table = { id: 0, number: 0, description: '' };
  }

  editTable(t: any) {
    this.table = { ...t };
    this.isEditing = true;
  }

  deleteTable(id: number) {
    this.tables = this.tables.filter(t => t.id !== id);
  }
}