import { Component, Input } from '@angular/core';
import { Repos } from 'src/app/interfaces/userRepos.interface';

@Component({
  selector: 'repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
})
export class RepoCardComponent {
  @Input() repo?: Repos;
}
