import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { daysPassedPipe } from './pipes/daysPassed.pipe';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserProfileComponent,
    daysPassedPipe,
    SearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
