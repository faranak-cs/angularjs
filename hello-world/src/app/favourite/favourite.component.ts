import { Component, Input } from '@angular/core';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css',
})
export class FavouriteComponent {
  starImageURL: string = 'assets/star.png';
  unstarImageURL: string = 'assets/star-empty.png';
  imageURL: string = this.unstarImageURL;

  onClick() {
    if (this.imageURL == this.unstarImageURL) {
      this.imageURL = this.starImageURL;
    } else {
      this.imageURL = this.unstarImageURL;
    }
  }
  getToolTip() {
    if (this.imageURL == this.unstarImageURL) {
      return 'Add to favourites';
    } else {
      return 'Remove from favourites';
    }
  }
}
