
export {}
    // import { item } from "../classes/item";

import { Octokit } from "octokit";
export async function ItemImporter(){
        const octokit = new Octokit({ 
            auth: process.env.TOKEN,
          });

        //1. Get list of files in repo.

        const iterator = await octokit.paginate.iterator("GET /repos/foundryvtt/pf2e/contents/packs/equipment" ,{
            auth: process.env['GHTOKEN'],
            per_page: 100,
            headers: {
            "x-github-api-version": "2022-11-28" 
            },
        });
        let breakLoop = false
        for await (const { data } of iterator){
            if (breakLoop) break
            for (const indiv of data){
                console.log(indiv)
            }
        }
    }

ItemImporter()


    // export async function ItemImporter() {
    //     import { Octokit } from "octokit";
    //     const octokit = new Octokit({ 
    //         auth: process.env.TOKEN,
    //       });

    //     //1. Get list of files in repo.

    //     const iterator = await octokit.paginate.iterator("GET /repos/foundryvtt/pf2e/contents/packs/equipment" ,{
    //         auth: process.env['GHTOKEN'],
    //         per_page: 100,
    //         headers: {
    //         "x-github-api-version": "2022-11-28" 
    //         },
    //     });
    //     let itemsData = []
    //     let breakLoop = false
    //     for await (const { data } of iterator){
    //         if (breakLoop) break
    //         for (const indiv of data){
    //             console.log(indiv)
    //         }
    //     }
    // }


//    module.exports = async () => {
//         const octokit = new Octokit({ 
//             auth: process.env.TOKEN,
//         });
//         const iterator = octokit.paginate.iterator("GET /repos/{owner}/{repo}/contents/packs/equipment", {
//         owner: 'foundryvtt',
//         repo: 'pf2e',
//         per_page: 100,
//         });
//         let itemsData = []
//         let breakLoop = false
//         for await (const { data } of iterator){
//         if (breakLoop) break
//         for (const indiv of data){
//         console.log(indiv)
//             }
//         }
//     }        
    
//    } caller(){
//             const octokit = new Octokit({ 
//                         auth: process.env.TOKEN,
//                     });
//             const iterator = octokit.paginate.iterator("GET /repos/{owner}/{repo}/contents/packs/equipment", {
//                 owner: 'foundryvtt',
//                 repo: 'pf2e',
//                 per_page: 100,
//             });
//             let itemsData = []
//             let breakLoop = false
//             for await (const { data } of iterator){
//                 if (breakLoop) break
//                 for (const indiv of data){
//                     console.log(indiv)
//                 }
//             }
//         }        
//     }
        //console.log(json_list)

        

        //2. itereate on each list and check if item is there for each file. 
        

        //3. If it is not, add it
        ////// Insert into Items (img, name, system_id, type) 
        //INSERT INTO system(system_id, description_value, bulk, level_value, precious_material_value, precious_material_grade_value, price_gp_value, quantity_per_batch, source_book, rarity_value)
        // For each trait, check if in table (select 'trait_name', 'trait_id' from traits where 'trait_name'=traitName)
        // if it is, write to item_traits, insert into item_traits (item_id, trait_id)


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


