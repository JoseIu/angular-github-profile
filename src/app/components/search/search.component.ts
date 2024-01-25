import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'search-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  @Output() public onDebouncer = new EventEmitter<string>();
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => this.onDebouncer.emit(value));
  }
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe;
  }

  public searchUser(event: any): void {
    this.debouncer.next(event.target.value);
  }
}
