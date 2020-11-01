// query is top level root level type
import { idArg, queryType } from '@nexus/schema'
import { data } from 'src/data'
import { Bio } from './index'
import { Position } from './Position';

// define the defination ,defination is a function wher we pass a t
export const Query = queryType({
    definition(t) {
        t.field("bio", {
            type: Bio,
            resolve: () => data.bio,
            // ctx is like global object pass around every single resolver
        });
        t.list.field("positions", {
            type: Position,
            resolve: () => data.positions,
        });
        t.field('position', {
            type: Position,
            description:"Find a positions by its id",
            nullable:true,
            args: { id: idArg() },
            resolve: (root, { id }: { id: string }, ctx) => data.positions.find(position => position.id === id)
            
        })
    }
})
