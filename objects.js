var playlist = {
  U2: "beautiful day",
  velvet: "perfect day",
};

function updatePlaylist(obj,key,value){
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(obj,key){
  console.log(delete obj.key)
  console.log(obj)
  return obj
}
