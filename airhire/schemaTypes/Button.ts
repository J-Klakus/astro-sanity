import {defineType, defineField} from 'sanity'

export const button = defineType({
  type: 'object',
  name: 'button',
  title: 'Button',
  fields: [
    defineField({
      type: 'string',
      name: 'buttonText',
    }),
    defineField({
      type: 'url',
      name: 'link',
    }),
    defineField({
      type: 'string',
      name: 'class',
    }),
    defineField({
      type: 'string',
      name: 'type',
      options: {
        list: ['filled', 'outline'],
      },
    }),
    defineField({
      type: 'boolean',
      name: 'arrow',
    }),
  ],
})
