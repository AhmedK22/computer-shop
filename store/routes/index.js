var express = require('express');
var router = express.Router();
var mysql=require('mysql')


var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"1111",
  database:"itstore"

});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message:"ahmed"})
});

router.post('/addprod',(req,res,next)=>{
  con.query(`select * from product where name='${req.body.name}' and serial_no='${req.body.serial_no}'`,function(err,data){
    if(err){
      res.json({
        message:err.message
      })
    }
    else{
      console.log(data)
      if(data.length>0){
        con.query(`update product set count='${data[0].count+1}' where id='${data[0].id}'`,function(err,result){
        //  console.log(result)
          if(err){
            res.json({
              message:err.message
            })
          }
          else if(result){
            res.json({
              message:"product added"
            })
          }
        })

      }
      else if(data.length==0){
        con.query(`insert into product(name,model,price,info,category,count,serial_no)values('${req.body.name}','${req.body.model}','${req.body.price}','${req.body.info}','${req.body.category}','1','${req.body.serial_no}')`,(err,data)=>{
          if(err){res.json({message:err.message})}
          else{
           res.json({message:"product added"})
     
          }
       })
      }
    }
  })
  
});

router.get('/getprod',(req,res,next)=>{
  con.query(`select * from product`,(err,result)=>{
     if(err){res.json({message:err.message})}
     else{
      res.json({data:result})

     }
  })
});
router.get('/getprod/:id',(req,res,next)=>{
  con.query(`select * from product where id='${req.params.id}'`,(err,result)=>{
     if(err){res.json({message:err.message})}
     else{
      res.json({data:result})

     }
  })
});
router.get('/getserial/:serial_no',(req,res,next)=>{
  con.query(`select * from product where serial_no='${req.params.serial_no}'`,(err,result)=>{
     if(err){res.json({message:err.message})}
     else{
      res.json({data:result})

     }
  })
});

router.delete('/deleteprod/:id',(req,res,next)=>{
  con.query( `select * from product where id='${req.params.id}'`,function(err,result){
    if(err){
      res.json({
        message:err.message
      })
    }
    else{
      
      if(result.length>0 ){
        if(result[0].count>1){
        
          con.query( `update product set count='${(result[0].count)-1}' where id='${req.params.id}'`,function(err,data){
            if(err){
              res.json({
                message:err.message
              })
            }else{
              res.json({
                message:"prod deleted"
              })
            }
          })
        }
        else if(result[0].count<=1){
          con.query(`delete from product where id='${req.params.id}'`,(err,result)=>{
            if(err){res.json({message:err.message})}
            else{
             res.json({message:"prod deleted"})
       
            }
         })
        }
     
      }
     
    }
  })

});

router.patch('/updateprod/:id',(req,res,next)=>{
  con.query(`select * from product where id='${req.params.id}'`,(err,data)=>{
    if(err){
      res.json({message:err.message})
    }
    else if(data.length==0){
      res.json({message:"no prod exist"})
    }
    else{
      console.log(data)
      con.query(`update product  set name='${req.body.name}',model='${req.body.model}',count='${req.body.count}',serial_no='${req.body.serial_no}',price='${req.body.price}',info='${req.body.info}',category='${req.body.category}' where id=${req.params.id}`,(err,result)=>{
        if(err){res.json({message:err.message})}
        else{
         res.json({message:"product updated"})
   
        }
     })
    }
  })
});
router.get('/category/:category',(req,res,next)=>{
con.query(`select * from product where category='${req.params.category}'`,function(err,data){
  if(err){
    res.json({message:err.message})
  }
  else{
    res.json({data:data})
  }
})
});
router.post('/totalsales',(req,res,next)=>{
  con.query(`insert into total_sales(id,name,model,price,info,category,count,serial_no,client,td,invoice)values('${req.body.id}','${req.body.name}','${req.body.model}','${req.body.price}','${req.body.info}','${req.body.category}','${req.body.count}','${req.body.serial_no}','${req.body.client}','${req.body.td}','${req.body.invoice}')`,(err,data)=>{
    if(err){res.json({message:err.message})}
    else{
     res.json({message:"sales added"})

    }
 })
})
router.get('/totalsales',(req,res,next)=>{
  con.query(`select * from  total_sales`,(err,data)=>{
    if(err){res.json({message:err.message})}
    else{
     res.json({data:data})

    }
 })
})
router.delete('/totalsales',(req,res,next)=>{
  con.query(`delete from  total_sales`,(err,data)=>{
    if(err){res.json({message:err.message})}
    else{
     res.json({message:'delete'})

    }
 })
})
router.get('/deleteditem',(req,res,next)=>{
  con.query(`select * from deletedItem`,(err,result)=>{
     if(err){res.json({message:err.message})}
     else{
      res.json({data:result})

     }
  })
});

router.post('/adddeleted',(req,res,next)=>{
  con.query(`select * from deletedItem where name='${req.body.name}' and serial_no='${req.body.serial_no}'`,function(err,data){
    if(err){
      res.json({
        message:err.message
      })
    }
    else{
      console.log(data)
      if(data.length>0){
        con.query(`update deletedItem set count='${data[0].count+1}' where id='${data[0].id}'`,function(err,result){
        //  console.log(result)
          if(err){
            res.json({
              message:err.message
            })
          }
          else if(result){
            res.json({
              message:"deletedItem added"
            })
          }
        })

      }
      else if(data.length==0){
        con.query(`insert into deletedItem(id,name,model,price,info,category,count,serial_no)values('${req.body.id}','${req.body.name}','${req.body.model}','${req.body.price}','${req.body.info}','${req.body.category}','1','${req.body.serial_no}')`,(err,data)=>{
          if(err){res.json({message:err.message})}
          else{
           res.json({message:"deletedItem added"})
     
          }
       })
      }
    }
  })
  
});
router.delete('/deletedDataAll',(req,res,next)=>{
  con.query(`delete from  deletedItem`,(err,data)=>{
    if(err){res.json({message:err.message})}
    else{
     res.json({message:'delete'})

    }
 })
})
router.delete('/deletedDataOne/:id',(req,res,next)=>{
  con.query(`delete from  deletedItem where id='${req.params.id}'`,(err,data)=>{
    if(err){res.json({message:err.message})}
    else{
     res.json({message:'delete'})

    }
 })
})
router.patch('/updateDeletedItem/:id',(req,res,next)=>{
  con.query(`select * from deletedItem where id='${req.params.id}'`,(err,data)=>{
    if(err){
      res.json({message:err.message})
    }
    else if(data.length==0){
      res.json({message:"no prod exist"})
    }
    else{
      console.log(data)
      con.query(`update deletedItem  set count='${req.body.count}' where id=${req.params.id}`,(err,result)=>{
        if(err){res.json({message:err.message})}
        else{
         res.json({message:"deletedItem updated"})
   
        }
     })
    }
  })
});





module.exports = router;
