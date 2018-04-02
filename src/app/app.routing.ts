import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateSubbreadditComponent } from './create-subbreaddit/create-subbreaddit.component';
import { ViewSubComponent } from './view-sub/view-sub.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'newpost',
    component: CreatePostComponent
  },
  {
    path: 'newsubbreaddit',
    component: CreateSubbreadditComponent
  },
  {
    path: 'b/:name',
    component: ViewSubComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
