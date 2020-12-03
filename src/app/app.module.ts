import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './shared/uploading/share.module';
import { AppComponent } from './app.component';
import { AddCatsComponent } from './components/add-cats/add-cats.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    AddCatsComponent,
    CatDetailsComponent,
    CatListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
