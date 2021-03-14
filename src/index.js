module.exports = function check(str, bracketsConfig) {
  let temp = [];
  if (str.length % 2 != 0) {
    return false;}

  for (let i = 0; i < bracketsConfig.length; i++){
    temp.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }
  for (let i = 0; i < temp.length; i++){
    if(str.includes(temp[i])){
      str = str.replace(temp[i],'')
      i= -1;
    }
  }

  if(str.length !=0){
    return false;
  }
  else {
    return true;
  }

}
