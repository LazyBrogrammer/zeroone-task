import { v4 as uuidv4 } from 'uuid';
import { tableBodyData } from '../data/tableBodyData';

export const TableBody = () => {
  return (
    <tbody>
      {tableBodyData.map((data) => {
        return (
          <tr key={uuidv4()}>
            <td className=" text-blue-600">{data.name}</td>
            <td>{data.age}</td>
            <td>{data.address}</td>
            <td>
              {data.tags.map((tag) => (
                <span
                  key={uuidv4()}
                  dangerouslySetInnerHTML={{ __html: tag }}
                ></span>
              ))}
            </td>
            <td>
              {data.action.map((tag) => (
                <span
                  key={uuidv4()}
                  dangerouslySetInnerHTML={{ __html: tag }}
                ></span>
              ))}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
