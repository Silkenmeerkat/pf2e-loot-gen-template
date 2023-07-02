import { error } from "console";
import { getNextSystemId } from "../utilities/db_utilities";

export class item{
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
        this.price_gp_value= price_gp_value;
        this.quantity_per_batch =  quantity_per_batch ? quantity_per_batch : 1;
        this.source_book = source_book ? source_book :"Pathfinder Core Rulebook"; 
        this.rarity_value = rarity_value ? rarity_value : "common"; 
        this.traits = traits;
        this.precious_material_grade_value ? precious_material_grade_value: ""
        //This will properly handle the promise and get us the next system id in the db + match it to the object so that we can 
        this.assignNewSystemId();

        this.printItemValues();

        this.writeItem();



    };
    //Methods for setting up DB calls and storing. 
    async assignNewSystemId(){
        this.system_id = await getNextSystemId()
    };

    //Write to Item Table
    private writeItem(){
        //write to iitem table 
        //INSERT INTO items (img, name, system_id, type)
        //VALUES ("systems/pf2e/icons/equipment/held-items/abadars-flawless-scale.webp", "Abadar's Flawless Scale", 1, "equipment);

        //INSERT INTO system(system_id, description_value, bulk, level_value, precious_material_value, precious_material_grade_value, price_gp_value, quantity_per_batch, source_book, rarity_value)
        //VALUES(1, "<p>This immaculate golden set of merchant's scales is considered a divine instrument among Abadar's most faithful. Unlike most scales, this one has only a single dish for placing small objects, and calculates value rather than weight. On the other side of the fulcrum, a steel arrow indicator points to various numbers engraved on the side of the scale.</p>\n<p>By placing an object of light Bulk onto the dish, you can determine its value in gold pieces in the market in which the scale was made (most of these scales are made in Katapesh or Absalom), based on its material composition and artisanship.</p>\n<p>For example, after placing a gemstone on the dish, the scale will indicate the fairest (average, in most cases) price you can expect to fetch in the market to which the scale is calibrated, but the scale wouldn't detect the gemstone's historical significance or any magical properties. <em>Abadar's flawless scale</em> can be calibrated to a different market by performing a 1-hour ritual in the proximity of that market.</p>", 0, 3, "", "", 50.00, 1, "Pathfinder Lost Omens: Gods & Magic", "uncommon")
        

        //Check if new traits
        //For each trait, call check new traits return a list of trait_ID's to write

        //INSERT INTO item_traits (item_id, trait_id)
        //VALUES (1, 2), (1, 3);
    };

    private checkNewTraits(traits: string){
        

    }

    printItemValues(){
        console.log(`name: ${this.name}`);
        console.log(`img location: ${this.img}`);
        console.log(`type: ${this.type}`);
        console.log(`bulk: ${this.bulk}`);
        console.log(`description: ${this.description_value}`);
        console.log(`system_id ${this.system_id}`);
        console.log(`precious_material_value: ${this.precious_material_value}`);
        console.log(`precious_material_grade_value: ${this.precious_material_grade_value}`);
        console.log(`Price: ${this.price_gp_value}`);
        console.log(`quantity_per_batch: ${this.quantity_per_batch}`);
        console.log(`source_book: ${this.source_book}`);
        console.log(`rarity_value: ${this.rarity_value}`);
        console.log(`traits:  ${this.traits}`)
    };

}