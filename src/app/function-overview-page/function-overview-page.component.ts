import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerToolFunctionComponent } from "../container-tool-function/container-tool-function.component";
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-function-overview-page',
    standalone: true,
    templateUrl: './function-overview-page.component.html',
    styleUrls: ['./function-overview-page.component.scss'],
    imports: [CommonModule, ContainerToolFunctionComponent, TranslocoModule]
})
export class FunctionOverviewPageComponent implements AfterViewInit{

    router = inject(Router);
    dataService = inject(DataService);

    goToUrl() {
        this.router.ngOnDestroy();
        window.location.href = 'http://www.teufelberger.com/';
    }

    switchToPage(route: string) {
        this.router.navigateByUrl(route);
    }

    //#region animation cards
    ngAfterViewInit() {
        const cardsContainer = document.getElementById("cards");

        if (cardsContainer) {
            cardsContainer.onmousemove = (e: MouseEvent) => {
                const cards = document.getElementsByClassName("card");
                // Wandelt HTMLCollection in ein Array um
                const cardsArray = Array.from(cards) as HTMLElement[];

                for (const card of cardsArray) {
                    const rect = card.getBoundingClientRect(),
                          x = e.clientX - rect.left,
                          y = e.clientY - rect.top;

                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                }
            };
        }
    }
    

    //#endregion
}
