import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {

  task?: Task;

  constructor(private router: Router,private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    if(id === null) {
      this.navigateBack();
    }    
    else {
      /*"+" representa a forma da passagem de id enquanto string, para número.*/
      this.task = this.taskService.getById(+id);

      if(this.task === undefined) {
        this.navigateBack();
      }
    }
  }

  save() {
    this.taskService.updateTasks();

    this.navigateBack();
  }

  cancel() {
    this.navigateBack();
  }

  private navigateBack() {
    /*navigate: é usado para programaticamente navegar entre diferentes 
    rotas dentro de uma aplicação Angular. Ele faz parte do serviço 
    Router e permite que o usuário se redirecione para uma nova rota, 
    especificando o caminho desejado e, opcionalmente, parâmetros 
    adicionais.*/

    /*relativeTo indica que a navegação deve ser relativa à rota atual 
    (this.route), permitindo uma navegação mais flexível e dinâmica.*/
    this.router.navigate(['/taskList'], {relativeTo: this.route}); 
  }
}
