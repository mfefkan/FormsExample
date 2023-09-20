import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
      <input type="text" name="name" placeholder="Name" ngModel /> <br />
      <input type="text" name="surname" placeholder="Surname" ngModel /> <br />
      <input type="text" name="email" placeholder="Email" ngModel /> <br />
      <input type="text" name="tel" placeholder="Tel" /> <br />
      <div ngModelGroup="Adress">
        <input type="text" name="country" placeholder="country" ngModel /> <br />
        <input type="text" name="city" placeholder="city" ngModel /> <br />
        <input type="text" name="address"placeholder="address" ngModel /> <br />
      </div>
      <button>Send</button>
    </form>
  `,
})
export class AppComponent {
  @ViewChild('frm', { static: true }) frm: NgForm;
  FormControl: any;

  onSubmit(data) {
    /*
    //#region burada ngForm'un directive detayları ile ilgili formda bir değer varmı değer form geçerli mi forma veri girildi mi ve submit edildi mi şeklinde verileri alabileceğimiz directive'ler var.
    console.log(`Value = ${this.frm.value}`);
    console.log(`Valid = ${this.frm.valid}`);
    console.log(`Touched = ${this.frm.touched}`);
    console.log(`Submitted = ${this.frm.submitted}`);
    console.log(`control valid = ${this.frm.control.valid}`);

    //#endregion
*/
   // console.log(data);
// Aşağıdaki proplar formun genel yapısı hakkında bilgi verir konsoldan inceleyebiliriz
    console.log(this.frm);
    console.log(this.frm.form);
    console.log(this.frm.controls);

  }
}
