import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { AccordionDirective } from './directives/accordion.directive';
import { AccordionAnchorDirective } from './directives/accordionanchor.directive';
import { AccordionLinkDirective } from './directives/accordionlink.directive';
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';
import { AuthenticationService } from './authentication/services/authentication.services';
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { TranslateModule } from '@ngx-translate/core';
import { ColumnChooserComponent } from './components/column-chooser/column-chooser.component';
import { MatDialogHeaderComponent } from './components/mat-dialog-header/mat-dialog-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { NgArrayPipesModule } from 'ngx-pipes';
import { SlicePipe } from './pipes/slice.pipe';
import { RowFilterComponent } from './components/row-filter/row-filter.component';
import { DialogCaptionComponent } from './components/dialog-caption/dialog-caption.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageNotFoundRibbonMenuComponent } from './components/page-not-found/page-not-found-ribbon-menu/page-not-found-ribbon-menu.component';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { PageNotFoundDataTableComponent } from './components/page-not-found/page-not-found-data-table/page-not-found-data-table.component';
import { RemoveDuplicateTestPipe } from './pipes/remove-duplicate-test.pipe';

@NgModule({
  declarations: [
    AccordionDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    ToggleFullscreenDirective,
    ProgressIndicatorComponent,
    ErrorMessageComponent,
    ColumnChooserComponent,
    MatDialogHeaderComponent,
    SlicePipe,
    RowFilterComponent,
    DialogCaptionComponent,
    SectionHeaderComponent,
    PageNotFoundComponent,
    PageNotFoundRibbonMenuComponent,
    PageNotFoundDataTableComponent,
    RemoveDuplicateTestPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    FlexModule,
    TranslateModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    NgArrayPipesModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    AccordionDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    ToggleFullscreenDirective,
    ProgressIndicatorComponent,
    ErrorMessageComponent,
    ColumnChooserComponent,
    MatDialogHeaderComponent,
    SlicePipe,
    RowFilterComponent,
    DialogCaptionComponent,
    SectionHeaderComponent,
  ],
  providers: [AuthenticationService],
})
export class SharedModule {}
