import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { getDownloadURL, getStorage, listAll, ref, deleteObject } from 'firebase/storage';
import { app } from '/firebase';

function EventFetcher({ refresh, isAdmin }) {
    const [images, setImages] = useState([]);
    const [imageRefs, setImageRefs] = useState([]); // Stores references for deletion

    // Fetch all img's within the images/ folder from firebase
    const fetchFromStorage = async () => {
        try {
            const storage = getStorage(app);
            const ListRef = ref(storage, "images/");

            const res = await listAll(ListRef);

            const urls = await Promise.all(
                res.items.map(async (itemRef) => {
                    const url = await getDownloadURL(itemRef);
                    return { url, path: itemRef.fullPath }; // Store both URL and path
                })
            );

            setImages(urls);
            setImageRefs(res.items); // Store references for deleting
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchFromStorage();
    }, [refresh]);

    // 🔥 DELETE FUNCTION 🔥
    const handleDelete = async (imagePath) => {
        try {
            const storage = getStorage(app);
            const imageRef = ref(storage, imagePath);

            await deleteObject(imageRef); // Delete image from Firebase Storage
            console.log('Image deleted successfully:', imagePath);

            // Refresh the list after deletion
            fetchFromStorage();
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    return (
        <div className='flex justify-center items-center flex-col'>
            <Carousel className={'md:p-5 xs:pb-5 xs:pt-5 md:w-[70%]  m-auto'}>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} className={'flex flex-col justify-center items-center'}>
                            <img src={image.url} alt={`file-${index}`} className='rounded-2xl object-cover w-[700px]' />
                            {isAdmin && (
                                <button
                                    onClick={() => handleDelete(image.path)}
                                    className="mt-3 p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 font-bold font-roboto"
                                >
                                Eliminar
                                </button>)}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default EventFetcher;