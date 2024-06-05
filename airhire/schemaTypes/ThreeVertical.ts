import {defineType, defineField, defineArrayMember} from 'sanity'

export const ThreeVertical = defineType({
  type: 'object',
  name: 'ThreeVertical',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
