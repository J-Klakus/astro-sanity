import {defineType, defineField, defineArrayMember} from 'sanity'

export const CardHolder = defineType({
  type: 'object',
  name: 'CardHolder',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Card Holder Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
      validation: (rule) => [rule.required()],
      initialValue: 'Work more efficiently with Airhire',
    }),
    defineField({
      type: 'string',
      name: 'subTitle',
    }),
    defineField({
      type: 'string',
      name: 'header',
    }),
    defineField({
      type: 'Button',
      name: 'button',
    }),
    defineField({
      type: 'array',
      name: 'cards',
      title: 'Cards',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              validation: (rule) => [rule.required()],
              name: 'name',
            }),
            defineField({
              type: 'string',
              validation: (rule) => [rule.required()],
              name: 'description',
            }),
            defineField({
              type: 'string',
              validation: (rule) => [rule.required()],
              name: 'icon',
              options: {
                list: ['browser', 'website', 'cv', 'email', 'checkBadge', 'clock', 'gear', 'stack'],
              },
            }),
            defineField({
              type: 'string',
              name: 'link',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
