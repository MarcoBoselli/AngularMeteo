import { InputGroupComponent, FormModule, ModalModule, ButtonModule } from "@coreui/angular";
import { Component } from "@angular/core";
import { IconSetService, IconModule } from '@coreui/icons-angular';
import { cilSearch } from '@coreui/icons';
import { FormGroup, ReactiveFormsModule, FormControl, FormBuilder } from "@angular/forms";

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  standalone: true,
  imports: [ InputGroupComponent, FormModule, IconModule, ModalModule, ReactiveFormsModule,ButtonModule],
  providers: [IconSetService]
})

export class DashboardComponent {

  
  public visible = false;
  inputForm : FormGroup;

  constructor(
    public iconSet: IconSetService,
    private formBuilder: FormBuilder
  ) {
    iconSet.icons = { cilSearch };

    this.inputForm = this.formBuilder.group({
      name: new FormControl(''),
    });
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  applySearch(){

  }

}
