import { decorateType } from '@nexus/schema';
import {GraphQLDate,GraphQLURL } from 'graphql-scalars'; // graphql type whihc is dont come with graphql

// generated folder generate typescript
export const GQLDate = decorateType(
    GraphQLDate, {
        rootTyping: 'Date',
        asNexusMethod:"date"
    }
)

export const GQLURL = decorateType(
    GraphQLURL, {
        rootTyping: 'URL',
        asNexusMethod:"url"
    }
)


export * from './Query'
export * from './Bio'
export * from './Position'