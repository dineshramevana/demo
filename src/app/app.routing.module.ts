import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExecutableFilesTableComponent } from './executable-files-table/executable-files-table.component';

@NgModule({
  declarations: [ 
    ExecutableFilesTableComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: ExecutableFilesTableComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
