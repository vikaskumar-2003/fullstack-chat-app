class ErrorHandler extends Error{

    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this,this.constructor)//use this line for avoid unnecesscary error
    }
    

   

}


export const errorHandler=ErrorHandler