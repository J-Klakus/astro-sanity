import {defineType, defineField} from 'sanity'

export const CTA = defineType({
  type: 'object',
  name: 'CTA',
  fields: [
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
      type: 'boolean',
      name: 'background',
    }),
    defineField({
      type: 'Button',
      name: 'button1',
    }),
    defineField({
      type: 'Button',
      name: 'button2',
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
  ],
})
