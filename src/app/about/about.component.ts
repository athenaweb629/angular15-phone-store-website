import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title= "Hakkımızda"
  subtitleVision = "Vizyonumuz"
  descVision = "Yenilikçi ve dinamik gücümüz ile profesyonel üretim/satış kadrolarımız müşteri memnuniyetini en üst safhada tutmakta ve çözüm odaklı inovatif bir yaklaşım ile projeleri ele almaktadır."
  imgVision = "assets/images/vision.png"
  subtitleMission = "Misyonumuz"
  descMission = "Toplumun akıllı telefon ihtiyaçlarına en uygun ürün ve hizmetleri sunarak yaşam kalitesini yükseltmek."
  imgMission = "assets/images/mission.png"

}
