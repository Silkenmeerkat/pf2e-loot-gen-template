
//select * from items LEFT JOIN system ON items.system_id = system.system_id WHERE system.price_gp_value > 200 LIMIT 2;
//1. Grab all values that COULD be included (defined as level value)
//2. Clean the list AKA remove any items that have traits we don't want, (just call a clean the list function we can add stuff to later.)
//3. Randomly roll dice to grab an item from the list. 
//4. Subtract the item's price from the total 
//5. Roll again. Check if cash left in total. 

//Level 1
//Permenant Items: 2 level +1, 2 level
//consumables: 2 level 2, 3 1st level

//Level 2 - 19
//Permenant Items: 2 level +1, 2 current_level
//Consumable: 2 level +1, 2 level, 2 level -1 

//Striking rune checks
//At level 4, 12th, 19th
//Potency Rune Checks (weapons)
//2, 10th, 16th
//armor Potency
//5, 11th, 18th
//Resilent
//8, 14th, 20th 

//level 20 
//perm: 4 level 20
//Consumeable: 4 level 20, 2 level 19th 

//Gold
let baseGoldPerLevel = new Map<number, number>(); 
baseGoldPerLevel.set(1, 175)
baseGoldPerLevel.set(2, 300)
baseGoldPerLevel.set(3,500)
baseGoldPerLevel.set(4,800)
baseGoldPerLevel.set(5,1350)
baseGoldPerLevel.set(6,2000)
baseGoldPerLevel.set(7,2900)
baseGoldPerLevel.set(8,4000)
baseGoldPerLevel.set(9,5700)
baseGoldPerLevel.set(10,8000)
baseGoldPerLevel.set(11,11500)
baseGoldPerLevel.set(12,16500)
baseGoldPerLevel.set(13,25000)
baseGoldPerLevel.set(14,36500)
baseGoldPerLevel.set(15,54500)
baseGoldPerLevel.set(16,82500)
baseGoldPerLevel.set(17,128000)
baseGoldPerLevel.set(18,208000)
baseGoldPerLevel.set(19,355000)
baseGoldPerLevel.set(20,490000)

//Additional Gold
let additionalGoldPerLevel = new Map<number, number>();
baseGoldPerLevel.set(1, 10)
baseGoldPerLevel.set(2, 18)
baseGoldPerLevel.set(3,30)
baseGoldPerLevel.set(4,50)
baseGoldPerLevel.set(5,80)
baseGoldPerLevel.set(6,125)
baseGoldPerLevel.set(7,180)
baseGoldPerLevel.set(8,250)
baseGoldPerLevel.set(9,350)
baseGoldPerLevel.set(10,500)
baseGoldPerLevel.set(11,700)
baseGoldPerLevel.set(12,1000)
baseGoldPerLevel.set(13,1500)
baseGoldPerLevel.set(14,2250)
baseGoldPerLevel.set(15,3250)
baseGoldPerLevel.set(16,5000)
baseGoldPerLevel.set(17,7500)
baseGoldPerLevel.set(18,12000)
baseGoldPerLevel.set(19,20000)
baseGoldPerLevel.set(20,35000)

export default function main_handler(req, res){
    res.status(200).json({name: 'John Doe' })
}