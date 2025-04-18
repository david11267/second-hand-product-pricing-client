export default function Home() {
  return (
    <div className="  shadow-lg  bg-panel/60 rounded-4xl overflow-hidden p-4 inline-flex">
      <table className=" table-auto ">
        <thead className=" bg-transparent border-b border-dashed">
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
