import { Button } from "@/components/ui/button";
import { useState } from "react";


function Services() {
    const [showElPaso, setShowElPaso] = useState(true);
    const [showJuarez, setShowJuarez] = useState(false);

  return (
    <div className="flex justify-center mt-[80px] bg-gradient-to-tl from-[#9bc5c3] to-[#616161] rounded-t-4xl">
        <Button>El Paso, TX</Button>
        <Button>Ciudad Juarex, CH</Button>
    </div>
  )
}

export default Services