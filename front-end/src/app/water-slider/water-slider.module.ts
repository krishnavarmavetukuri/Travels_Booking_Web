import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterSliderComponent } from './water-slider.component';



@NgModule({
  declarations: [WaterSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [WaterSliderComponent]
})
export class WaterSliderModule { }
