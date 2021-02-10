

    db.fruta.insertMany([
        { item: "manzana",
         preciounitario: 2 ,
         iva:0.4,
         cliente: "mercadona",
            preciopormayor: 1.5,
              fechaventa:new Date("2020-02-16")  ,
              tipo:"dulce"
          
        },
        { item: "pera", preciounitario: 1.5,iva:0.5,cliente: "mercadona",preciopormayor: 2, fechaventa:new Date("2020-04-20"),tipo:"dulce"  },
        { item: "platano", preciounitario: 2.8,iva:0.2,cliente: "mercafruta",preciopormayor: 0.7, fechaventa:new Date("2020-05-24"),tipo:"exotica"   },
        { item: "mandarina", preciounitario: 1.5,iva:0.24,cliente: "superfresh",preciopormayor: 0.8, fechaventa:new Date("2020-01-19"),tipo:"citricos"   },
        { item: "limon", preciounitario: 1.5,iva:0.3,cliente: "superfresh",preciopormayor: 1.2, fechaventa:new Date("2020-03-13"),tipo:"citricos"   },
        { item: "kiwi", preciounitario: 2.8,iva:0.56,cliente: "mercafruta",preciopormayor: 2.3, fechaventa:new Date("2020-01-10"),tipo:"exotica"   },
        { item: "naranja", preciounitario: 1.4,iva:0.28,cliente: "superfresh",preciopormayor: 0.9, fechaventa:new Date("2020-07-16"),tipo:"citricos"   },
        { item: "cereza", preciounitario:0.98,iva:0.2,cliente: "directfruit",preciopormayor: 0.65, fechaventa:new Date("2020-10-28"),tipo:"baya"   },
        { item: "pina", preciounitario: 2.8,iva:0.2,cliente: "mercafruta",preciopormayor: 0.8, fechaventa:new Date("2020-12-14"),tipo:"exotica"   },
        { item: "sandia", preciounitario: 2,iva:0.2,cliente: "fruitcoco",preciopormayor: 0.7, fechaventa:new Date("2020-12-05"),tipo:"cucurbitaceas"   },
        { item: "melón", preciounitario: 2,iva:0.46,cliente: "fruitcoco",preciopormayor: 1.8, fechaventa:new Date("2020-11-08"),tipo:"cucurbitaceas"   },
        { item: "arandano", preciounitario: 1.7,iva:0.3,cliente: "alcampo",preciopormayor: 1.4, fechaventa:new Date("2020-09-09"),tipo:"baya"   }
        ]);