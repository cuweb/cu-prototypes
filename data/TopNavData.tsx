export const homepageNavData = [
  { id: 1, label: 'Academics', link: '/homepage' },
  { id: 2, label: 'Students', link: '/homepage' },
  { id: 3, label: 'Research', link: '/homepage' },
  { id: 4, label: 'Priorities', link: '/homepage' },
  { id: 5, label: 'About', link: '/homepage' },
  { id: 6, label: 'Academics2', link: '/homepage' },
  { id: 7, label: 'Students2', link: '/homepage' },
]

export const intranetNavData = [
  { id: 1, label: 'My Info', link: '/intranet/my-info' },
  { id: 2, label: 'Working at Carleton', link: '/intranet/working-here' },
  { id: 3, label: 'Community', link: '/intranet/community' },
  { id: 4, label: 'Resource Center', link: '/intranet/resources' },
]

export const intranetAltNavData = [
  { id: 1, label: 'Community', link: '/intranet/community' },
  { id: 2, label: 'Employees', link: '/intranet/working-here' },
  { id: 3, label: 'Managers', link: '/intranet/working-here' },
  { id: 4, label: 'Resources', link: '/intranet/resources' },
]

export const cuthemeNavData = [
  { id: 1, label: 'About Us', link: '/cutheme' },
  { id: 2, label: 'News', link: '/cutheme' },
  { id: 3, label: 'Workshops', link: '/cutheme' },
  { id: 4, label: 'Services', link: '/cutheme' },
  { id: 5, label: 'Accessibility', link: '/cutheme' },
  { id: 6, label: 'Support', link: '/cutheme' },
]

export const PlusNavMenuData = [
  { id: 1, label: 'Academics', link: '/homepage' },
  {
    id: 2,
    label: 'Students',
    link: '/homepage',
    subMenu: [
      { id: 1.1, label: 'Community', link: '/intranet/community' },
      { id: 1.2, label: 'Employees', link: '/intranet/working-here' },
      { id: 1.3, label: 'Managers', link: '/intranet/working-here' },
      { id: 1.4, label: 'Resources', link: '/intranet/resources' },
    ],
  },
  { id: 3, label: 'Research', link: '/homepage' },
  { id: 4, label: 'Priorities', link: '/homepage' },
  {
    id: 5,
    label: 'About',
    link: '/homepage',
    subMenu: [
      { id: 5.1, label: 'Community', link: '/intranet/community' },
      { id: 5.2, label: 'Employees', link: '/intranet/working-here' },
      { id: 5.3, label: 'Managers', link: '/intranet/working-here' },
      { id: 5.4, label: 'Resources', link: '/intranet/resources' },
    ],
  },
  { id: 6, label: 'Academics2', link: '/homepage' },
  { id: 7, label: 'Students2', link: '/homepage' },
]

export const testingNav = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Services',
    link: '/services',
    subLinks: [
      { label: 'Service 1', link: '/services/service1' },
      { label: 'Service 2', link: '/services/service2' },
      { label: 'Service 3', link: '/services/service3' },
    ],
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
]
