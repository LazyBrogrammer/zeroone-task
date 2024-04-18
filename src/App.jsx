import { TableHead } from './components/TableHead';
import { TableBody } from './components/TableBody';
import './App.css';

let treeData = [
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

export default function App() {
  return (
    <table>
      <TableHead />
      <TableBody />
    </table>
  );
}
