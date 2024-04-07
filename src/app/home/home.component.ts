import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

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
  posts: any[] = [];

  constructor(private http: HttpClient,private metaTagService: Meta) {}

  searchTerm: string = ''; // Variable para almacenar el término de búsqueda
  filteredPosts: any[] = [];

  ngOnInit() {
    this.loadPosts();
    this.filteredPosts = this.pagedPosts;
    this.calculateTotalPages();
    this.goToPage(this.currentPage); // Ir a la primera página al inicializar el componente
    this.metaTagService.addTags([
      { name: 'description', content: 'Habla Diversa es tu destino para explorar una amplia gama de temas incluyendo finanzas, tecnología, viajes y más. Únete a nuestra comunidad de curiosos.' },
      { name: 'keywords', content: 'finanzas personales, tecnología, inteligencia artificial, viajes, educación' }
    ]);
  }

  loadPosts() {
    this.http.get<any[]>('ec2-54-198-221-232.compute-1.amazonaws.com:3000/api/posts/').subscribe(data => {
      console.log('Publicaciones cargadas:', data);
      this.posts = data;
      this.calculateTotalPages();
      this.goToPage(this.currentPage);
    }, error => {
      console.error('Error al cargar los posts:', error);
    });
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
