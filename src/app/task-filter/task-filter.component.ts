import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent {
    
    filter: string = '';

    /*EventEmitter: emite eventos de qualquer parte de uma aplicação e 
    escuta esses eventos para tomar ações específicas.*/
    @Output() taskFilter = new EventEmitter<string>();

    filterTask() {
      this.taskFilter.emit(this.filter);
    }
}
