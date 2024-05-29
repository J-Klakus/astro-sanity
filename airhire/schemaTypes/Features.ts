import {defineType, defineField, defineArrayMember} from 'sanity'

export const Features = defineType({
  type: 'object',
  name: 'Features',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
