import { useState } from "react";

export default function Display() {
    const [fat, setFat] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [protein, setProtein] = useState(0);
    const [clear,setClear] = useState(false);

    const AddFat=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let addFat=document.querySelector('#fat').value
        if(addFat=='')
        return;
        let newFat = fat+parseInt(addFat);
        setFat(newFat);
        document.querySelector('#fat').value="";
    }

    const AddProtein=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let addProtein=document.querySelector('#protein').value
        if(addProtein=='')
        return;
        let newProtein = protein+parseInt(addProtein);
        setProtein(newProtein);
        document.querySelector('#protein').value="";
    }

    const AddCarbs=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let addCarbs=document.querySelector('#carbs').value
        if(addCarbs=='')
        return;
        let newCarbs = carbs+parseInt(addCarbs);
        setCarbs(newCarbs);
        document.querySelector('#carbs').value="";
    }


    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h4 class="col-title">
                        PROTEIN
                    </h4>
                    <p> {protein} </p>
                    <form onSubmit={setProtein}>
                        <label>
                            <input type="text" id="protein" placeholder="enter a number" />
                            <button onClick={AddProtein}>Add</button>
                        </label>
                    </form>
                </div>
                <div class="col-sm">
                    <h4 class="col-title">
                        FAT
                    </h4>
                    <p> {fat} </p>
                    <form onSubmit={setFat}>
                        <label>
                            <input type="text" id="fat" placeholder="enter a number" />
                            <button onClick={AddFat}>Add</button>
                        </label>
                    </form>
                </div>
                <div class="col-sm">
                    <h4 class="col-title">
                        CARBS
                    </h4>
                    <p> {carbs} </p>
                    <form onSubmit={setCarbs}>
                        <label>
                            <input type="text" id="carbs" placeholder="enter a number" />
                            <button onClick={AddCarbs}>Add</button>
                        </label>
                    </form>
                </div>
                <div class="col-sm">
                    <h4 class="col-title">
                        TOTAL
                    </h4>
                    <p> {parseInt(protein) + parseInt(fat) + parseInt(carbs)} </p>
                </div>
            </div>
        </div>
    </>;
}