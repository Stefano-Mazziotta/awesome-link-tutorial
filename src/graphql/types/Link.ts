import { builder } from "../builder";

/**
 * PrismaObject(name, options)
 *      name: The name of the model in the Prisma schema you would like to expose.
 *      options: The options for defining the type you're exposing such as the description, fields, etc.
 */
builder.prismaObject('Link', {
    fields: (t) => ({
        id: t.exposeID('id'),
        title: t.exposeString('title'),
        url: t.exposeString('url'),
        description: t.exposeString('description'),
        imageUrl: t.exposeString('imageUrl'),
        category: t.exposeString('category'),
        users: t.relation('users')
    })
})

// 1.Defines a query type called
builder.queryField('links', (t) =>
    // 2. Defines the field that will resolve to the generated Prisma Client types
    t.prismaConnection({
        // 3. Specifies the field that Pothos will use to resolve the field. In this case, it resolves to an array of the Link type
        type: 'Link',
        cursor: 'id',
        // 4. Defines the logic for the query
        resolve: (query, _parent, _args, _ctx, _info ) =>
            prisma.link.findMany({ ...query })
    })
)