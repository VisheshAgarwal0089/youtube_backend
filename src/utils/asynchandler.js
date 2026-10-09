const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}



export {asyncHandler}

// const asyncHandler = (fn)=>(req,res,next)=>{ //wrapper function that takes in a function fn and returns a new function that takes in req,res,next as parameters
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message||"Internal Server Error"
//         })
//     }
// }
