import {defineType, defineField, defineArrayMember} from 'sanity'

export const Infographic = defineType({
  type: 'object',
  name: 'Infographic',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
