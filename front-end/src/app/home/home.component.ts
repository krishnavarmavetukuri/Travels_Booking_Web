import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  images = [
    {
      imageSrc:
        '/../assets/images/slider/bangkok.jpg',
      imageAlt: 'Bangkok',
    },
    {
      imageSrc:
        '/../assets/images/slider/Rome.jpg',
      imageAlt: 'Rome',
    },{
      imageSrc:
        '/../assets/images/slider/cario.jpg',
      imageAlt: 'Cario',
    },{
      imageSrc:
        '/../assets/images/slider/dubai.jpg',
      imageAlt: 'Dubai',
    },{
      imageSrc:
        '/../assets/images/slider/nassau.jpg',
      imageAlt: 'Nassau',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  
  ngAfterViewInit(): void {

    // Owl Carousel initialization
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      autoplay: true,
      autoplayTimeout: 2500,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });


    $(document).ready(function () {

      $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value === "all") {
          $('.filter').show('1000');
        } else {
          $(".filter").not('.' + value).hide('3000');
          $('.filter').filter('.' + value).show('3000');
        }
      });

      if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");

      






    });
  }
}