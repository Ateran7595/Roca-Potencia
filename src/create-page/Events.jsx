// import { DatePickerDemo } from "@/components/DatePickerDemo"
import Header from "./Header"
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

function Events() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [image, setImage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [imgInfo, setImgInfo] = useState(null);

  

  const handleLoginSuccess = (user) => {
    setIsAdmin(true);
    setShowLogin(false); // Hide login form
    setIsDialogOpen(true)
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setImage(file); // Generate a preview URL
    }
  };

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
      
      setIsDialogOpen(false); // Close dialog after submitting
    }
    //The above line 'setIsDialogOpen' can be left outside the if statement which
    //will help if multiple img's are being uploaded, but for now we'll leave it this way.
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
        <div className="m-auto flex justify-center items-center mt-[200px]">
          <div className="font-roboto flex flex-col">
            <h1 className="text-[40px] font-bold">Echa Un Vistazo</h1>
            <Button onClick={() => setShowLogin(true)} className={'bg-neutral-600 text-white font-bold'} >Agregar Evento</Button>

            {showLogin && !isAdmin && (
              <LoginForm
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                onSuccess={handleLoginSuccess}
                onError={() => alert("Login failed!")}
              />
            )}

          {isAdmin && (
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
          )}
          </div>
        </div>
    </div>
  )
}

export default Events