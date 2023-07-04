1. figure out how to write a migration class instance
2. Write a class for the item data. {cm:2023-07-03}
3. Probably going to export a module that calls the api, paginates the data, then runs through the paginated data in chunks, for each store in a item object (see 2).. and write to db. Can you multi thread like I did in C? If so... perhaps this is a perfect example of how to use more cores effectively? {cm:2023-07-03}
https://stackoverflow.com/questions/41755774/how-to-execute-functions-parallel-in-typescript-es5#:~:text=If%20you%20run%20code%20in%20the%20UI%20thread%2C,need%20a%20new%20web%20worker%20instance%20for%20each. {cm:2023-07-03}
4. Research server side next.js components... I think the right way to do this is make one of those, then from page.tsx? maybe? call it on an interval... maybe like every week? idk. {cm:2023-07-03}
5. DB: Figure out the migration process. {cm:2023-07-03}
6. Build a component for level picker
7. Build a component for number of players. 
8. Build a backend component for querying db to get appropriate items. (As shown by this sheet) https://pf2easy.com/index.php?id=6024&name=TREASURE_BY_LEVEL
9. 