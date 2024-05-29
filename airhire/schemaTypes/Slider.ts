import {defineType, defineField, defineArrayMember} from 'sanity'

export const Slider = defineType({
  type: 'object',
  name: 'Slider',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
