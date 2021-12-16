import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show = false;

  constructor(public authService: AuthService, private router: Router) {}

  logout():void{
    this.authService.logouth();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      type: 'success',
      title: 'Has cerrado sesión con exito'
    });

    this.router.navigate(['/login']);
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
