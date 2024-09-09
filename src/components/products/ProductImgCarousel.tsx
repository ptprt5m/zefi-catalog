'use client'

import type { IProduct } from '@/models'
import Image from 'next/image'

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const ProductImgCarousel = ({ images }: Pick<IProduct, 'images'>) => {
    if (!Array.isArray(images) || images.length < 1) {
        return null
    }

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={images.length}
            infinite
        >
            <Slider>
                {images.map((imgLink: string, index: number) => (
                    <Slide index={index} key={index}>
                        <Image
                            height={300}
                            width={300}
                            alt="lingerie"
                            src={imgLink}
                            className="w-full object-cover h-full"
                        />
                    </Slide>
                ))}
            </Slider>
        </CarouselProvider>
    )
}
