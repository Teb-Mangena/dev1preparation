export let storage = JSON.parse(localStorage.getItem('storage'));

if(!storage){
  storage = [{
    questionId: '1',
    quantity: 1
  }];
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('storage',JSON.stringify(storage));
}

export function addToStorage(questionId){
  let matchingItems;

    storage.forEach((storageItem)=>{
      if(storageItem.questionId === questionId){
        matchingItems = storageItem;
      }
    });

    if(matchingItems){
      matchingItems.quantity += 1;
    }else{
      storage.push({
        questionId: questionId,
        quantity: 1
      });
    }

    saveToStorage();
}