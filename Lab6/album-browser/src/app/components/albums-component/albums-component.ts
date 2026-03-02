import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album-service';
import { AlbumCard } from "../album-card/album-card";
import { map } from 'rxjs';
@Component({
  selector: 'app-albums-component',
  imports: [AlbumCard,CommonModule],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent {
  albserve = inject(AlbumService);
  albums = this.albserve.getAlbums();
  trackById(index: number, album: Album): number {
    return album.id;
  }
  removeAlbum(id: number){
    this.albserve.removeAlbums(id);
    this.albums = this.albums.pipe(map(albums => albums.filter(a => a.id != id)));
  }

}
