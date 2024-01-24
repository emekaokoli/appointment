import { Button } from "@/common/button";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const back = () => navigate(-1)

  return (
    <div className="flex flex-col justify-center items-center h-1/2">
      <h2 className="font-microGrotesk text-lg">Oops!</h2>
      <p className="font-microGrotesk text-base">Seems you are lost, page not found</p>
      <Button variant='ghost' onClick={back}>Go back</Button>
    </div>
  );
}
