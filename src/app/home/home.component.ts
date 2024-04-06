import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = ''; // Variable para almacenar el término de búsqueda

  // Función para manejar la búsqueda
  search() {
    console.log('Buscar:', this.searchTerm);
    // Aquí puedes realizar acciones adicionales, como realizar una búsqueda real
  }
}
