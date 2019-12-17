function concat_string(strOne, strTwo) {
  const finalString = Math.min(strOne.length, strTwo.length);

  // check the type of parameters
  if (typeof strOne !== "string") {
    return false;
  } else if (typeof strTwo !== "string") {
    return false;
  }

  // if type is string then,
  return (
    strOne.substring(strOne.length - finalString) +
    strTwo.substring(strTwo.length - finalString)
  );
}
console.log(concat_string("Zain", "Ahsan"));
