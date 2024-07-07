import {defineType, defineField, defineArrayMember} from 'sanity'

export const ImageText = defineType({
  type: 'object',
  name: 'ImageText',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Image and Text Component',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      initialValue: 'features',
      name: 'tagline',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'title',
    }),
    defineField({
      type: 'boolean',
      validation: (rule) => [rule.required()],
      initialValue: false,
      name: 'first',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'description',
    }),
    defineField({
      type: 'string',
      name: 'background',
      validation: (rule) => [rule.required()],
      initialValue: 'none',
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
      validation: (rule) => [rule.required()],
      options: {hotspot: true},
    }),
    defineField({
      type: 'text',
      validation: (rule) => [rule.required()],
      name: 'imageAlt',
    }),
    defineField({
      type: 'boolean',
      name: 'largeImage',
      validation: (rule) => [rule.required()],
      initialValue: false,
      title: 'Make the image larger?',
    }),
    defineField({
      type: 'string',
      name: 'imageSide',
      validation: (rule) => [rule.required()],
      initialValue: 'left',
      options: {
        list: ['left', 'right'],
      },
      title: 'Choose the side of the image',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
