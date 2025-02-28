import React, { useEffect, useState } from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage'
import { app } from '/firebase'

function EventFetcher({ refresh }) {
    const [images, setImages] = useState([])

    const fetchFromStorage = async () => {
        try{
            const storage = getStorage(app)

            const ListRef = ref(storage, "images/")
    
            const res = await listAll(ListRef)
    
            const urls = await Promise.all(
                res.items.map((itemRef) => getDownloadURL(itemRef))
            )
            setImages(urls)
        } catch(error){
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        fetchFromStorage();
    }, [refresh])

  return (
    <div className='flex justify-center items-center flex-col'>
        <Carousel className={'p-5 w-[70%] m-auto'}>
            <CarouselContent className={'w-'}>
                {images.map((url, index) => (
                <CarouselItem key={index} className={'flex justify-center items-center'}>
                    <img src={url} alt={`file-${index}`} className='w-full rounded-2xl object-cover' />
                </CarouselItem>                    
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default EventFetcher