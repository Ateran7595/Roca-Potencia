// import { DatePickerDemo } from "@/components/DatePickerDemo"
import Header from "./Header"
import { MdOutlineSwipe } from "react-icons/md";
import { Input } from "@/components/ui/input"
import { useState } from "react";
import LoginForm from "./LoginForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "/firebase";
import EventFetcher from "./EventFetcher";
import Newsletter from "./Newsletter";

function Events() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [image, setImage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [refresh, setRefresh] = useState(false)

  const handleLoginSuccess = (user) => {
    setIsAdmin(true); //will allow user to add/delete img's
    setShowLogin(false); // Hide login form
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setImage(file); // Generate a preview URL
    }
  };

const handleUpload = () => {
  setRefresh((prev) => !prev)
}

const handleSubmitEvent = async(e) => {
  e.preventDefault();
  if(image){
    console.log("Uploading File...")

    const storage = getStorage(app)

    const fileImageRef = ref(storage, `images/${image.name}`);

    await uploadBytes(fileImageRef, image)
    console.log('uploaded an image!')

    setImage(null)
    document.getElementById('image').value = '';
    
     // Close dialog after submitting

 setIsDialogOpen(false);
  }
  
  //The above line 'setIsDialogOpen' can be left outside the if statement which
  //will help if multiple img's are being uploaded.
};

  return (
    <div>
        <Header />
        <div className="bg-[linear-gradient(120deg,_#c79af0_0%,_#6aa8f0_100%)] flex flex-col items-center justify-center w-full p-5 h-[900px] relative">
            <div className="relative w-full flex items-center justify-center">
            <img src="/roca5.jpg" alt="roca5" className="w-[1300px] rounded-[50px] brightness-70 relative top-[150px] object-cover" data-aos="fade-up" />
            <div className="absolute text-[100px] text-white bottom-[610px] text-center" data-aos="fade-down">
                <h1 className="font-semibold" data-aos="fade-down">Proximos Eventos</h1>
                <p className="text-[36px] font-semibold outline">No Te Los Puedes Perder!</p>
            </div>
            </div>
        </div>
        <div className="m-auto flex justify-center items-center mt-[200px] p-4">
          <div className="font-roboto flex flex-col items-center">
            <h1 className="text-[40px] font-bold">Echa Un Vistazo</h1>
            <p className="text-[40px]"><MdOutlineSwipe /></p>
            <div>
              {/* This component helps to fetch all img's from firebase and if user is
                  admin, then it will show the delete button for the events */}
              <EventFetcher refresh={refresh} isAdmin={isAdmin} />
            </div>

            <Button onClick={() => {
              if(isAdmin){
                  setIsDialogOpen(true)
                }else{
                  setShowLogin(true)
                }
              }} 
                    className={"text-[22px] font-bold h-[50px] rounded-[100px] border-2 border-black cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl"} >Agregar/Eliminar Evento</Button>

            {/* Functions to show login information, but can only be used by admins */}
            {showLogin && !isAdmin && (
                          <LoginForm
                            showLogin={showLogin}
                            setShowLogin={setShowLogin}
                            onSuccess={handleLoginSuccess}
                            onError={() => alert("Login failed!")}
                          />
                        )}
              
              {/* Functions to open dialog and add img's once the user is logged in */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent className="p-6 bg-white">
                    <DialogHeader>
                      <DialogTitle>Agregar Evento</DialogTitle>
                      <DialogDescription>
                        <form onSubmit={handleSubmitEvent} className="flex flex-col space-y-4">
                          <label htmlFor="picture">Seleccione Imagen</label>
                          <Input
                            id="picture"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                          {image && (
                            <section>
                              <img src={URL.createObjectURL(image)} alt="Preview" className="w-[400px] mt-4" />
                              <ul>
                                <li>Name: {image.name}</li>
                                <li>Type: {image.type}</li>
                                <li>Size: {image.size} bytes</li>
                              </ul>
                            </section>
                            )}
                          <Button type="submit" className="mt-4 bg-gray-500 text-white font-bold">Publicar</Button>
                        </form>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Newsletter />
        </div>
    </div>
  )
}

export default Events