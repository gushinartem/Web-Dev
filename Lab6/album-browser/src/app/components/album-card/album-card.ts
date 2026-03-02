import { Component } from '@angular/core';
import { input,output } from '@angular/core';
import { Album } from '../../models/album.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-album-card',
  imports: [RouterLink],
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard {
  album = input<Album>();
  delAlbum = output<number>();

  removeAlbum(){
    this.delAlbum.emit(this.album()?.id!);

  }
}
