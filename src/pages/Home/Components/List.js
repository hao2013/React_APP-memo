import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};
// keyを使う理由：パフォーマンスのため　https://ja.reactjs.org/docs/lists-and-keys.html#gatsby-focus-wrapper
// key　indexを使わない理由：https://zenn.dev/luvmini511/articles/f7b22d93e9c182
export default List;　