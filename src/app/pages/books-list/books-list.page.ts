import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LibroService } from 'src/app/services/libro.service';
import { getFirestore, collection, addDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.page.html',
  styleUrls: ['./books-list.page.scss'],
})
export class BooksListPage implements OnInit {

  bookTitles: string[] = [];
  dogImages: string[] = [];
  robotImage = '';
  dogImage = '';

  constructor(private libroService: LibroService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  async ngOnInit() {
    for (let i = 0; i < 10; i++) {
      await this.getTitle();
    }
    for (let i = 0; i < 10; i++) {
      await this.getDog();
    }
  }

  async getTitle () {
    try {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      const title = await firstValueFrom(this.libroService.getTitulo(randomNumber.toString()));
      this.bookTitles.push((title as any).results[0].title);
      return title;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getDog () {
    try {
      const dog = await firstValueFrom(this.libroService.getDog());
      this.dogImages.push((dog as any).message);
      return dog;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async saveDataToFirestore() {
    try {
      const data = {
        bookTitles: this.bookTitles,
        dogImages: this.dogImages,
      }
      const db = getFirestore();
      const booksRef = collection(db, 'books');
      const docRef = await addDoc(booksRef, data);
      return docRef;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

}
