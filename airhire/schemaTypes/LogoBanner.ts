import {defineType, defineField, defineArrayMember} from 'sanity'

export const LogoBanner = defineType({
  type: 'object',
  name: 'LogoBanner',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
