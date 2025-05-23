// import { DatePickerDemo } from "@/components/DatePickerDemo"
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
import { sendEventEmailToSubscribers } from "./EmailsFetcher/FetchEmails";
import PageWrapper from "./PageWrapper";

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
      setImage(file);
    }
  };

const handleSubmitEvent = async (e) => {
  e.preventDefault();

  if (!image) {
    console.error("No image selected.");
    return;
  }

  console.log("Uploading File...");

  const storage = getStorage(app);
  const fileImageRef = ref(storage, `images/${image.name}`);

  await uploadBytes(fileImageRef, image);
  console.log("Uploaded an image!");

  setImage(null);
  document.getElementById("picture").value = "";

  // Get input values
  const eventDetails = {
    name: document.getElementById("eventName").value.trim(),
    location: document.getElementById('eventLocation').value.trim(),
    date: document.getElementById("eventDate").value.trim(),
    description: document.getElementById("eventDescription").value.trim(),
  };

  console.log("Event Details:", eventDetails);

  // Ensure valid data before sending the email
  if (eventDetails.name && eventDetails.date && eventDetails.description) {
    try {
      await sendEventEmailToSubscribers(eventDetails);
      console.log("Email sending triggered.");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  } else {
    console.error("Missing event details. Email not sent.");
  }

  // Close dialog after submitting
  setIsDialogOpen(false);
};

  return (
    <PageWrapper>
    <div>
        <div className="bg-[linear-gradient(120deg,_#c79af0_0%,_#6aa8f0_100%)] flex flex-col items-center justify-center w-full p-5 lg:h-[900px] relative">
            <div className="relative w-full flex items-center justify-center">
            <img src="/test4.jpg" alt="roca5" className="w-[1300px] md:rounded-[50px] sm:rounded-[30px] xs:rounded-[20px] brightness-70 relative md:top-[150px] sm:top-[100px] xs:top-[60px] object-cover" data-aos="fade-up" />
            <div className="absolute text-white lg:bottom-[610px] md:bottom-[260px] sm:bottom-[240px] xs:bottom-[130px] text-center" data-aos="fade-down">
                <h1 className="font-semibold lg:text-[100px] md:text-[70px] sm:text-[50px] xs:text-[35px]" data-aos="fade-down">Proximos Eventos</h1>
                <p className="lg:text-[36px] md:text-[25px] sm:text-[20px] font-semibold border-solid border-2">No Te Los Puedes Perder!</p>
            </div>
            </div>
        </div>
        <div className="md:mt-[200px] sm:mt-[120px] xs:mt-[100px] lg:text-xl md:text-[18px] lg:w-full xs:w-[90%] m-auto text-center font-semibold animate" >
          <div className=" flex flex-col items-center">
            <h1 className="md:text-[40px] xs:text-[30px] font-bold">Echa Un Vistazo</h1>
            <p className="text-[40px] flex flex-col items-center"><MdOutlineSwipe /><span className="text-[15px]">Deslizar</span></p>
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
              className={"md:text-[18px] xs:text-[15px] font-bold h-[50px] rounded-[100px] border-2 border-solid border-black cursor-pointer transition-transform hover:scale-105 hover:opacity-40 shadow-2xl"} >Agregar/Eliminar Evento</Button>

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
                  <DialogContent className="p-6 bg-white max-h-screen overflow-y-auto">
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
                              <img src={URL.createObjectURL(image)} alt="Preview" className="w-[400px] mt-4 border-solid" />
                              <ul>
                                <li>Name: {image.name}</li>
                                <li>Type: {image.type}</li>
                                <li>Size: {image.size} bytes</li>
                              </ul>
                            </section>
                            )}
                            <label htmlFor="eventName">Nombre del Evento</label>
                            <Input id="eventName" type="text" placeholder="Ej. Reunión Juvenil" className={'border-solid'} required />

                            <label htmlFor="eventName">Localizacion</label>
                            <Input id="eventLocation" type="text" placeholder="eg. Juarez" className={'border-solid'} required />

                            <label htmlFor="eventDate">Fecha del Evento</label>
                            <Input id="eventDate" type="date" className={'border-solid'} required />

                            <label htmlFor="eventDescription">Descripción</label>
                            <textarea id="eventDescription" placeholder="Detalles sobre el evento..." className={'border-solid'} required></textarea>
                          <Button type="submit" className="mt-4 bg-gray-500 text-white font-bold">Publicar</Button>
                        </form>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 pt-15 pb-15 bg-[linear-gradient(120deg,_#c79af0_0%,_#6aa8f0_100%)] rounded-t-2xl" data-aos="zoom-in-down">
          <Newsletter />
        </div>
    </div>
    </PageWrapper>
  )
}

export default Events