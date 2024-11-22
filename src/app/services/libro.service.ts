import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }

  getTitulo (libro: string) {
    return this.http.get('https://gutendex.com/books/?ids=' + libro);
  }

  getRobot (text: string) {
    return this.http.get('https://robohash.org/' + text);
  }

  getDog () {
    return this.http.get('https://dog.ceo/api/breed/beagle/images/random')
  }
}
