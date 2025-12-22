import {defineType, defineField} from 'sanity'

export const Button = defineType({
  type: 'object',
  name: 'button',
  title: 'Button',
  fields: [
    defineField({
      type: 'string',
      name: 'buttonText',
      title: 'Button Text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'link',
      title: 'Link URL',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'className',
      title: 'Additional Classes',
      description: 'Optional Tailwind classes for custom styling',
    }),
    defineField({
      type: 'string',
      name: 'type',
      title: 'Button Type',
      options: {
        list: [
          {title: 'Filled', value: 'filled'},
          {title: 'Outline', value: 'outline'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
      initialValue: 'filled',
    }),
    defineField({
      type: 'boolean',
      name: 'arrow',
      title: 'Show Arrow',
      description: 'Display arrow icon next to button text',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      buttonText: 'buttonText',
      type: 'type',
      arrow: 'arrow',
    },
    prepare(selection: any) {
      const {buttonText, type, arrow} = selection
      return {
        title: buttonText,
        subtitle: `${type}${arrow ? ' with arrow' : ''}`,
      }
    },
  },
})
