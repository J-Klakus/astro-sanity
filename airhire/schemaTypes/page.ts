import {defineType, defineField, defineArrayMember} from 'sanity'

export const page = defineType({
  type: 'document',
  name: 'page',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'string',
      name: 'description',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Page sections',
      of: [
        defineArrayMember({
          type: 'TestimonialSlider',
        }),
        defineArrayMember({
          title: 'Bento',
          type: 'Bento',
        }),
        defineArrayMember({
          type: 'Brands',
        }),
        defineArrayMember({
          type: 'CardHolder',
        }),
        defineArrayMember({
          type: 'CTA',
        }),
        defineArrayMember({
          type: 'Features',
        }),
        defineArrayMember({
          type: 'HeroVideo',
        }),
        defineArrayMember({
          type: 'ImageText',
        }),
        defineArrayMember({
          type: 'Infographic',
        }),
        defineArrayMember({
          type: 'LogoBanner',
        }),
        defineArrayMember({
          type: 'Slider',
        }),
        defineArrayMember({
          type: 'TwoCards',
        }),
        defineArrayMember({
          type: 'ThreeImages',
        }),
        defineArrayMember({
          type: 'BlogSlider',
        }),
        defineArrayMember({
          type: 'SignUpForm',
        }),
        defineArrayMember({
          type: 'ContactForm',
        }),
        defineArrayMember({
          type: 'BlogsPage',
        }),
        defineArrayMember({
          type: 'PricingFeatures',
        }),
        defineArrayMember({
          type: 'PricingForm',
        }),
        defineArrayMember({
          type: 'Faq',
        }),
        defineArrayMember({
          type: 'Terms',
        }),
        defineArrayMember({
          type: 'ThreeVertical',
        }),
      ],
    }),
  ],
})
