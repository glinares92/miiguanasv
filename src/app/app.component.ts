import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'miiguanasv';
  subscription: Subscription;
  constructor(public router: Router) { }

  ngOnInit() {
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => window.scrollTo(0, 0));

    //       (function(d, m){
    //     var kommunicateSettings = 
    //         {"appId":"3ca9b22d61a689600c57218595a2df7c","popupWidget":true,"automaticChatOpenOnNavigation":true};
    //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    //     window.kommunicate = m; m._globals = kommunicateSettings;
    // })(document, window.kommunicate || {});



  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

