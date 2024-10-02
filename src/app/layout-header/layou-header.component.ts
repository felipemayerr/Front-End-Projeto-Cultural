import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


library.add(faArrowCircleLeft);

interface Image {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-layou-header',
  standalone: true,
  imports: [RouterOutlet, LayouHeaderComponent, CommonModule, FontAwesomeModule],
  templateUrl: './layou-header.component.html',
  styleUrl: './layou-header.component.css'
})
export class LayouHeaderComponent implements OnInit {
  postService: any;

  constructor( private router: Router) {}

  navigateToCulture(id: string): void {
    this.router.navigate(['culture/' + id])
  }

  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  ngOnInit(): void {
      if(this.autoSlide ) {
        this.autoSlideImages();
      }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
      }, this.slideInterval);
  }
  
  selectedIndex = 0;

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  images = [
    {
      imageSrc: 'https://th.bing.com/th/id/OIP.y0J4iUKZUufKd5c9EKMndAHaE8?w=1080&h=720&rs=1&pid=ImgDetMain',
      imageAlt: 'CulturaIndigena',
    },
    {
      imageSrc: 'https://i0.wp.com/www.momoafrica.com/wp-content/uploads/2019/08/Culture.jpg?ssl=1',
      imageAlt: 'CulturaAfricana',
    },
    {
      imageSrc: 'https://th.bing.com/th/id/R.521bcaece0a244435dab316dbce83c21?rik=wdh3C%2bIV%2bh6yZQ&riu=http%3a%2f%2fwww.citypictures.net%2fdata%2fmedia%2f231%2fKamogawa_Odori_Kyoto_Japan.jpg&ehk=7QVfRajbJYImhfOjOg0HGBdbCA7bvGqZBXZ18aD%2flCM%3d&risl=&pid=ImgRaw&r=0',
      imageAlt: 'CulturaJaponesa',
    },
    {
      imageSrc: 'https://i.ytimg.com/vi/2fajip-uToM/maxresdefault.jpg',
      imageAlt: 'CulturaHindu',
    },
    {
      imageSrc: 'https://th.bing.com/th/id/OIP.sA_iQasePM5AbZeC2cKyqQHaEA?w=1920&h=1038&rs=1&pid=ImgDetMain',
      imageAlt: 'CulturaMaia',
    },
    {
      imageSrc: 'https://th.bing.com/th/id/OIP.Y4IhFFQAPgczNFNwNEtwNwHaEK?w=1280&h=720&rs=1&pid=ImgDetMain',
      imageAlt: 'CulturaFaraonica',
    },
    {
      imageSrc: 'https://th.bing.com/th/id/OIP.yczFPHyAYke9Is6LzHa9QgHaE8?w=750&h=500&rs=1&pid=ImgDetMain',
      imageAlt: 'CulturaEslava',
    },
    {
      imageSrc: 'https://th.bing.com/th/id/R.12064dc896668fe22b8b87f5c3b89a10?rik=q3lLwpSYR%2fWR0g&riu=http%3a%2f%2fp4.storage.canalblog.com%2f49%2f51%2f1302428%2f105137790_o.jpg&ehk=fMtwXEexwg2Ygh89xJ5QAZQUfKHmU97%2bA6KdYlVPMeQ%3d&risl=&pid=ImgRaw&r=0',
      imageAlt: 'CulturaAborigene',
    },
    {
      imageSrc: 'https://th.bing.com/th/id/OIP.SKtAw_5ByR2XIC1rnIicAgHaE4?w=1198&h=790&rs=1&pid=ImgDetMain',
      imageAlt: 'CulturaRenascentista',
    },
  ];
}
