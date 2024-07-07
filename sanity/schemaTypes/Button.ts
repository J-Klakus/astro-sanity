import {defineType, defineField} from 'sanity'

export const Button = defineType({
  type: 'object',
  name: 'Button',
  title: 'Button',
  fields: [
    defineField({
      type: 'string',
      validation: rule => [rule.required()],
      name: 'buttonText',
    }),
    defineField({
      type: 'string',
      validation: rule => [rule.required()],
      name: 'link',
    }),
    defineField({
      type: 'string',
      name: 'class',
    }),
    defineField({
      type: 'string',
      validation: rule => [rule.required()],
      name: 'type',
      options: {
        list: ['filled', 'outline'],
      },
    }),
    defineField({
      type: 'boolean',
      initialValue: false,
      validation: rule => [rule.required()],
      name: 'arrow',
    }),
  ],
})
