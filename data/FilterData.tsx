export const FilterData = {
  title: 'Filter',
  classname: '.filter',
  sortOptions: [
    { name: 'Daily', href: '#', current: false },
    { name: 'Weekly', href: '#', current: false },
    { name: 'Monthly', href: '#', current: false },
  ],
  sortDirection: [
    { name: 'Ascending', href: '#', current: false },
    { name: 'Decending', href: '#', current: false },
  ],
  filters: [
    {
      id: 'type',
      name: 'Categories',
      options: [
        { value: 'page', label: 'Page', checked: true },
        {
          value: 'news',
          label: 'News',
          checked: true,
        },
        {
          value: 'events',
          label: 'Events',
          checked: true,
        },
        {
          value: 'video',
          label: 'Videos',
          checked: true,
        },
      ],
    },
    // {
    //   id: 'tags',
    //   name: 'Tags',
    //   options: [
    //     { value: 'general', label: 'General', checked: false },
    //     {
    //       value: 'online/virtual',
    //       label: 'Online/Virtual',
    //       checked: false,
    //     },
    //     { value: 'finances', label: 'Finances', checked: false },
    //     {
    //       value: 'healthyworkplace',
    //       label: 'Healthy Workplace',
    //       checked: false,
    //     },
    //   ],
    // },
  ],
}
