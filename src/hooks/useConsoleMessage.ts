const useConsoleMessage = () => {
  var url = 'https://www.uruharushia.work/console.gif';
  console.log(
    '%cなにみてるのです？',
    'color:red; font-size:20px; padding: 10px; background: black; border-radius: 5px;',
  );
  console.log(
    '%cハンバーグになるか冷蔵庫に入るかどっちがいい？',
    'color:red; font-size:20px; padding: 10px; background: black; border-radius: 5px;',
  );
  console.log(
    '%c ',
    'padding: 128px 240px; background-repeat: no-repeat; background-position: center; background: url(' +
      url +
      ');',
  );
};

export default useConsoleMessage;
