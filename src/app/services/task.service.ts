import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: Array<Task> = [];

  getTasks(): Array<Task> {

    this.tasks = this.getFromLocalStorage();

    return this.tasks;
  }

  getById(id: number): Task | undefined{

    /*find: usado para retornar o valor do primeiro elemento em um array 
    que satisfaz uma função de teste fornecida. Se nenhum elemento 
    satisfizer a função de teste, ele retorna undefined.*/
    const task = this.tasks.find(c => c.id === id);

    return task;
  }

  addTask(task: Task) {
    
    task.id = this.tasks.length + 1;

    this.tasks.push(task); 

    this.saveToLocalStorage();
  } 

  updateTasks() {

    this.saveToLocalStorage();
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
  
    if (index !== -1) {
      //achou

      /*splice(): é usado para alterar o conteúdo de um array, 
      removendo, substituindo ou adicionando novos elementos. 
      Ele modifica o array original e retorna um novo array 
      contendo os elementos removidos.*/
      this.tasks.splice(index, 1);
      
      this.saveToLocalStorage();
    }
  }

  private saveToLocalStorage() {

    const tasksJSON = JSON.stringify(this.tasks);

    /*setItem: é usado para armazenar dados no armazenamento local
     do navegador (localStorage) ou no armazenamento de sessão 
     (sessionStorage). Ele adiciona um par chave-valor ao 
     armazenamento ou atualiza o valor se a chave já existir.*/
    localStorage.setItem('tasks', tasksJSON);
  }

  private getFromLocalStorage(): Array<Task> {

    const tasksJSON = localStorage.getItem('tasks');

    if( !tasksJSON) {
      //não achou
      return new Array<Task>();
    }

    return JSON.parse(tasksJSON);
  }

}
