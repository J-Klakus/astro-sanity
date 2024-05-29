import {defineType, defineField, defineArrayMember} from 'sanity'

export const slider = defineType({
  type: 'object',
  name: 'slider',
  title: 'Slider',
  fields: [
    defineField({
      type: 'array',
      name: 'images',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'caption',
            },
          ],
          options: {hotspot: true},
        }),
      ],
    }),
  ],
})
