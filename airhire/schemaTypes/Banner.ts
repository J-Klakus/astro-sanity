import {defineType, defineField, defineArrayMember} from 'sanity'

export const Banner = defineType({
  type: 'object',
  name: 'Banner',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
