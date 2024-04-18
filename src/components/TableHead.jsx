const tableColumns = [
  {
    label: 'Name',
    field: 'name',
  },
  {
    label: 'Age',
    field: 'age',
  },
  {
    label: 'Address',
    field: 'address',
  },
  {
    label: 'Tags',
    field: 'tags',
  },
  {
    label: 'Action',
    field: 'action',
  },
];

export const TableHead = () => {
  return (
    <thead>
      <tr>
        {tableColumns.map((item) => {
          return (
            <th className=" border-gray-300 border-x-2 " key={item.field}>
              {item.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
