/*Consultas Personalizadas*/ 

//Voy a realizar una agrupación de el tipo de fruta ,los clientes en base a el tipo de de fruta,
// el precio unitario (redondeado) y el descuento redondeado.

db.fruta.aggregate([ 
    {
        $match: { 
        fechaventa:{$gt:new Date("2020-03-01")}
        }
    },
    {
        $group:
        {
            _id:{
                tipo:"$tipo",
                cliente:"$cliente",
                preciounitario:"$preciounitario",
                
            },
          descuento:{$sum:{$multiply:["$preciounitario",0.98]}}
        }
    },
    {
        $project:{
            _id:0,
            tipo:"$_id.tipo",
            cliente:"$_id.cliente",
            preciofinal:{$round:[{$sum:["$_id.preciounitario","$_id.iva"]}]},
            descuento:{$round:"$descuento"}}
    },
    {
        $sort:{
        preciofinal:-1
        }
    },
    {
        $match:{
            $expr:{$gt:["$preciofinal",1]}}
        }
    
])

/*{ "tipo" : "exotica", "cliente" : "mercafruta", "preciofinal" : 3, "descuento" : 5 }
{ "tipo" : "dulce", "cliente" : "mercadona", "preciofinal" : 2, "descuento" : 1 }
{ "tipo" : "citricos", "cliente" : "superfresh", "preciofinal" : 2, "descuento" : 1 }
{ "tipo" : "baya", "cliente" : "alcampo", "preciofinal" : 2, "descuento" : 2 }
{ "tipo" : "cucurbitaceas", "cliente" : "fruitcoco", "preciofinal" : 2, "descuento" : 4 }*/
      
