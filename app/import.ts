    const axios = require('axios');

    async function getList(){
        //Hard defining Owner and Repo but we can pass them in later if needed
        const owner = 'foundryvtt'
        const repo  = 'pf2e'
        const path = 'packs/equipment'
        const token = process.env['GH_TOKEN']

        try {
            console.log("check")
            const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (Array.isArray(response.data)) {
            const files = response.data.map(file => file.name);
            //console.log(files);
            return files
            } else {
            console.log('Error: Unable to fetch directory contents.');
            }
        } catch (error) {
            console.log("catch")
            console.error('Error:', error.message);
        }
    }

async function ItemImporter() {

    //1. Get list of files in repo.

    let json_list=await getList();
    //console.log(json_list)

    

    //2. itereate on each list and check if item is there for each file. 
    console.log(json_list.length)

    //3. If it is not, add it
    ////// Insert into Items (img, name, system_id, type) 
    //INSERT INTO system(system_id, description_value, bulk, level_value, precious_material_value, precious_material_grade_value, price_gp_value, quantity_per_batch, source_book, rarity_value)
    // For each trait, check if in table (select 'trait_name', 'trait_id' from traits where 'trait_name'=traitName)
    // if it is, write to item_traits, insert into item_traits (item_id, trait_id)

}

//Api calls to go to https://github.com/foundryvtt/pf2e/tree/master/packs/equipment, search through the dir, and get all .json files. Ingest their data to DB?
// const axios = require('axios');


// // Import each file and store to the DB



// //Import File



// //

// export function itemImporter(timeInterval){
//     // go get the list of json files this returns a map of them
//     await response=getList()
//     console.log(response)

// };

ItemImporter();

