import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'github', redirectTo: 'https://github.com/karakurtahmet', pathMatch: 'full' },
  { path: '**', redirectTo: 'www.google.com' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
