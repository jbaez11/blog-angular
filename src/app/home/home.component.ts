import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postsPerPage: number = 24; // Número de publicaciones por página
  currentPage: number = 1; // Página actual
  totalPages: number[] = []; // Arreglo de números de página
  pagedPosts: any[] = []; // Publicaciones mostradas en la página actual
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
    { id: 24, title: 'Título del vigesimo cuarto post', description: 'Descripción del vigesimo cuarto post' },
    // Agregando 72 entradas más:
    { id: 25, title: 'Título del vigesimo quinto post', description: 'Descripción del vigesimo quinto post' },
    { id: 26, title: 'Título del vigesimo sexto post', description: 'Descripción del vigesimo sexto post' },
    { id: 27, title: 'Título del vigesimo séptimo post', description: 'Descripción del vigesimo séptimo post' },
    { id: 28, title: 'Título del vigesimo octavo post', description: 'Descripción del vigesimo octavo post' },
    { id: 29, title: 'Título del vigesimo noveno post', description: 'Descripción del vigesimo noveno post' },
    { id: 30, title: 'Título del trigésimo post', description: 'Descripción del trigésimo post' },
    { id: 31, title: 'Título del trigésimo primer post', description: 'Descripción del trigésimo primer post' },
    { id: 32, title: 'Título del trigésimo segundo post', description: 'Descripción del trigésimo segundo post' },
    { id: 33, title: 'Título del trigésimo tercero post', description: 'Descripción del trigésimo tercero post' },
    { id: 34, title: 'Título del trigésimo cuarto post', description: 'Descripción del trigésimo cuarto post' },
    { id: 35, title: 'Título del trigésimo quinto post', description: 'Descripción del trigésimo quinto post' },
    { id: 36, title: 'Título del trigésimo sexto post', description: 'Descripción del trigésimo sexto post' },
    { id: 37, title: 'Título del trigésimo séptimo post', description: 'Descripción del trigésimo séptimo post' },
    { id: 38, title: 'Título del trigésimo octavo post', description: 'Descripción del trigésimo octavo post' },
    { id: 39, title: 'Título del trigésimo noveno post', description: 'Descripción del trigésimo noveno post' },
    { id: 40, title: 'Título del cuadragésimo post', description: 'Descripción del cuadragésimo post' },
    { id: 41, title: 'Título del cuadragésimo primer post', description: 'Descripción del cuadragésimo primer post' },
    { id: 42, title: 'Título del cuadragésimo segundo post', description: 'Descripción del cuadragésimo segundo post' },
    { id: 43, title: 'Título del cuadragésimo tercero post', description: 'Descripción del cuadragésimo tercero post' },
    { id: 44, title: 'Título del cuadragésimo cuarto post', description: 'Descripción del cuadragésimo cuarto post' },
    { id: 45, title: 'Título del cuadragésimo quinto post', description: 'Descripción del cuadragésimo quinto post' },
    { id: 46, title: 'Título del cuadragésimo sexto post', description: 'Descripción del cuadragésimo sexto post' },
    { id: 47, title: 'Título del cuadragésimo séptimo post', description: 'Descripción del cuadragésimo séptimo post' },
    { id: 48, title: 'Título del cuadragésimo octavo post', description: 'Descripción del cuadragésimo octavo post' },
    { id: 49, title: 'Título del cuadragésimo noveno post', description: 'Descripción del cuadragésimo noveno post' },
    { id: 50, title: 'Título del quincuagésimo post', description: 'Descripción del quincuagésimo post' },
    { id: 51, title: 'Título del quincuagésimo primer post', description: 'Descripción del quincuagésimo primer post' },
    { id: 52, title: 'Título del quincuagésimo segundo post', description: 'Descripción del quincuagésimo segundo post' },
    { id: 53, title: 'Título del quincuagésimo tercero post', description: 'Descripción del quincuagésimo tercero post' },
    { id: 54, title: 'Título del quincuagésimo cuarto post', description: 'Descripción del quincuagésimo cuarto post' },
    { id: 55, title: 'Título del quincuagésimo quinto post', description: 'Descripción del quincuagésimo quinto post' },
    { id: 56, title: 'Título del quincuagésimo sexto post', description: 'Descripción del quincuagésimo sexto post' },
    { id: 57, title: 'Título del quincuagésimo séptimo post', description: 'Descripción del quincuagésimo séptimo post' },
    { id: 58, title: 'Título del quincuagésimo octavo post', description: 'Descripción del quincuagésimo octavo post' },
    { id: 59, title: 'Título del quincuagésimo noveno post', description: 'Descripción del quincuagésimo noveno post' },
    { id: 60, title: 'Título del sexagésimo post', description: 'Descripción del sexagésimo post' },
    { id: 61, title: 'Título del sexagésimo primer post', description: 'Descripción del sexagésimo primer post' },
    { id: 62, title: 'Título del sexagésimo segundo post', description: 'Descripción del sexagésimo segundo post' },
    { id: 63, title: 'Título del sexagésimo tercero post', description: 'Descripción del sexagésimo tercero post' },
    { id: 64, title: 'Título del sexagésimo cuarto post', description: 'Descripción del sexagésimo cuarto post' },
    { id: 65, title: 'Título del sexagésimo quinto post', description: 'Descripción del sexagésimo quinto post' },
    { id: 66, title: 'Título del sexagésimo sexto post', description: 'Descripción del sexagésimo sexto post' },
    { id: 67, title: 'Título del sexagésimo séptimo post', description: 'Descripción del sexagésimo séptimo post' },
    { id: 68, title: 'Título del sexagésimo octavo post', description: 'Descripción del sexagésimo octavo post' },
    { id: 69, title: 'Título del sexagésimo noveno post', description: 'Descripción del sexagésimo noveno post' },
    { id: 70, title: 'Título del septuagésimo post', description: 'Descripción del septuagésimo post' },
    { id: 71, title: 'Título del septuagésimo primer post', description: 'Descripción del septuagésimo primer post' },
    { id: 72, title: 'Título del septuagésimo segundo post', description: 'Descripción del septuagésimo segundo post' },
    { id: 73, title: 'Título del septuagésimo tercero post', description: 'Descripción del septuagésimo tercero post' },
    { id: 74, title: 'Título del septuagésimo cuarto post', description: 'Descripción del septuagésimo cuarto post' },
    { id: 75, title: 'Título del septuagésimo quinto post', description: 'Descripción del septuagésimo quinto post' },
    { id: 76, title: 'Título del septuagésimo sexto post', description: 'Descripción del septuagésimo sexto post' },
    { id: 77, title: 'Título del septuagésimo séptimo post', description: 'Descripción del septuagésimo séptimo post' },
    { id: 78, title: 'Título del septuagésimo octavo post', description: 'Descripción del septuagésimo octavo post' },
    { id: 79, title: 'Título del septuagésimo noveno post', description: 'Descripción del septuagésimo noveno post' },
    { id: 80, title: 'Título del octogésimo post', description: 'Descripción del octogésimo post' },
    { id: 81, title: 'Título del octogésimo primer post', description: 'Descripción del octogésimo primer post' },
    { id: 82, title: 'Título del octogésimo segundo post', description: 'Descripción del octogésimo segundo post' },
    { id: 83, title: 'Título del octogésimo tercero post', description: 'Descripción del octogésimo tercero post' },
    { id: 84, title: 'Título del octogésimo cuarto post', description: 'Descripción del octogésimo cuarto post' },
    { id: 85, title: 'Título del octogésimo quinto post', description: 'Descripción del octogésimo quinto post' },
    { id: 86, title: 'Título del octogésimo sexto post', description: 'Descripción del octogésimo sexto post' },
    { id: 87, title: 'Título del octogésimo séptimo post', description: 'Descripción del octogésimo séptimo post' },
    { id: 88, title: 'Título del octogésimo octavo post', description: 'Descripción del octogésimo octavo post' },
    { id: 89, title: 'Título del octogésimo noveno post', description: 'Descripción del octogésimo noveno post' },
    { id: 90, title: 'Título del nonagésimo post', description: 'Descripción del nonagésimo post' },
    { id: 91, title: 'Título del nonagésimo primer post', description: 'Descripción del nonagésimo primer post' },
    { id: 92, title: 'Título del nonagésimo segundo post', description: 'Descripción del nonagésimo segundo post' },
    { id: 93, title: 'Título del nonagésimo tercero post', description: 'Descripción del nonagésimo tercero post' },
    { id: 94, title: 'Título del nonagésimo cuarto post', description: 'Descripción del nonagésimo cuarto post' },
    { id: 95, title: 'Título del nonagésimo quinto post', description: 'Descripción del nonagésimo quinto post' },
    { id: 96, title: 'Título del nonagésimo sexto post', description: 'Descripción del nonagésimo sexto post' },
    { id: 97, title: 'Título del nonagésimo séptimo post', description: 'Descripción del nonagésimo séptimo post' },
    { id: 98, title: 'Título del nonagésimo octavo post', description: 'Descripción del nonagésimo octavo post' },
    { id: 99, title: 'Título del nonagésimo noveno post', description: 'Descripción del nonagésimo noveno post' },
    { id: 100, title: 'Título del centésimo post', description: 'Descripción del centésimo post' }
];



  searchTerm: string = ''; // Variable para almacenar el término de búsqueda
  filteredPosts: any[] = [];

  ngOnInit() {
    this.filteredPosts = this.pagedPosts;
    this.calculateTotalPages();
    this.goToPage(this.currentPage); // Ir a la primera página al inicializar el componente

  }

  calculateTotalPages() {
    this.totalPages = [];
    const totalPosts = this.posts.length;
    const totalPages = Math.ceil(totalPosts / this.postsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      this.totalPages.push(i);
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.postsPerPage;
    const endIndex = Math.min(startIndex + this.postsPerPage, this.posts.length);
    this.pagedPosts = this.posts.slice(startIndex, endIndex);
    this.filteredPosts = this.pagedPosts;
    console.log('Página actual:', this.currentPage);
    console.log('Publicaciones mostradas:', this.pagedPosts);
  }




  search() {
    if (this.searchTerm.trim() === '') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  onSearchInput() {
    if (this.searchTerm.trim() === '') {
      // El campo de búsqueda está vacío
      console.log('El campo de búsqueda está vacío');
      // Realiza alguna acción si deseas cuando el campo de búsqueda está vacío
      this.goToPage(this.currentPage)
    } else {
      // El campo de búsqueda contiene un término
      console.log('Buscar:', this.searchTerm);
      // Realiza la búsqueda utilizando this.searchTerm
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

}
