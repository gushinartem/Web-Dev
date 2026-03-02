import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AlbumService {

  baseUrl = "https://jsonplaceholder.typicode.com";
  http = inject(HttpClient);
  albums : Observable<Album[]> = this.http.get<Album[]>(`${this.baseUrl}/albums`);
  getAlbums() : Observable<Album[]>{
    return this.albums
  }
  removeAlbums(id: number){
      this.http.delete(`${this.baseUrl}/${id}`);
      this.albums = this.albums.pipe(map(albums => albums.filter(a => a.id != id)));
  }
  getAlbumById(id: number) : Observable<Album>{
    return this.albums.pipe(
    map(albums => albums.find(a => a.id === id)!));
  }
  updateAlbum(id: number , title: String){
    this.http.put(`${this.baseUrl}/albums/${id}`, { title }).subscribe();
    this.albums = this.albums.pipe(
    map(albums =>
      albums.map(a =>
        a.id === id ? { ...a, title: title } : a
      )
    )
    );
  }
  getAlbumPhoto(id: number) : Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.baseUrl}/photos/?albumId=${id}`);
  }
}
