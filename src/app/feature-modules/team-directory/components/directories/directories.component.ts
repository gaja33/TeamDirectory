import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Directories } from "src/app/models/directories";
import { DirectoriesService } from "src/app/services/directories.service";

@Component({
  selector: "app-directories",
  templateUrl: "./directories.component.html",
  styleUrls: ["./directories.component.scss"],
})
export class DirectoriesComponent implements OnInit {
  administrators: Directories[];
  members: Directories[];
  searchText;

  constructor(
    private directoriesService: DirectoriesService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getDirectories();
  }

  getDirectories() {
    this.directoriesService
      .getDirectories()
      .subscribe((response: Directories[]) => {
        console.log(response);
        if (response.length > 0) {
          this.administrators = response.filter(
            (item) => item.role === "admin"
          );
          this.members = response.filter((item) => item.role === "member");
        }
      });
  }

  getUrlImage(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
