import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';//have to be removed
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'; 

const materialmodule = [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule,
  MatInputModule, MatExpansionModule, MatMenuModule, MatSelectModule, FlexLayoutModule, 
  MatSidenavModule, MatListModule, MatTableModule];

@NgModule({

  imports: [materialmodule],
  exports: [materialmodule]
})
export class MaterialModule { }
