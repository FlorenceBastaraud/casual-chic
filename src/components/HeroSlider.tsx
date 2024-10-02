'use client'

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css/bundle'

import { useEffect } from 'react'

interface HeroSliderProps {
  images: { src: string; alt: string }[]
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  useEffect(() => {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }, [])

  return (
    <div className="main__hero w-full h-hero">
      <div className="main__hero--slider swiper w-full h-full">
        <div className="swiper-wrapper w-full h-full">
          {images.map((image, i) => (
            <div className="swiper-slide w-full h-full" key={i}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  )
}

export default HeroSlider
