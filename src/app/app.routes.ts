import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
  
    {path: 'taskList', title: 'Lista de Tarefas', component: TaskListComponent},
    {path: 'taskDetails/:id', title: 'Detalhes da tarefa', component: TaskDetailsComponent},
    {path: '', redirectTo: 'taskList', pathMatch: 'full'}
];
