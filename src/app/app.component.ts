
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'subarashii';
    public showTemplate: boolean = true;
    private urls = ['/login', '/register', '/banned', '/users/callback'];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private metaService: Meta
    ) {
        this.showTemplate = !this.urls.includes(location.pathname);
    }

    ngOnInit() {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                var rt = this.getChild(this.activatedRoute);

                rt.data.subscribe((data: any) => {
                    this.titleService.setTitle(data.title);

                    data.description
                        ? this.metaService.updateTag({
                              name: 'description',
                              content: data.descrption,
                          })
                        : this.metaService.removeTag("name='description'");

                    data.robots
                        ? this.metaService.updateTag({
                              name: 'robots',
                              content: data.robots,
                          })
                        : this.metaService.updateTag({
                              name: 'robots',
                              content: 'follow,index',
                          });

                    data.keywords
                        ? this.metaService.updateTag({
                              name: 'keywords',
                              content: data.keywords,
                          })
                        : this.metaService.removeTag("name='keywords'");

                    data.ogUrl
                        ? this.metaService.updateTag({
                              property: 'og:url',
                              content: data.ogUrl,
                          })
                        : this.metaService.updateTag({
                              property: 'og:url',
                              content: this.router.url,
                          });

                    data.ogTitle
                        ? this.metaService.updateTag({
                              property: 'og:title',
                              content: data.ogTitle,
                          })
                        : this.metaService.removeTag("property='og:title'");

                    data.ogDescription
                        ? this.metaService.updateTag({
                              property: 'og:description',
                              content: data.ogDescription,
                          })
                        : this.metaService.removeTag(
                              "property='og:description'"
                          );

                    data.ogImage
                        ? this.metaService.updateTag({
                              property: 'og:image',
                              content: data.ogImage,
                          })
                        : this.metaService.removeTag("property='og:image'");
                });
            });
    }

    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        } else {
            return activatedRoute;
        }
    }
}
