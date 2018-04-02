import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateSubbreadditComponent } from './create-subbreaddit/create-subbreaddit.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    CreatePostComponent,
    CreateSubbreadditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
