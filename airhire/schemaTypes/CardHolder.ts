import {defineType, defineField, defineArrayMember} from 'sanity'

export const CardHolder = defineType({
  type: 'object',
  name: 'CardHolder',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
