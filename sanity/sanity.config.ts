import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'boilerplate',

  projectId: 'cbebllo4',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Globals')
              .child(
                S.list()
                  .title('Globals')
                  .items([
                    S.listItem()
                      .title('Site Settings')
                      .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
                    S.listItem()
                      .title('Footer')
                      .child(S.document().schemaType('footer').documentId('footer')),
                    S.listItem()
                      .title('Navbar')
                      .child(S.document().schemaType('navbar').documentId('navbar')),
                  ]),
              ),
            S.listItem()
              .title('Blogs')
              .child(
                S.list()
                  .title('Blogs')
                  .items([
                    S.listItem()
                      .title('Blog Posts')
                      .child(S.document().schemaType('blogs').documentId('blogs')),
                    S.listItem()
                      .title('Blog Authors')
                      .child(S.document().schemaType('authors').documentId('authors')),
                    S.listItem()
                      .title('Blog Categories')
                      .child(S.document().schemaType('categories').documentId('categories')),
                  ]),
              ),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['footer', 'navbar', 'siteSettings', 'blogs', 'author', 'category'].includes(
                  listItem?.getId() ?? '',
                ),
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
