import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  itens: Item[] = [];
  selectedItem: Item = { id: 0, name: '', description: '' };
  isEditing = false;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getAll().subscribe(data => {
      this.itens = data;
    });
  }

  saveItem(): void {
    if (this.isEditing) {
      this.itemService.update(this.selectedItem).subscribe(() => {
        this.resetForm();
        this.loadItems();
      });
    } else {
      this.itemService.create(this.selectedItem).subscribe(() => {
        this.resetForm();
        this.loadItems();
      });
    }
  }

  editItem(item: Item): void {
    this.selectedItem = { ...item };
    this.isEditing = true;
  }

  deleteItem(id: number): void {
    if (confirm('Are you sure you want to delete?')) {
      this.itemService.delete(id).subscribe(() => {
        this.loadItems();
      });
    }
  }

  resetForm(): void {
    this.selectedItem = { id: 0, name: '', description: '' };
    this.isEditing = false;
  }
}
