import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


/*
export class RootCoreComponent {

  test2() {

    alert("hello there");
  }

  test(alpha: string) {
    alert(alpha + " is present");

  }


  theme = "light_mode";

  //Recived Parent Sends
  themeChange(alpha: string) {
    this.theme = alpha;
    //console.log(alpha);
  }
}
*/


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


