import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [HeaderComponent, MenuComponent, FooterComponent],
    entryComponents: [],
    imports: [IonicModule, CommonModule],
    exports: [HeaderComponent, MenuComponent, FooterComponent]

})
export class ComponentsModule { }
