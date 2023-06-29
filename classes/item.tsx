import { error } from "console";
import { getNextSystemId } from "../utilities/db_utilities";

class item{
    img: string = ""; 
    name: string = "";
    type: string = ""; 
    system_id: number = 0; 
    description_value: string = ""; 
    bulk: number = 0; 
    precious_material_value: string = ""; 
    precious_material_grade_value: string = ""; 
    price_gp_value: number= 0; 
    quantity_per_batch: number = 1; 
    source_book: string = ""; 
    rarity_value: string = "";
    traits: Array<string> = [""]; 

    constructor(name:string, 
                type:string, 
                description_value: string, 
                bulk: number, 
                price_gp_value:number, 
                source_book: string, 
                rarity_value:string, 
                traits: Array<string>, 
                img?:string, 
                system_id?:number, 
                precious_material_value?: string, 
                precious_material_grade_value?:string, 
                quantity_per_batch ?: number ) {
        this.img = img ? img: ""; 
        this.name= name;
        this.type= type; 
        this.description_value= description_value ? description_value : "";
        this.bulk = bulk ? bulk : 0; 
        this.precious_material_value = precious_material_value ? precious_material_value : ""; 
        this.price_gp_value = price_gp_value;
        this.quantity_per_batch =  quantity_per_batch ? quantity_per_batch : 1;
        this.source_book = source_book ? source_book :"Pathfinder Core Rulebook"; 
        this.rarity_value = rarity_value ? rarity_value : "common"; 
        this.traits = traits;
        this.precious_material_grade_value ? precious_material_grade_value: ""
        //This will properly handle the promise and get us the next system id in the db + match it to the object so that we can 
        this.assignNewSystemId()

    };
    //Methods for setting up DB calls and storing. 
    async assignNewSystemId(){
        this.system_id = await getNextSystemId()
    };
    printItemValues(){
        console.log()
    }

}