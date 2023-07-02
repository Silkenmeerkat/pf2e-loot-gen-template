import { Octokit } from "octokit";

export async function itemCatalog(){
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