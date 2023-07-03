import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { mainModule } from 'process';
import { item } from './classes/item'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  main();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);

});

async function main(){
  const exampleItem = new item("Alchemist's Haversac",
                               "equipment",
                               "<p>An <em>alchemist's haversack</em> is a sturdy leather backpack with two compartments. The main section contains an extradimensional space equivalent to a @UUID[Compendium.pf2e.equipment-srd.Item.Bag of Holding (Type II)], perfect for carrying bulkier alchemist equipment. A secondary partition can hold 2 Bulk of items, 1 of which doesn't count against your Bulk limit. This second compartment can also be activated (see below). Two shoulder straps and a thick belt for the waist hold the haversack on the wearer securely. These straps have pouches and loops for keeping alchemical items handy. They also contain magically expanded alchemist's tools that grant you a +2 item bonus to Crafting checks to create alchemical items. Water and undesirable material can't seep into the haversack, which cleans itself once per hour. When you reach in any part of the haversack, the item you sought is the first one you find. Also, the haversack preserves mundane ingredients, food, and drink inside, so they stay fresh indefinitely. This feature doesn't prolong the duration of magic or alchemical items.</p>\n<p><strong>Activate</strong><span class=\"pf2-icon\">1</span> command</p>\n<p><strong>Frequency</strong> once per day</p>\n<p><strong>Requirements</strong> You gain batches of infused reagents during your daily preparations</p>\n<hr />\n<p><strong>Effect</strong> You pull one additional batch of infused reagents from the satchel's secondary compartment. If you fail to use these reagents by the end of your next turn, they're lost.</p>\n<hr />\n<p><strong>Craft Requirements</strong> You are an alchemist.</p>",
                               1,
                               1400,
                               "Pathfinder Treasure Vault",
                               "common",
                               ["conjuration", "extradimensional", "invested", "magical"],
                               "systems/pf2e/icons/default-icons/equipment.svg");
  //     exampleItem.printItemValues();
  console.log("We can run code!")
}