import {defineType, defineField, defineArrayMember} from 'sanity'

export const BlogSlider = defineType({
  type: 'object',
  name: 'BlogSlider',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})