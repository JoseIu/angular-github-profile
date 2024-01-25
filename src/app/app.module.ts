import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { daysPassedPipe } from './pipes/daysPassed.pipe';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserProfileComponent,
    daysPassedPipe,
    SearchComponent,
    RepoCardComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
