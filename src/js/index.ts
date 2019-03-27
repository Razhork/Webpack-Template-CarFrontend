import { ICar } from "./Icar";
import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

let ContentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

function showAllCars():void{

axios.get<ICar[]>("https://webapicar20190326034339.azurewebsites.net/api/cars")
.then(function (response: AxiosResponse<ICar[]>) : void
{
    console.log("Er i Then");
    console.log(response);
})
.catch(
    function (error:AxiosError ) : void{
        console.log("Fejl i min kode");
        console.log(error);
    }
)

console.log("Er i slutningen af Then");


}
showAllCars();