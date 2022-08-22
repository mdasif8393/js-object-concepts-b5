const bottle = {color: 'yellow', hold:'water', price: 50, isCleaned: true};

for (const prop in bottle){
    // console.log(bottle[prop]);
}

const keys = Object.keys(bottle);
for(const prop of keys){
    // console.log(prop, bottle[prop]);
}

for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
} 