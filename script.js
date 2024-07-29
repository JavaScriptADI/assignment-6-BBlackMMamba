let pcArray = [];
const totalPrice = [1500, 1100, 3657, 1250, 5468, 900, 4500];
const osArray = ["Linux", "Windows 10", "Windows 11"];
const processors = [
    {
        brand: "Intel",
        name: "Core i9 13900K",
        cores: 24,
        price: 589
    },
    {
        brand: "Intel",
        name: "Core i9 13900KF",
        cores: 24,
        price: 564
    },
    {
        brand: "Intel",
        name: "Core i7 13700K",
        cores: 16,
        price: 409
    },
];

const graphicsCards = [
    {
        brand: "Nvidia",
        name: "NVIDIA GeForce RTX 4080",
        memory: 16,
        price: 1199
    },
    {
        brand: "Nvidia",
        name: "NVIDIA GeForce RTX 4090",
        memory: 24,
        price: 1599
    },
    {
        brand: "Nvidia",
        name: "NVIDIA GeForce RTX 4070",
        memory: 24,
        price: 599
    }
];

const memories = [
    {
        brand: "Corsair",
        name: "VENGEANCE® RGB",
        size: 32,
        price: 114.99
    },
    {
        brand: "Corsair",
        name: "DOMINATOR® PLATINUM RGB",
        size: 32,
        price: 184.99
    }
];

const storages = [
    {
        brand: "Samsung",
        name: "860 EVO SATA 2.5 SSD",
        size: 500,
        price: 89.99,
    },
    {
        brand: "Samsung",
        name: "990 PRO PCIe®4.0 NVMe™ SSD",
        size: 1000,
        price: 99.99,
    },
];

function rand(a) {
    return a[Math.floor(Math.random() * a.length)];
}

for (let i = 0; i < 10; i++) {
    pcArray.push({
        pcPrice: rand(totalPrice),
        pcOs: rand(osArray),
        pcProcessor: JSON.stringify(rand(processors)),
        pcGraphics: JSON.stringify(rand(graphicsCards)),
        pcMemories: JSON.stringify(rand(memories)),
        pcStorages: JSON.stringify(rand(storages))

    });
}

//შემდეგ ამ მასივში გამოთვალეთ: ყველაზე ძვირიანი კომპიუტერი

let priceArr = [];
for (let i of pcArray) {
    priceArr.push(i.pcPrice);
    console.log(priceArr);

}

console.log(`Most Expensive Computer:${Math.max(...priceArr)}`);

//საშუალო ფასი აწყობილი კომპუტერების

function average(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum / a.length;
}

console.log(`The average price: ${average(priceArr)}`);

//გაფილტრეთ კომპიუტერები, რომელიც 1600 -ზე ძვირი ღირს

for (let i of pcArray) {
    if ((i.pcPrice) > 1600) {
        console.log(i);
    }
}

//ყველაზე მეტ ბირთვიანი პროცესორი რომელ კომპიუტერს აქვს (processor.core)



//იპოვეთ კომპიუტერი, რომელსაც ყველაზე დიდი ვიდეო მეხსიერება აქვს (graphics.memory),
//მაგრამ ყველაზე ნაკლები პროცესორის ბირთვი (processor.core)
//იპოვეთ კომპიუტერი, რომელსაც ყველაზე დიდი ვიდეო მეხსიერება აქვს, ყველაზე მეტი ბირთვი აქვს
//და ყველაზე დიდი მყარი მეხსერება(storage.size)



