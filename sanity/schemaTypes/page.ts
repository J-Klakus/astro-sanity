import {defineType, defineField, defineArrayMember} from 'sanity'

export const page = defineType({
  type: 'document',
  name: 'page',
  title: 'Pages',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      description: 'The title of the page, displayed in the browser tab and used for SEO.',
    }),
    defineField({
      type: 'string',
      name: 'description',
      description: 'A short description of the page, used for SEO purposes.',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title', 
        maxLength: 96,  
      },
      validation: (Rule) =>
        Rule.required() 
          .custom((value, context) => {
            if (value?.current && /\s/.test(value.current)) {
              return 'The slug cannot contain any whitespace characters.';
            }
            return true;
          }),
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
          type: 'SignInForm',
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
          type: 'Legal',
        }),
        defineArrayMember({
          type: 'ThreeVertical',
        }),
        defineArrayMember({
          type: 'About',
        }),
      ],
    }),
  ],
})
