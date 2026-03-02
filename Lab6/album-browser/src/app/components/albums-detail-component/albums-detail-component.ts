import { Component ,inject } from '@angular/core';
import { AlbumService } from '../../services/album-service';
import { ActivatedRoute, ɵEmptyOutletComponent, RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
@Component({
  selector: 'app-albums-detail-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums-detail-component.html',
  styleUrl: './albums-detail-component.css',
})
export class AlbumsDetailComponent {
  albServe = inject(AlbumService);
  route = inject(ActivatedRoute);
  albumId= Number(this.route.snapshot.paramMap.get('id'));
  albumOb = this.albServe.getAlbumById(this.albumId);
  updateAlbum(newTitle: String){
    this.albumOb = this.albumOb.pipe(
    map(albumOb => ({ ...albumOb, title: newTitle })));
    this.albServe.updateAlbum(this.albumId , newTitle);
  }
}
