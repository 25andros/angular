import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'go';

  isOpen: boolean = false;
  sidebarIcon: string = "chevron_right";
  cssplayValue = "";

  iconChange() {
    if (this.isOpen == true) {
      this.sidebarIcon = "chevron_right";
    }
    if (this.isOpen == false) {
      this.sidebarIcon = "chevron_left";
    }
  }

  displayIt(alpha: any) {

    alert(alpha + " is the value");
  }

  colourMode: string = "light_mode";

  colour(alpha: string) {
    this.colourMode = alpha;
  }

  // Scroll to bottom or top

  topORbottom = {
    isBottom: false,
    sidebarIcon: "expand_more",
    title: "Go to bottom of page",
  };

  chevronLogic() {
    this.goToPlace();
    this.topORbottom.isBottom = !this.topORbottom.isBottom;
    this.topBottomIconChange();
    this.iconPlacement();
  }

  topBottomIconChange() {
    if (this.topORbottom.isBottom == false) {
      this.topORbottom.sidebarIcon = "expand_more";
    }
    if (this.topORbottom.isBottom == true) {
      this.topORbottom.sidebarIcon = "expand_less";
    }
  }

  goToPlace() {
    if (this.topORbottom.isBottom == false) {
      window.scrollTo(0, document.body.scrollHeight);
    }
    if (this.topORbottom.isBottom == true) {
      window.scrollTo(0, 0);
    }
  }

  iconPlacement() {
    let toggleBottom = document.getElementById("toggleBottom");

    if (this.topORbottom.isBottom == false) {
      toggleBottom!.style.top = "5rem";

      toggleBottom!.title = "Go to bottom of page";
    }

    if (this.topORbottom.isBottom == true) {
      //toggleBottom!.style.bottom = "2.5rem";
      toggleBottom!.style.top = "90%";

      toggleBottom!.title = "Go to the top of page";
    }
  }

}
