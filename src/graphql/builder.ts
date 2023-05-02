// 1. Defines all the libraries and utilities that will be needed
import SchemaBuilder from '@pothos/core';
import PrismaPlugin  from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from '@/lib/prisma';
import RelayPlugin from '@pothos/plugin-relay';
import { createContext } from './context';

// 2. Creates a new SchemaBuilder instance
export const builder = new SchemaBuilder<{
    // 3. Defines the static types that will be used in creating the GraphQL schema
    PrismaTypes: PrismaTypes,
    Context: ReturnType<typeof createContext>
}>({
    // 4. Defines options for the SchemaBuilder such as the plugins and the Prisma Client instance that will be used
    plugins: [PrismaPlugin, RelayPlugin],
    relayOptions: {},
    prisma: {
        client: prisma,
    }
})

// 5. Creates a queryType with a query called ok that returns a boolean
builder.queryType({
    fields: (t) => ({
        ok: t.boolean({
            resolve: () => true,
        }),
    }),
});

builder.mutationType({})