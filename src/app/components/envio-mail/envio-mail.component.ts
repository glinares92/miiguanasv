import { Component, OnInit, OnChanges } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { FormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: 'envio-mail',
  templateUrl: './envio-mail.component.html',
  styleUrls: ['./envio-mail.component.css']
})
export class EnvioMailComponent implements OnInit {
  image =
    "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
  name1;
  age;
  cuerpo;
  loading = false;
  buttionText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  cuerpoFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);


  constructor(public http: HttpService, private router: Router) {}

  ngOnInit() {
    console.log(this.http.test);
  }


  changeImage() {
    this.http.test = "changed";
    this.image =
      "https://images.pexels.com/photos/635529/pexels-photo-635529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
  }

  enviarMail() {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      cuerpo: this.cuerpoFormControl.value,
      tipo: 'informacion'
    }
    this.http.sendEmailSms("https://intv1-prod.herokuapp.com/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} ${user.cuerpo}is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
        const Toast = Swal.mixin({
          showConfirmButton: false,
          timer: 3000
        });
  
        Toast.fire({
          type: 'success',
          title: 'Email se envio con Exito',
          text: `Su correo sera correspondido a la brevedad posible`
          })
          this.router.navigate(['/inicio'])
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }
}
