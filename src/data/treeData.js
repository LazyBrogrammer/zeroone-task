export let treeData = [
  {
    name: 'Models',
    children: [
      {
        name: 'Data warehouse',
        children: [
          {
            name: 'Report samples',
            children: [
              { name: 'Report samples' },
              { name: 'Sales performance' },
            ],
          },
          {
            name: 'Sales performance',
            children: [
              { name: 'Report samples' },
              {
                name: 'Sales performance',
                children: [
                  { name: 'Report samples' },
                  {
                    name: 'Sales performance',
                    children: [
                      { name: 'Report samples' },
                      { name: 'Sales performance' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Statistics',
    children: [{ name: 'Element' }, { name: 'Element' }],
  },
];

