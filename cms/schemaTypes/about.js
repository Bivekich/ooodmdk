export default {
  name: 'about',
  title: 'О нас',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'О НАС',
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
