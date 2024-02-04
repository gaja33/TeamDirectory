import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "appFilter" })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    console.log(items);
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return (
        it.first_name.toLocaleLowerCase().includes(searchText) ||
        it.last_name.toLocaleLowerCase().includes(searchText) ||
        it.email.toLocaleLowerCase().includes(searchText)
      );
    });
  }
}
