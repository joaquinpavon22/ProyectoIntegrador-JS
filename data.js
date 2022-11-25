const productsData = [
  {
    id: 1,
    category: "porteros",
    img: "assets/Card-Dibu.png",
    name: "Emiliano Martinez",
    descr: "Adulto",
     price: 8,
    popular:true,
    
  },
  {
    id: 2,
    category: "delanteros",
    img: "assets/Card.png",
    name: "Lionel Messi",
    descr: "Adulto",
    price: 10,
   popular:true,
  },
  {
    id: 3,
    category: "delanteros",
    img: "assets/Card-Lautaro.png",
    name: "Lautaro Martinez",
    descr: "Adulto",
    price:8,
    popular:true,
  },
  {
    id: 4,
    category: "mediocampistas",
    img: "assets/Card-DePaul.png",
    name: "Rodrigo De Paul",
    descr: "Adulto",
    price:8,
    popular:true,
  },
  {
    id: 5,
    category: "defensa",
    img: "assets/Card-Romero.png",
    name: "Cristian Romero",
    descr: "Adulto",
    price:7,
    popular:true,
   
  },
  {
    id: 6,
    category: "limit",
    img: "assets/Card-Cr7.png",
    name: "Cristiano Ronaldo",
    descr: "Adulto",
     price: 10,
   popular:true,
    
  },
  {
    id: 7,
    category: "porteros",
    img: "assets/Card-Rulli.png",
    name: "Geronimo Rulli",
    descr: "Adulto",
    price: 4,
   popular:false,
  
  }, {
    id: 8,
    category: "porteros",
    img: "assets/Card-Armani.png",
    name: "Franco Armani",
    descr: "Adulto",
   price: 4,
  popular:false,
   
  },
  
  {
    id: 9,
    category: "defensa",
    img: "assets/Card-Montiel.png",
    name: "Gonzalo Montiel",
    descr: "Adulto",
   price: 6   ,
   popular:false,
   
  },
  {
    id: 10,
    category: "defensa",
    img: "assets/Card-Molina.png",
    name: "Nahuel Molina",
    descr: "Adulto",
  price: 6   ,
   popular:false,
   
  },
  {
    id: 11,
    category: "defensa",
    img: "assets/Card-Acuña.png",
    name: "Marcos Acuña",
    descr: "Adulto",
   price: 6   ,
   popular:false,
   
  },{
    id: 12,
    category: "defensa",
    img: "assets/Card-Taglia.png",
    name: "Nicolás Tagliafico",
    descr: "Adulto",
  price: 6   ,
   popular:false,
   
  },{
    id: 13,
    category: "defensa",
    img: "assets/Card-Otamendi.png",
    name: "Nicolás Otamendi",
    descr: "Adulto",
   price: 6   ,
   popular:false,
   
  },{
    id: 14,
    category: "defensa",
    img: "assets/Card-Lisandro.png",
    name: "Lisandro Martínez",
    descr: "Adulto",
    price: 6   ,
   popular:false,
   
  },{
    id: 15,
    category: "defensa",
    img: "assets/Card-Pezzela.png",
    name: "German Pezzela",
    descr: "Adulto",
    price: 6   ,
   popular:false,
   
  },
  {
    id: 16,
    category: "defensa",
    img: "assets/Card-Foyth.png",
    name: "Juan Foyth",
    descr: "Adulto",
   price: 6   ,
   popular:false,
   
  },{
    id: 17,
    category: "mediocampistas",
    img: "assets/Card-Paredes.png",
    name: "Leandro Paredes",
    descr: "Adulto",
   price: 6   ,
   popular:false,
   
  },{
    id: 18,
    category: "mediocampistas",
    img: "assets/Card-Enzo.png",
    name: "Enzo Fernandez",
    descr: "Adulto",
   price: 5  ,
   popular:false,
   
  },
  {
    id: 19,
    category: "mediocampistas",
    img: "assets/Card-Palacios.png",
    name: "Exequiel Palacios",
    descr: "Adulto",
     price: 5   ,
   popular:false,
   
  },{
    id: 20,
    category: "mediocampistas",
    img: "assets/Card-Guido.png",
    name: "Guido Rodriguez",
    descr: "Adulto",
    price: 5   ,
   popular:false,
   
  },{
    id: 21,
    category: "mediocampistas",
    img: "assets/Card-Papu.png",
    name: "Alejeandro Gomez",
    descr: "Adulto",
   price: 5   ,
   popular:false,
   
  },{
    id: 22,
    category: "mediocampistas",
    img: "assets/Card-Almada.png",
    name: "Thiago Almada",
    descr: "Adulto",
   price: 5   ,
   popular:false,
   
  },{
    id: 23,
    category: "mediocampistas",
    img: "assets/Card-Mac.png",
    name: "Alexís Mac Allister",
    descr: "Adulto",
    price: 5   ,
   popular:false,
   
  },{
    id: 24,
    category: "mediocampistas",
    img: "assets/Card-DiMaria.png",
    name: "Angel Di Maria",
    descr: "Adulto",  
    price: 8   ,
   popular:true,
   
  },
  {
    id: 25,
    category: "delanteros",
    img: "assets/Card-Julian.png",
    name: "Julian ALvarez",
    descr: "Adulto",  
    price: 7   ,
   popular:false,
   
  },
  {
    id: 26,
    category: "delanteros",
    img: "assets/Card-Correa.png",
    name: "Angel Correa",
    descr: "Adulto",   
    price: 6   ,
   popular:false,
   
  },
 
  
  {
    id: 27,
    category: "limit",
    img: "assets/Card-Neymar.png",
    name: "Neymar jr",
    descr: "Adulto", 
    price: 9   ,
   popular:false,
   
  },
  
 
  {
    id: 28,
    category: "niños",
    img: "assets/Card-Neymar.png",
    name: "Neymar jr",
    descr: "Niño",  
    price: 7   ,
   popular:false,
   
  },
  {
    id: 29,
    category: "niños",
    img: "assets/Card.png",
    name: "Lionel Messi",
    descr: "Niño", 
    price: 9,
   popular:false,
  },
  {
    id: 30,
    category: "niños",
    img: "assets/Card-DiMaria.png",
    name: "Angel Di Maria",
    descr: "Niño", 
    price: 6   ,
   popular:false,
   
  },
  {
    id: 31,
    category: "niños",
    img: "assets/Card-DePaul.png",
    name: "Rodrigo De Paul",
    descr: "Niño",
  price:6,
    popular:false,
  },
  {
    id: 32,
    category: "delanteros",
    img: "assets/Card-Dybala.png",
    name: "Paulo Dybala",
    descr: "Adulto",  
  price:8,
    popular:false,
  },
  {
    id: 33,
    category: "niños",
    img: "assets/Card-Dybala.png",
    name: "Paulo Dybala",
    descr: "Niño",
   
  price:5,
    popular:false,
  },]





  