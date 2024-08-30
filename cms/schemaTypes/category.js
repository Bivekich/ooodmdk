export default {
  name: 'category',
  title: 'Категория',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Слаг',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'color',
      title: 'Цвет',
      type: 'string',
      description: 'Цвет категории в виде hex-кода (например, #FFD700 для золота)',
    },
    {
      name: 'element',
      title: 'Символ элемента',
      type: 'string',
      description: 'Химический символ (например, Au для золота)',
    },
    {
      name: 'elementNumber',
      title: 'Номер элемента',
      type: 'number',
      description: 'Атомный номер элемента (например, 79 для золота)',
    },
  ],
}
