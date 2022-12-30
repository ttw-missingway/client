import FoodList from "./FoodList";
import AddFood from "./AddFood";

export default function FoodWrapper() {

    return <>
        <div class="container margin">
            <div class="row">
                <div class="col-sm">
                    <AddFood/>
                </div>
                <div class="col-sm">
                    <FoodList/>
                </div>
            </div>
        </div>    
    </>;
}