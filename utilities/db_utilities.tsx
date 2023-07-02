import { Kysely } from "kysely";
import { queryBuilder } from '../lib/planetscale';
import { sql } from "kysely";

// Gets the next system id from the system table of DB. (Primarily used byu )
export async function getNextSystemId() {
    const max_id = await queryBuilder
    .selectFrom('system')
    .select([sql`max(system_id)`.as(`max_id`)])
    .execute();
    let nextId: number= max_id[0].max_id + 1;  
    return nextId;
}