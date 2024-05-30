import {defineType, defineField, defineArrayMember} from 'sanity'

export const ThreeImages = defineType({
  type: 'object',
  name: 'ThreeImages',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
