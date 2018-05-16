import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './templates/welcome/welcome.component';
import { PreregistrationComponent } from './templates/preregistration/preregistration.component';
import { FaqsComponent } from './templates/faqs/faqs.component';
import { MediaComponent } from './templates/media/media.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'preregistration', component: PreregistrationComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'media', component: MediaComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
