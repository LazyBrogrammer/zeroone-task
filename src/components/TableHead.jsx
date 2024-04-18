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
    <thead className="bg-slate-200">
      <tr>
        {tableColumns.map((item) => {
          return (
            <th className="p-4 border-gray-300 border-x-2 " key={item.field}>
              {item.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
