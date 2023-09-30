import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DockModule } from 'primeng/dock';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormComponent } from './norm/norm.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { TerminalModule } from 'primeng/terminal';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from 'src/service/photoservice';import { NodeService } from 'src/service/nodeservice';

@NgModule({
  declarations: [
    AppComponent,
    NormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DockModule,
    RadioButtonModule,
    MenubarModule,
    ToastModule,
    DynamicDialogModule,
    DialogModule,
    TreeModule,
    TreeTableModule,
    TerminalModule,
    GalleriaModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [PhotoService, NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
