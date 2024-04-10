import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  post: any; // Asumiendo que el post es de tipo any; ajusta según sea necesario
  postId: string | null = null;
  createdAt: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute,private metaTagService: Meta) { }

  ngOnInit() {
    // Ahora capturamos los parámetros dentro de ngOnInit
    this.metaTagService.addTags([
      { name: 'description', content: 'Habla Diversa es tu destino para explorar una amplia gama de temas incluyendo finanzas, tecnología, viajes y más. Únete a nuestra comunidad de curiosos.' },
      { name: 'keywords', content: 'finanzas personales, tecnología, inteligencia artificial, viajes, educación' }
    ]);
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.createdAt = this.route.snapshot.paramMap.get('createdAt');

    if (this.postId && this.createdAt) {
      this.getPostById(this.postId, this.createdAt);
    }
  }


  getPostById(postId: string, createdAt: string) {
    // Asegúrate de que la URL y los parámetros sean correctos para tu API
    const url = `https://api.habladiversa.com/api/posts/${postId}?createdAt=${encodeURIComponent(createdAt)}`;
    this.http.get(url).subscribe(data => {
      this.post = data;
    }, error => {
      console.error('Error al obtener el post:', error);
    });
  }
}
