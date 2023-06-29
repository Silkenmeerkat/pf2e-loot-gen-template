INSERT INTO items (img, name, system_id, type)
VALUES ("systems/pf2e/icons/equipment/held-items/abadars-flawless-scale.webp", "Abadar's Flawless Scale", 1, "equipment");

INSERT INTO system(system_id, description_value, bulk, level_value, precious_material_value, precious_material_grade_value, price_gp_value, quantity_per_batch, source_book, rarity_value)
VALUES(1, "<p>This immaculate golden set of merchant's scales is considered a divine instrument among Abadar's most faithful. Unlike most scales, this one has only a single dish for placing small objects, and calculates value rather than weight. On the other side of the fulcrum, a steel arrow indicator points to various numbers engraved on the side of the scale.</p>\n<p>By placing an object of light Bulk onto the dish, you can determine its value in gold pieces in the market in which the scale was made (most of these scales are made in Katapesh or Absalom), based on its material composition and artisanship.</p>\n<p>For example, after placing a gemstone on the dish, the scale will indicate the fairest (average, in most cases) price you can expect to fetch in the market to which the scale is calibrated, but the scale wouldn't detect the gemstone's historical significance or any magical properties. <em>Abadar's flawless scale</em> can be calibrated to a different market by performing a 1-hour ritual in the proximity of that market.</p>", 0, 3, "", "", 50.00, 1, "Pathfinder Lost Omens: Gods & Magic", "uncommon")

INSERT INTO item_traits (item_id, trait_id)
VALUES (1, 2), (1, 3);



INSERT INTO traits (trait_name)
VALUES("divination");

INSERT INTO Traits (trait_name)
VALUES("magical");


