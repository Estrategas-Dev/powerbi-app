import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController} from '@ionic/angular';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-kpi-view',
  templateUrl: './kpi-view.page.html',
  styleUrls: ['./kpi-view.page.scss'],
})
export class KpiViewPage implements OnInit {

  url: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    public sanitizer: DomSanitizer
  ) { 
    
  }

  async ngOnInit() {
    let urlParam = this.route.snapshot.paramMap.get('url');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(urlParam);
    console.log(this.url);
  }



  async regresar() {
    const loading = await this.loadingCtrl.create({
      message: 'Regresar a principal...',
      spinner: 'dots'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigateByUrl('principal');
    }, 1000);

  }

}
