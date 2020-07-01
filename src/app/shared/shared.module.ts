import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from './custom-material/custom-material.module';
import { DataTableComponent } from './data-table/data-table.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
  ],
  declarations: [
    DataTableComponent,
    GoogleMapComponent,
    ErrorModalComponent,
  ],
  exports: [
    CustomMaterialModule,
    // components
    DataTableComponent,
    GoogleMapComponent,
    ErrorModalComponent,
  ],
})
export class SharedModule {
}
