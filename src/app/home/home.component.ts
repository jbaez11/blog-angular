import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: any[] = [
    { id: 1, title: 'Título del primer post', description: 'Descripción del primer post' },
    { id: 2, title: 'Título del segundo post', description: 'Descripción del segundo post' },
    { id: 3, title: 'Título del tercer post', description: 'Descripción del tercer post' },
    { id: 4, title: 'Título del cuarto post', description: 'Descripción del cuarto post' },
    { id: 5, title: 'Título del quinto post', description: 'Descripción del quinto post' },
    { id: 6, title: 'Título del sexto post', description: 'Descripción del sexto post' },
    { id: 7, title: 'Título del séptimo post', description: 'Descripción del séptimo post' },
    { id: 8, title: 'Título del octavo post', description: 'Descripción del octavo post' },
    { id: 9, title: 'Título del noveno post', description: 'Descripción del noveno post' },
    { id: 10, title: 'Título del décimo post', description: 'Descripción del décimo post' },
    { id: 11, title: 'Título del undécimo post', description: 'Descripción del undécimo post' },
    { id: 12, title: 'Título del duodécimo post', description: 'Descripción del duodécimo post' },
    { id: 13, title: 'Título del decimotercer post', description: 'Descripción del decimotercer post' },
    { id: 14, title: 'Título del decimocuarto post', description: 'Descripción del decimocuarto post' },
    { id: 15, title: 'Título del decimoquinto post', description: 'Descripción del decimoquinto post' },
    { id: 16, title: 'Título del decimosexto post', description: 'Descripción del decimosexto post' },
    { id: 17, title: 'Título del decimoséptimo post', description: 'Descripción del decimoséptimo post' },
    { id: 18, title: 'Título del decimoctavo post', description: 'Descripción del decimoctavo post' },
    { id: 19, title: 'Título del decimonoveno post', description: 'Descripción del decimonoveno post' },
    { id: 20, title: 'Título del vigésimo post', description: 'Descripción del vigésimo post' },
    { id: 21, title: 'Título del vigesimoprimero post', description: 'Descripción del vigesimoprimero post' },
    { id: 22, title: 'Título del vigesimosegundo post', description: 'Descripción del vigesimosegundo post' },
    { id: 23, title: 'Título del vigesimotercer post', description: 'Descripción del vigesimotercer post' },
    { id: 24, title: 'Título del vigesimo cuarto post', description: 'Descripción del vigesimo cuarto post' }
  ];


  searchTerm: string = ''; // Variable para almacenar el término de búsqueda

  // Función para manejar la búsqueda
  search() {
    console.log('Buscar:', this.searchTerm);
    // Aquí puedes realizar acciones adicionales, como realizar una búsqueda real
  }
}
