import {defineType, defineField, defineArrayMember} from 'sanity'

export const ImageText = defineType({
  type: 'object',
  name: 'ImageText',
  fields: [
    defineField({
      type: 'string',
      name: 'tagline',
    }),
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'boolean',
      name: 'first',
    }),
    defineField({
      type: 'string',
      name: 'description',
    }),
    defineField({
      type: 'string',
      name: 'background',
      options: {
        list: ['none', 'bg center', 'bg bottom'],
      },
    }),
    defineField({
      type: 'array',
      name: 'button',
      title: 'Buttons',
      of: [
        defineArrayMember({
          type: 'Button',
        }),
      ],
    }),
    defineField({
      type: 'image',
      name: 'image',
      options: {hotspot: true},
    }),
    defineField({
      type: 'text',
      name: 'imageAlt',
    }),
    defineField({
      type: 'boolean',
      name: 'largeImage',
      title: 'Make the image larger?',
    }),
    defineField({
      type: 'string',
      name: 'imageSide',
      options: {
        list: ['left', 'right'],
      },
      title: 'Choose the side of the image',
    }),
  ],
})
