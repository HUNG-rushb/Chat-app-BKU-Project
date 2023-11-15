const editName = (strToSearch, strToFind, strToInsert) => {
  console.log({ strToSearch });
  const n = strToSearch.lastIndexOf(strToFind);
  return (
    strToSearch.substring(0, n) + '-' + strToInsert + strToSearch.substring(n)
  );
};

export default editName;
