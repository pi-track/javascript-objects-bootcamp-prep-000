var playlist = {
  U2: "beautiful day",
  velvet: "perfect day",
};

function updatePlaylist(obj,key,value){
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(obj,key){
  delete obj.key
  console.log(obj)
  return obj
}
