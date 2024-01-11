import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { SharedFeaturesModule } from 'shared-features';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectHomeComponent
  ],
  imports: [
    SharedFeaturesModule
  ],
  exports: [
    ProjectHomeComponent,
    ProjectComponent,
  ]
})
export class ProjectModule { }
