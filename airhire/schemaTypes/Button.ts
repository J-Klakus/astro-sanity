import {defineType, defineField} from 'sanity'

export const Button = defineType({
  type: 'object',
  name: 'Button',
  title: 'Button',
  fields: [
    defineField({
      type: 'string',
      name: 'buttonText',
    }),
    defineField({
      type: 'string',
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
