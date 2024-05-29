import {defineType, defineField, defineArrayMember} from 'sanity'

export const Brands = defineType({
  type: 'object',
  name: 'Brands',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
